import type { TSESLint } from "@typescript-eslint/utils";

const rules: TSESLint.FlatConfig.Rules = {
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
