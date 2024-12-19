import importXPlugin from "eslint-plugin-import-x";

import { rulesImportX } from "./rules";

import type { TSESLint } from "@typescript-eslint/utils";

const _extends: TSESLint.FlatConfig.ConfigArray = [
  importXPlugin.flatConfigs.recommended,
  importXPlugin.flatConfigs.typescript,
];

const _files: (string | string[])[] = ["**/*.ts?(x)", "**/*.mts"];

const _rules: TSESLint.FlatConfig.Rules = {
  ...rulesImportX,
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
