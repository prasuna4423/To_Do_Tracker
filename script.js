{/* <li class="list-group-item">Cras justo odio</li>
<li class="list-group-item">Dapibus ac facilisis in</li>
<li class="list-group-item">Morbi leo risus</li>
<li class="list-group-item">Porta ac consectetur ac</li>
<li class="list-group-item">Vestibulum at eros</li> */}

var ulTag = document.getElementById('taskList');
//console.log(ulTag);

// var listItem = document.createElement('li');

// var textNode=document.createTextNode("Cras justo odio");
// listItem.appendChild(textNode);
// listItem.classList.add('list-group-item');  //adding list

// var ulTag = document.getElementById('taskList');
// ulTag.appendChild(listItem); 

var taskArray = [];
var listtoBeRemoved=null;
var value = '';


// fetch('https://jsonplaceholder.typicode.com/todos').
// then(response=>response.json()).
// then(data=>{
//     data.map((item)=>{
//         createTaskList(item.title)
//     });
// });

function addTask(){
    //console.log("called add Task");
    value = document.getElementById('inputTask').value;
    createTaskList(value);
    
}

function createTaskList(value){
    if(value.length && !taskArray.includes(value)){

        var listItem = document.createElement('li');
        var textNode=document.createTextNode(value);

        //taskArray.unshift(value);//adding to the front of array //used in fetch to add the input at front becoz we have more tasks
        taskArray.push(value);

        var icon = document.createElement('i');
        // <li><i class ="fa fa-trash-o"></i></li>
        //icon creation
        icon.classList.add('fa');
        icon.classList.add('fa-trash-o');
        icon.style.float='right';
        icon.addEventListener('click', (event)=>removeTask(event));
        //icon creation ends
        listItem.appendChild(textNode);
        listItem.appendChild(icon);
    
        listItem.classList.add('list-group-item');
        ulTag.appendChild(listItem); 
        document.getElementById('inputTask').value = '';
        // console.log(document.getElementById('inputTask'));
        // console.log(value);
        }
        else{
            alert("enter valid input");
        } 
}


function removeTask(event){
    document.getElementsByClassName('modal')[0].style.display='block';
   // .remove();
   listtoBeRemoved = event.target.parentNode;
    
}

function confirmDelete(){
    listtoBeRemoved  && listtoBeRemoved.remove();
    document.getElementsByClassName('modal')[0].style.display='none';
    taskArray = taskArray.filter(item=>item!==value);
    console.log();
}

function cancelDelete(){
    document.getElementsByClassName('modal')[0].style.display='none';

}

function onEnterAdd(event){
   //alert(event.KeyCode);
  // console.log(event.target);
    if(event.keyCode === 13){
        // addTask(event.target.value);
        addTask();
    }
}

