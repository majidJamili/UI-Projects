
// var tasksColors = document.getElementsByClassName('task-type-success'); 


// tasksColors.forEach(task => {
//         task.style.background = 'red'; 

// });

document.body.style.backgroundColor = "red";



function dragStart(e){
    this.style.opacity = '0.4';
}

function dragEnd(e){
    this.style.opacity ='1'; 
}

let tasks = document.querySelectorAll('.container .draggable'); 
console.log(tasks); 

tasks.forEach( task => {
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);    
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}