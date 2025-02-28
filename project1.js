let form = document.querySelector('#task_form');
let tasklist = document.querySelector('ul');
let clearbutton = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskinput = document.querySelector('#new_task');
//event listernse 

form.addEventListener('submit', addtask);
tasklist.addEventListener('click', removetask);
clearbutton.addEventListener('click', cleartask);
filter.addEventListener('keyup', filtertask);
document.addEventListener('DOMContentLoaded',gettasks);

//func
function addtask(e) {
    e.preventDefault();
    if (taskinput.value.trim() === '') {
        alert("add a task!");
    }
    else {
        //LI 
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskinput.value + " "));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'x';
        li.appendChild(link);
        tasklist.appendChild(li);

        storetaskinlocalstorage(taskinput.value);


        taskinput.value = '';
    }
}

/*let removetask=(e)=>{
   if(e.target.hasAttribute("href")){
    console.log(e.target);
   }
}*/
function removetask(e) {
    if (e.target.hasAttribute("href")) {
        if (confirm("are you sure?")) {
            let ele = e.target.parentElement;
            ele.remove();
            removefromls(ele);
        }

    }
}

function cleartask(e) {
    //tasklist.innerHTML="";
    //faster way
    while (tasklist.firstChild) {
        tasklist.removeChild(tasklist.firstChild);
    }
    localStorage.clear();
}

function filtertask(e){
    let text = e.target.value.toLowerCase();

    document.querySelectorAll('li').forEach(task => {
        let item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display='block';
        }
        else{
            task.style.display='none';
        }
    });
}


function storetaskinlocalstorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }
    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));

}


function gettasks(){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }
    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(task=>{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(task + " "));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'x';
        li.appendChild(link);
        tasklist.appendChild(li);
    })
}


function removefromls(taskitem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // Get text content of the task (trim to remove spaces)
    let taskText = taskitem.firstChild.textContent.trim();

    // Filter out the task from localStorage array
    tasks = tasks.filter(task => task.trim() !== taskText); 

    // Update localStorage with the new task list
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


