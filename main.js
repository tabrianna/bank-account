class Transaction {
    constructor(amount, payee) {
      this.date = new Date();
      this.amount = amount;
      this.payee = payee;
    }
  }
  
  class SecretTransaction extends Transaction {
    constructor(password = "", amount, payee) {
      super(amount, payee);
      this.password = password;
    }
  }
  
  // ================================================================
  
  class BankAccount {
    constructor(accountNumber, owner, transactions = []) {
      this.accountNumber = accountNumber;
      this.owner = owner;
      this.transactions = transactions;
    }
  
    balance() {
      // let secretTransactionSum = [];
      // let password = "";
      let balance = 0;
      for (let i = 0; this.transactions.length > i; i++) {
        balance += this.transactions[i].amount;
  
        //   Providing logic to add Secret Transactions to the balance if the password criteria is met
        console.log(typeof this.transactions[i]);
        if (this.transactions[i].password != undefined) {
          if (this.transactions[i].password == "secret") {
            balance += this.transactions[i].amount;
          }
        } else {
          balance += this.transactions[i].amount;
        }
      }
      console.log(balance);
      return balance;
    }
    deposit(amt) {
      this.amt = amt;
      if (amt <= 0) {
        console.log(
          "Please enter a positive number with a minimum value of $0.01"
        );
      } else {
        this.transactions.push(this);
      }
    }
  
    charge(payee, amt) {
      // let transactionSum = amt
      if (amt > balance) {
        console(
          "Transaction amount is greater than current balance. Insufficient Funds"
        );
      } else {
        this.transactions.push(amt);
      }
    }
  }
  
  let peytonTransaction = new SecretTransaction("peytonPassword", 1000, "peyton");
  let alayshaTransaction = new Transaction(100000, "alaysha");
  let transaction2 = new Transaction(69, "andrew");
  let bankAccount = new BankAccount(1234, "Andrew Hemry", [
    alayshaTransaction,
    transaction2,
    peytonTransaction,
  ]);
  bankAccount.balance();
  
  console.log("password", peytonTransaction.password);
  console.log("amount:", peytonTransaction.amount);
  console.log("payee", peytonTransaction.payee);
  
  console.log("amount:", alayshaTransaction.amount);
  console.log("payee", alayshaTransaction.payee);