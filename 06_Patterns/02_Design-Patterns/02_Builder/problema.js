console.log('Hola desde el problema! 👋');

class Address {
  constructor(street, zip) {
    this.street = street;
    this.zip = zip;
  }
}

class User {
  constructor(name, age, phone, address) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

const abby = new User('Abby', 15, 123456, new Address('Av. Principal', 77500));
console.log(abby);

const pancho = new User(undefined, 'Pancho', undefined, 654321, undefined);
console.log(pancho);
