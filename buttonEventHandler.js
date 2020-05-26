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
const memberFormContainer = document.getElementById("MemberFormContainer");

AddNewMemberButton.onclick = function(){
  memberFormContainer.style.display = "block";
};

exitMemberFormButton.onclick = function () {
    memberFormContainer.style.display = "none";
};

const exitEditTaskFormButton = document.getElementById("exitEditTaskFormButton");
const editTaskFormContainer = document.getElementById("editTaskFormContainer");

exitEditTaskFormButton.onclick = function(){
  editTaskFormContainer.style.display = "none";
};

let navBarP1 = document.getElementById("NavBarPage1");
let navBarP2 = document.getElementById("NavBarPage2");

function Page1(){
    navBarP1.style.visibility = "";
    navBarP2.style.visibility = "hidden";
    }

function Page2(){
    navBarP2.style.visibility = "";
    navBarP1.style.visibility = "hidden";
      }