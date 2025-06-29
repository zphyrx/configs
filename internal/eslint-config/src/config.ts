import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import vitestPlugin from "@vitest/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier/recommended";

import { GLOB_TESTS, GLOB_TS } from "./globs";
import * as rules from "./rules";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const config: FlatConfig.ConfigArray = tseslint.config(
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
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    name: "@zphyrx/eslint-config-internal/import",
    files: GLOB_TS,
    rules: {
      ...rules.import,

      "import/no-unresolved": "off",
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
