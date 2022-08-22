//  3.3
console.group("3.3");

type Account_Action = "withdraw" | "deposit";
function make_account(balance: number, password: string) {
  function withdraw(amount: number) {
    balance = balance - amount;
    console.log(`Withdraw ${amount}, new balance: ${balance}`);
  }

  function deposit(amount: number) {
    balance = balance + amount;
    console.log(`Deposit ${amount}, new balance: ${balance}`);
  }

  function dispatch(pw: string, action: Account_Action) {
    if (pw !== password) {
      return () => console.error(`Incorrect password ${pw} -- access denied`);
    }
    if (action === "withdraw") return withdraw;

    if (action === "deposit") return deposit;

    return () => console.error("Unknown action type", action);
  }

  return dispatch;
}

const acc = make_account(100, "flumpus");

acc("flumpus", "deposit")(10);
acc("flumpus", "withdraw")(42);
acc("flumpert", "withdraw")(13);
console.groupEnd();

//3.7
console.group("3.7");
function make_joint_account(
  acc: ReturnType<typeof make_account>,
  acc_pw: string,
  password: string
) {
  return function dispatch(pw: string, action: Account_Action) {
    if (pw !== password) {
      return () => console.error(`Incorrect password ${pw} -- access denied`);
    }

    return acc(acc_pw, action);
  };
}

const nick_acc = make_account(100, "flumpus");
const sarah_acc = make_joint_account(nick_acc, "flumpus", "boojean");

nick_acc("flumpus", "deposit")(10);
sarah_acc("boojean", "deposit")(24);
sarah_acc("boojean", "withdraw")(32);
nick_acc("flumpus", "withdraw")(40);

console.groupEnd();

console.group("3.8");
function make_non_symmetric_fn() {
  let last_input = -1;

  return function (input: number) {
    if (last_input === 0) {
      last_input = input;
      return 0;
    }
    last_input = input;
    return input;
  };
}

const fa = make_non_symmetric_fn();
console.log("f(0) + f(1) =", fa(0) + fa(1));

const fb = make_non_symmetric_fn();
console.log("f(1) + f(0) =", fa(1) + fa(0));

console.groupEnd();
