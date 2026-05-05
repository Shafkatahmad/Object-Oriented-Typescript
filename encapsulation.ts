// modify access of the properties and method of a class

class BankAccount {
  readonly userId: number;
  userName: string;
  protected _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  private addBalance(balance: number) {
    this._userBalance = this._userBalance + balance;
  }

  getHiddenAddBalanceMethod(balance: number) {
    this.addBalance(balance);
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    this._userBalance;
  }
}

const mezbaBhaiAccount = new BankAccount(111, "Mezba", 20);
mezbaBhaiAccount.getHiddenAddBalanceMethod(100);
console.log(mezbaBhaiAccount);
