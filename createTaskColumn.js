function newTaskColumn() {
   
    let standardNrOfColumns = 3;
    
    let actionArray = ["To Do", "Doing", "Done"];
    let colorStyleArray = ["green", "blue", "yellow"];
    
    for(i = 0; i < standardNrOfColumns; i++){
    //generere bokser
    let column = document.createElement("div"); column.setAttribute("id", "column" + i);
    column.style.height = "200px";
    column.style.width = "100px";
    column.style.backgroundColor = colorStyleArray[i];
        
    column.innerHTML = "<h4>" + actionArray[i] + "</h4>";
    
    let currentDiv = document.getElementById("TaskContainer");
    
    
    
    currentDiv.appendChild(column);
    
    }
    
    
}