const todoListHtml = document.querySelector('#todo-list');
const todoInputHtml = document.querySelector('#todo-input');

let todoItems = [];

todoInputHtml.addEventListener('keyup', ({ key }) => {
  if (key === 'Enter') {
      addTodo();
  }
})

function renderTodos() {
  todoListHtml.innerHTML = '';

  for (let i = 0; i < todoItems.length; i++) {
    let checkedString = '';
    if (todoItems[i].ischecked) {
      checkedString = 'checked'
    }
    todoListHtml.innerHTML += `
      <li>
        <span class="${checkedString}">${todoItems[i].text}</span>
        <div>
          <input
            type="checkbox"
            onclick="toggleTodo(${todoItems[i].id})"
            ${checkedString}
          />
          <a onclick="deleteTodo(${todoItems[i].id})">🗑</a>
        </div>
      </li>
    `
  }
}

async function loadTodos() {
  const response = await fetch('https://expressjs-postgres-production-31c4.up.railway.app/');
  const todos = await response.json();
  todoItems = todos;
  renderTodos();
}

loadTodos();

async function addTodo() {
  if (todoInputHtml.value == '') {
    console.log('input on tühi!');
    return;
  }

  const response = await fetch('https://expressjs-postgres-production-31c4.up.railway.app/', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: todoInputHtml.value })
  });
  const todos = await response.json();
  todoItems = todos;

  renderTodos();
  todoInputHtml.value = '';
}

async function toggleTodo(todoId) {
  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].id == todoId) {
      todoItems[i].ischecked = !todoItems[i].ischecked;
      break;
    }
  }
  const response = await fetch('https://expressjs-postgres-production-31c4.up.railway.app/', {
  method: 'PUT',
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ id: todoId })
});
const todos = await response.json();
todoItems = todos;

  renderTodos();
}

async function deleteTodo(todoId) {
  /*
  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].id == todoId) {
      todoItems.splice(i, 1);
      break;
    }
  }
  */

const response = await fetch('https://expressjs-postgres-production-31c4.up.railway.app/', {
  method: 'DELETE',
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ id: todoId })
});
const todos = await response.json();
todoItems = todos;

renderTodos();
}