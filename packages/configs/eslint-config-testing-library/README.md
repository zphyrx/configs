# `@zphyrx/eslint-config-testing-library`

## Installation

To install `@zphyrx/eslint-config-testing-library`, run the following command:

```sh
# Using npm
$ npm install -D @zphyrx/eslint-config-testing-library

# or using pnpm
$ pnpm add -D @zphyrx/eslint-config-testing-library
```

## Usage

Extend `@zphyrx/eslint-config-testing-library` and add any additional configurations in your `eslint.config.mjs` file:

```mjs
import * as testingLibrary from "@zphyrx/eslint-config-testing-library/react";

const config = [
  ...testingLibrary.extends,
  {
    name: "@zphyrx/eslint-config/testing-library/react",
    files: testingLibrary.files,
    rules: {
      ...testingLibrary.rules,
    },
  },
];

export default config;
```
