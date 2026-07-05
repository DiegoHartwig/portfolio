import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        deep: "#061226",
        cyanSoft: "#2dd4bf",
        graphite: "#111827",
        ice: "#e2e8f0"
      },
      boxShadow: {
        card: "0 10px 30px rgba(2, 6, 23, 0.35)",
        "card-hover": "0 20px 40px rgba(2, 6, 23, 0.5)"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top right, rgba(45, 212, 191, 0.18), transparent 35%), radial-gradient(circle at top left, rgba(59, 130, 246, 0.16), transparent 28%)"
      }
    }
  },
  plugins: []
} satisfies Config;
