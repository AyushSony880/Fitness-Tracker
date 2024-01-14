const AddListSection = document.getElementById("AddListSection");
const workOutInputTxt = document.getElementById("workOutInputTxt");
const workOutInputMin = document.getElementById("workOutInputMin");
const AddBtn = document.getElementById("AddBtn");
const warning = document.querySelector(".warning");

let addedTask = [];

//Adding Task
AddBtn.addEventListener("click", () => {
  if (workOutInputTxt.value === "" || workOutInputMin.value === "") {
    warning.classList.add("showWaring");
  } else {
    const eachTask = {
      workOutType: `${workOutInputTxt.value}`,
      Duration: `${workOutInputMin.value}`,
    };
    addedTask.push(eachTask);
    warning.classList.remove("showWaring");
    const AddedEachDiv = document.createElement("div");
    AddedEachDiv.id = "AddedEachDiv";
    AddedEachDiv.innerHTML = `
    <p id="AddedWorkTxt">${eachTask.workOutType} - ${eachTask.Duration} min  </p>
    <div id="editDelBtn">
      <button id="edit" >Edit</button>
      <button id="delete">Delete</button>
      </div>`;
    console.log(addedTask);
    AddListSection.append(AddedEachDiv);
    workOutInputMin.value = "";
    workOutInputTxt.value = "";
  }
});

// editing And Deletion
AddListSection.addEventListener("click", (e) => {
  if (e.target.id === "delete") {
    let CurrentIndex = addedTask.findIndex(
      (obj) => obj.Duration === workOutInputMin.value
    );
    addedTask.splice(addedTask[CurrentIndex], 1);
    e.target.parentElement.parentElement.remove(); // Deleting
  }
  if (e.target.id === "edit") {
    // editing
    const val = e.target.parentElement.parentElement.childNodes[1].innerHTML;
    const arr = val.split("-");
    workOutInputMin.value = parseInt(arr[1]);
    workOutInputTxt.value = arr[0];
    let CurrentIndex = addedTask.findIndex(
      (obj) => obj.Duration === workOutInputMin.value
    );
    addedTask[CurrentIndex].workOutType = workOutInputTxt.value;
    addedTask[CurrentIndex].Duration = workOutInputMin.value;
    addedTask.splice(addedTask[CurrentIndex], 1);
    e.target.parentElement.parentElement.remove();
  }
});
