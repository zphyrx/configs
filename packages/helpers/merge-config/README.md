# `@zphyrx/merge-config`

## Installation

To install `@zphyrx/merge-config`, run the following command:

```sh
# Using npm
$ npm install -D @zphyrx/merge-config

# or using pnpm
$ pnpm add -D @zphyrx/merge-config
```

## Usage

Import `@zphyrx/mergeConfig` to merge two configuration objects:

```ts
import { mergeConfig } from "@zphyrx/merge-config";

type Config = {
  build?: {
    minify?: boolean;
    target?: "esnext" | "es2025";
    sourcemaps?: boolean;
  };
};

const defaults: Config = {
  build: {
    minify: true,
    target: "esnext",
    sourcemaps: true,
  },
};

const overrides: Config = {
  build: {
    minify: false,
  },
};

const config: Config = mergeConfig(defaults, overrides);

// OUTPUT:
// {
//   build: {
//     minify: false,
//     target: "esnext",
//     sourcemaps: true,
//   },
// }
```
