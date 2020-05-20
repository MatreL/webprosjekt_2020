isFunctionCalled = JSON.parse(window.localStorage.getItem("isFunctionCalled")) || false;

if(!isFunctionCalled){
    isFunctionCalled = true;
    window.localStorage.setItem("isFunctionCalled", JSON.stringify(isFunctionCalled));
    newTaskColumn();
}else{
    renderColumns();
    renderTaskList();
}

function newTaskColumn() {
    const column1 = {
        title: "To Do",
        color: "blue"
    };
    const column2 = {
        title: "Doing",
        color: "yellow"
    };
    const column3 = {
      title: "Done",
      color: "green"
    };

    const columnList = JSON.parse(window.localStorage.getItem("columnList")) || [];
    columnList.push(column1);
    columnList.push(column2);
    columnList.push(column3);
    window.localStorage.setItem("columnList", JSON.stringify(columnList));

    renderColumns();
}

function renderColumns(){

    const columnList = JSON.parse(window.localStorage.getItem("columnList"));
    let currentDiv = document.getElementById("TaskContainer");

    for(i = 0; i < columnList.length; i++){
        //generere bokser
        let columnEl = document.createElement("div"); columnEl.setAttribute("id", "column" + i);
        columnEl.style.height = "400px";
        columnEl.style.width = "200px";
        columnEl.style.margin = "30px";
        columnEl.style.float = "left";
        columnEl.style.backgroundColor = columnList[i].color;

        columnEl.innerHTML = "<h4>" + columnList[i].title + "</h4>";

        currentDiv.appendChild(columnEl);
    }
}