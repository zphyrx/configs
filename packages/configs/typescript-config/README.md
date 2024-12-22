# `@zphyrx/typescript-config`

## Installation

To install `@zphyrx/typescript-config`, run the following command:

```sh
# Using npm
$ npm install -D @zphyrx/typescript-config

# or using pnpm
$ pnpm add -D @zphyrx/typescript-config
```

## Usage

Extend `@zphyrx/typescript-config` and add any additional configurations in your `tsconfig.json` file:

```json
{
  "extends": "@zphyrx/typescript-config/dom/monorepo", // Choose 'no-dom' or 'dom' based on your project setup
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "jsx": "react-jsx",
    "outDir": "dist"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```
