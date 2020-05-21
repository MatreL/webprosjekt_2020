const openTaskCreatorButton = document.getElementById("openTaskCreatorButton");
const exitTaskFormButton = document.getElementById("exitTaskFormButton");
const taskFormContainer = document.getElementById("TaskFormContainer");

openTaskCreatorButton.onclick = function(){
  taskFormContainer.style.display = "block";
};

exitTaskFormButton.onclick = function () {
    taskFormContainer.style.display = "none";
};

const AddNewMemberButton = document.getElementById("addNewMemberButton");
const exitMemberFormButton = document.getElementById("exitMemberFormButton");
const memberFormConainer = document.getElementById("MemberFormConainer");

AddNewMemberButton.onclick = function(){
  memberFormConainer.style.display = "block";
};

exitMemberFormButton.onclick = function () {
    memberFormConainer.style.display = "none";
};