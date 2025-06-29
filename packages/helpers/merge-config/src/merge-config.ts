type AnyRecord = Record<string, any>;

type DeepMerge<D, O> = D extends AnyRecord
  ? O extends AnyRecord
    ? {
        [K in keyof D | keyof O]: K extends keyof O
          ? K extends keyof D
            ? DeepMerge<D[K], O[K]>
            : O[K]
          : K extends keyof D
            ? D[K]
            : never;
      }
    : D
  : D;

const mergeConfig = <D extends AnyRecord, O extends AnyRecord>(
  defaults: D,
  overrides: O,
): DeepMerge<D, O> => {
  let R: AnyRecord = { ...defaults };

  for (let o in overrides) {
    let overrideValue = overrides[o];
    let defaultValue = R[o];

    if (isObject(overrideValue) && isObject(defaultValue)) {
      R[o] = mergeConfig(defaultValue, overrideValue);
    } else {
      R[o] = overrideValue;
    }
  }

  return R as any;
};

const isObject = (value: unknown): value is AnyRecord =>
  typeof value === "object" && value !== null && !Array.isArray(value);

export { mergeConfig };
