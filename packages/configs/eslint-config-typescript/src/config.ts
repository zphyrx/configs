import tseslint from "typescript-eslint";

import { rulesTypeScript } from "./rules";

import type { TSESLint } from "@typescript-eslint/utils";

const _extends: TSESLint.FlatConfig.ConfigArray = [
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
];

const _files: (string | string[])[] = ["**/*.ts?(x)", "**/*.mts"];

const _languageOptions: TSESLint.FlatConfig.LanguageOptions = {
  parser: tseslint.parser,
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    projectService: true,

    warnOnUnsupportedTypeScriptVersion: true,
  },
};

const _rules: TSESLint.FlatConfig.Rules = {
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
