# `@zphyrx/tsup-config`

## Installation

To install `@zphyrx/tsup-config`, run the following command:

```sh
# Using npm
$ npm install -D @zphyrx/tsup-config

# or using pnpm
$ pnpm add -D @zphyrx/tsup-config
```

## Usage

Extend `@zphyrx/tsup-config` and add any additional configurations in your `tsup.config.ts` file:

```ts
import * as tsup from "@zphyrx/tsup-config";

import type { TsupUserConfig } from "@zphyrx/tsup-config";

const config: TsupUserConfig = tsup.config({
  entry: ["src/index.ts"],
  dts: true,
  sourcemap: true,
});

export default config;
```
