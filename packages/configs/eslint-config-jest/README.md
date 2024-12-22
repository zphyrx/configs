# `@zphyrx/eslint-config-jest`

## Installation

To install `@zphyrx/eslint-config-jest`, run the following command:

```sh
# Using npm
$ npm install -D @zphyrx/eslint-config-jest

# or using pnpm
$ pnpm add -D @zphyrx/eslint-config-jest
```

## Usage

Extend `@zphyrx/eslint-config-jest` and add any additional configurations in your `eslint.config.mjs` file:

```mjs
import * as jest from "@zphyrx/eslint-config-jest";

const config = [
  ...jest.extends,
  {
    name: "@zphyrx/eslint-config/jest",
    files: jest.files,
    rules: {
      ...jest.rules,
    },
  },
];

export default config;
```
