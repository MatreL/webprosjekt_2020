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
        
        //generere kategori bokser
        let columnEl = document.createElement("div"); columnEl.setAttribute("class", "taskColumns"); columnEl.setAttribute("id", "column" + i);

        //header i boks med status/kategori
        let columnHead = document.createElement("div"); columnHead.setAttribute("class", "taskHeader");
        currentDiv.appendChild(columnEl);
        columnEl.appendChild(columnHead);
         //taskbox
        let columnTask = document.createElement("div");
        columnTask.setAttribute("id", "taskDiv" + i);
        columnEl.appendChild(columnTask);
        //Styling av bokser
        columnEl.style.height += renderTaskList.length * "50px";
        columnEl.style.width = "300px";
        columnEl.style.margin = "30px";
        columnEl.style.float = "left";
        columnEl.style.backgroundColor = columnList[i].color;
        //genererer headertext
        columnHead.innerHTML = `<h4 class="headerText"> ${columnList[i].title} </h4>`;

        
    }
}