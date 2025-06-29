import * as base from "./src/index";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const config: FlatConfig.ConfigArray = [...base.config, {}];

export default config;
