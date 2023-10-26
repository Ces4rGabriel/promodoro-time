function addtasks(){
    let inputValue = document.querySelector('#new-task').value;
    let tasksspace = document.querySelector('#tasks');
    let tasks =  document.createElement('li');
    tasks.textContent = inputValue;

    let div = document.createElement('div');
    div.classList.add('task-actions');
    

    //create checkbox
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'task');


    div.appendChild(checkbox);
    div.appendChild(tasks);
    tasksspace.appendChild(div);

    checkbox.addEventListener('click', function(){
        //quero pegar o pai do check box e verificar um filho li dele para colocar como style text-decoration: line-through
        let parent = this.parentNode;
        let task = parent.querySelector('li');
        if(this.checked){
            task.style.textDecoration = "line-through";
        }
        else{
            task.style.textDecoration = "none";
        }
    });

    //limpando o input
    document.querySelector('#new-task').value = "";
}