function getCurrentDateAndTime() {
  while (0) {}
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
  } else {
    accountOpen.style.display = "none";
  }
});

//accountOpen();
//addEventListener("onclick", accountOpen());
