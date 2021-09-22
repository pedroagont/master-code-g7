console.log('Hola desde la solución! 👋');

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name === 'Pedro';
  }
}

class NullUser {
  constructor() {
    this.id = -1;
    this.name = 'Invitado';
  }

  hasAccess() {
    return false;
  }
}

const pedro = new User(1, 'Pedro');
const alan = new User(2, 'Alan');
const users = [pedro, alan];

function getUser(id) {
  const user = users.find(user => user.id === id);
  if (!user) {
    return new NullUser();
  } else {
    return user;
  }
}

function printUser(id) {
  const user = getUser(id);

  if (user.hasAccess()) {
    console.log(`Bienvenido ${user.name}`);
  } else {
    console.log(`No tienes acceso ${user.name}`);
  }
}

function printFancyUser(id) {
  const user = getUser(id);

  if (user.hasAccess()) {
    console.log(`Bienvenido maravilloso ${user.name}`);
  } else {
    console.log(`No tienes acceso maravilloso ${user.name}`);
  }
}

function printWarningUser(id) {
  const user = getUser(id);

  if (user.hasAccess()) {
    console.warn(`Bienvenido maravilloso ${user.name}`);
  } else {
    console.warn(`No tienes acceso maravilloso ${user.name}`);
  }
}

printUser(1);
printUser(2);
printUser(3);

printFancyUser(1);
printFancyUser(2);
printFancyUser(3);

printWarningUser(1);
printWarningUser(2);
printWarningUser(3);
