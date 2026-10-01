function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Vui lòng nhập nội dung công việc!");
        return;
    }

    var ul = document.getElementById("taskList");
    var li = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function () {
        if (this.checked) {
            span.style.textDecoration = "line-through";
            span.style.color = "#aaa";
        } else {
            span.style.textDecoration = "none";
            span.style.color = "#333";
        }
    };

    var span = document.createElement("span");
    span.innerText = taskText;

    li.appendChild(checkbox);
    li.appendChild(span);
    ul.appendChild(li);

    taskInput.value = "";
}