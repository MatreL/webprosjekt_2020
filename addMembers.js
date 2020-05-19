function addNewMember(Event) {
    var member = prompt("Please enter team member:");
    
    const nameList = JSON.parse(window.localStorage.getItem("nameList")) || [];
    nameList.push(member);
    window.localStorage.setItem("nameList", JSON.stringify(nameList));
    
    memberElement();
    
}
function addMemberDiv(Event) {

    var ok = true;

     if (ok === true) {
          var div = document.createElement('div');

          div.className = 'new-member';
            //div.style.backgroundColor = "black";


         document.getElementById('MemberContainer')[0].appendChild(div);
     }
}

memberElement();

function memberElement(){
    
    const nameList = JSON.parse(window.localStorage.getItem("nameList")) || [];
    const listOfMembersEl = document.getElementById("TeamMember");
    var counter = 0;
    for (member of nameList){
        const memberEl = document.createElement("div");
        memberEl.innerHTML = `<li>${nameList[counter]}</li>`;
        listOfMembersEl.appendChild(memberEl);
    }
}

