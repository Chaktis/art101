// Author: Erin Casey
// Date:5/17/23

$('#challenges').append("<button id=buttonOne>This is a button!</button>");
$('#problems').append("<button id=buttonTwo>This is another button!</button>");
$('#results').append("<button id=buttonThree>Wow, a button!</button>");

$("#buttonOne").click(function(){
  $("#challenges").toggleClass("special");
});

$("#buttonTwo").click(function(){
  $("#problems").toggleClass("special");
});

$("#buttonThree").click(function(){
  $("#results").toggleClass("special");
});