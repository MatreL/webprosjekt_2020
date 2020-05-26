function createNewTask(event){

    event.preventDefault();

    // Getting values from an html form
    const taskName = document.querySelector("[name = 'taskName']").value;
    const deadline = document.querySelector("[name = 'deadline']").value;
    const description = document.querySelector("[name = 'description']").value;
    const fileName = document.querySelector("[name = 'fileName']").value;
    const  members = [];

    // Creating object "task" from the values gotten from the html form
    let task = {
        taskName,
        deadline,
        description,
        fileName,
        members,
    };

    //Resets the form in the html
    event.target.reset();

    // Getting tasks from the column objects in "createTaskColumn.js" inserting tasks
    const columnList = JSON.parse(window.localStorage.getItem("columnList")) || [];
    columnList[0].tasks.push(task);
    window.localStorage.setItem("columnList", JSON.stringify(columnList));
    renderTaskList();
    addMemberToDropdown(taskName);
}


//Getting the array "taskList" from localstorage and creating html elements with its contents
function renderTaskList() {

    const columnList = JSON.parse(window.localStorage.getItem("columnList")) || [];

    let taskSelectEl = document.getElementById("taskSelect");

    taskSelectEl.innerHTML = "";

    for(let i = 0; i < columnList.length; i++){

        const taskList = columnList[i].tasks;

        let column = document.getElementById(`taskDiv${i}`);

        column.innerHTML = "";

        let j = 0;
        for (const task of taskList) {

            const taskListEl = document.createElement("div");
            const taskEl = document.createElement("div");
            const taskElMembers = document.createElement("div");
            //Splitting up the object "task", into seperate variables
            const {taskName, deadline, description, fileName, members} = task;

            addMemberToDropdown(taskName);

            //Adding values to the innerHtml
            taskEl.innerHTML = `
            <h4>${taskName}</h4>
            <p>${description}</p>
            <p>${fileName}</p>
            <p>${deadline}</p>
            <button onclick="deleteTask(event)" style="
                width: 65px;
                height: 20px;
            ">Remove</button>
            <button onclick="showEditTask(event)" style="
                width: 40px;
                height: 20px;
            ">Edit</button>
             <button onclick="listMembers(event)" style="
                width: 70px;
                height: 20px;
            ">Members</button>
        `;

            taskElMembers.innerHTML = `
                <p style="text-decoration: none; margin-top: 4px; padding:10px; border: 1px solid black;"
                >Drag members here</p>
        `;

        taskListEl.style.width = "auto";
        taskListEl.style.width = "auto";
        taskListEl.style.textAlign = "center";
        taskListEl.style.backgroundColor = "cornflowerblue";
        taskListEl.value = j;
        j++;

        taskListEl.draggable = true;
        taskListEl.ondragstart = event => handleDragStart(event, task);
        taskElMembers.ondragover = event => dragOverTask(event);
        taskElMembers.ondrop = event => dropOnTask(event);

        taskListEl.appendChild(taskEl);
        taskListEl.appendChild(taskElMembers);

        column.appendChild(taskListEl);
        }
    }
}

function handleDragStart(event, task){
    const tempTask = [];
    tempTask.push(task);
    window.localStorage.setItem("tempTask", JSON.stringify(tempTask));
    const taskIndex = event.target.value;
    window.localStorage.setItem("taskIndex", JSON.stringify(taskIndex));
    const lastColumnID = event.target.parentNode.parentNode.id;
    window.localStorage.setItem("lastColumnID", JSON.stringify(lastColumnID));
}

function dragOverTask(event){
    event.preventDefault();
}

function dropOnTask(event){

    const memberName = event.dataTransfer.getData("text/plain");
    const taskIndex = event.target.parentNode.parentNode.value;
    const columnID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    const columnList = JSON.parse(window.localStorage.getItem("columnList")) || [];

    for (let i = 0; i < columnList.length; i++){

        if(columnID === columnList[i].name){

            columnList[i].tasks[taskIndex].members.push(memberName);
            window.localStorage.setItem("columnList", JSON.stringify(columnList));
            renderTaskList();
        }
    }
}

function deleteTask(event){
    const columnEl = event.target.parentNode.parentNode.parentNode.parentNode;
    const taskEl = event.target.parentNode.parentNode;

    const columnList = JSON.parse(window.localStorage.getItem("columnList")) || [];

    for (let i = 0; i < columnList.length; i++){

        if(columnEl.id === columnList[i].name){
            columnList[i].tasks.splice(taskEl.value, 1);
            window.localStorage.setItem("columnList", JSON.stringify(columnList));
            renderTaskList();
        }
    }
}

function showEditTask(event){
    const editContainerEl = document.getElementById("editTaskFormContainer");

    editContainerEl.style.display = "block";
    
    editContainerEl.style.top = `${event.clientY}px`;
    editContainerEl.style.left = `${event.clientX}px`;

    const editingColumnName = event.target.parentNode.parentNode.parentNode.parentNode.id;
    const editingTaskIndex = event.target.parentNode.parentNode.value;

    window.localStorage.setItem("editingColumnName", JSON.stringify(editingColumnName));
    window.localStorage.setItem("editingTaskIndex", JSON.stringify(editingTaskIndex));
}

function editTask(event) {

    event.preventDefault();

    const columnList = JSON.parse(window.localStorage.getItem("columnList")) || [];
    const editingColumnName = JSON.parse(window.localStorage.getItem("editingColumnName")) || [];
    const editingTaskIndex = JSON.parse(window.localStorage.getItem("editingTaskIndex")) || 0;

    const taskName = document.querySelector("[name = 'editTaskName']").value;
    const deadline = document.querySelector("[name = 'editDeadline']").value;
    const description = document.querySelector("[name = 'editDescription']").value;
    const fileName = document.querySelector("[name = 'editFileName']").value;

    for (let i = 0; i < columnList.length; i++){

        if(editingColumnName === columnList[i].name){

            const task = columnList[i].tasks[editingTaskIndex];

            if(taskName !== ""){
                task.taskName = taskName;
            }
            if(deadline !== ""){
                task.deadline = deadline;
            }
            if(description !== ""){
                task.description = description;
            }
            if(fileName !== ""){
                task.fileName = fileName;
            }
        }
    }
    window.localStorage.setItem("columnList", JSON.stringify(columnList));
    renderTaskList();
    event.target.reset();
}
function listMembers(event){

    const memberTaskContainer = document.getElementById("memberTaskContainer");

    const editingColumnName = event.target.parentNode.parentNode.parentNode.parentNode.id;
    const editingTaskIndex = event.target.parentNode.parentNode.value;

    const columnList = JSON.parse(window.localStorage.getItem("columnList")) || [];

    memberTaskContainer.style.display = "block";
    memberTaskContainer.innerHTML = "Members:";
    memberTaskContainer.style.top = `${event.clientY}px`;
    memberTaskContainer.style.left = `${event.clientX}px`;
    memberTaskContainer.style.overflow = "auto";

    const listElUl = document.createElement("ul");

    const exitListButton = document.createElement("INPUT");
    exitListButton.setAttribute("type", "button");
    exitListButton.value = "x";
    exitListButton.id = "exitMemberTaskContainer";
    exitListButton.style.position = "absolute";
    exitListButton.style.top = "0px";
    exitListButton.style.right = "0px";

    exitListButton.onclick = function(){
      memberTaskContainer.style.display = "none" ;
    };

    for (let i = 0; i < columnList.length; i++){

        if(editingColumnName === columnList[i].name){

            for(let j = 0; j < columnList[i].tasks[editingTaskIndex].members.length; j++){

                listElUl.innerHTML += `<li>${columnList[i].tasks[editingTaskIndex].members[j]}</li>`;
            }
        }
    }
    memberTaskContainer.appendChild(listElUl);
    memberTaskContainer.appendChild(exitListButton);
}
function addMemberToDropdown(taskName){

    let taskSelectEl = document.getElementById("taskSelect");
    const option = document.createElement("option");
    option.text = taskName;
    taskSelectEl.appendChild(option);

}