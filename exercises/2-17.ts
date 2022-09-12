import { head, Pair, pair, tail } from "./utils/pair.ts";
import { print } from "./utils/safePrint.ts";

function list(...args: any[]): Pair<any, any> {
  return listInternal(args);
}

function listInternal(args: any[]): Pair<any, any> | any {
  const [first, ...others] = args;
  if (!others || others.length === 0) return first;

  return pair(first, listInternal(others));
}

print(() => list("a", 2, 5, "c"));
print(() => head(list("a", 2, 5, "c")));
print(() => tail(list("a", 2, 5, "c")));
// print(() => pair("a", list(2, "c")));
// print(() => pair("a", pair(2, list("c"))));
