import { print } from "./utils/safePrint.ts";
import { head, pair, tail } from "./utils/pair.ts";

type IntervalArithmaticFn = (x: Interval, y: Interval) => Interval;

const add_interval: IntervalArithmaticFn = (x, y) => {
  return make_interval(
    lower_bound(x) + lower_bound(y),
    upper_bound(x) + upper_bound(y)
  );
};

const mul_interval: IntervalArithmaticFn = (x, y) => {
  const p1 = lower_bound(x) * lower_bound(y);
  const p2 = lower_bound(x) * upper_bound(y);
  const p3 = upper_bound(x) * lower_bound(y);
  const p4 = upper_bound(x) * upper_bound(y);

  return make_interval(Math.min(p1, p2, p3, p4), Math.max(p1, p2, p3, p4));
};

const div_interval: IntervalArithmaticFn = (x, y) => {
  const div_by_upper = upper_bound(y);
  const div_by_lower = lower_bound(y);

  if (div_by_upper >= 0 && div_by_lower <= 0) {
    throw new Error("Can't divide by interval that spans zero");
  }
  return mul_interval(x, make_interval(1 / upper_bound(y), 1 / lower_bound(y)));
};

// 2.7
console.group("2.7");
type Interval = ReturnType<typeof make_interval>;
function make_interval(lower: number, upper: number) {
  return pair(lower, upper);
}

function upper_bound(interval: Interval): number {
  const a = head(interval);
  const b = tail(interval);
  return a <= b ? b : a;
}

function lower_bound(interval: Interval): number {
  const a = head(interval);
  const b = tail(interval);
  return a <= b ? a : b;
}

const five_to_ten = make_interval(5, 10);
console.log({ five_to_ten });

const two_to_eight = make_interval(2, 8);
console.log({ two_to_eight });

console.groupEnd();

// 2.8
console.group("2.8");

const sub_interval: IntervalArithmaticFn = (x, y) => {
  return make_interval(
    lower_bound(x) - lower_bound(y),
    upper_bound(x) - upper_bound(y)
  );
};

console.log(sub_interval(five_to_ten, two_to_eight));

console.groupEnd();

console.group("2.9");

const interval_width: (x: Interval) => number = (x) =>
  (upper_bound(x) - lower_bound(x)) / 2;

// console.log(interval_width(five_to_ten));
console.log("Width of (5,10)", interval_width(five_to_ten));
console.log("Width of (2,8)", interval_width(two_to_eight));
console.log(
  "Width of (5,10) + (2, 8)",
  interval_width(add_interval(five_to_ten, two_to_eight))
);
console.log(
  "Width of (5,10) - (2, 8)",
  interval_width(sub_interval(five_to_ten, two_to_eight))
);
console.log(
  "Width of (2, 8) - (5,10)",
  interval_width(sub_interval(two_to_eight, five_to_ten))
);
console.log(
  "Width of (2, 8) * (5,10)",
  interval_width(mul_interval(two_to_eight, five_to_ten))
);
print(() => interval_width(div_interval(two_to_eight, five_to_ten)));

console.groupEnd();

console.group("2.10");

const neg1_to_3 = make_interval(-1, 3);

print(() => div_interval(two_to_eight, neg1_to_3));

console.groupEnd();

// TODO Fix tasks to run tsc and then node on files so we can use node packages like chalk
