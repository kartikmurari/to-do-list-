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
checkbox.addEventListener(

    "change",

    function() {

        li.classList.toggle("completed");
    }
);
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
    // Create Delete Button
    // =====================================

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("delete-btn");


    // =====================================
    // Complete Task Event
    // =====================================

    checkbox.addEventListener(

        "change",

        function() {

            li.classList.toggle("completed");
        }
    );


    // =====================================
    // Delete Task Event
    // =====================================
deleteBtn.addEventListener(

    "click",

    function() {

        // Add delete animation
        li.classList.add("delete-animation");

        // Remove task after animation
        setTimeout(function() {

            li.remove();

        }, 500);
    }
);
    // =====================================
    // Append Elements
    // =====================================

    li.appendChild(checkbox);

    li.appendChild(span);

    li.appendChild(deleteBtn);

    taskList.appendChild(li);


    // Clear Input
    taskInput.value = "";
}