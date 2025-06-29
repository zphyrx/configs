import * as base from "@zphyrx/eslint-config-internal";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const config: FlatConfig.ConfigArray = [
  ...base.config,
  {
    name: "@zphyrx/eslint-config-internal",
    rules: {
      "prefer-const": "off",
      "no-duplicate-imports": "off",
    },
  },
  {
    name: "@zphyrx/eslint-config-internal/typescritp",
    rules: {
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowNumber: true,
        },
      ],
    },
  },
];

export default config;
