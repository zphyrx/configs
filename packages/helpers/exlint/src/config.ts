import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

type FlatConfigWithExtends = ConfigWithExtends | FlatConfigWithExtends[];

type ConfigWithExtends = FlatConfig.Config & {
  extends?: FlatConfigWithExtends[];
};

const config = (
  ...configs: FlatConfigWithExtends[]
): FlatConfig.ConfigArray => {
  // @ts-expect-error
  const flattened = configs.flat(Infinity) as ConfigWithExtends[];

  return flattened.flatMap((configWithExtends, configIndex) => {
    const { extends: _extends, ...config } = configWithExtends;

    if (!_extends || _extends.length === 0) return config;

    const extendsFlattened = _extends.flat(Infinity) as ConfigWithExtends[];

    const undefinedExt = extendsFlattened
      .map((ext, extIndex) =>
        (ext as FlatConfig.Config | undefined) == null ? extIndex : -1,
      )
      .filter((index) => index !== -1);

    if (undefinedExt.length > 0) {
      const configName =
        configWithExtends.name != null
          ? `, named "${configWithExtends.name}",`
          : " (anonymous)";
      const extIndices = undefinedExt.join(", ");

      throw new Error(
        `Your config at index ${configIndex}${configName} contains undefined` +
          ` extensions at the following indices: ${extIndices}.`,
      );
    }

    return [
      ...extendsFlattened.map((ext) => {
        const name = [config.name, ext.name].filter(Boolean).join("__");

        return {
          ...ext,
          ...(name && {
            name,
          }),
          ...(config.files && {
            files: config.files,
          }),
          ...(config.ignores && {
            ignores: config.ignores,
          }),
        };
      }),
      config,
    ];
  });
};

export { config };
export type { ConfigWithExtends };
