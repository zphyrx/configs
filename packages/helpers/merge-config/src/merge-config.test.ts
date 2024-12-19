import { mergeConfig } from "./index";

type UserConfig = {
  test?: {
    globals?: boolean;
    environment?: "node" | "jsdom";
  };
};

const configBase: UserConfig = {
  test: {
    globals: false,
    environment: "node",
  },
};

describe("mergeConfig helper", (): void => {
  it("should override globals and retain environment when merging configs", (): void => {
    const config: UserConfig = mergeConfig(configBase, {
      test: {
        globals: true,
        environment: "node",
      },
    });

    expect(config).toEqual({
      test: {
        globals: true,
        environment: "node",
      },
    });
  });

  it("should override environment and retain globals when merging configs", (): void => {
    const config: UserConfig = mergeConfig(configBase, {
      test: {
        environment: "jsdom",
      },
    });

    expect(config).toEqual({
      test: {
        globals: false,
        environment: "jsdom",
      },
    });
  });

  it("should retain default config values when no overrides are provided", (): void => {
    const config: UserConfig = mergeConfig(configBase, {});

    expect(config).toEqual({
      test: {
        globals: false,
        environment: "node",
      },
    });
  });
});
