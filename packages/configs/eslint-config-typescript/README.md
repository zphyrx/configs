# `@zphyrx/eslint-config-typescript`

## Installation

To install `@zphyrx/eslint-config-typescript`, run the following command:

```sh
# Using npm
$ npm install -D @zphyrx/eslint-config-typescript

# or using pnpm
$ pnpm add -D @zphyrx/eslint-config-typescript
```

## Usage

Extend `@zphyrx/eslint-config-typescript` and add any additional configurations in your `eslint.config.mjs` file:

### Option 1: Basic Configuration

Use this method if you want a straightforward way to extend the typescript configuration directly with `tseslint.config`:

```mjs
import * as typescript from "@zphyrx/eslint-config-typescript";
import tseslint from "typescript-eslint";

const config = tseslint.config(typescript.config);

export default config;
```

### Option 2: Manual Configuration with `tseslint.config`

If you prefer more granular control or need to extend additional settings, you can manually pass the configuration:

```mjs
import * as typescript from "@zphyrx/eslint-config-typescript";
import tseslint from "typescript-eslint";

const config = tseslint.config({
  extends: typescript.extends,
  name: "@zphyrx/eslint-config/typescript",
  files: typescript.files,
  languageOptions: {
    ...typescript.languageOptions,
  },
  rules: {
    ...typescript.rules,

    // Add any additional or custom rules here
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
  },
});

export default config;
```
