import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { project: true }
    },
    plugins: {
      "@next/next": nextPlugin
    },
    rules: {
      ...nextPlugin.configs["core-web-vitals"].rules
    }
  }
);
