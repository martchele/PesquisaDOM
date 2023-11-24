// Função para adicionar uma tarefa à lista
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskInput.value}</span>
            <button onclick="removeTask(this)">Remover</button>
            <button onclick="editTask(this)">Editar</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

// Função para remover uma tarefa da lista
function removeTask(button) {
    const li = button.parentElement;
    const taskList = li.parentElement;
    taskList.removeChild(li);
}

// Função para editar uma tarefa na lista
function editTask(button) {
    const li = button.parentElement;
    const span = li.querySelector('span');
    const newTask = prompt('Editar tarefa:', span.innerText);

    if (newTask !== null) {
        span.innerText = newTask;
    }
}
