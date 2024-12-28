---
"@zphyrx/eslint-config-vitest": patch
"@zphyrx/eslint-config-internal": patch
---

Use TypeScript’s non-null assertion (`!`) for `vitestPlugin.configs.recommended` in the `extends` field of `eslint-config-vitest` and `eslint-config-internal` to handle potential null/undefined values
