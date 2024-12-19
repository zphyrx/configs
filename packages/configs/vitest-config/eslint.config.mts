import * as base from "@zphyrx/eslint-config-internal";

import type { TSESLint } from "@typescript-eslint/utils";

const config: TSESLint.FlatConfig.ConfigArray = [
  ...base.config,
  {
    name: "@zphyrx/eslint-config-internal",
    rules: {
      "no-duplicate-imports": "off",
    },
  },
];

export default config;
