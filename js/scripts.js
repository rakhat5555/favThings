


$(document).ready(function() {


  $("#favThings").submit(function(event) {

    var answer1 = $("#favAnimal").val();
    var answer2 = $("#favColor").val();
    var answer3 = $("#favFood").val();

    var test = "test"


    var favoriteThings = [answer1, answer2, answer3];
    console.log(favoriteThings);



    var newArray = favoriteThings.slice(0,2);

    newArray.push("cat", "rollercoasters");

    console.log(newArray);

    $("#Animal").text(favoriteThings[0]);
    $("#Color").text(favoriteThings[1]);
    $("#Food").text(favoriteThings[2]);


      event.preventDefault();

  });

















});
