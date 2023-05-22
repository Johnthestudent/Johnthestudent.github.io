//The player starts with no equipment.
var hasbattergem = false;
var haskey = false;
var hasknife = false;
var hasletter = false;
var haswrench = false;

//Info related to the game
$("#info").on("click", function () {
  alert("This game is made for educational and entertainment purposes only!");
  alert("Aveomachine series is a parody of Submachine!");
  alert("Submachine game series belongs to Mateusz Skutnik!");
  alert("For further information, check out the README file!");
  alert("Click on the 'Start game' button to start the game!");
});

//If the player wishes to start the game
$("#newgame").on("click", function () {
  $("#newgame").remove();
  $("#info").remove();
  $("#background").prop("src", "Image resources/ambackground01.png");
  $("#moveleft").css("opacity", "1.0");
  $("#moveright").css("opacity", "1.0");
});

//The movement to right
$("#moveright").on("click", function () {
  if ($("#background").attr("src") == "Image resources/ambackground01.png") {
    $("#background").prop("src", "Image resources/ambackground02.png");
  } else if (
    $("#background").attr("src") == "Image resources/ambackground02.png"
  ) {
    $("#background").prop("src", "Image resources/ambackground03.png");
  } else if (
    $("#background").attr("src") == "Image resources/ambackground03.png"
  ) {
    $("#background").prop("src", "Image resources/ambackground04.png");
  } else if (
    $("#background").attr("src") == "Image resources/ambackground04.png"
  ) {
    $("#background").prop("src", "Image resources/ambackground01.png");
  } else if (
    $("#background").attr("src") == "Image resources/ambackground06.png"
  ) {
    $("#background").prop("src", "Image resources/ambackground03.png");
  }
  if ($("#background").attr("src") == "Image resources/ambackground07.png") {
    $("#background").prop("src", "Image resources/ambackground02.png");
  }
});

//The movement to left
$("#moveleft").on("click", function () {
  if ($("#background").attr("src") == "Image resources/ambackground01.png") {
    $("#background").prop("src", "Image resources/ambackground04.png");
  } else if (
    $("#background").attr("src") == "Image resources/ambackground02.png"
  ) {
    $("#background").prop("src", "Image resources/ambackground01.png");
  } else if (
    $("#background").attr("src") == "Image resources/ambackground03.png"
  ) {
    $("#background").prop("src", "Image resources/ambackground02.png");
  } else if (
    $("#background").attr("src") == "Image resources/ambackground04.png"
  ) {
    $("#background").prop("src", "Image resources/ambackground03.png");
  } else if (
    $("#background").attr("src") == "Image resources/ambackground06.png"
  ) {
    $("#background").prop("src", "Image resources/ambackground01.png");
  }
  if ($("#background").attr("src") == "Image resources/ambackground07.png") {
    $("#background").prop("src", "Image resources/ambackground04.png");
  }
});

//Clicking on the proper room segment
$("#background").on("click", function () {
  //Starter situation
  if (
    $("#background").attr("src") == "Image resources/ambackground01.png" &&
    haswrench == false
  ) {
    alert("Tool is needed to open this stuck door!");
  } else if (
    $("#background").attr("src") == "Image resources/ambackground01.png" &&
    haswrench == true
  ) {
    $("#wrench").remove();
    $("#background").prop("src", "Image resources/ambackground07.png");
  }

  //Close to escape
  if ($("#background").attr("src") == "Image resources/ambackground07.png") {
    $("#background").prop("src", "Image resources/ambackground08.png");
  }
  if (
    $("#background").attr("src") == "Image resources/ambackground08.png" &&
    haskey == false
  ) {
    alert("Key is needed!");
    $("#background").prop("src", "Image resources/ambackground07.png");
  } else if (
    $("#background").attr("src") == "Image resources/ambackground08.png" &&
    haskey == true
  ) {
    $("#key").remove();
    $("#moveleft").remove();
    $("#moveright").remove();
    $("#background").prop("src", "Image resources/closingimage.png");
  }

  //Scenario around the metal cabin
  if ($("#background").attr("src") == "Image resources/ambackground02.png") {
    $("#background").prop("src", "Image resources/ambackground06.png");
    hasknife = true;
    $("#knife").prop("src", "Tools/Knife.png");
    $("#knife").css("opacity", "1.0");

    hasbattergem = true;
    $("#gem").prop("src", "Tools/Battery gem.png");
    $("#gem").css("opacity", "1.0");
  }

  //Scenario around the window
  if ($("#background").attr("src") == "Image resources/ambackground03.png") {
    $("#background").prop("src", "Image resources/ambackground05.png");
  } else if (
    $("#background").attr("src") == "Image resources/ambackground05.png"
  ) {
    haskey = true;
    $("#key").prop("src", "Tools/Key.png");
    $("#key").css("opacity", "1.0");

    $("#background").prop("src", "Image resources/ambackground03.png");
  }

  //Scenario around the boxes
  if (
    $("#background").attr("src") == "Image resources/ambackground04.png" &&
    hasknife == false
  ) {
    alert("Sharp tool is needed to open them!");
  } else if (
    $("#background").attr("src") == "Image resources/ambackground04.png" &&
    hasknife == true
  ) {
    hasletter = true;
    $("#letter").prop("src", "Tools/Letter.png");
    $("#letter").css("opacity", "1.0");

    haswrench = true;
    $("#wrench").prop("src", "Tools/Wrench.png");
    $("#wrench").css("opacity", "1.0");

    $("#knife").remove();
  }
});

//Scenario about the letter
$("#letter").on("click", function () {
  if (hasletter == true) {
    alert("I am glad that I could save you!");
    alert("You had to be put into this pantry for your safety!");
    alert("Grab the battery gem and get out at the perfect time!");
  }
});
