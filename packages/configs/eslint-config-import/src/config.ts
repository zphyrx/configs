import importPlugin from "eslint-plugin-import";

import { rulesImport } from "./rules";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const _extends: FlatConfig.ConfigArray = [
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
];

const _files: (string | string[])[] = ["**/*.ts?(x)", "**/*.mts"];

const _rules: FlatConfig.Rules = {
  ...rulesImport,
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
