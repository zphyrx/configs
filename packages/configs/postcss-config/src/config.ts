import { mergeConfig } from "@zphyrx/merge-config";

import type { Config } from "postcss-load-config";

const configBase: Config = {};

const config = (overrides: Partial<Config> = {}): Config =>
  mergeConfig(configBase, overrides) as Config;

export { config };
