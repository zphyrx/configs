import reactPlugin from "eslint-plugin-react";
//@ts-expect-error -- missing type declaration file
import reactHooksPlugin from "eslint-plugin-react-hooks";

import { rulesReact, rulesReactHooks } from "./rules";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const _extends: FlatConfig.ConfigArray = [
  reactPlugin.configs.flat.recommended as FlatConfig.Config,
  reactPlugin.configs.flat["jsx-runtime"] as FlatConfig.Config,
];

const _files: (string | string[])[] = ["**/*.ts?(x)", "**/*.mts"];

const _plugins: FlatConfig.Plugins = {
  "react-hooks": reactHooksPlugin,
};

const _rules: FlatConfig.Rules = {
  ...rulesReact,
  ...reactHooksPlugin.configs.recommended.rules,
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
  plugins: _plugins,
  rules: _rules,
  settings: _settings,
};

export {
  _extends as extends,
  _files as files,
  _plugins as plugins,
  _rules as rules,
  _settings as settings,
  _config as config,
};
