export function group<T>(
  list: T[],
  predicate: (a: T) => string
): Record<string, T[]> {
  const res: Record<string, T[]> = {};
  list.forEach((v) => {
    const key = predicate(v);
    res[key] = [...(res[key] ?? []), v];
  });
  return res;
}
