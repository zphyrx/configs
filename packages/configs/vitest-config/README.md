# `@zphyrx/vitest-config`

## Installation

To install `@zphyrx/vitest-config`, run the following command:

```sh
# Using npm
$ npm install -D @zphyrx/vitest-config

# or using pnpm
$ pnpm add -D @zphyrx/vitest-config
```

## Usage

Extend `@zphyrx/vitest-config` and add any additional configurations in your `vitest.config.ts` file:

```ts
import * as vitest from "@zphyrx/vitest-config";

import type { ViteUserConfig } from "vitest/config";

const config: ViteUserConfig = vitest.config({
  test: {
    environment: "jsdom", // Choose the appropriate environment. The default is 'node'.

    coverage: {
      enable: true,
    },
  },
});

export default config;
```
