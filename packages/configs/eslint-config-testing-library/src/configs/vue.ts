import testingLibraryPlugin from "eslint-plugin-testing-library";

import { rulesVue } from "../rules";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const _extends: FlatConfig.ConfigArray = [
  testingLibraryPlugin.configs["flat/vue"],
];

const _files: (string | string[])[] = ["**/?(*.)+(spec|test).ts?(x)"];

const _rules: FlatConfig.Rules = {
  ...rulesVue,
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
