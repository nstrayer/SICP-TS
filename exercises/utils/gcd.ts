// console.log("head(x) -> ", head(x));
// console.log("tail(x) -> ", tail(x));
// console.log("head(y) -> ", head(y));
// console.log("tail(y) -> ", tail(y));
// console.log("head(z) -> ", head(z));
// console.log("tail(z) -> ", tail(z));
export function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}
