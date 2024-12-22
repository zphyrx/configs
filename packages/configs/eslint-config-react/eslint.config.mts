import * as base from "@zphyrx/eslint-config-internal";

import type { TSESLint } from "@typescript-eslint/utils";

const config: TSESLint.FlatConfig.ConfigArray = [
  ...base.config,
  {
    name: "@zphyrx/eslint-config-internal/typescript",
    rules: {
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
];

export default config;
