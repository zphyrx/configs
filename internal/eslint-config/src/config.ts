import tseslint from "typescript-eslint";
import importXPlugin from "eslint-plugin-import-x";
import vitestPlugin from "@vitest/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier/recommended";

import { GLOB_TESTS, GLOB_TS } from "./globs";
import * as rules from "./rules";

import type { TSESLint } from "@typescript-eslint/utils";

const config: TSESLint.FlatConfig.ConfigArray = tseslint.config(
  {
    name: "@zphyrx/eslint-config-internal/global-ignores",
    ignores: ["**/node_modules/**", "**/dist/**", "**/coverage/**"],
  },
  {
    extends: [
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    name: "@zphyrx/eslint-config-internal/typescript",
    files: GLOB_TS,
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        projectService: true,

        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
    rules: {
      ...rules.typescript,
    },
  },
  {
    extends: [
      importXPlugin.flatConfigs.recommended,
      importXPlugin.flatConfigs.typescript,
    ],
    name: "@zphyrx/eslint-config-internal/import-x",
    files: GLOB_TS,
    rules: {
      ...rules.importX,
    },
  },
  {
    extends: [vitestPlugin.configs.recommended],
    name: "@zphyrx/eslint-config-internal/vitest",
    files: GLOB_TESTS,
    rules: {
      ...rules.vitest,
    },
  },
  {
    extends: [prettierPlugin],
    name: "@zphyrx/eslint-config-internal/prettier",
    files: GLOB_TS,
    rules: {
      ...rules.prettier,
    },
  },
);

export { config };
