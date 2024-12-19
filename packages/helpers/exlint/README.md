# `@zphyrx/exlint`

## Installation

To install `@zphyrx/exlint`, run the following command:

```sh
# Using npm
$ npm install -D @zphyrx/exlint

# or using pnpm
$ pnpm add -D @zphyrx/exlint
```

## Usage

Extend `@zphyrx/exlint` and add any additional configurations in your `eslint.config.mjs` file:

```mjs
import * as exlint from "@zphyrx/exlint";
import tailwindcssPlugin from "eslint-plugin-tailwindcss";

const config = exlint.config({
  /**
   * Allows you to "extend" a set of configs similar to `extends` from the
   * classic configs.
   *
   * Example:
   *
   * export default exlint.config({
   *   extends: [
   *      tailwindcssPlugin.configs["flat/recommended"],
   *   ],
   *   name: '@zphyrx/eslint-config/tailwindcss',
   *   files: ["** /*.ts?(x)"],
   *   rules: {
   *     "tailwindcss/classnames-order": "warn"
   *   },
   * });
   *
   * Expands to:
   *
   * export default [
   *   ...tailwindcssPlugin.configs["flat/recommended"],
   *   {
   *     name: '@zphyrx/eslint-config/tailwindcss',
   *     files: ["** /*.ts?(x)"],
   *     rules: {
   *       "tailwindcss/classnames-order": "warn"
   *     },
   *   },
   * ];
   */
  extends: [
    tailwindcssPlugin.configs["flat/recommended"]
  ],
  name: "@zphyrx/eslint-config/tailwindcss",
  files: ["**/*.ts?(x)"],
  rules: {
    "tailwindcss/classnames-order": "warn",
  },
});

export default config;
```

> **Note:** `@zphyrx/exlint` is not a replacement for `typescript-eslint`, which is specifically designed for TypeScript projects. If you're working with TypeScript, `typescript-eslint` is likely the better choice due to its specialized linting and parsing features. `@zphyrx/exlint` serves as a general-purpose configuration helper.
