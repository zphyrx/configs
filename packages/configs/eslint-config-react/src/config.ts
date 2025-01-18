import reactPlugin from "eslint-plugin-react";
import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";

import { rulesReact, rulesReactHooks } from "./rules";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const cwd = process.cwd();

const compat = new FlatCompat({
  baseDirectory: cwd,
});

// TODO - Remove TypeScript’s non-null assertion (`!`).
const _extends: FlatConfig.ConfigArray = [
  reactPlugin.configs.flat!.recommended as FlatConfig.Config,
  reactPlugin.configs.flat!.recommended as FlatConfig.Config,
  reactPlugin.configs.flat!["jsx-runtime"] as FlatConfig.Config,
  ...fixupConfigRules(compat.extends("plugin:react-hooks/recommended")),
];

const _files: (string | string[])[] = ["**/*.ts?(x)", "**/*.mts"];

const _rules: FlatConfig.Rules = {
  ...rulesReact,
  ...rulesReactHooks,
};

const _settings: FlatConfig.Settings = {
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
