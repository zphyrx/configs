import * as base from "./src/index";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const config: FlatConfig.ConfigArray = [
  ...base.config,
  {
    name: "@zphyrx/eslint-config-internal/typescript",
    rules: {
      "import-x/no-named-as-default-member": "off",
    },
  },
];

export default config;
