import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const rules: FlatConfig.Rules = {
  "tailwindcss/classnames-order": "warn",
  "tailwindcss/enforces-shorthand": "warn",
  // "tailwindcss/no-arbitrary-value": "off",
  "tailwindcss/no-custom-classname": "warn",
  "tailwindcss/no-contradicting-classname": "error",
};

export { rules };
