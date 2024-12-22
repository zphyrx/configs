const mergeConfig = <T>(defaults: T, overrides: T): T => {
  const mergedConfig: T = { ...defaults };

  for (const override in overrides) {
    const overrideValue = overrides[override];
    const defaultValue = mergedConfig[override];

    if (isObject(overrideValue) && isObject(defaultValue)) {
      mergedConfig[override] = mergeConfig(defaultValue, overrideValue);
    } else {
      mergedConfig[override] = overrideValue;
    }
  }

  return mergedConfig;
};

const isObject = <T>(value: T): value is T & Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

export { mergeConfig };
