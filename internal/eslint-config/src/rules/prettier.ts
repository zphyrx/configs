import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const rules: FlatConfig.Rules = {
  "prettier/prettier": [
    "error",
    {
      arrowParens: "always",
      tabWidth: 2,
      semi: true,
      singleQuote: false,
      printWidth: 80,
      trailingComma: "all",
    },
  ],
};

export { rules };
