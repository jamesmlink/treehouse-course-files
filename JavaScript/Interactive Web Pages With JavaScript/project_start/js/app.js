// problem: user interaction doesn't provide desired results
// solution: add interactivity


var taskInput = document.getElementById('new-task'); // new task
var addButton = document.getElementsByTagName('button')[0]; // first button on page
var incompleteTaskHolder = document.getElementById('incomplete-tasks'); // incomplete-tasks
var completedTaskHolder = document.getElementById('completed-tasks'); // completed-tasks

// new task li
var createNewTaskElement = function (taskString){
  // create list item
  var listItem = document.createElement("li");
  // input (checkbox)
  var checkBox = document.createElement("input"); // checkbox
  // label
  var label = document.createElement("label");
  // input (Text)
  var editInput  = document.createElement("input"); // text
  // button class edit
  var editButton  = document.createElement("button");
  // button class delete
  var deleteButton  = document.createElement("button");
  // each element modified

  checkBox.type = "checkbox";
  editInput.type = "text";
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  label.innerText = taskString;


  // each element appended
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}


// add a new task
var addTask = function(){
  console.log("add task");
  // create a new list item with text from #new-task
  var listItem = createNewTaskElement(taskInput.value);

  // append list item to incompleteTaskHolder
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem,taskCompleted);
  taskInput.value = "";
}


// edit existing task
var editTask = function () {
  console.log("edit task");

  var listItem = this.parentNode;
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  var containsClass = listItem.classList.contains("editMode");
  // see if class of parent .editMode
  if (containsClass){
    // switch from editMode
    // make label text become input value
    label.innerText = editInput.value;
  } else {
  // else
    // switch to .editMode
    // inputvalue becomes label's text
    editInput.value = label.innerText;
  }
  // toggle edit mode
  listItem.classList.toggle("editMode");
}


// delete task
var deleteTask = function () {
  console.log("delete task");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  // remove parent from ul
  ul.removeChild(listItem);
}


// mark task complete
var taskCompleted = function () {
  console.log("complete task");
  // append task list item to completed-tasks
  var listItem = this.parentNode;
  completedTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem,taskIncomplete);
}


// mark task incomplete
var taskIncomplete = function () {
  console.log("uncomplete task");
  // append task to #incomplete-tasks
  var listItem = this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem,taskCompleted);
}


var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
  console.log("bind task events");
  // select children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  // bind editTask to edit button
  editButton.onclick = editTask;
  // bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
  // bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
}

var ajaxRequest = function (){
  console.log("ajax request");
}
// set the click handler to the addtask function
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);

// cycle over incompleteTaskHolder ul list items
for (var i = 0; i < incompleteTaskHolder.children.length; i += 1) {
  // bind events to list items children (taskCompleted)
  bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}

// cycle over completeTaskHolder ul list items
for (var i = 0; i < completedTaskHolder.children.length; i += 1) {
  // bind events to list items children (taskIncomplete)
  bindTaskEvents(completedTaskHolder.children[i], taskIncomplete);
}
