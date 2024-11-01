const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = (inputBox.value).charAt(0).toUpperCase() + (inputBox.value).slice(1);
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = 'x'
        span.setAttribute("title","Delete")
        li.appendChild(span)
        let small = document.createElement("small");
        small.innerHTML = "🖋"
        small.setAttribute("title","Edit")
        li.appendChild(small)
    }
    inputBox.value = "";
    saveData()
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
    inputBox.value = e.target.parentElement.innerHTML.split("<span")[0]
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


document.getElementsByClassName("bx")[0].addEventListener("click",(e)=>{
    if(e.target.classList.contains("bx-moon")){
        e.target.classList.remove("bx-moon")
        e.target.classList.add("bxs-moon","w1")
        console.log(document.getElementsByClassName("todo-app")[0].classList.add("d1"))
        console.log(document.getElementsByClassName("todo-app")[0].children[0].children[0].setAttribute("class","w1"))
        document.querySelectorAll("li").forEach(e=>{
            e.classList.add("w1")
            e.children[0].classList.add("w1")
            e.children[1].classList.add("w1")
        })
    }
    else{
        e.target.classList.remove("bxs-moon","w1")
        e.target.classList.add("bx-moon")
        console.log(document.getElementsByClassName("todo-app")[0].classList.remove("d1"))
        document.querySelectorAll("li").forEach(e=>{
            e.classList.remove("w1")
            e.children[0].classList.remove("w1")
            e.children[1].classList.remove("w1")
        })
        console.log(document.getElementsByClassName("todo-app")[0].children[0].children[0].removeAttribute("class","w1"))
    }
    
})
