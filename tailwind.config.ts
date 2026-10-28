import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem"
    },
    extend: {
      fontFamily: {
        sans: ['"Inter"', "system-ui", "-apple-system", "sans-serif"],
        serif: ['"Newsreader"', "ui-serif", "Georgia", "serif"]
      },
      colors: {
        cream: "#F6F4EF",
        surface: "#EEEEE9",
        ink: "#182422",
        stone: "#586763",
        forest: {
          DEFAULT: "#183830",
          deep: "#122E28"
        },
        bronze: {
          DEFAULT: "#A17C4A",
          light: "#BC9865"
        },
        line: "#D9D4CA",
        onDark: "#F5F3EE",
        // Identidade visual (símbolo e hero imersivo) — ver docs/IDENTIDADE_VISUAL.md
        brandDark: "#061D1A",
        brandInk: "#1A3028",
        brandGold: "#D9B477",
        brandTeal: "#2EC89F",
        brandBlue: "#3388F6"
      },
      maxWidth: {
        content: "1320px"
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(24, 36, 34, 0.04)",
        card: "0 8px 24px -12px rgba(24, 36, 34, 0.12)"
      }
    }
  },
  plugins: []
} satisfies Config;
