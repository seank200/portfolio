import type { Config } from "tailwindcss";
import catppuccin from "@catppuccin/tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      },
      colors: {
        background: "rgba(var(--color-background), <alpha-value>)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        em: "1em",
        ch: "1ch",
      },
    },
  },
  plugins: [catppuccin({ prefix: "ctp", defaultFlavour: "latte" })],
};
export default config;
