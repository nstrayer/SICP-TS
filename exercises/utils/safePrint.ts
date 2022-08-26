export function print(call: () => any) {
  const function_call = call.toString().replace(/\(\s*\)\s*=>\s*/, "");

  console.log(`%c${function_call}`, "color:grey;");

  try {
    console.log(`%c> ${call()}\n`, "color:pink;");
  } catch (e) {
    console.log(`%c> Error: ${(e as Error).message}\n`, "color: red;");
  }
}
