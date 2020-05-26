isFunctionCalled = JSON.parse(window.localStorage.getItem("isFunctionCalled")) || false;

if (!isFunctionCalled) {
    isFunctionCalled = true;
    window.localStorage.setItem("isFunctionCalled", JSON.stringify(isFunctionCalled));
    newTaskColumn();
} else {
    renderColumns();
    renderTaskList();
}

function newTaskColumn() {
    const column0 = {
        title: "To Do",
        color: "lightskyblue",
        tasks: [],
        name: "column0"
    };
    const column1 = {
        title: "Doing",
        color: "khaki",
        tasks: [],
        name: "column1"
    };
    const column2 = {
        title: "Done",
        color: "mediumaquamarine",
        tasks: [],
        name: "column2"
    };

    const columnList = JSON.parse(window.localStorage.getItem("columnList")) || [];
    columnList.push(column0);
    columnList.push(column1);
    columnList.push(column2);
    window.localStorage.setItem("columnList", JSON.stringify(columnList));

    renderColumns();
}

function addCustomTaskColumn(event) {

    event.preventDefault();

    let columnCounter = 2;
    columnCounter++;
    const columnCustom = {
        title: document.querySelector("[name = 'columnName']").value,
        color: "green",
        tasks: [],
        name: `column${columnCounter}`
    };
    const columnList = JSON.parse(window.localStorage.getItem("columnList")) || [];
    columnList.push(columnCustom);
    window.localStorage.setItem("columnList", JSON.stringify(columnList));

    renderColumns();
    renderTaskList();
    location.reload();
}

function renderColumns() {

    const columnList = JSON.parse(window.localStorage.getItem("columnList"));
    let currentDiv = document.getElementById("TaskContainer");

    for (let i = 0; i < columnList.length; i++) {

        //generere kategori bokser
        let columnEl = document.createElement("div");
        columnEl.setAttribute("class", "taskColumns");
        columnEl.setAttribute("id", "column" + i);

        //header i boks med status/kategori
        let columnHead = document.createElement("div");
        columnHead.setAttribute("class", "taskHeader");

        columnEl.ondragover = event => dragOverCategories(event);
        columnEl.ondrop = event => dropOnCategories(event);

        currentDiv.appendChild(columnEl);
        columnEl.appendChild(columnHead);
        //taskbox
        let columnTask = document.createElement("div");
        columnTask.setAttribute("id", "taskDiv" + i);
        columnEl.appendChild(columnTask);
        //Styling av bokser
        columnEl.style.gridColumn = `${i + 1}/${i + 2}`;
        columnEl.style.gridRow = "2/3";
        columnEl.style.overflowY = "scroll";
        columnEl.style.margin = "1em";
        columnEl.style.backgroundColor = columnList[i].color;

        columnHead.style.textAlign = "center";
        //genererer headertext

        if(i > 2){
            columnHead.innerHTML = `
                <button type="submit" value="${i}" onclick="deleteColumn(event)" >Delete column</button>
                <h4 class="headerText"> ${columnList[i].title} </h4>
            `;
        }else{
            columnHead.innerHTML = `<h4 class="headerText"> ${columnList[i].title} </h4>`;
        }
    }
}
// For drag and drop

function dragOverCategories(event) {
    event.preventDefault();
}

function dropOnCategories(event) {
    let tempTask = JSON.parse(window.localStorage.getItem("tempTask")) || [];
    let taskIndex = JSON.parse(window.localStorage.getItem("taskIndex")) || 0;
    let lastColumnID = JSON.parse(window.localStorage.getItem("lastColumnID")) || [];
    setColumnTask(event.target.id, tempTask);
    deleteDraggedTask(lastColumnID, taskIndex);
}

function setColumnTask(selectedColumn, task) {

    const columnList = JSON.parse(window.localStorage.getItem("columnList")) || [];

    for (const column of columnList) {

        if (column.name === selectedColumn) {

            column.tasks.push(task[0]);
            window.localStorage.setItem("columnList", JSON.stringify(columnList));
        }
    }
    renderTaskList();
}

function deleteDraggedTask(column, task) {

    const columnList = JSON.parse(window.localStorage.getItem("columnList")) || [];

    for (let i = 0; i < columnList.length; i++) {

        if (column === columnList[i].name) {

            columnList[i].tasks.splice(task, 1);
            window.localStorage.setItem("columnList", JSON.stringify(columnList));
            renderTaskList();
        }
    }
}
function deleteColumn(event){

    const columnList = JSON.parse(window.localStorage.getItem("columnList")) || [];
    const currentColumn = event.target.value;

    columnList.splice(currentColumn, 1);

    window.localStorage.setItem("columnList", JSON.stringify(columnList));

    renderColumns();
    renderTaskList();
    location.reload();
}