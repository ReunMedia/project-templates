// @ts-check

/**
 * Reun Media typescript-eslint configuration
 *
 * @author Reun Media <company@reun.eu>
 * @copyright 2024 Reun Media
 *
 * @see https://github.com/Reun-Media/project-templates/blob/master/base/webdev/php/.php-cs-fixer.php
 *
 * @version 1.0.0
 *
 * @since 2024-07-25 Last modification date
 */

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic
);
