// modify access of the properties and method of a class

class BankAccount {
  readonly userId: number;
  userName: string;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    this.userBalance;
  }
}

const mezbaBhaiAccount = new BankAccount(111, "Mezba", 20);
mezbaBhaiAccount.addBalance(100);
console.log(mezbaBhaiAccount);
