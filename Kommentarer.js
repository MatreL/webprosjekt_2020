
function renderMessageList() {
    //Returns the enterd data in LocalStorage as a String
    const messageList = JSON.parse(window.localStorage.getItem("messageList")) || [];
    // parses the String into an object
    const messageListEl = document.getElementById("messageList");

    messageListEl.innerHTML = "";
    for (const message of messageList) {
        const messageEl = document.createElement("div");
        const {name,taskName,comment} = message;
        messageEl.innerHTML = `
        <h4>\u00A0\u00A0${name},\u00A0\u00A0 ${taskName}</h4>
        <div>\u00A0\u00A0${comment}</div>
        <br>`;
        messageListEl.appendChild(messageEl);
        
        messageEl.style.margin = "8px";
        messageEl.style.border = "1px dashed white";
        messageListEl.style.margin = "1px";
    }
}

function createNewComment(event) {

    // HINDRER AT URL OPPDATERES
    event.preventDefault();

    const name = document.querySelector("[name='mName']").value;
    const taskName = document.querySelector("[name='tName']").value;
    const comment = document.querySelector("[name='content']").value;

    // EN SNARVEI FOR Å SKRIVE {NAME: NAME, COMMENT: COMMENT}
    const message = {
        name,
        taskName,
        comment
    };

    const messageList = JSON.parse(window.localStorage.getItem("messageList")) || [];
    messageList.push(message);
    // LAGRER DATA I STORAGE TIL BROWSER
    window.localStorage.setItem("messageList", JSON.stringify(messageList));
    renderMessageList();
    event.target.reset();
}
   renderMessageList();
    


