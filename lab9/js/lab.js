// Author: Erin Casey
// Date: 5/10/2023

// variables
var outputEl = document.getElementById("output");

var new1El = document.createElement("p");
new1El.innerHTML = "This text has been changed!";

var new2El = document.createElement("p");
new2El.innerHTML = "This text is different!";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);


// changed elements
new1El.style.fontSize = "30px";
new2El.style.color = "purple";

// yes
