// Author: Erin Casey
// Date: 5/31/23
function yesNo () {
  $.ajax({
    url: "https://yesno.wtf//api",
    type: "GET",
    data: {}, 
  })
  .done(function(data) {
      $("#output").html("<h3>" + data.answer + "</h3>");
      $("#output").append("<img src=" + data.image + ">");
  })
}
$("#activate").click(yesNo);