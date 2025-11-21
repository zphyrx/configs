import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

import { rulesReact, rulesReactHooks } from "./rules";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const _extends: FlatConfig.ConfigArray = [
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  reactHooksPlugin.configs.flat.recommended,
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
