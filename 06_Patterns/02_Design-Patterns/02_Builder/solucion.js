console.log('Hola desde la solución! 👋');

class Address {
  constructor(street, zip) {
    this.street = street;
    this.zip = zip;
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }

  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }

  setAddress(address) {
    this.user.address = address;
    return this;
  }

  build() {
    return this.user;
  }
}

const abbyBuilder = new UserBuilder('Abby');
const abby = abbyBuilder
  .setAge(15)
  .setPhone(123455)
  .setAddress(new Address('Av. Principal', 77500))
  .build();
console.log(abby);

const panchoBuilder = new UserBuilder('Pancho');
const pancho = panchoBuilder.setPhone(654321).build();
console.log(pancho);
