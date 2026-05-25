// =====================================
// Select Elements
// =====================================

const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");

const taskList = document.getElementById("taskList");


// =====================================
// Add Task Function
// =====================================

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

    // Create list item
    const li = document.createElement("li");

    // Add animation class
    li.classList.add("task-item");


    // =====================================
    // Create Checkbox
    // =====================================

    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";


    // =====================================
    // Create Task Text
    // =====================================

    const span = document.createElement("span");

    span.textContent = taskText;


    // =====================================
    // Checkbox Event
    // =====================================

    checkbox.addEventListener(

        "change",

        function() {

            li.classList.toggle("completed");
        }
    );


    // =====================================
    // Append Elements
    // =====================================

    li.appendChild(checkbox);

    li.appendChild(span);

    taskList.appendChild(li);


    // Clear input
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