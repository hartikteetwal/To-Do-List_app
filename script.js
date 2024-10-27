const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        const count = parseInt(localStorage.getItem("count"))
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = 'x'
        li.appendChild(span)
        let small = document.createElement("small");
        small.setAttribute("id",count)
        small.innerHTML = "🖋"
        li.appendChild(small)
    }
    inputBox.value = "";
    saveData()
    localStorage.setItem(localStorage.getItem("count")+1)
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    saveData()

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    saveData()
    
}
else if(e.target.tagName === "SMALL"){
    console.log(document.getElementsByTagName("li"))
    e.target.parentElement.remove();
    saveData()
    }
},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();