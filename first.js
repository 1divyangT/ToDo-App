const myInput = document.getElementById("myInput");
const list = document.getElementById("list");


function add(){
    if(myInput.value === '' ){
        alert("Please write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = myInput.value;
        list.appendChild(li);
        
    }
   
    myInput.value = "";
    taskCount();
    saveData();
}

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){   
    e.target.remove();
    taskCount();
    saveData();
    }
})

function saveData(){
    localStorage.setItem("data",list.innerHTML);
    localStorage.setItem("count",taskCount.innerHTML);
}

function showTask(){
    list.innerHTML = localStorage.getItem("data");
    taskCount.innerHTML=localStorage.getItem("count");
}

function taskCount(){
    let list = document.querySelectorAll("#list li");
    let totalElements = list.length;
    let taskCount = document.getElementById("taskCount");
    taskCount.innerHTML=totalElements;
}

taskCount();
showTask();