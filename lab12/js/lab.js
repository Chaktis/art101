// Author: Erin Casey
// Date: 5/21/23

// determines what house you get into 
function sortingHat(name) {
  nameVal = name.length % 4;

  if (nameVal == 0) {
    return "Gryffindor"
  } 
  else if (nameVal == 1) {
    return "Ravenclaw"
  }
  else if (nameVal == 2) {
    return "Slytherin"
  }
  else if (nameVal == 3) {
    return "Hufflepuff"
  }
}


// get name from the input
var button = document.getElementById("my-button");
button.addEventListener('click', function() {
  var name = document.getElementById("my-name").value;
  document.getElementById("output").innerHTML = "<p>The sorting hat has sorted you into: " + sortingHat(name) + "</p>";
  });