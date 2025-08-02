import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(214 32% 91%)",
        muted: "#6b7280",
      },
      screens: { print: { raw: "print" } },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
