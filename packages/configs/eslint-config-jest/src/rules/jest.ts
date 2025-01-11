import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const rules: FlatConfig.Rules = {
  "jest/consistent-test-it": [
    "warn",
    {
      fn: "it",
      withinDescribe: "it",
    },
  ],
  "jest/max-expects": [
    "warn",
    {
      max: 1,
    },
  ],
  "jest/max-nested-describe": [
    "warn",
    {
      max: 5,
    },
  ],

  "jest/no-test-return-statement": "warn",
  "jest/no-conditional-expect": "warn",
  "jest/no-disabled-tests": "warn",
  "jest/no-duplicate-hooks": "warn",
  "jest/no-focused-tests": "warn",
  "jest/no-identical-title": "warn",
  "jest/no-interpolation-in-snapshots": "warn",
  "jest/no-mocks-import": "warn",
  "jest/valid-describe-callback": "warn",
  "jest/valid-expect": "warn",
  "jest/valid-title": [
    "warn",
    {
      mustNotMatch: ["^\\s+$"],
    },
  ],
};

export { rules };
