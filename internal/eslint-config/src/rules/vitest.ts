import type { TSESLint } from "@typescript-eslint/utils";

const rules: TSESLint.FlatConfig.Rules = {
  "vitest/consistent-test-it": [
    "warn",
    {
      fn: "it",
      withinDescribe: "it",
    },
  ],
  "vitest/max-expects": [
    "warn",
    {
      max: 1,
    },
  ],
  "vitest/max-nested-describe": [
    "warn",
    {
      max: 1,
    },
  ],

  "vitest/no-test-return-statement": "warn",
  "vitest/no-conditional-expect": "warn",
  "vitest/no-disabled-tests": "warn",
  "vitest/no-duplicate-hooks": "warn",
  "vitest/no-focused-tests": "warn",
  "vitest/no-identical-title": "warn",
  "vitest/no-interpolation-in-snapshots": "warn",
  "vitest/no-mocks-import": "warn",
  "vitest/valid-describe-callback": "warn",
  "vitest/valid-expect": "warn",
  "vitest/valid-title": [
    "warn",
    {
      mustNotMatch: ["^\\s+$"],
    },
  ],
};

export { rules };
