class BankAccount {
  private balance: number;
  public accountNumber: string;
  protected ownerName: string;
  readonly id: number;

    constructor(id: number, accountNumber: string, ownerName: string) {
        this.id = id;
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = 0;
    }

    public deposit(amount: number): void {
        if (amount <= 0) {
            console.log();
        }else {
            this.balance += amount;
        }
    }
    public withdraw(amount: number): boolean {
        if (amount <= 0) {
            console.log('Amount must be positive');
            return false;
        } else if (amount > this.balance) {
            console.log("Insufficient funds");
            return false;
        }else {
            this.balance -= amount;
            return true;
        }
    }

    public getBalance(): number {
        return this.balance;
    }

}
const myAccount = new BankAccount(1, "123456789", "John Doe");
myAccount.deposit(500);
console.log(`Balance after deposit: $${myAccount.getBalance()}`);
myAccount.withdraw(502);
myAccount.withdraw(200);
console.log(`Balance after withdrawal: $${myAccount.getBalance()}`);

// myAccount.balance = 1000; // Error: Property 'balance' is private and only accessible within class 'BankAccount'.
// console.log(myAccount.ownerName); // Error: Property 'ownerName' is protected and only accessible within class 'BankAccount' and its subclasses.
// myAccount.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
