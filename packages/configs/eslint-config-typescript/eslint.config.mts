import * as base from "@zphyrx/eslint-config-internal";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const config: FlatConfig.ConfigArray = [
  ...base.config,
  {
    name: "@zphyrx/eslint-config-internal/import-x",
    rules: {
      "import-x/no-named-as-default-member": "off",
    },
  },
];

export default config;
