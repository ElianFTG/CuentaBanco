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
    if(!this.cuentaAbierta) {
      this.cuentaAbierta = true;
      this.bolsa = 0;
    }
    else {
      throw new ValueError();
    }
    
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
    if(dinerodepositado > 0) {
      let aumento = this.balance + dinerodepositado;
      this.bolsa = aumento;
    }
    else {
      throw new ValueError();
    }
    
  }

  withdraw(dineroRetirado) {
    if(dineroRetirado <= this.bolsa && dineroRetirado > 0) {
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
