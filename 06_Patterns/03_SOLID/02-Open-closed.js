// PRINCIPIO ABIERTO/CERRADO

// SIN PRINCIPIO
class Payment {
  constructor(paymentType) {
    this.paymentType = paymentType;
  }

  pay(amount) {
    if (this.paymentType === 'creditCard') {
      return `Pagando $${amount} con tarjeta de crédito`;
    }
    if (this.paymentType === 'stripe') {
      return `Pagando $${amount} con Stripe`;
    }
    if (this.paymentType === 'paypal') {
      return `Pagando $${amount} con Paypal`;
    }
  }
}

// APLICANDO PRINCIPIO
class iPayment {
  pay() {
    return 'Pagando';
  }
}

class CreditCard extends iPayment {
  pay(amount) {
    return `Pagando $${amount} con tarjeta de crédito`;
  }
}

class Stripe extends iPayment {
  pay(amount) {
    return `Pagando $${amount} con Stripe`;
  }
}

class Paypal extends iPayment {
  pay(amount) {
    return `Pagando $${amount} con Paypal`;
  }
}
