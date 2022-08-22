// 3.10
console.group("3.10");

function make_withdraw_iile(initial_amount: number) {
  return ((balance) => (amount: number) => {
    if (balance >= amount) {
      balance = balance - amount;
      return balance;
    } else {
      return "Insufficient funds";
    }
  })(initial_amount);
}

const W1 = make_withdraw_iile(100);

console.log("W1(12) ->", W1(12));

console.groupEnd();
