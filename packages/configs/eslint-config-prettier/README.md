# `@zphyrx/eslint-config-prettier`

## Installation

To install `@zphyrx/eslint-config-prettier`, run the following command:

```sh
# Using npm
$ npm install -D @zphyrx/eslint-config-prettier

# or using pnpm
$ pnpm add -D @zphyrx/eslint-config-prettier
```

## Usage

Extend `@zphyrx/eslint-config-prettier` and add any additional configurations in your `eslint.config.mjs` file:

```mjs
import * as prettier from "@zphyrx/eslint-config-prettier";

const config = [
  ...prettier.extends,
  {
    name: "@zphyrx/eslint-config/prettier",
    files: prettier.files,
    rules: {
      ...prettier.rules,
    },
  },
];

export default config;
```
