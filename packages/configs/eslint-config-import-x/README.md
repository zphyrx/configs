# `@zphyrx/eslint-config-import-x`

## Installation

To install `@zphyrx/eslint-config-import-x`, run the following command:

```sh
# Using npm
$ npm install -D @zphyrx/eslint-config-import-x

# or using pnpm
$ pnpm add -D @zphyrx/eslint-config-import-x
```

## Usage

Extend `@zphyrx/eslint-config-import-x` and add any additional configurations in your `eslint.config.mjs` file:

```mjs
import * as importX from "@zphyrx/eslint-config-import-x";

const config = [
  ...importX.extends,
  {
    name: "@zphyrx/eslint-config/import-x",
    files: importX.files,
    rules: {
      ...importX.rules,
    },
  },
];

export default config;
```
