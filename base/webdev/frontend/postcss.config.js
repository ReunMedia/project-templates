/**
 * Reun Media PostCSS configuration including Tailwind.
 *
 * @author Reun Media <company@reun.eu>
 * @copyright 2020 Reun Media
 *
 * @see https://github.com/Reun-Media/project-templates
 *
 * @version 2.1.1
 */

const tailwindcss = require("tailwindcss");
const postcssPresetEnv = require("postcss-preset-env");

var config = ({ file, options, env }) => ({
  plugins: [
    tailwindcss,
    // PostCSS Preset Env includes autoprefixer
    postcssPresetEnv({ stage: 1 }),
  ],
});

module.exports = config;
