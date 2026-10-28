import { Hero } from "./components/Hero";
import { AuthorityStrip } from "./components/AuthorityStrip";
import { Expertise } from "./components/Expertise";
import { Philosophy } from "./components/Philosophy";
import { Specialties } from "./components/Specialties";
import { Trajectory } from "./components/Trajectory";
import { Articles } from "./components/Articles";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-cream text-ink antialiased">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-forest focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-cream"
      >
        Pular para conteúdo
      </a>
      <main id="conteudo">
        <Hero />
        <AuthorityStrip />
        <Expertise />
        <Philosophy />
        <Specialties />
        <Trajectory />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
