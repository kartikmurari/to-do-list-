// =====================================
// Select Elements
// =====================================

const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");

const taskList = document.getElementById("taskList");


// =====================================
// Add Task Function
// =====================================

function addTask() {

    // Get input value
    const taskText = taskInput.value.trim();

    // Prevent empty task
    if (taskText === "") {

        alert("Please enter a task");

        return;
    }

    // Create new list item
    const li = document.createElement("li");

    // Add task text
    li.textContent = taskText;

    // Append task to list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}


// =====================================
// Button Event Listener
// =====================================

addTaskBtn.addEventListener(
    "click",
    addTask
);


// =====================================
// Enter Key Event Listener
// =====================================

taskInput.addEventListener(
    "keypress",

    function(event) {

        if (event.key === "Enter") {

            addTask();
        }
    }
);