import type { TSESLint } from "@typescript-eslint/utils";

const rules: TSESLint.FlatConfig.Rules = {
  "react/display-name": "warn",
  "react/forbid-foreign-prop-types": [
    "warn",
    {
      allowInPropTypes: true,
    },
  ],
  "react/jsx-key": "error",
  "react/jsx-no-comment-textnodes": "warn",
  "react/jsx-no-target-blank": "warn",
  "react/jsx-no-undef": "error",
  "react/jsx-pascal-case": [
    "warn",
    {
      allowAllCaps: true,
      ignore: [],
    },
  ],
  "react/jsx-uses-vars": "warn",
  "react/jsx-uses-react": "warn",
  "react/no-danger-with-children": "warn",
  "react/no-deprecated": "warn",
  "react/no-direct-mutation-state": "warn",
  "react/no-find-dom-node": "warn",
  "react/no-is-mounted": "warn",
  "react/no-render-return-value": "error",
  "react/no-string-refs": "warn",
  "react/no-typos": "warn",
  "react/react-in-jsx-scope": "off", // TURNED OFF for React 17+
  "react/style-prop-object": "error",
};

export { rules };
