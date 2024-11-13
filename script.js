function addTask() {
    var taskText = document.getElementById("input-box").value;

    if (taskText.trim() === "") {
        alert("Please enter a valid task.");
        return;
    }

    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.display = "none";
    checkbox.onclick = function () {
        toggleTask(checkbox);
    };

    var circleCheckbox = document.createElement("div");
    circleCheckbox.classList.add("circle-checkbox");
    circleCheckbox.onclick = function () {
        toggleTask(checkbox);
    };

    var deleteButton = document.createElement("span");
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML = "&times;"; 
    deleteButton.onclick = function () {
        deleteTask(li);
    };

    li.appendChild(circleCheckbox);
    li.appendChild(document.createTextNode(" " + taskText));
    li.appendChild(checkbox);
    li.appendChild(deleteButton);

    document.getElementById("list-container").appendChild(li);

    document.getElementById("input-box").value = "";
}

function toggleTask(checkbox) {
    var listItem = checkbox.parentElement;
    listItem.classList.toggle("Checked");
    checkbox.checked = !checkbox.checked;
    listItem.querySelector(".circle-checkbox").classList.toggle("checked", checkbox.checked);
}

function deleteTask(taskItem) {
    taskItem.remove();
}
