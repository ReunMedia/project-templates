// @ts-check

/**
 * Reun Media typescript-eslint configuration
 *
 * @author Reun Media <company@reun.eu>
 * @copyright 2024 Reun Media
 *
 * @see https://github.com/ReunMedia/project-templates
 *
 * @version 1.5.0
 */

import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import globals from "globals";
import { fileURLToPath } from "node:url";
import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default tseslint.config(
  // ESLint
  eslint.configs.recommended,
  // typescript-eslint
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  // Vue
  // Enable if using Vue
  // ...pluginVue.configs["flat/recommended"],
  // {
  //   files: ["*.vue", "**/*.vue"],
  //   languageOptions: { parserOptions: { parser: "@typescript-eslint/parser" } },
  // },
  // Prettier
  eslintConfigPrettier,
  // Custom rules
  {
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
    languageOptions: {
      globals: {
        ...globals.browser, // Use when targeting browser
        // ...globals['shared-node-browser'] // Use for both Node and browser
      },
    },
  },
  // Respect .gitignore
  includeIgnoreFile(gitignorePath)
);
