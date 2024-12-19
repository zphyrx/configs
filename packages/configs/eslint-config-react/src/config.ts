import reactPlugin from "eslint-plugin-react";
import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";

import { rulesReact, rulesReactHooks } from "./rules";

import type { TSESLint } from "@typescript-eslint/utils";

const cwd = process.cwd();

const compat = new FlatCompat({
  baseDirectory: cwd,
});

const _extends: TSESLint.FlatConfig.ConfigArray = [
  reactPlugin.configs.flat!.recommended as TSESLint.FlatConfig.Config,
  reactPlugin.configs.flat!.recommended as TSESLint.FlatConfig.Config,
  reactPlugin.configs.flat!["jsx-runtime"] as TSESLint.FlatConfig.Config,
  ...fixupConfigRules(compat.extends("plugin:react-hooks/recommended")),
];

const _files: (string | string[])[] = ["**/*.ts?(x)", "**/*.mts"];

const _rules: TSESLint.FlatConfig.Rules = {
  ...rulesReact,
  ...rulesReactHooks,
};

const _settings: TSESLint.FlatConfig.Settings = {
  react: {
    version: "detect",
  },
};

const _config = {
  extends: _extends,
  files: _files,
  rules: _rules,
  settings: _settings,
};

export {
  _extends as extends,
  _files as files,
  _rules as rules,
  _settings as settings,
  _config as config,
};
