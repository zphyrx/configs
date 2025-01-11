import storybookPlugin from "eslint-plugin-storybook";

import { rulesStorybook } from "./rules";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const _extends: FlatConfig.ConfigArray = [
  ...storybookPlugin.configs["flat/recommended"],
];

const _files: (string | string[])[] = ["**/*.stories.ts?(x)"];

const _rules: FlatConfig.Rules = {
  ...rulesStorybook,
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
