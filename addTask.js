function createNewTask(event){

    event.preventDefault();

    // Getting values from an html form
    const taskName = document.querySelector("[name = 'taskName']").value;
    const deadline = document.querySelector("[name = 'deadline']").value;
    const description = document.querySelector("[name = 'description']").value;
    const members = [];

    // Creating object "task" from the values gotten from the html form
    const task = {
        taskName,
        deadline,
        description,
        members
    };

    //crating an array "tasklist", and push it into localstorage
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    taskList.push(task);
    window.localStorage.setItem("taskList", JSON.stringify(taskList));

    //Resets the form in the html
    event.target.reset();

    renderTaskList();
}


//Getting the array "taskList" from localstorage and creating html elements with its contents
function renderTaskList() {

    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];

    let column = document.getElementById("column0");

    column.innerHTML = "";

    for (const task of taskList) {
        const taskListEl = document.createElement("div");
        const taskEl = document.createElement("div");
        const taskElMembers = document.createElement("div");
        //Splitting up the object "task", into seperate variables
        const {taskName, deadline, description, members} = task;

        //Adding values to the innerHtml
        taskEl.innerHTML = `
            <h4>${taskName}</h4>
            <p>${description}</p>
            <p>${deadline}</p>
        `;

        taskElMembers.innerHTML = `
            <div>${members}<div/>
        `;

        taskListEl.style.width = "180px";
        taskListEl.style.width = "80px";
        taskListEl.style.backgroundColor = "white";

        taskListEl.appendChild(taskEl);
        taskListEl.appendChild(taskElMembers);

        column.appendChild(taskListEl);
    }
}