// type PrimativeOrPair<T> = T | [T, T];
export type Pair<T, S> = [T, S];

/**
 * Construct a Pair
 *
 * Function takes two arguments and returns a compound data object that contains
 * the two arguments as parts. `pair()` can be used to form pairs who's elements
 * are themselves pairs.
 *
 * @param a Either a primative value or a pair itself
 * @param b Either a primative value or a pair itself
 *
 * @example
 *   const x = pair(1, 2);
 *   const y = pair(3, 4);
 *   const z = pair(x, y);
 */
export function pair<T, S>(a: T, b: S): Pair<T, S> {
  return [a, b];
}

export function head<T, S>(x: Pair<T, S>): T {
  return x[0];
}

export function tail<T, S>(x: Pair<T, S>): S {
  return x[1];
}
