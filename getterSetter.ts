// getter
// setter

class BankAccount {
  readonly userId: number;
  userName: string;
  protected _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  // // balance k set kortese
  // addBalance(balance: number) {
  //   return this.userBalance = this.userBalance + balance;
  // }

  // setter use kore korte chai
  set addBalance(amount: number) {
    this._userBalance = this._userBalance + amount;
  }

  // // get korbo
  // getBalance() {
  //   return this.userBalance;
  // }

  // getter use kore get korte chai
  get getBalance() {
    return this._userBalance;
  }
}

const mezbaBhaiAccount = new BankAccount(111, "Mezba", 20);
// mezbaBhaiAccount.addBalance(100);
// console.log(mezbaBhaiAccount.getBalance());

mezbaBhaiAccount.addBalance = 100;
console.log(mezbaBhaiAccount.getBalance);
console.log(mezbaBhaiAccount);
