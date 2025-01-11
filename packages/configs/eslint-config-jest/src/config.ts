import jestPlugin from "eslint-plugin-jest";

import { rulesJest } from "./rules";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const _extends: FlatConfig.ConfigArray = [
  jestPlugin.configs["flat/recommended"],
  jestPlugin.configs["flat/style"],
];

const _files: (string | string[])[] = ["**/?(*.)+(spec|test).ts?(x)"];

const _rules: FlatConfig.Rules = {
  ...rulesJest,
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
