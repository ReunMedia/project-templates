// This file contains additional configuration you might want to add to your
// Astro configuration.

import { loadEnv } from "vite";
const env = loadEnv(process.env.NODE_ENV ?? "", process.cwd(), "");

export default defineConfig({
  // Using ENV variable for site allows you to change it depending on
  // environment (dev, staging, production). You should always specify `site` to
  // use absolute URLs.
  site: env.PUBLIC_ASTRO_SITE || "https://example.com",

  // Many static site hosts append trailing slash and that's also how Astro
  // outputs static build (e.g. parent-page/child-page/index.html). Setting
  // `trailingSlash` to `always` makes dev server testing consistent with hosts.
  // See also: https://www.zachleat.com/web/trailing-slash/
  trailingSlash: "always",
});
