import { defineConfig, mergeConfig } from "vitest/config";

import type { ViteUserConfig } from "vitest/config";

const configBase: ViteUserConfig = defineConfig({
  test: {
    globals: true,
    environment: "node",
    watch: false,
    coverage: {
      enabled: false,
      provider: "v8",
      reportsDirectory: "./coverage",
    },
    include: ["**/?(*.)+(spec|test).ts?(x)"],
    exclude: ["**/node_modules/**", "**/dist/**", "\\.pnp\\.[^\\/]+$"],
  },
});

const config = (overrides: Partial<ViteUserConfig> = {}): ViteUserConfig =>
  mergeConfig(configBase, overrides);

export { config };
