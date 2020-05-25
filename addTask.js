function createNewTask(event){

    event.preventDefault();

    // Getting values from an html form
    const taskName = document.querySelector("[name = 'taskName']").value;
    const deadline = document.querySelector("[name = 'deadline']").value;
    const description = document.querySelector("[name = 'description']").value;
    const fileName = document.querySelector("[name = 'fileName']").value;
    const members = [];

    // Creating object "task" from the values gotten from the html form
    let task = {
        taskName,
        deadline,
        description,
        fileName,
        members,
    };

    //crating an array "tasklist", and push it into localstorage
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    taskList.push(task);
    window.localStorage.setItem("taskList", JSON.stringify(taskList));

    //Resets the form in the html
    event.target.reset();

    // Getting tasks from the column objects in "createTaskColumn.js" inserting tasks
    const columnList = JSON.parse(window.localStorage.getItem("columnList")) || [];
    columnList[0].tasks.push(task);
    window.localStorage.setItem("columnList", JSON.stringify(columnList));
    renderTaskList();
}


//Getting the array "taskList" from localstorage and creating html elements with its contents
function renderTaskList() {

    const columnList = JSON.parse(window.localStorage.getItem("columnList")) || [];

    const taskSelectEl = document.getElementById("taskSelect");

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

            const option = document.createElement("option");
            option.text = taskName;
            taskSelectEl.appendChild(option);

            //Adding values to the innerHtml
            taskEl.innerHTML = `
            <h4>${taskName}</h4>
            <p>${description}</p>
            <p>${fileName}</p>
            <p>${deadline}</p>
        `;

            taskElMembers.innerHTML = `
            <div>${members}<div/>
            
        `;

        taskListEl.style.width = "auto";
        taskListEl.style.width = "auto";
        taskListEl.style.textAlign = "center";
        taskListEl.style.backgroundColor = "cornflowerblue";
        taskListEl.value = j;
        j++;

        taskListEl.draggable = true;
        taskListEl.ondragstart = event => handleDragStart(event, task);

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
