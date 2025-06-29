import { flatten } from "./flatten";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

type Config = FlatConfig.Config;
type ConfigArray = FlatConfig.ConfigArray;

type InfiniteDepthConfigWithExtends =
  | ConfigWithExtends
  | InfiniteDepthConfigWithExtends[];

type ConfigWithExtends = Config & {
  extends?: InfiniteDepthConfigWithExtends[];
};

const config = (...configs: InfiniteDepthConfigWithExtends[]): ConfigArray => {
  let flattened = flatten(
    configs,
    Number.POSITIVE_INFINITY,
  ) as ConfigWithExtends[];

  return flattened.flatMap(
    (configWithExtends, configIndex): Config | ConfigArray => {
      let { extends: extendsArr, ...config } = configWithExtends;

      let configName =
        configWithExtends.name != null
          ? `, named "${configWithExtends.name}",`
          : " (anonymous)";

      if (extendsArr && !Array.isArray(extendsArr)) {
        throw new TypeError(
          `exlint.config(): Config at index ${configIndex}${configName} has an 'extends' property` +
            ` that is NOT an array.`,
        );
      }

      if (!extendsArr || sizeof(extendsArr) === 0) {
        return config;
      }

      let flattened = flatten(
        extendsArr as ConfigWithExtends[],
        Number.POSITIVE_INFINITY,
      );
      let undefIndexExt: number[] = [];

      for (let [extIndex, ext] of flattened.entries()) {
        let elem = ext as Config | undefined;

        if (elem == null || typeof elem !== "object") {
          undefIndexExt.push(extIndex);
        }
      }

      if (sizeof(undefIndexExt) > 0) {
        let extIndices = undefIndexExt.join(", ");

        throw new Error(
          `exlint.config(): Config at index ${configIndex}${configName} contains undefined` +
            ` extensions at the following indices: ${extIndices}.`,
        );
      }

      let configArray: ConfigArray = [];

      for (let ext of flattened) {
        let name = [config.name, ext.name].filter(Boolean).join("__");

        configArray.push({
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
        });
      }

      configArray.push(config);

      return configArray;
    },
  );
};

const sizeof = (a: readonly unknown[]): number => a.length >>> 0;

export { config };
export type { Config, ConfigArray, ConfigWithExtends };
