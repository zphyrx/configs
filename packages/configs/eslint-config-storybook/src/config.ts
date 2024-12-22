import storybookPlugin from "eslint-plugin-storybook";

import { rulesStorybook } from "./rules";

import type { TSESLint } from "@typescript-eslint/utils";

const _extends: TSESLint.FlatConfig.ConfigArray = [
  ...storybookPlugin.configs["flat/recommended"],
];

const _files: (string | string[])[] = ["**/*.stories.ts?(x)"];

const _rules: TSESLint.FlatConfig.Rules = {
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
