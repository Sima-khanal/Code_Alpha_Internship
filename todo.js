document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addTodo();
});

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
    
    if (todoText !== "") {
        const todoList = document.getElementById('todoList');
        const listItem = document.createElement('li');
        
        listItem.innerHTML = `
            <span>${todoText}</span>
            <div>
            <button onclick="toggleComplete(this)">Complete</button>
                <button onclick="deleteTodo(this)">Delete</button>
                
            </div>
        `;
        
        todoList.appendChild(listItem);
        todoInput.value = "";
    }
}

function toggleComplete(button) {
  const listItem = button.parentNode.parentNode;
  listItem.classList.toggle('completed');
}

function deleteTodo(button) {
    const listItem = button.parentNode.parentNode;
    listItem.remove();
}
