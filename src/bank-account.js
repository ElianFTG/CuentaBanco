//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.bolsa = 0;
    this.cuentaAbierta = false;
  }

  open() {
    this.cuentaAbierta = true;
    this.bolsa = 0;
  }

  close() {
    if(this.cuentaAbierta) {
      this.cuentaAbierta = false;
    }
    else {
      throw new ValueError();
    }
    
  }

  deposit(dinerodepositado) {
    let aumento = this.balance + dinerodepositado;
    this.bolsa = aumento;
  }

  withdraw(dineroRetirado) {
    if(dineroRetirado <= this.bolsa) {
      let retiro = this.bolsa - dineroRetirado;
      this.bolsa = retiro;
    }
    else {
      throw new ValueError();
    }
    
  }

  get balance() {
    if(this.cuentaAbierta) {
      return this.bolsa;
    }
    else {
      throw new ValueError();
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
