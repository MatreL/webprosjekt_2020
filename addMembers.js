function addNewMember(Event) {
    var member = prompt("Please enter team member:");
    
    const nameList = JSON.parse(window.localStorage.getItem("nameList")) || [];
    nameList.push(member);
    window.localStorage.setItem("nameList", JSON.stringify(nameList));
    
    event.target.reset();
    
}
function addMemberDiv(Event) {

    var ok = true;

     if (ok === true) {
          var div = document.createElement('div');

          div.className = 'new-member';
            //div.style.backgroundColor = "black";


         document.getElementsByTagName('body')[0].appendChild(div);
     }
}


