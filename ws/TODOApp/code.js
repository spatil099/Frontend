console.log(document.querySelector("body"))
document.querySelector("form").addEventListener("submit",addTaskToTable);

function addTaskToTable(){
   event.preventDefault();
   var priority = document.getElementById('priority').value
   var task = document.getElementById('task').value
   
   
   var tr = document.createElement('tr');
   var td1 = document.createElement('td');
   td1.innerText = task;
   var td2 = document.createElement('td');
   td2.innerText = priority;
   //Adds style inline -> not preferred
//    if(priority == "High"){
//     td2.style.backgroundColor = 'red'
//    }else{
//     td2.style.backgroundColor = 'green'
//    }

//Using setAttribute we manage the state (styles) through js
if(priority == "High"){
    td2.setAttribute('id','high') 
   }else{
    td2.setAttribute('class','low') 
   }
   var td3 = document.createElement('td');
   td3.innerText = 'Delete'

   td3.addEventListener('click', function(){
    console.log(event.target.parentNode)
    event.target.parentNode.remove()
   })

   tr.append(td1,td2,td3);
   document.querySelector("tbody").append(tr)
}