import { mergeConfig } from "@zphyrx/merge-config";

import type { Config } from "prettier";

const configBase: Config = {
  arrowParens: "always",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  printWidth: 80,
  trailingComma: "all",
};

const config = (overrides: Partial<Config> = {}): Config =>
  mergeConfig(configBase, overrides);

export { config };
