// class Users {
//     constructor(a, b) {
//         this.a = a; 
//         this.b = b; 
//     }
//     printMe() {
//         console.log(`Hello ${this.a}`);
//     }
// }

// const userOne = new Users("Ajay", 20);
// userOne.printMe();  
document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}