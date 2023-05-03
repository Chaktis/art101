// index.js - this lab is meant to learn how to use functions.
// Author: Erin Casey
// Date: 5/2/2023


// Functions

// Sorts a name
function nameSort() {
  var userName = window.prompt("Please tell me your name:");
  // splits string, sorts it, then joins it back together
  var nameSorted = userName.split("").sort().join("");
  return nameSorted;
}

document.writeln("I've fixed your name: ", nameSort(),"</br>")