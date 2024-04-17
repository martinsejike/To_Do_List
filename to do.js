const inputBox = document.getElementById("input-1");
const listContainer = document.querySelector(".item");

function addTask() {
  if (inputBox.value === "") {
    alert("You need to add a task first.");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.classList.toggle("checked");
    saveData();
  }
});
function saveData() {
  localStorage.setItem("data", item.innerText);
}
saveData();
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
