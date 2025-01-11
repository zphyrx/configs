import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

import { rulesJsxA11y } from "./rules";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const _extends: FlatConfig.ConfigArray = [
  jsxA11yPlugin.flatConfigs.recommended,
];

const _files: (string | string[])[] = ["**/*.ts?(x)", "**/*.mts"];

const _rules: FlatConfig.Rules = {
  ...rulesJsxA11y,
};

const _config = {
  extends: _extends,
  files: _files,
  rules: _rules,
};

export {
  _extends as extends,
  _files as files,
  _rules as rules,
  _config as config,
};
