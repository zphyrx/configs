import type { TSESLint } from "@typescript-eslint/utils";

const rules: TSESLint.FlatConfig.Rules = {
  "no-dupe-class-members": "off",
  "no-duplicate-imports": "error",
  "no-undef": "off",

  "@typescript-eslint/consistent-type-assertions": "warn",
  "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  "@typescript-eslint/consistent-type-imports": "warn",

  "no-array-constructor": "off",
  "@typescript-eslint/no-array-constructor": "warn",

  "no-redeclare": "off",
  "@typescript-eslint/no-redeclare": "error",

  "no-use-before-define": "off",
  "@typescript-eslint/no-use-before-define": [
    "warn",
    {
      functions: false,
      classes: false,
      variables: false,
      typedefs: false,
    },
  ],

  "no-unused-expressions": "off",
  "@typescript-eslint/no-unused-expressions": [
    "warn",
    {
      allowTernary: true,
      allowShortCircuit: true,
      allowTaggedTemplates: true,
    },
  ],

  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": [
    "warn",
    {
      args: "all",
      argsIgnorePattern: "^_",
      caughtErrors: "all",
      caughtErrorsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      ignoreRestSiblings: true,
    },
  ],

  "no-useless-constructor": "off",
  "@typescript-eslint/no-useless-constructor": "warn",
};

export { rules };
