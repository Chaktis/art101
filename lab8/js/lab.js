// Author: Erin Casey
// Date:5/8/2023

//Variables
var numArray = [1, 2, 3, 4];

//Functions

function isEven(x){
  return (x % 2 == 0);
}

console.log("Is 9 even? ", isEven(9));
console.log("Is 10 even? ", isEven(10));

var result = numArray.map(isEven);
console.log("The evenness of numArray: ", result);

var resultsqrt = numArray.map(function(x){
  return x ** 0.5
})
console.log("The square root of numArray: ", resultsqrt);