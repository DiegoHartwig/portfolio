// Prerenderização estática (SSG-lite) do SPA.
//
// O site é uma Single Page Application (Vite + React) renderizada no
// cliente. Para que o HTML inicial entregue a crawlers já contenha o
// conteúdo da página (sem depender de execução de JS), este script:
//   1. compila um bundle SSR a partir de src/entry-server.tsx;
//   2. executa `render()` em Node para obter o HTML estático da página;
//   3. injeta esse HTML dentro de `<div id="root">` em dist/index.html.
//
// O React do lado do cliente continua sendo carregado normalmente e
// assume o DOM no primeiro paint (via createRoot), então a interatividade
// (menu, animações) não é afetada. Qualquer falha aqui é não-destrutiva:
// o build conclui normalmente com o HTML client-only, apenas sem o ganho
// de SEO do pré-render.
import { execSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const distIndex = `${root}dist/index.html`;
const ssrOutDir = `${root}dist-ssr`;

function run() {
  if (!existsSync(distIndex)) {
    throw new Error(`dist/index.html não encontrado (${distIndex}). Rode "vite build" antes do prerender.`);
  }

  console.log("[prerender] compilando bundle SSR...");
  execSync("npx vite build --ssr src/entry-server.tsx --outDir dist-ssr --logLevel warn", {
    cwd: root,
    stdio: "inherit"
  });

  const entryPath = `${ssrOutDir}/entry-server.js`;
  if (!existsSync(entryPath)) {
    throw new Error(`Bundle SSR não gerado em ${entryPath}.`);
  }

  return import(`file://${entryPath}`).then(({ render }) => {
    // O SSR do framer-motion embute o estado inicial das animações
    // (opacity:0 / translateY) como `style` inline. Isso é correto para
    // quem vai hidratar o DOM, mas aqui o cliente substitui a árvore via
    // createRoot (sem hidratação), então o HTML estático é apenas uma
    // cópia para crawlers e para o instante antes do JS montar. Remover
    // o `style` inline evita que esse snapshot fique com o conteúdo
    // visualmente invisível (opacity:0) até o React assumir.
    const appHtml = render().replace(/ style="[^"]*"/g, "");

    let html = readFileSync(distIndex, "utf-8");
    if (!html.includes('<div id="root"></div>')) {
      throw new Error('Marcador <div id="root"></div> não encontrado em dist/index.html.');
    }
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    writeFileSync(distIndex, html);

    console.log(`[prerender] HTML estático injetado em dist/index.html (${appHtml.length} caracteres).`);
  });
}

try {
  await run();
} catch (error) {
  console.warn("\n[prerender] AVISO: pré-renderização ignorada — o build segue com o HTML client-only.");
  console.warn(`[prerender] motivo: ${error instanceof Error ? error.message : error}\n`);
} finally {
  if (existsSync(ssrOutDir)) {
    rmSync(ssrOutDir, { recursive: true, force: true });
  }
}
