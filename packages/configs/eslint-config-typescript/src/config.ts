import tseslint from "typescript-eslint";

import { rulesTypeScript } from "./rules";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const _extends: FlatConfig.ConfigArray = [
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
];

const _files: (string | string[])[] = ["**/*.ts?(x)", "**/*.mts"];

const _languageOptions: FlatConfig.LanguageOptions = {
  parser: tseslint.parser,
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    projectService: true,

    warnOnUnsupportedTypeScriptVersion: true,
  },
};

const _rules: FlatConfig.Rules = {
  ...rulesTypeScript,
};

const _config = {
  extends: _extends,
  files: _files,
  languageOptions: _languageOptions,
  rules: _rules,
};

export {
  _extends as extends,
  _files as files,
  _languageOptions as languageOptions,
  _rules as rules,
  _config as config,
};
