const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', () => {
  const taskText = newTaskInput.value;
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerText = taskText;
    taskList.appendChild(taskItem);
    newTaskInput.value = '';

    taskItem.addEventListener('click', () => {
      taskItem.classList.toggle('completed');
    });
  }
});