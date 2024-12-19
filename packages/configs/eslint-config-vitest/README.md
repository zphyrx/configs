# `@zphyrx/eslint-config-vitest`

## Installation

To install `@zphyrx/eslint-config-vitest`, run the following command:

```sh
# Using npm
$ npm install -D @zphyrx/eslint-config-vitest

# or using pnpm
$ pnpm add -D @zphyrx/eslint-config-vitest
```

## Usage

Extend `@zphyrx/eslint-config-vitest` and add any additional configurations in your `eslint.config.mjs` file:

```mjs
import * as vitest from "@zphyrx/eslint-config-vitest";

const config = [
  ...vitest.extends,
  {
    name: "@zphyrx/eslint-config/vitest",
    files: vitest.files,
    rules: {
      ...vitest.rules,
    },
  },
];

export default config;
```
