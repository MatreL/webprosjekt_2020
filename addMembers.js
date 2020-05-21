function addNewMember(event) {
    
    event.preventDefault();
    
    const member = document.querySelector("[name = 'memberName']").value;
    
    const nameList = JSON.parse(window.localStorage.getItem("nameList")) || [];
    nameList.push(member);
    window.localStorage.setItem("nameList", JSON.stringify(nameList));
    
    
    event.target.reset();
    
    memberElement();
    
    
}

function memberElement(){
    
    const nameList = JSON.parse(window.localStorage.getItem("nameList")) || [];
    
    let memberDiv = document.getElementById("MemberContainer");
    
    memberDiv.innerHTML= "";
    
    for (const member of nameList){
        const memberListEl = document.createElement("div");
        const memberEl = document.createElement("div");
        
        
        memberEl.innerHTML = `
            <h4>${member}</h4>`;
        
        memberListEl.style.width = "110px";
        memberListEl.style.height = "110px";
        memberListEl.style.display = "block";
        memberListEl.style.border = "1px solid black";
        memberListEl.style.borderRadius = "50%";
        memberListEl.style.textAlign = "center";
        
        memberListEl.appendChild(memberEl);
        
        memberDiv.appendChild(memberListEl);
    }
}