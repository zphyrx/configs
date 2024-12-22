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
  {
    name: "@zphyrx/eslint-config-internal/typescritp",
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
    },
  },
];

export default config;
