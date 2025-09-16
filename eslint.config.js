import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import astroPlugin from "eslint-plugin-astro";
import prettierPlugin from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    },
    plugins: {
      js,
      "@typescript-eslint": tsPlugin,
      react: pluginReact,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...prettierPlugin.rules,
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    files: ["**/*.json", "**/*.jsonc", "**/*.json5"],
    plugins: { json },
    language: "json/jsonc",
    rules: { ...json.configs.recommended.rules },
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/commonmark",
    rules: { ...markdown.configs.recommended.rules },
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    rules: { ...css.configs.recommended.rules },
  },
  ...astroPlugin.configs.recommended,
]);
