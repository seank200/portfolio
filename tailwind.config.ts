import type { Config } from "tailwindcss";
import catppuccin from "@catppuccin/tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", ".theme-dark"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "rgba(var(--color-background), <alpha-value>)",
        poolink: "rgba(var(--color-poolink), <alpha-value>)",
      },
      fontFamily: {
        display: [
          "Rota",
          "NanumSquareNeo",
          "Inter",
          "Helvetica",
          "Arial",
          "ui-sans-serif",
          "sans-serif",
        ],
        "7seg": ["SevenSegment", "Courier New", "Courier", "monospace"],
      },
      fontSize: {
        ch: "1ch",
      },
      scale: {
        101: "1.01",
        102: "1.02",
        103: "1.03",
        104: "1.04",
      },
      spacing: {
        em: "1em",
        "0.75em": "0.75em",
        "0.875em": "0.875em",
        ch: "1ch",
      },
    },
  },
  plugins: [catppuccin({ prefix: "ctp", defaultFlavour: "latte" })],
};
export default config;
