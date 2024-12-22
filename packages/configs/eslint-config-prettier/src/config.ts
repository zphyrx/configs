import prettierPlugin from "eslint-plugin-prettier/recommended";

import { rulesPrettier } from "./rules";

import type { TSESLint } from "@typescript-eslint/utils";

const _extends: TSESLint.FlatConfig.ConfigArray = [prettierPlugin];

const _files: (string | string[])[] = ["**/*.ts?(x)", "**/*.mts"];

const _rules: TSESLint.FlatConfig.Rules = {
  ...rulesPrettier,
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
