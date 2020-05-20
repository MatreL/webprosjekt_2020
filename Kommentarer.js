
function renderMessageList() {
    //Returns the enterd data in LocalStorage as a String
    const messageList = JSON.parse(window.localStorage.getItem("messageList")) || [];
    // parses the String into an object
    const messageListEl = document.getElementById("messageList");

    messageListEl.innerHTML = "";
    for (const message of messageList) {
        const messageEl = document.createElement("div");
        const {name,comment} = message;
        messageEl.innerHTML = `<h4>${name}</h4>
                              <div>${comment}</div>`;
        messageListEl.appendChild(messageEl);
    }
}

function createNewComment(event) {

    // HINDRER AT URL OPPDATERES
    event.preventDefault();

    const name = document.querySelector("[name='name']").value;
    const comment = document.querySelector("[name='content']").value;

    // EN SNARVEI FOR Å SKRIVE {NAME: NAME, COMMENT: COMMENT}
    const message = {
        name,
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
    


