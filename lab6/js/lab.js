// index.js - A few experiments with arrays and objects
// Author: Erin Casey
// Date:4/30/2023


// Define Variables
myTransport = ["bus", "car", "plane", "walk"];


// Create an object
myMainRide = {
  make: "Ford", 
  model: "Taurus",
  color: "Rusty", 
  year: 1995, age: function () {return 2023 - this.year}
}


// Output
document.writeln("Kinds of transportation I use: ", myTransport,"</br>");

document.writeln("My main ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");