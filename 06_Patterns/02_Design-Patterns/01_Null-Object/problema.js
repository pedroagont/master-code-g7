console.log('Hola desde el problema! 👋');

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name === 'Pedro';
  }
}

const pedro = new User(1, 'Pedro');
const alan = new User(2, 'Alan');
const users = [pedro, alan];

function getUser(id) {
  return users.find(user => user.id === id);
}

function printUser(id) {
  const user = getUser(id);

  if (user != null && user.hasAccess != null && user.hasAccess()) {
    console.log(`Bienvenido ${user.name}`);
  } else {
    console.log(`No tienes acceso`);
  }
}

function printFancyUser(id) {
  const user = getUser(id);

  if (user != null && user.hasAccess != null && user.hasAccess()) {
    console.log(`Bienvenido maravilloso ${user.name}`);
  } else {
    console.log(`No tienes acceso maravillo invitado`);
  }
}

function printWarningUser(id) {
  const user = getUser(id);

  if (user != null && user.hasAccess != null && user.hasAccess()) {
    console.warn(`Bienvenido maravilloso ${user.name}`);
  } else {
    console.warn(`No tienes acceso maravillo invitado`);
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
