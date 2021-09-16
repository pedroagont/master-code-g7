// COMPONENTE MODELO
// Esta pieza de software es la único que tiene acceso al la base de datos
const model = {
  // En este ejemplo, nuestro modelo o base de datos sólo requiere de una sola colección, la de las tareas o "todos", que comenzamos como un arreglo vacío para posteriormente ir agregando elementos
  todos: []
};

// COMPONENTE VISTA
// Esta pieza de software se encarga de manejar todo lo relacionado a la parte visual de nuestra aplicación
const view = {
  // Método que limpia nuestra lista de elementos
  clearList: function() {
    document.getElementById('todo-list').innerHTML = '';
  },

  // Método que renderiza las tareas que se encuentren en la base de datos
  render: function() {
    this.clearList();
    if (model.todos.length != 0) {
      for (let i = 0; i < model.todos.length; i++) {
        const newListItem = `
          <li class="list-item">
            <span class="${model.todos[i].completed && 'completed'}"
              onclick="controller.completeItem(${i})">
              ${model.todos[i].todo}
            </span>
            <button onclick="controller.completeItem(${i})">✅</button>
            <button onclick="controller.deleteItem(${i})">❌</button>
          </li>
        `;
        document.getElementById('todo-list').innerHTML += newListItem;
      }
    }
  },

  // Método que agrega elementos desde la vista (aquí se dispara el controlador)
  addItem: function(e) {
    e.preventDefault();
    const addItemInput = document.getElementById('add-item-input');
    if (addItemInput.value != '' && addItemInput.value != ' ') {
      controller.addItem(addItemInput.value);
    }
    document.getElementById('add-item-input').value = '';
  }
};

// COMPONENTE CONTROLADOR
// Esta pieza de software se encarga de toda la lógica y operación de nuestros datos, también llamada "business logic"
// Por lo general la vista dispara los métodos del controlador para procesar datos de entrada antes de ser enviados al modelo/base de datos
const controller = {
  // Método que inicializa nuestro controlador (dispara el renderizado de la vista)
  init: function() {
    view.render();
  },

  // Método que procesa el agregar tareas a la lista (escribe en el modelo/base de datos y dispara el renderizado de la vista)
  addItem: function(item) {
    const newTodoItem = { todo: item, completed: false };
    model.todos.push(newTodoItem);
    view.render();
  },

  // Método que procesa el completar tareas de la lista (escribe completed: true en el modelo/base de datos y dispara el renderizado de la vista)
  completeItem: function(itemIndex) {
    model.todos[itemIndex].completed = !model.todos[itemIndex].completed;
    view.render();
  },

  // Método que procesa el remover elementos (elimina la tarea del modelo/base de datos y dispara el renderizado de la vista)
  deleteItem: function(itemIndex) {
    model.todos.splice(itemIndex, 1);
    view.render();
  }
};

// INICIALIZAMOS LA APP DESDE EL CONTROLADOR
controller.init();

// AGREGAMOS ELEMENTOS DE EJEMPLO DESDE EL CONTROLADOR
controller.addItem('Aprender HTML 📃');
controller.addItem('Aprender CSS 🎨');
controller.addItem('Aprender Javascript 🪄');
