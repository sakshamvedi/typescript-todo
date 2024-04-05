var title = [];
var description = [];
var userInput = document.querySelector(".user-input");
var parentElement = document.querySelector(".list");
function addingTask(task) {
    title.push(userInput.value);
    userInput.value = "";
    showTask();
}
function updateTask(task) {
    title.forEach(function (data, id) {
        if (id == task.id) {
            data = "";
        }
    });
    description.forEach(function (data, id) {
        if (id == task.id) {
            data = "";
        }
    });
}
function deleteTask(task) {
    title.forEach(function (data, id) {
        if (id == task.id) {
            data = '';
        }
    });
    description.forEach(function (data, id) {
        if (id == task.id) {
            data = '';
        }
    });
}
function showTask() {
    parentElement.innerHTML = "";
    title.forEach(function (data) {
        var div = document.createElement("div");
        div.textContent = data.toString();
        parentElement.appendChild(div);
    });
}
