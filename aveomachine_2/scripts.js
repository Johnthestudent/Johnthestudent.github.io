var hasletter = false;
var hasred = false;
var hasnote = false;
var hasiron = false;
var hasfan = false;
var hasgreen = false;
var redplaced = false;
var greenplaced = false;
var blueplaced = false;
var fanplaced = false;
var redbuttonclicked = 0;
var greenbuttonclicked = 0;
var yellowbuttonclicked = 0;
var lightbluebuttonclicked = 0;
var lightgreenbuttonclicked = 0;
var purplebuttonclicked = 0;
var orangebuttonclicked = 0;
var brownbuttonclicked = 0;
var bluebuttonclicked = 0;

//Info related to the game
$("#info").on("click", function () {
  alert(
    "This game is made for educational and entertainment purposes only!\nAveomachine series is a parody of Submachine!\nSubmachine game series belongs to Mateusz Skutnik!\n\nFor further information, check out the README file!\nClick on the 'Start game' button to start the game!\nUse your mouse to move around and collect objects!"
  );
});

//If the player wishes to see the intro text
$("#intro").on("click", function () {
  if ($("#background").attr("src") == "Image resources/IntroImage.png") {
    $("#background").prop("src", "Image resources/Intropartimage.png");
    this.innerHTML = "Main menu";
    $("#newgame").css("opacity", "0.0");
    $("#info").css("opacity", "0.0");
  } else if (
    $("#background").attr("src") == "Image resources/Intropartimage.png"
  ) {
    $("#background").prop("src", "Image resources/IntroImage.png");
    this.innerHTML = "Intro";
    $("#newgame").css("opacity", "1.0");
    $("#info").css("opacity", "1.0");
  }
});

//If the player wishes to start the game
$("#newgame").on("click", function () {
  $("#newgame").remove();
  $("#info").remove();
  $("#intro").remove();
  $("#background").prop("src", "Image resources/Ambackground01.png");
  $("#moveleft").css("opacity", "1.0");
  $("#moveright").css("opacity", "1.0");
  $("#gem").css("opacity", "1.0");
});

function showIt(event) {
  var x = event.screenX;
  var y = event.screenY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  console.log(coords);

  /*Numeric values of the door*/
  /*x 305, 535*/
  /*y 225, 600*/
  if ($("#background").attr("src") == "Image resources/Ambackground01.png") {
    if (x >= 305 && x <= 535 && y >= 225 && y <= 600) {
      alert("The safety laser lock must be turned off!");
    }
  }
  if ($("#background").attr("src") == "Image resources/Ambackground02.png") {
    if (x >= 305 && x <= 535 && y >= 225 && y <= 600) {
      $("#background").prop("src", "Image resources/Ambackground03.png");
    }
  }

  /*Numeric values of the metal container*/
  /*x 165, 610*/
  /*y 395, 510*/
  if ($("#background").attr("src") == "Image resources/Ambackground03.png") {
    if (x >= 165 && x <= 610 && y >= 395 && y <= 510) {
      hasletter = true;
      $("#letter").prop("src", "Tools/Letter.png");
      $("#letter").css("opacity", "1.0");
    } else if (
      x >= 165 &&
      x <= 610 &&
      y >= 395 &&
      y <= 510 &&
      hasletter == true
    ) {
      alert("Nothing else could be found in that container!");
    }
  }

  /*Numeric values of the crew room*/
  /*x 310, 575*/
  /*y 220, 600*/
  /*and*/
  /*Numeric values of the description of the crew room*/
  /*x 210, 290*/
  /*y 320, 405*/
  if ($("#background").attr("src") == "Image resources/Ambackground04.png") {
    if (x >= 310 && x <= 575 && y >= 220 && y <= 600) {
      $("#background").prop("src", "Image resources/Ambackground05.png");
    } else if (x >= 210 && x <= 290 && y >= 320 && y <= 405) {
      alert("Crew room");
    }
  }

  /*Numeric values for some objects in the crew room*/
  /*Wardrobe*/
  /*x 100, 200*/
  /*y 210, 710*/

  /*and*/
  /*box #1*/
  /*x 670, 720*/
  /*y 300, 375*/

  /*and*/
  /*box #2*/
  /*x 670, 720*/
  /*y 440, 535*/

  /*and*/
  /*box #3*/
  /*x 660, 715*/
  /*y 560, 690*/
  if ($("#background").attr("src") == "Image resources/Ambackground05.png") {
    if (x >= 100 && x <= 200 && y >= 210 && y <= 710) {
      alert("Nothing special in!");
    } else if (x >= 670 && x <= 720 && y >= 300 && y <= 375) {
      hasred = true;
      $("#redfuse").prop("src", "Tools/Red fuse.png");
      $("#redfuse").css("opacity", "1.0");
    } else if (x >= 670 && x <= 720 && y >= 440 && y <= 535) {
      hasnote = true;
      $("#littlenote").prop("src", "Tools/Little note.png");
      $("#littlenote").css("opacity", "1.0");
    } else if (x >= 660 && x <= 715 && y >= 560 && y <= 690) {
      hasiron = true;
      $("#ironbar").prop("src", "Tools/Crowbar.png");
      $("#ironbar").css("opacity", "1.0");
    }
  }

  /*Way of leaving the crew room*/
  /*x 345, 500*/
  /*y 690, 715*/
  if ($("#background").attr("src") == "Image resources/Ambackground05.png") {
    if (x >= 345 && x <= 500 && y >= 690 && y <= 715) {
      $("#background").prop("src", "Image resources/Ambackground04.png");
    }
  }

  /*Numeric values of the engine room*/
  /*x 265, 585*/
  /*y 240, 600*/
  /*and*/
  /*Numeric values of the description of the engine room*/
  /*x 130, 210*/
  /*y 340, 425*/
  if ($("#background").attr("src") == "Image resources/Ambackground06.png") {
    if (x >= 265 && x <= 585 && y >= 240 && y <= 600) {
      $("#background").prop("src", "Image resources/Ambackground07.png");
    } else if (x >= 130 && x <= 210 && y >= 340 && y <= 425) {
      alert("Engine room");
    }
  }

  /*Numeric values of the engine*/
  /*Fan*/
  /*x 175, 385*/
  /*y 320, 510*/

  /*and*/
  /*Red fuse*/
  /*x 115, 125*/
  /*y 325, 380*/

  /*and*/
  /*Blue fuse*/
  /*x 115, 125*/
  /*y 435, 485*/

  /*and*/
  /*Green fuse*/
  /*x 115, 125*/
  /*y 530, 580*/
  if ($("#background").attr("src") == "Image resources/Ambackground08.png") {
    if (x >= 175 && x <= 385 && y >= 380 && y <= 590 && hasfan == false) {
      alert("Fan is needed!");
    } else if (x >= 175 && x <= 385 && y >= 380 && y <= 590 && hasfan == true) {
      $("#background").prop("src", "Image resources/Ambackground09.png");
      $("#bigfan").remove();
      fanplaced = true;
    }
    if (
      x >= 115 &&
      x <= 125 &&
      y >= 325 &&
      y <= 380 &&
      hasfan == false &&
      hasred == true
    ) {
      alert("Put the fan into first!");
    }
    if (
      x >= 115 &&
      x <= 125 &&
      y >= 435 &&
      y <= 485 &&
      hasfan == false &&
      hasblue == true
    ) {
      alert("Put the fan into first!");
    }
    if (
      x >= 115 &&
      x <= 125 &&
      y >= 530 &&
      y <= 580 &&
      hasfan == false &&
      hasgreen == true
    ) {
      alert("Put the fan into first!");
    }
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground09.png"
  ) {
    if (x >= 115 && x <= 125 && y >= 325 && y <= 380 && hasred == true) {
      $("#background").prop("src", "Image resources/Ambackground10.png");
      $("#redfuse").remove();
      redplaced = true;
    }
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground10.png"
  ) {
    if (x >= 115 && x <= 125 && y >= 435 && y <= 485 && hasblue == true) {
      $("#background").prop("src", "Image resources/Ambackground11.png");
      $("#bluefuse").remove();
      blueplaced = true;
    }
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground11.png"
  ) {
    if (x >= 115 && x <= 125 && y >= 530 && y <= 580 && hasgreen == true) {
      $("#background").prop("src", "Image resources/Ambackground12.png");
      $("#greenfuse").remove();
      greenplaced = true;
      alert("The engine is on! Leave the engine room!");
    }
  }

  /*Numeric values of the safe*/
  /*x 570, 770*/
  /*y 380, 590*/
  /*and*/
  /*Numeric values of the ladder*/
  /*x 320, 490*/
  /*y 250, 510*/
  if ($("#background").attr("src") == "Image resources/Ambackground13.png") {
    if (x >= 570 && x <= 770 && y >= 380 && y <= 590 && hasiron == true) {
      $("#ironbar").remove();
      hasfan = true;
      $("#bigfan").prop("src", "Tools/Fan.png");
      $("#bigfan").css("opacity", "1.0");

      hasgreen = true;
      $("#greenfuse").prop("src", "Tools/Green fuse.png");
      $("#greenfuse").css("opacity", "1.0");

      hasblue = true;
      $("#bluefuse").prop("src", "Tools/Blue fuse.png");
      $("#bluefuse").css("opacity", "1.0");
    } else if (x >= 320 && x <= 490 && y >= 250 && y <= 510) {
      $("#background").prop("src", "Image resources/Ambackground14.png");
    }
  }

  /*Numeric values of the hole to the ladder*/
  /*x 265, 545*/
  /*y 600, 640*/
  if ($("#background").attr("src") == "Image resources/Ambackground14.png") {
    if (x >= 265 && x <= 545 && y >= 600 && y <= 640) {
      $("#background").prop("src", "Image resources/Ambackground13.png");
    }
  }

  /*Numeric values of the navigation room*/
  /*x 285, 565*/
  /*y 225, 595*/
  /*and*/
  /*Numeric values of the description of the navigation room*/
  /*x 610, 685*/
  /*y 360, 440*/
  if ($("#background").attr("src") == "Image resources/Ambackground15.png") {
    if (x >= 610 && x <= 685 && y >= 360 && y <= 440) {
      alert("Navigation room");
    }
    if (x >= 285 && x <= 565 && y >= 225 && y <= 595 && greenplaced == false) {
      alert("The engine has to be started!");
    } else if (
      x >= 285 &&
      x <= 565 &&
      y >= 225 &&
      y <= 595 &&
      greenplaced == true &&
      greenbuttonclicked != 1 &&
      yellowbuttonclicked != 2 &&
      redbuttonclicked != 3
    ) {
      alert(
        "Hit in the password by using the colored buttons! Password length: 3"
      );
    }

    /*Numeric values of the colored buttons*/
    /*Red*/
    /*x 105, 130*/
    /*y 340, 370*/

    /*Yellow*/
    /*x 160, 180*/
    /*y 340, 370*/

    /*Light green*/
    /*x 205, 225*/
    /*y 340, 370*/

    /*Light blue*/
    /*x 105, 130*/
    /*y 400, 425*/

    /*Purple*/
    /*x 160, 180*/
    /*y 400, 425*/

    /*Orange*/
    /*x 205, 225*/
    /*y 400, 425*/

    /*Brown*/
    /*x 105, 130*/
    /*y 450, 475*/

    /*Blue*/
    /*x 160, 180*/
    /*y 450, 475*/

    /*Green*/
    /*x 205, 225*/
    /*y 450, 475*/

    //buttons
    if (x >= 105 && x <= 130 && y >= 340 && y <= 370 && greenplaced == true) {
      //red button
      redbuttonclicked = 1;
      if (greenbuttonclicked == 1 && yellowbuttonclicked == 2) {
        redbuttonclicked = 3;
      }
    } else if (
      x >= 160 &&
      x <= 180 &&
      y >= 340 &&
      y <= 370 &&
      greenplaced == true
    ) {
      //yellow button
      yellowbuttonclicked = 1;
      if (greenbuttonclicked == 1) {
        yellowbuttonclicked = 2;
      }
    } else if (
      x >= 205 &&
      x <= 225 &&
      y >= 340 &&
      y <= 370 &&
      greenplaced == true
    ) {
      //light green button
      lightgreenbuttonclicked = 1;
    } else if (
      x >= 105 &&
      x <= 130 &&
      y >= 400 &&
      y <= 425 &&
      greenplaced == true
    ) {
      //light blue button
      lightbluebuttonclicked = 1;
    } else if (
      x >= 160 &&
      x <= 180 &&
      y >= 400 &&
      y <= 425 &&
      greenplaced == true
    ) {
      //purple button
      purplebuttonclicked = 1;
    } else if (
      x >= 205 &&
      x <= 225 &&
      y >= 400 &&
      y <= 425 &&
      greenplaced == true
    ) {
      //orange button
      orangebuttonclicked = 1;
    } else if (
      x >= 105 &&
      x <= 130 &&
      y >= 450 &&
      y <= 475 &&
      greenplaced == true
    ) {
      //brown button
      brownbuttonclicked = 1;
    } else if (
      x >= 160 &&
      x <= 180 &&
      y >= 450 &&
      y <= 475 &&
      greenplaced == true
    ) {
      //blue button
      bluebuttonclicked = 1;
    } else if (
      x >= 205 &&
      x <= 225 &&
      y >= 450 &&
      y <= 475 &&
      greenplaced == true
    ) {
      //green button
      greenbuttonclicked = 1;
      if (redbuttonclicked == 1 && yellowbuttonclicked == 1) {
        greenbuttonclicked = 0;
      }
    } else if (
      x >= 285 &&
      x <= 565 &&
      y >= 225 &&
      y <= 595 &&
      greenbuttonclicked == 1 &&
      yellowbuttonclicked == 2 &&
      redbuttonclicked == 3
    ) {
      $("#moveright").remove();
      $("#moveleft").remove();
      $("#background").prop("src", "Image resources/ClosingImage.png");
    }
  }
}

//The movement to right
$("#moveright").on("click", function () {
  if ($("#background").attr("src") == "Image resources/Ambackground01.png") {
    alert("I have to enter that ship!");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground02.png"
  ) {
    alert("I have to enter that ship!");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground03.png"
  ) {
    $("#background").prop("src", "Image resources/Ambackground04.png");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground04.png"
  ) {
    $("#background").prop("src", "Image resources/Ambackground06.png");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground06.png"
  ) {
    $("#background").prop("src", "Image resources/Ambackground13.png");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground13.png"
  ) {
    alert("Ouch! Wall!");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground07.png"
  ) {
    $("#background").prop("src", "Image resources/Ambackground06.png");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground08.png"
  ) {
    $("#background").prop("src", "Image resources/Ambackground07.png");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground14.png"
  ) {
    alert("Ouch! Wall!");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground15.png"
  ) {
    $("#background").prop("src", "Image resources/Ambackground14.png");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground09.png"
  ) {
    alert("The engine is not on yet!");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground10.png"
  ) {
    alert("The engine is not on yet!");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground11.png"
  ) {
    alert("The engine is not on yet!");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground12.png"
  ) {
    $("#background").prop("src", "Image resources/Ambackground07.png");
  }
});

//The movement to left
$("#moveleft").on("click", function () {
  if ($("#background").attr("src") == "Image resources/Ambackground01.png") {
    alert("I have to enter that ship!");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground02.png"
  ) {
    alert("I have to enter that ship!");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground03.png"
  ) {
    alert("No leave of the ship!");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground04.png"
  ) {
    $("#background").prop("src", "Image resources/Ambackground03.png");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground06.png"
  ) {
    $("#background").prop("src", "Image resources/Ambackground04.png");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground13.png"
  ) {
    $("#background").prop("src", "Image resources/Ambackground06.png");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground07.png" &&
    fanplaced == false
  ) {
    $("#background").prop("src", "Image resources/Ambackground08.png");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground07.png" &&
    fanplaced == true
  ) {
    $("#background").prop("src", "Image resources/Ambackground12.png");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground08.png"
  ) {
    alert("Ouch! Wall!");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground14.png"
  ) {
    $("#background").prop("src", "Image resources/Ambackground15.png");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground15.png"
  ) {
    alert("Ouch! Wall!");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground09.png"
  ) {
    alert("Ouch! Wall!");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground10.png"
  ) {
    alert("Ouch! Wall!");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground11.png"
  ) {
    alert("Ouch! Wall!");
  } else if (
    $("#background").attr("src") == "Image resources/Ambackground12.png"
  ) {
    alert("Ouch! Wall!");
  }
});

//Scenario around the battery gem
$("#gem").on("click", function () {
  if ($("#background").attr("src") == "Image resources/Ambackground01.png") {
    $("#background").prop("src", "Image resources/Ambackground02.png");
    $("#gem").remove();
    alert("The way is free for a while!");
  }
});

//Scenario about the letter
$("#letter").on("click", function () {
  if (hasletter == true) {
    alert(
      "Whoever among the good people read this: start the engine of the ship!"
    );
  }
});

//Scenario about the little note
$("#littlenote").on("click", function () {
  if (hasnote == true) {
    alert(
      "Password to the navigation room: inverse of the colors of the fuses!"
    );
  }
});
