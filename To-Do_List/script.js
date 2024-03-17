const inputBox = document.querySelector('input');
const listContainer = document.getElementById('lists');

const addTask=()=>{
    if(inputBox.value === inputBox.innerText){
        alert('Write Something First');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = '×'
        li.appendChild(span)
    }
    inputBox.value = inputBox.innerText;
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        
    }
    saveData();
},false);

const saveData=()=> {
    localStorage.setItem("data", listContainer.innerHTML)
}
const showTask=()=> {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();