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

function memberElement(){
    
    const nameList = JSON.parse(window.localStorage.getItem("nameList")) || [];
    
    let memberDiv = document.getElementById("newMemberDiv");
    
    memberDiv.innerHTML = "";

    
    for (const member of nameList){
        const memberListEl = document.createElement("div");
        const memberEl = document.createElement("div");
        
        const {memberName} = member;
        
        
        memberEl.innerHTML = `
            <h4>${memberName}</h4>`;
        
        memberListEl.style.width = "100px";
        memberListEl.style.height = "100px";
        memberListEl.style.border = "1px solid black";
        memberListEl.style.borderRadius = "50%";
        memberListEl.style.textAlign = "center";
        memberListEl.style.float = "left";
        memberListEl.style.margin = "1px";

        
        
        memberListEl.appendChild(memberEl);
        memberDiv.appendChild(memberListEl);
    }
}