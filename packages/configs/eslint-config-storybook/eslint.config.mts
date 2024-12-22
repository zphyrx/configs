import * as base from "@zphyrx/eslint-config-internal";

import type { TSESLint } from "@typescript-eslint/utils";

const config: TSESLint.FlatConfig.ConfigArray = [...base.config, {}];

export default config;
