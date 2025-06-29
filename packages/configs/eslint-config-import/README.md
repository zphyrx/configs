# `@zphyrx/eslint-config-import`

## Installation

To install `@zphyrx/eslint-config-import`, run the following command:

```sh
# Using npm
$ npm install -D @zphyrx/eslint-config-import

# or using pnpm
$ pnpm add -D @zphyrx/eslint-config-import
```

## Usage

Extend `@zphyrx/eslint-config-import` and add any additional configurations in your `eslint.config.mjs` file:

```mjs
import * as imp from "@zphyrx/eslint-config-import";

const config = [
  ...imp.extends,
  {
    name: "@zphyrx/eslint-config/import",
    files: imp.files,
    rules: {
      ...imp.rules,
    },
  },
];

export default config;
```
