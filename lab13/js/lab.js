// Author: Erin Casey
// Date:5/24/23


for (i=1; i<=200; i++) {
  var string = ""
  if (i % 3 == 0) {
    string += "Fizz";
  }

  if (i % 5 == 0) {
    string += "Buzz";
  }

  if (i % 7 == 0) {
    string += "Boom";
  }

  if (string != "") {
  string += "!<br>";
  }

  if (string == "") {
    $("#output").append("<div>" + i);
  } else {
    $("#output").append("<div>" + string);
  }
}



