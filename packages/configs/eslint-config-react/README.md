# `@zphyrx/eslint-config-react`

## Installation

To install `@zphyrx/eslint-config-react`, run the following command:

```sh
# Using npm
$ npm install -D @zphyrx/eslint-config-react

# or using pnpm
$ pnpm add -D @zphyrx/eslint-config-react
```

## Usage

Extend `@zphyrx/eslint-config-react` and add any additional configurations in your `eslint.config.mjs` file:

```mjs
import * as react from "@zphyrx/eslint-config-react";

const config = [
  ...react.extends,
  {
    name: "@zphyrx/eslint-config/react",
    files: react.files,
    rules: {
      ...react.rules,
    },
    settings: {
      ...react.settings,
    },
  },
];

export default config;
```
