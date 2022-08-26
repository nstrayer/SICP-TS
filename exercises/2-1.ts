import { gcd } from "./utils/gcd";
import { head, pair, Pair, tail } from "./utils/pair";

// 2.1
console.group("2.1");

type RationalNumber = Pair<number, number>;
function print_rat(x: RationalNumber) {
  console.log(`${head(x)} / ${tail(x)}`);
}

function make_rat(n: number, d: number): RationalNumber {
  const g = gcd(n, d);

  const numerator = n / g;
  const denomonator = d / g;

  return denomonator < 0
    ? pair(-numerator, -denomonator)
    : pair(numerator, denomonator);
}

print_rat(make_rat(1, 3));
print_rat(make_rat(-1, 3));
print_rat(make_rat(1, -3));
print_rat(make_rat(-1, -3));

console.groupEnd();
