import tailwindcssPlugin from "eslint-plugin-tailwindcss";

import { rulesTailwindcss } from "./rules";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const _extends: FlatConfig.ConfigArray = [
  ...tailwindcssPlugin.configs["flat/recommended"],
];

const _files: (string | string[])[] = ["**/*.ts?(x)"];

const _rules: FlatConfig.Rules = {
  ...rulesTailwindcss,
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
