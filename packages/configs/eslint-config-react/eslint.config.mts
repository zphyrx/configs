import * as base from "@zphyrx/eslint-config-internal";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const config: FlatConfig.ConfigArray = [
  ...base.config,
  {
    name: "@zphyrx/eslint-config-internal/typescript",
    rules: {
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
];

export default config;
