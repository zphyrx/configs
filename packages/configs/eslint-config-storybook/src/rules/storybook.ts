import type { TSESLint } from "@typescript-eslint/utils";

const rules: TSESLint.FlatConfig.Rules = {
  "storybook/default-exports": "error",
  "storybook/hierarchy-separator": "warn",
  "storybook/no-redundant-story-name": "warn",
  "storybook/csf-component": "warn",
  "storybook/no-stories-of": "warn",
  "storybook/no-title-property-in-meta": "warn",
  "storybook/meta-inline-properties": "warn",
  "storybook/prefer-pascal-case": "warn",
};

export { rules };
