interface addTask {
    title : String , 
    discription : String,
}

interface updateTask{
    id : number,
    updatedTitle : String , 
    discription : String , 
}

interface deleteTask{
    id : number
}

type task  = addTask | updateTask | deleteTask;


var title :String[] = [];
var description :String[] = [];
var userInput = document.querySelector(".user-input")as HTMLInputElement;
var parentElement = document.querySelector(".list") as HTMLDivElement;
function addingTask(task :  addTask | updateTask | deleteTask ):void{
   title.push(userInput.value);
   userInput.value = ""
   showTask();
}


function updateTask(task :  updateTask | deleteTask ):void{
    title.forEach((data , id)=>{
        if(id == task.id){
        data = "";
        }
    })
  description.forEach((data , id)=>{
        if(id == task.id){
            data = "";
        }
    })
}


function deleteTask(task :  addTask | updateTask | deleteTask):void{
     title.forEach((data , id)=>{
        if(id == task.id){
           data = '';
        }
    })
  description.forEach((data , id)=>{
        if(id == task.id){
           data = '';
        }
    })
}

function showTask():void{
    parentElement.innerHTML = "";
   title.forEach((data)=>{
    const div = document.createElement("div");
      div.textContent  = data.toString();
      parentElement.appendChild(div);
   })
}

