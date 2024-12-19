# `@zphyrx/postcss-config`

## Installation

To install `@zphyrx/postcss-config`, run the following command:

```sh
# Using npm
$ npm install -D @zphyrx/postcss-config

# or using pnpm
$ pnpm add -D @zphyrx/postcss-config
```

## Usage

Extend `@zphyrx/postcss-config` and add any additional configurations in your `postcss.config.mjs` file:

```mjs
import * as postcss from "@zphyrx/postcss-config";

const config = postcss.config({
  plugins: {
    autoprefixer: {},
  },
});

export default config;
```
