console.group("2.4");

type MessageFunction = (x: any, y: any) => any;

function pair(x: any, y: any) {
  return (m: MessageFunction) => m(x, y);
}

function head(p: ReturnType<typeof pair>) {
  return p((x, _) => x);
}

function tail(p: ReturnType<typeof pair>) {
  return p((_, y) => y);
}

head(pair("a", "b"));

tail(pair("a", "b"));

console.log(`head(pair("a","b"))`, head(pair("a", "b")));
console.log(`tail(pair("a","b"))`, tail(pair("a", "b")));

console.groupEnd();
