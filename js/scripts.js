


$(document).ready(function() {


  $("#favThings").submit(function(event) {

    var answer1 = $("#favAnimal").val();
    var answer2 = $("#favColor").val();
    var answer3 = $("#favFood").val();

    var favoriteThings = [answer1, answer2, answer3];
    
    $("#Animal").text(favoriteThings[0]);
    $("#Color").text(favoriteThings[1]);
    $("#Food").text(favoriteThings[2]);


      event.preventDefault();

  });

















});
