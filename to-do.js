const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", function() {
  const newTask = document.createElement("li");
  newTask.innerHTML = `${newTaskInput.value} <span class="delete-task">Delete</span>`;
  taskList.appendChild(newTask);
  newTaskInput.value = "";
});

taskList.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-task")) {
    event.target.parentNode.remove();
  }
});