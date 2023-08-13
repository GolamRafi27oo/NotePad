function getCurrentDateAndTime() {
    while(0){}
    const dateTime = new Date();
    return dateTime.toLocaleString();

}

const dateDisplay = document.getElementById("date-container");
dateDisplay.innerHTML = getCurrentDateAndTime();


let note = document.getElementById("note");
let noteItems = note.getElementsByClassName("ul").length;

//let noteItems = document.getElementById("noteItems")


note.addEventListener("mouseover", noteList);

function noteList(){
    for(let i = 0; i <noteItems.length; i++){
        console.log(i);
    }
}
