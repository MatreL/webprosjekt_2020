const openTaskCreatorButton = document.getElementById("openTaskCreatorButton");
const exitTaskFormButton = document.getElementById("exitTaskFormButton");
const taskFormContainer = document.getElementById("TaskFormContainer");

openTaskCreatorButton.onclick = function(){
  taskFormContainer.style.display = "block";
};

exitTaskFormButton.onclick = function () {
    taskFormContainer.style.display = "none";
};