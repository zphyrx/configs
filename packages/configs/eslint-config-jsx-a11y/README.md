# `@zphyrx/eslint-config-jsx-a11y`

## Installation

To install `@zphyrx/eslint-config-jsx-a11y`, run the following command:

```sh
# Using npm
$ npm install -D @zphyrx/eslint-config-jsx-a11y

# or using pnpm
$ pnpm add -D @zphyrx/eslint-config-jsx-a11y
```

## Usage

Extend `@zphyrx/eslint-config-jsx-a11y` and add any additional configurations in your `eslint.config.mjs` file:

```mjs
import * as jsxA11y from "@zphyrx/eslint-config-jsx-a11y";

const config = [
  ...jsxA11y.extends,
  {
    name: "@zphyrx/eslint-config/jsx-a11y",
    files: jsxA11y.files,
    rules: {
      ...jsxA11y.rules,
    },
  },
];

export default config;
```
