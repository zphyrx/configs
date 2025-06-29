type FlatArray<A, D extends number> = D extends 0
  ? A
  : A extends readonly (infer InnerArray)[]
    ? FlatArray<InnerArray, Exclude<D, 0>>[]
    : A;

const flatten = <T, D extends number = 1>(
  a: readonly T[],
  depth?: D,
  R: FlatArray<T, D>[] = [],
): FlatArray<T, D>[] => {
  let len = a.length >>> 0;
  let depthNum = 1;

  if (depth !== undefined) depthNum = depth;
  if (depthNum < 0) depthNum = 0;

  let k = 0;

  while (k < len) {
    let E = a[k] as FlatArray<T, D>;

    if (depthNum > 0 && Array.isArray(E)) {
      flatten(E, depthNum - 1, R);
    } else {
      R[R.length] = E;
    }

    k++;
  }

  return R;
};

export { flatten };
