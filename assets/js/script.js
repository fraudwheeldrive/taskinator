var taskIdCounter = 0;
var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var taskFormHandler = function(event) { 
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // package up data as an object
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput,
  };

  // send it as an argument to createTaskE1
  createTaskE1(taskDataObj);
  
  
}; 

var createTaskE1 = function(taskDataOBJ) {
  // create list item
var listItemEl = document.createElement("li");
listItemEl.className = "task-item";

//ad task id as a custom attribute
listItemEl.setAttribute("data-task-id", taskIdCounter);


// create div to hold task info and add to list item
var taskInfoEl = document.createElement("div");
// give it a class name
taskInfoEl.className = "task-info";
// add HTML content to div
taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataOBJ.name + "</h3><span class='task-type'>" + taskDataOBJ.type + "</span>";


var taskActionsEl = createTaskActions(taskIdCounter);

listItemEl.appendChild(taskInfoEl);

// add entire list item to list
tasksToDoEl.appendChild(listItemEl);

// increase task counter for next unique ID 
taskIdCounter++;
};

var createTaskActions = function(taskId) {

var actionContainerEl = document.createElement("div");
actionContainerEl.className = "task-actions";

// create edit button
var editButtonEl = document.createElement("button");
editButtonEl.textContent = "Edit";
editButtonEl.className = "btn edit-btn";
editButtonEl.setAttribute("data-task-id", taskId);

actionContainerEl.appendChild(editButtonEl);

// create delete button
var deleteButtonEl = document.createElement("button");
deleteButtonEl.textContent = "Delete";
deleteButtonEl.className = "btn delete-btn";
deleteButtonEl.setAttribute("data-task-id", taskId);

actionContainerEl.appendChild(deleteButtonEl);

var statusSelectEl = document.createElement("select");
statusSelectEl.className = "select-status";
statusSelectEl.setAttribute("name", "status-change");
statusSelectEl.setAttribute("data-task-id", taskId);

actionContainerEl.appendChild(statusSelectEl);

var statusChoices = ["To Do", "In Progress", "Completed"];
for (var i =0; i < statusChoices.length; i++) {
  // create option element
var statusOptionE1 = document.createElement("option");
statusOptionE1.textContent = statusChoices[i];
statusOptionE1.setAttribute("value", statusChoices[i]);

// append to select
statusSelectEl.appendChild(statusOptionE1);
}

return actionContainerEl;

};

  formEl.addEventListener("submit", taskFormHandler);
