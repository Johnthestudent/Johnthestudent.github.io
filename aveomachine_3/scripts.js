//helping variables
var hasaxe = false;
var haskey = false;
var hasfragment1 = false;
var hasfragment2 = false;
var hasfragment3 = false;
var hasbowl = false;
var haswater = false;
var hasnote = false;
var hasscrewdriver = false;
var deactivatedbomb = false;

//Info related to the game
$("#gameinfo").on("click", function(){
    alert("This game is made for educational and entertainment purposes only!\nAveomachine series is a parody of Submachine!\nSubmachine game series belongs to Mateusz Skutnik!\n\nFor further information, check out the README file!\nClick on the 'Start game' button to start the game!\nUse your mouse to move around and collect objects!");
})

//start of the game
$("#gamestarter").on("click", function(){
    $("#majorimage").attr("src", "Image resources/Starterimage01.png");
    $("#gameinfo").remove();
    $("#gamestarter").remove();
    var onthesea = new Audio('Sound effects/Sea_Noise.mp3');
    onthesea.play();
})

//If the player clicks on specific values of the base image.
$("#majorimage").on("click", function(event)
{
    var x = event.screenX;
    var y = event.screenY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    console.log(coords);
    //The player can choose between 2 directions
    if($("#majorimage").attr("src") == "Image resources/Choserimage01.png")
    {
        //Left way
        if(x >= 345 && x <= 420 && y >= 385 && y <= 425)
        {
            $("#majorimage").attr("src", "Image resources/Choserimage02.png");
        }
        //Right way
        else if(x >= 490 && x <= 550 && y >= 385 && y <= 425)
        {
            $("#majorimage").attr("src", "Image resources/Choserimage05.png");
        }
    }
    else if($("#majorimage").attr("src") == "Image resources/Choserimage02.png")
    {
        if(x >= 260 && x <= 540 && y >= 345 && y <= 630)
        {
            $("#majorimage").attr("src", "Image resources/Choserimage03.png");
        }
    }
    else if($("#majorimage").attr("src") == "Image resources/Choserimage03.png")
    {
        if(x >= 85 && x <= 680 && y >= 200 && y <= 570)
        {
            $("#majorimage").attr("src", "Image resources/Choserimage04.png");
        }
    }
    else if($("#majorimage").attr("src") == "Image resources/Choserimage04.png")
    {
        //First game over event
        if(x >= 85 && x <= 680 && y >= 200 && y <= 570)
        {
            var beast = new Audio('Sound effects/Roaring_Tiger.mp3');
            beast.play();
            $("#majorimage").attr("src", "Image resources/Gameoverimage01.png");
        }
    }
    else if($("#majorimage").attr("src") == "Image resources/Choserimage05.png")
    {
        //The weekend house
        if(x >= 330 && x <= 500 && y >= 230 && y <= 320)
        {
            $("#majorimage").attr("src", "Image resources/Choserimage06.png");
        }
    }
    //Getting closer to the house
    else if($("#majorimage").attr("src") == "Image resources/Choserimage06.png")
    {
        /*Numeric values of the house's door*/
        /*x: 190, 235*/
        /*y: 285, 350*/
        if(x >= 190 && x <= 235 && y >= 285 && y <= 350)
        {
            $("#majorimage").attr("src", "Image resources/Dooroutside.png");
        }
    }
    //Entering the house
    else if($("#majorimage").attr("src") == "Image resources/Dooroutside.png")
    {
        /*Numeric values of the house's door*/
        /*x: 290, 595*/
        /*y: 245, 510*/
        if(x >= 290 && x <= 595 && y >= 245 && y <= 510)
        {
            $("#majorimage").attr("src", "Image resources/Doorinside.png");
        }
    }
    //Leaving the house
    else if($("#majorimage").attr("src") == "Image resources/Doorinside.png")
    {
        /*Numeric values of the house's door*/
        /*x: 290, 595*/
        /*y: 245, 510*/
        if(x >= 290 && x <= 595 && y >= 245 && y <= 510)
        {
            $("#majorimage").attr("src", "Image resources/Dooroutside.png");
        }
    }
    //Examining the car
    else if($("#majorimage").attr("src") == "Image resources/Car.png")
    {
        $("#majorimage").attr("src", "Image resources/Belowcar.png");
    }
    //What is under the car
    else if($("#majorimage").attr("src") == "Image resources/Belowcar.png")
    {
        /*Numeric values of the item bearing wheel*/
        /*x: 65, 265*/
        /*y: 140, 420*/
        if(x >= 65 && x <= 265 && y >= 140 && y <= 420)
        {
            hasnote = true;
            $("#noteitem").prop('src', 'Tools/Message.png');
            $("#noteitem").css('opacity', '1.0');
            hasfragment1 = true;
            $("#fragment1").prop('src', 'Tools/Keyfragment01.png');
            $("#fragment1").css('opacity', '1.0');
        }
    }
    //Examining the washtub
    else if($("#majorimage").attr("src") == "Image resources/Washtub.png")
    {
        /*Numeric values of the washtub*/
        /*x: 310, 595*/
        /*y: 170, 425*/
        if(x >= 310 && x <= 595 && y >= 170 && y <= 425)
        {
            hasaxe = true;
            $("#axeitem").prop('src', 'Tools/Axe.png');
            $("#axeitem").css('opacity', '1.0');
            $("#majorimage").attr("src", "Image resources/Washtubempty.png");
        }
    }
    //Examining the well
    else if($("#majorimage").attr("src") == "Image resources/Well.png")
    {
        /*Numeric values of the well's bucket*/
        /*x: 360, 480*/
        /*y: 370, 450*/
        if(x >= 360 && x <= 480 && y >= 370 && y <= 450 && hasbowl == true)
        {
            var fillingwater = new Audio('Sound effects/Water_Glass.mp3');
            fillingwater.play();
            haswater = true;
            $("#bowlitem").prop('src', 'Tools/Bowl_with_water.png');
        }
    }
    //Examining the chest next to the window
    else if($("#majorimage").attr("src") == "Image resources/Windowedwall.png")
    {
        /*Numeric values of the locked chest near the window*/
        /*x: 450, 700*/
        /*y: 680, 715*/
        if(x >= 450 && x <= 700 && y >= 680 && y <= 715 && hasaxe)
        {
            hasfragment2 = true;
            $("#fragment2").prop('src', 'Tools/Keyfragment02.png');
            $("#fragment2").css('opacity', '1.0');
            hasfragment3 = true;
            $("#fragment3").prop('src', 'Tools/Keyfragment03.png');
            $("#fragment3").css('opacity', '1.0');
            hasscrewdriver = true;
            $("#screwdriveritem").prop('src', 'Tools/Screwdriver.png');
            $("#screwdriveritem").css('opacity', '1.0');
        }
    }
    //What is on the roof section
    else if($("#majorimage").attr("src") == "Image resources/Roof.png")
    {
        /*Numeric values of the bowl to be found*/
        /*x: 325, 535*/
        /*y: 560, 625*/
        if(x >= 325 && x <= 535 && y >= 560 && y <= 625)
        {
            hasbowl = true;
            $("#bowlitem").prop('src', 'Tools/Bowl.png');
            $("#bowlitem").css('opacity', '1.0');
        }
    }
    //The base section of the house
    else if($("#majorimage").attr("src") == "Image resources/Majorroom.png")
    {
        /*Numeric values of the furnace*/
        /*x: 190, 320*/
        /*y: 490, 570*/
        if(x >= 190 && x <= 320 && y >= 490 && y <= 570 && haswater == false && hasfragment1 == false && hasfragment2 == false && hasfragment3 == false)
        {
           alert("Need water and the keyfragments!");
        }
        //Third game over event
        /*Numeric values of the furnace*/
        /*x: 190, 320*/
        /*y: 490, 570*/
        else if(x >= 190 && x <= 320 && y >= 490 && y <= 570 && haswater == true && hasfragment1 == true && hasfragment2 == true && hasfragment3 == true && deactivatedbomb == false)
        {
            var kaboom = new Audio('Sound effects/Sonar.mp3');
            kaboom.play();
            $("#majorimage").attr("src", "Image resources/Gameoverimage03.png");
        }
        /*Numeric values of the furnace*/
        /*x: 190, 320*/
        /*y: 490, 570*/
        else if(x >= 190 && x <= 320 && y >= 490 && y <= 570 && haswater == true && hasfragment1 == true && hasfragment2 == true && hasfragment3 == true && deactivatedbomb == true)
        {
            $("#fragment1").remove();
            $("#fragment2").remove();
            $("#fragment3").remove();
            $("#bowlitem").prop('src', 'Tools/Bowl.png');
            haskey = true;
            $("#keyitem").prop('src', 'Tools/Key.png');
            $("#keyitem").css('opacity', '1.0');
        }
        /*Numeric values of the trap chest*/
        /*x: 345, 520*/
        /*y: 505, 590*/
        else if(x >= 345 && x <= 520 && y >= 505 && y <= 590 && hasscrewdriver == false)
        {
            alert("Tool is needed to open it!");
        }
        //Preventing the third game over event
        /*Numeric values of the trap chest*/
        /*x: 345, 520*/
        /*y: 505, 590*/
        else if(x >= 345 && x <= 520 && y >= 505 && y <= 590 && hasscrewdriver == true)
        {
            deactivatedbomb = true;
            alert("Bomb successfully deactivated!");
        }
        else if(x >= 575 && x <= 585 && y >= 445 && y <= 465 && haskey == false)
        {
            alert("Key is needed!");
        }
        //Close to ending the game
        /*Numeric values of that door's keyhole*/
        /*x: 575, 585*/
        /*y: 445, 465*/
        else if(x >= 575 && x <= 585 && y >= 445 && y <= 465 && haskey == true)
        {
            $("#majorimage").attr("src", "Image resources/Littledooropened.png");
        }
    }
    //The end section of the game
    /*Numeric values of the opened door*/
    /*x: 580, 680*/
    /*y: 410, 510*/
    else if($("#majorimage").attr("src") == "Image resources/Littledooropened.png")
    {
        if(x >= 580 && x <= 680 && y >= 410 && y <= 510)
        {
            $("#majorimage").attr("src", "Image resources/Closerimage.png");
            var closingsound = new Audio('Sound effects/Sms_Bells.mp3');
            closingsound.play();
        }
    }
})

//The movement to the left
$("#leftmove").on("click", function()
{
    if($("#majorimage").attr("src") == "Image resources/Car.png")
    {
        $("#majorimage").attr("src", "Image resources/Choserimage06.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Dooroutside.png")
    {
        $("#majorimage").attr("src", "Image resources/Well.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Well.png" && (hasaxe == false))
    {
        $("#majorimage").attr("src", "Image resources/Washtub.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Well.png" && (hasaxe == true))
    {
        $("#majorimage").attr("src", "Image resources/Washtubempty.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Doorinside.png")
    {
        $("#majorimage").attr("src", "Image resources/Windowedwall.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Windowedwall.png")
    {
        $("#majorimage").attr("src", "Image resources/Majorroom.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Majorroom.png")
    {
        $("#majorimage").attr("src", "Image resources/Windowedwall.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Stairs.png")
    {
        $("#majorimage").attr("src", "Image resources/Doorinside.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Roof.png")
    {
        $("#majorimage").attr("src", "Image resources/Stairs.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Belowcar.png")
    {
        $("#majorimage").attr("src", "Image resources/Car.png");
    }
})

//The movement to the right
$("#rightmove").on("click", function()
{
    if($("#majorimage").attr("src") == "Image resources/Starterimage01.png")
    {
        $("#majorimage").attr("src", "Image resources/Starterimage02.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Starterimage02.png")
    {
        $("#majorimage").attr("src", "Image resources/Starterimage03.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Starterimage03.png")
    {
        $("#majorimage").attr("src", "Image resources/Choserimage01.png");
    }

    if($("#majorimage").attr("src") == "Image resources/Choserimage06.png")
    {
        $("#majorimage").attr("src", "Image resources/Car.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Car.png")
    {
        $("#majorimage").attr("src", "Image resources/Choserimage06.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Dooroutside.png")
    {
        $("#majorimage").attr("src", "Image resources/Choserimage06.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Well.png")
    {
        $("#majorimage").attr("src", "Image resources/Dooroutside.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Washtub.png")
    {
        $("#majorimage").attr("src", "Image resources/Well.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Doorinside.png")
    {
        $("#majorimage").attr("src", "Image resources/Stairs.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Stairs.png")
    {
        $("#majorimage").attr("src", "Image resources/Roof.png");
    }
    //Second game over event
    else if($("#majorimage").attr("src") == "Image resources/Roof.png")
    {
        $("#majorimage").attr("src", "Image resources/Gameoverimage02.png");
        var scream = new Audio('Sound effects/Girl_Cry.mp3');
        scream.play();
    }
    else if($("#majorimage").attr("src") == "Image resources/Windowedwall.png")
    {
        $("#majorimage").attr("src", "Image resources/Doorinside.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Belowcar.png")
    {
        $("#majorimage").attr("src", "Image resources/Car.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Washtubempty.png")
    {
        $("#majorimage").attr("src", "Image resources/Well.png");
    }
})

//Event on the note item
$("#noteitem").on("click", function()
{
    alert("A key can be crafted with fragments and water into the furnace, but there is trap nearby! There is a bowl somewhere on the roof section!");
})