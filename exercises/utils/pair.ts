type PrimativeOrPair<T> = T | [T, T];
export type Pair<T> = [PrimativeOrPair<T>, PrimativeOrPair<T>];

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
export function pair<T>(a: PrimativeOrPair<T>, b: PrimativeOrPair<T>): Pair<T> {
  return [a, b];
}

export function head<T>(x: Pair<T>): PrimativeOrPair<T> {
  return x[0];
}

export function tail<T>(x: Pair<T>): PrimativeOrPair<T> {
  return x[1];
}
