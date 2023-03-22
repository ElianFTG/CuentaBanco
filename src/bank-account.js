//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.bolsa = 0;
  }

  open() {
    
  }

  close() {
    
  }

  deposit(dinerodepositado) {
    let aumento = this.balance + dinerodepositado;
    this.bolsa = aumento;
  }

  withdraw() {
    throw new Error("Remove this statement and implement this function");
  }

  get balance() {
    return this.bolsa;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
