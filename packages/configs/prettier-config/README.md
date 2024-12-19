# `@zphyrx/prettier-config`

## Installation

To install `@zphyrx/prettier-config`, run the following command:

```sh
# Using npm
$ npm install -D @zphyrx/prettier-config

# or using pnpm
$ pnpm add -D @zphyrx/prettier-config
```

## Usage

Extend `@zphyrx/prettier-config` and add any additional configurations in your `prettier.config.mjs` file:

```mjs
import * as prettier from "@zphyrx/prettier-config";

const config = prettier.config({
  printWidth: 120,
});

export default config;
```
