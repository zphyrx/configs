import type { TSESLint } from "@typescript-eslint/utils";

const rules: TSESLint.FlatConfig.Rules = {
  "import-x/namespace": "error",
  "import-x/first": "error",
  "import-x/no-amd": "error",
  "import-x/no-webpack-loader-syntax": "error",
  "import-x/order": [
    "error",
    {
      "newlines-between": "always",
      groups: [["builtin", "external"], ["parent", "sibling", "index"], "type"],
    },
  ],
  "import-x/consistent-type-specifier-style": ["error", "prefer-top-level"],
  "import-x/newline-after-import": [
    "error",
    {
      count: 1,
    },
  ],
};

export { rules };
