# `zphyrx/eslint-config-tailwindcss`

## Installation

To install `zphyrx/eslint-config-tailwindcss`, run the following command:

```sh
# Using npm
$ npm install -D zphyrx/eslint-config-tailwindcss

# or using pnpm
$ pnpm add -D zphyrx/eslint-config-tailwindcss
```

## Usage

Extend `zphyrx/eslint-config-tailwindcss` and add any additional configurations in your `eslint.config.mjs` file:

```mjs
import * as tailwindcss from "zphyrx/eslint-config-tailwindcss";

const config = [
  ...tailwindcss.extends,
  {
    name: "zphyrx/eslint-config/tailwindcss",
    files: tailwindcss.files,
    rules: {
      ...tailwindcss.rules,
    },
  },
];

export default config;
```
