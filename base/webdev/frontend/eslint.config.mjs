// @ts-check

/**
 * Reun Media typescript-eslint configuration
 *
 * @author Reun Media <company@reun.eu>
 * @copyright 2024 Reun Media
 *
 * @see https://github.com/Reun-Media/project-templates/blob/main/base/webdev/frontend/eslint.config.mjs
 *
 * @version 1.1.0
 */

import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  // @ts-expect-error configuration contains deprecated rules
  eslintConfigPrettier,
  {
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "sort-imports": "warn",
    },
  },
  {
    ignores: ["**/dist/*", "vendor/*"],
  }
);
