// This file contains additional configuration you might want to add to your
// Astro configuration.

export default defineConfig({
  // Many static site hosts append trailing slash and that's also how Astro
  // outputs static build (e.g. parent-page/child-page/index.html). Setting
  // `trailingSlash` to `always` makes dev server testing consistent with hosts.
  // See also: https://www.zachleat.com/web/trailing-slash/
  trailingSlash: "always",
});
