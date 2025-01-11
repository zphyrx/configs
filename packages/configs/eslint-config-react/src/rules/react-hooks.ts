import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const rules: FlatConfig.Rules = {
  /**
   *  react-hooks
   *
   * https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
   */
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn",
};

export { rules };
