import * as exlint from "../src/index";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

describe("config method", (): void => {
  it("should work without extends", (): void => {
    let config: FlatConfig.ConfigArray = exlint.config({
      files: ["**/?(*.)+(spec|test).ts?(x)"],
      ignores: ["**/__tests__/**/*.ts?(x)"],
      rules: {
        "vitest/no-test-return-statement": "warn",
      },
    });

    expect(config).toEqual([
      {
        files: ["**/?(*.)+(spec|test).ts?(x)"],
        ignores: ["**/__tests__/**/*.ts?(x)"],
        rules: {
          "vitest/no-test-return-statement": "warn",
        },
      },
    ]);
  });

  it("should flatten extended configs", (): void => {
    let config: FlatConfig.ConfigArray = exlint.config({
      extends: [
        {
          rules: {
            "vitest/no-test-return-statement": "warn",
          },
        },
        {
          rules: {
            "vitest/no-conditional-expect": "warn",
          },
        },
      ],
      rules: {
        "vitest/no-disabled-tests": "warn",
      },
    });

    expect(config).toEqual([
      {
        rules: {
          "vitest/no-test-return-statement": "warn",
        },
      },
      {
        rules: {
          "vitest/no-conditional-expect": "warn",
        },
      },
      {
        rules: {
          "vitest/no-disabled-tests": "warn",
        },
      },
    ]);
  });

  it("should flatten extended configs with files and ignores", (): void => {
    let config: FlatConfig.ConfigArray = exlint.config({
      extends: [
        {
          rules: {
            "vitest/no-test-return-statement": "warn",
          },
        },
        {
          rules: {
            "vitest/no-conditional-expect": "warn",
          },
        },
      ],
      files: ["**/?(*.)+(spec|test).ts?(x)"],
      ignores: ["**/__tests__/**/*.ts?(x)"],
      rules: {
        "vitest/no-disabled-tests": "warn",
      },
    });

    expect(config).toEqual([
      {
        files: ["**/?(*.)+(spec|test).ts?(x)"],
        ignores: ["**/__tests__/**/*.ts?(x)"],
        rules: {
          "vitest/no-test-return-statement": "warn",
        },
      },
      {
        files: ["**/?(*.)+(spec|test).ts?(x)"],
        ignores: ["**/__tests__/**/*.ts?(x)"],
        rules: {
          "vitest/no-conditional-expect": "warn",
        },
      },
      {
        files: ["**/?(*.)+(spec|test).ts?(x)"],
        ignores: ["**/__tests__/**/*.ts?(x)"],
        rules: {
          "vitest/no-disabled-tests": "warn",
        },
      },
    ]);
  });

  it("should flatten extended configs with config name", (): void => {
    let config: FlatConfig.ConfigArray = exlint.config({
      extends: [
        {
          rules: {
            "vitest/no-test-return-statement": "warn",
          },
        },
        {
          rules: {
            "vitest/no-conditional-expect": "warn",
          },
        },
      ],
      name: "@zphyrx/eslint-config/vitest",
      files: ["**/?(*.)+(spec|test).ts?(x)"],
      ignores: ["**/__tests__/**/*.ts?(x)"],
      rules: {
        "vitest/no-disabled-tests": "warn",
      },
    });

    expect(config).toEqual([
      {
        name: "@zphyrx/eslint-config/vitest",
        files: ["**/?(*.)+(spec|test).ts?(x)"],
        ignores: ["**/__tests__/**/*.ts?(x)"],
        rules: {
          "vitest/no-test-return-statement": "warn",
        },
      },
      {
        name: "@zphyrx/eslint-config/vitest",
        files: ["**/?(*.)+(spec|test).ts?(x)"],
        ignores: ["**/__tests__/**/*.ts?(x)"],
        rules: {
          "vitest/no-conditional-expect": "warn",
        },
      },
      {
        name: "@zphyrx/eslint-config/vitest",
        files: ["**/?(*.)+(spec|test).ts?(x)"],
        ignores: ["**/__tests__/**/*.ts?(x)"],
        rules: {
          "vitest/no-disabled-tests": "warn",
        },
      },
    ]);
  });

  it("should flatten extended configs with names if base config is unnamed", (): void => {
    let config: FlatConfig.ConfigArray = exlint.config({
      extends: [
        {
          name: "extension-1",
          rules: {
            "vitest/no-test-return-statement": "warn",
          },
        },
        {
          rules: {
            "vitest/no-conditional-expect": "warn",
          },
        },
      ],
      files: ["**/?(*.)+(spec|test).ts?(x)"],
      ignores: ["**/__tests__/**/*.ts?(x)"],
      rules: {
        "vitest/no-disabled-tests": "warn",
      },
    });

    expect(config).toEqual([
      {
        name: "extension-1",
        files: ["**/?(*.)+(spec|test).ts?(x)"],
        ignores: ["**/__tests__/**/*.ts?(x)"],
        rules: {
          "vitest/no-test-return-statement": "warn",
        },
      },
      {
        files: ["**/?(*.)+(spec|test).ts?(x)"],
        ignores: ["**/__tests__/**/*.ts?(x)"],
        rules: {
          "vitest/no-conditional-expect": "warn",
        },
      },
      {
        files: ["**/?(*.)+(spec|test).ts?(x)"],
        ignores: ["**/__tests__/**/*.ts?(x)"],
        rules: {
          "vitest/no-disabled-tests": "warn",
        },
      },
    ]);
  });

  it("should merge config item names", (): void => {
    let config: FlatConfig.ConfigArray = exlint.config({
      extends: [
        {
          name: "extension-1",
          rules: {
            "vitest/no-test-return-statement": "warn",
          },
        },
        {
          rules: {
            "vitest/no-conditional-expect": "warn",
          },
        },
      ],
      name: "@zphyrx/eslint-config/vitest",
      files: ["**/?(*.)+(spec|test).ts?(x)"],
      ignores: ["**/__tests__/**/*.ts?(x)"],
      rules: {
        "vitest/no-disabled-tests": "warn",
      },
    });

    expect(config).toEqual([
      {
        name: "@zphyrx/eslint-config/vitest__extension-1",
        files: ["**/?(*.)+(spec|test).ts?(x)"],
        ignores: ["**/__tests__/**/*.ts?(x)"],
        rules: {
          "vitest/no-test-return-statement": "warn",
        },
      },
      {
        name: "@zphyrx/eslint-config/vitest",
        files: ["**/?(*.)+(spec|test).ts?(x)"],
        ignores: ["**/__tests__/**/*.ts?(x)"],
        rules: {
          "vitest/no-conditional-expect": "warn",
        },
      },
      {
        name: "@zphyrx/eslint-config/vitest",
        files: ["**/?(*.)+(spec|test).ts?(x)"],
        ignores: ["**/__tests__/**/*.ts?(x)"],
        rules: {
          "vitest/no-disabled-tests": "warn",
        },
      },
    ]);
  });

  it("should allow nested arrays in the config function", (): void => {
    let config: FlatConfig.ConfigArray = exlint.config(
      {
        rules: {
          "vitest/no-test-return-statement": "warn",
        },
      },
      [
        {
          rules: {
            "vitest/no-conditional-expect": "warn",
          },
        },
      ],
      [
        [
          {
            rules: {
              "vitest/no-disabled-tests": "warn",
            },
          },
        ],
      ],
      [
        [
          [
            {
              rules: {
                "vitest/no-duplicate-hooks": "warn",
              },
            },
          ],
        ],
      ],
      [
        [
          [
            [
              {
                rules: {
                  "vitest/no-focused-tests": "warn",
                },
              },
            ],
          ],
        ],
      ],
    );

    expect(config).toEqual([
      {
        rules: {
          "vitest/no-test-return-statement": "warn",
        },
      },
      {
        rules: {
          "vitest/no-conditional-expect": "warn",
        },
      },
      {
        rules: {
          "vitest/no-disabled-tests": "warn",
        },
      },
      {
        rules: {
          "vitest/no-duplicate-hooks": "warn",
        },
      },
      {
        rules: {
          "vitest/no-focused-tests": "warn",
        },
      },
    ]);
  });

  it("should allow nested arrays in extends", (): void => {
    let config: FlatConfig.ConfigArray = exlint.config({
      extends: [
        {
          rules: {
            "vitest/no-test-return-statement": "warn",
          },
        },
        [
          {
            rules: {
              "vitest/no-conditional-expect": "warn",
            },
          },
        ],
        [
          [
            {
              rules: {
                "vitest/no-disabled-tests": "warn",
              },
            },
          ],
        ],
        [
          [
            [
              {
                rules: {
                  "vitest/no-duplicate-hooks": "warn",
                },
              },
            ],
          ],
        ],
        [
          [
            [
              [
                {
                  rules: {
                    "vitest/no-focused-tests": "warn",
                  },
                },
              ],
            ],
          ],
        ],
      ],
      rules: {
        "vitest/no-identical-title": "warn",
      },
    });

    expect(config).toEqual([
      {
        rules: {
          "vitest/no-test-return-statement": "warn",
        },
      },
      {
        rules: {
          "vitest/no-conditional-expect": "warn",
        },
      },
      {
        rules: {
          "vitest/no-disabled-tests": "warn",
        },
      },
      {
        rules: {
          "vitest/no-duplicate-hooks": "warn",
        },
      },
      {
        rules: {
          "vitest/no-focused-tests": "warn",
        },
      },
      {
        rules: {
          "vitest/no-identical-title": "warn",
        },
      },
    ]);
  });

  it("throws error containing config name when some extensions are undefined", (): void => {
    let extension: FlatConfig.Config = {
      rules: {
        rule1: "error",
      },
    };

    let config = (): FlatConfig.ConfigArray =>
      exlint.config(
        {
          extends: [extension],
          files: ["**/?(*.)+(spec|test).ts?(x)"],
          ignores: ["**/__tests__/**/*.ts?(x)"],
          name: "@zphyrx/eslint-config/vitest",
          rules: {
            "vitest/no-test-return-statement": "warn",
          },
        },
        {
          extends: [undefined as never, extension, undefined as never],
          files: ["**/?(*.)+(spec|test).ts?(x)"],
          ignores: ["**/__tests__/**/*.ts?(x)"],
          name: "@zphyrx/eslint-config/vitest__2",
          rules: {
            "vitest/no-test-return-statement": "warn",
          },
        },
      );

    expect(config).toThrow(
      'exlint.config(): Config at index 1, named "@zphyrx/eslint-config/vitest__2", contains undefined ' +
        "extensions at the following indices: 0, 2",
    );
  });

  it("throws error without config name when some extensions are undefined", (): void => {
    let extension: FlatConfig.Config = {
      rules: {
        rule1: "error",
      },
    };

    let config = (): FlatConfig.ConfigArray =>
      exlint.config(
        {
          extends: [extension],
          files: ["**/?(*.)+(spec|test).ts?(x)"],
          ignores: ["**/__tests__/**/*.ts?(x)"],
          name: "@zphyrx/eslint-config/vitest",
          rules: {
            "vitest/no-test-return-statement": "warn",
          },
        },
        {
          extends: [undefined as never, extension, undefined as never],
          files: ["**/?(*.)+(spec|test).ts?(x)"],
          ignores: ["**/__tests__/**/*.ts?(x)"],
          rules: {
            "vitest/no-test-return-statement": "warn",
          },
        },
      );
    expect(config).toThrow(
      "exlint.config(): Config at index 1 (anonymous) contains undefined extensions at " +
        "the following indices: 0, 2",
    );
  });

  it("throws error when extends is not an array", () => {
    let config = (): FlatConfig.ConfigArray =>
      exlint.config({
        // @ts-expect-error -- Deliberately testing with invalid values.
        extends: 7,
      });

    expect(config).toThrow(
      "exlint.config(): Config at index 0 (anonymous) has an 'extends' property that is NOT an array.",
    );
  });
});
