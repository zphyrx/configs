import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

import { rulesJsxA11y } from "./rules";

import type { TSESLint } from "@typescript-eslint/utils";

const _extends: TSESLint.FlatConfig.ConfigArray = [
  jsxA11yPlugin.flatConfigs.recommended,
];

const _files: (string | string[])[] = ["**/*.ts?(x)", "**/*.mts"];

const _rules: TSESLint.FlatConfig.Rules = {
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
