function getCurrentDateAndTime() {
  const dateTime = new Date();
  return dateTime.toLocaleString();
}

const dateDisplay = document.getElementById("date-container");
dateDisplay.innerHTML = getCurrentDateAndTime();

let note = document.getElementById("note");
let noteItems = note.getElementsByClassName("ul").length;

//let noteItems = document.getElementById("noteItems")

let account = document.getElementById("account");
let accountOpen = document.getElementById("accountOpen");
let count = 0;

account.addEventListener("click", function () {
  count++;
  console.log(count);

  if (count % 2 == 1) {
    accountOpen.style.display = "block";
    account.style.color = "black"
    accountOpen.classList.add("slideOut");
  } else {
    account.style.color = "#edbf1a"
    accountOpen.classList.add("slide-in");
    accountOpen.style.display = "none";
    
  }
});

let sidebar = document.getElementById("sidebar");

let sidebarCount = 0;
sidebar.addEventListener("click",function (){
  sidebarCount++;
  if (sidebarCount % 2 == 1) {
    let leftSideID = document.getElementById("leftSide");
    leftSideID.style.display = "block";
  } else {
    let leftSideID = document.getElementById("leftSide");
    leftSideID.style.display = "none";
  }
})
//accountOpen();
//addEventListener("onclick", accountOpen());
