import * as base from "./src/index";

import type { TSESLint } from "@typescript-eslint/utils";

const config: TSESLint.FlatConfig.ConfigArray = [
  ...base.config,
  {
    name: "@zphyrx/eslint-config-internal/typescript",
    rules: {
      "import-x/no-named-as-default-member": "off",
    },
  },
];

export default config;
