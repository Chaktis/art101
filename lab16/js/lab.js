// Author: Erin Casey
// Date: 6/5/2023
function comicObj () {
  $.ajax({
    url: "https://xkcd.com/info.0.json",
    data:{},
    type: "GET",
    dataType: "json",
    success: function(data){
      $("#output").html("<h3>" + data.title + "</h3>");
      $("#output").append("<img src=" + data.img + ">");
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown);
    }
  })
}
$("#activate").click(comicObj);