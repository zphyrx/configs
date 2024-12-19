# `@zphyrx/eslint-config-storybook`

## Installation

To install `@zphyrx/eslint-config-storybook`, run the following command:

```sh
# Using npm
$ npm install -D @zphyrx/eslint-config-storybook

# or using pnpm
$ pnpm add -D @zphyrx/eslint-config-storybook
```

## Usage

Extend `@zphyrx/eslint-config-storybook` and add any additional configurations in your `eslint.config.mjs` file:

```mjs
import * as storybook from "@zphyrx/eslint-config-storybook";

const config = [
  ...storybook.extends,
  {
    name: "@zphyrx/eslint-config/storybook",
    files: storybook.files,
    rules: {
      ...storybook.rules,
    },
  },
];

export default config;
```
