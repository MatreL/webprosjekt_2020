memberElement();

//Funksjon for å legge verdier inn i localstorage
function addNewMember(event) {
    
    event.preventDefault();
    
    const memberName = document.querySelector("[name = 'memberName']").value;
    
    const member = {memberName};
    
    const nameList = JSON.parse(window.localStorage.getItem("nameList")) || [];
    nameList.push(member);
    window.localStorage.setItem("nameList", JSON.stringify(nameList));
    
    event.target.reset();
    
    memberElement();
}

//funksjon som skal hente verdier i localstorage samtidig som den oppretter elementet verdiene skal ligge i
function memberElement(){
    
    const nameList = JSON.parse(window.localStorage.getItem("nameList")) || [];
    
    let memberDiv = document.getElementById("newMemberDiv");
    memberDiv.innerHTML = "";
    
    let memberSelectEl = document.getElementById("memberSelect");
    memberSelectEl.innerHTML ="";

    for (const member of nameList){
        
        const memberListEl = document.createElement("div");
        const memberEl = document.createElement("div");
        const {memberName} = member;

        const option = document.createElement("option");
        option.text = memberName;
        memberSelectEl.appendChild(option);

        memberEl.innerHTML = `
            <h4>${memberName}</h4>`;
        
        memberListEl.style.width = "80px";
        memberListEl.style.height = "80px";
        memberListEl.style.border = "1px solid black";
        memberListEl.style.borderRadius = "50%";
        memberListEl.style.textAlign = "center";
        memberListEl.style.float = "left";
        memberListEl.style.margin = "3px";
        
        memberListEl.draggable = true;
        memberListEl.ondragstart = event => handleDragMemberStart(event, memberName);
        
        memberListEl.appendChild(memberEl);
        memberDiv.appendChild(memberListEl);
    }
}
function handleDragMemberStart(event, member){

    event.dataTransfer.setData("text/plain", member);
}