import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const rules: FlatConfig.Rules = {
  /**
   * The `_import/namespace_` rule has been disabled because TypeScript's compiler
   * already checks for namespace imports. This makes the rule unnecessary and could
   * slow down linting performance.
   */
  "import/namespace": "off",
  "import/first": "error",
  "import/no-amd": "error",
  "import/no-webpack-loader-syntax": "error",
  "import/order": [
    "error",
    {
      "newlines-between": "always",
      groups: [["builtin", "external"], ["parent", "sibling", "index"], "type"],
    },
  ],
  "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
  "import/newline-after-import": [
    "error",
    {
      count: 1,
    },
  ],
};

export { rules };
