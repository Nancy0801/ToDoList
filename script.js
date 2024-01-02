const input = document.getElementById("input");
const listContainer = document.getElementById("list-container");

function addtext(){
    if (input.value ===''){
        alert('please add some task!');
    }
    else{
        // let icon = document.createElement("i");
        let li = document.createElement("li");

        // icon.classList.add('far', 'fa-circle');
        // li.appendChild(icon);

        let textnode = document.createTextNode(input.value);
        li.appendChild(textnode);
        
        let crossicon = document.createElement("i");
        crossicon.classList.add('far', 'fa-circle-xmark', 'cross-icon');
        li.appendChild(crossicon);

        listContainer.appendChild(li);
    }
    input.value = "";
    saveData();
}

listContainer.addEventListener('click',function(e){
    
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.classList.contains('cross-icon')){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();