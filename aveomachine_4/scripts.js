//helping variable
var hascrystal = false;

//Info related to the game
$("#gameinfo").on("click", function(){
    alert("This game is made for educational and entertainment purposes only!\nAveomachine series is a parody of Submachine!\nSubmachine game series belongs to Mateusz Skutnik!\n\nFor further information, check out the README file!\nClick on the 'Start game' button to start the game!\nUse your mouse to move around and collect objects!");
})

//start of the game
//Opacity changes from 0 to 100
//images will get resource
//and by that, they will become functioning
//for the functionality of new scenes, some elements are getting removed
$("#gamestarter").on("click", function(){
    $("#majorimage").attr("src", "Image resources/Cave entrance.png");
    $("#gameinfo").remove();
    $("#gamestarter").remove();
    $("h1").remove();
    $("#axeitem").prop('src', 'Tools/Axe.png');
    $("#axeitem").css('opacity', '1.0');
    $("#bowlitem").prop('src', 'Tools/Bowl.png');
    $("#bowlitem").css('opacity', '1.0');
    $("#screwdriveritem").prop('src', 'Tools/Screwdriver.png');
    $("#screwdriveritem").css('opacity', '1.0');
})

//If the player clicks on specific values of the base image.
$("#majorimage").on("click", function(event)
{
    var x = event.screenX;
    var y = event.screenY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    console.log(coords);
    /*if($("#majorimage").attr("src") == "Image resources/Boss-stage.png")
    {
        $("#finalboss").css('opacity', '1.0');
        $("#bosshealthbar").css('opacity', '1.0');
    }*/
})

//If the player clicks on the cave entrance.
$("#caveentrance").on("click", function(event)
{
    if($("#majorimage").attr("src") == "Image resources/Cave entrance.png")
    {
        $("#caveentrance").remove();
        $("#majorimage").attr("src", "Image resources/Cave01.png");
    }
})

//If the player clicks on the object, which helps to get to the cave lake.
$("#cavelake").on("click", function(event)
{
    if($("#majorimage").attr("src") == "Image resources/Cave01.png")
    {
        $("#cavelake").remove();
        $("#majorimage").attr("src", "Image resources/Introimage.png");
        var caveambientsound = new Audio('Sound effects/Water_Bubbles.mp3');
        caveambientsound.play();
    }
})

//If the player clicks on the hidden crystal object.
$("#hiddencrystal").on("click", function(event)
{
    if($("#majorimage").attr("src") == "Image resources/Introsequel.png")
    {
        hascrystal = true;
        $("#hiddencrystal").remove();
        $("#bigcrystalitem").css('opacity', '1.0');
        $("#bigcrystalitem").prop('src', 'Tools/Big crystal fragment.png');
    }
})

//If the player clicks on the crystal, which is blocking the way.
$("#crystalblock").on("click", function(event)
{
    if($("#majorimage").attr("src") == "Image resources/Crystalgate.png")
    {
        //crystal is needed to break crystal
        if(hascrystal == false)
        {
            alert("Beat the tough material with the same material!");
        }
        //positive outcome
        else if(hascrystal == true)
        {
            hascrystal = false;
            $("#bigcrystalitem").remove();
            $("#crystalblock").remove();
            $("#majorimage").attr("src", "Image resources/Crystalgateopened.png");
        }
    }
})

//If the player clicks on the cleared eway.
$("#crystalclear").on("click", function(event)
{
    if($("#majorimage").attr("src") == "Image resources/Crystalgateopened.png")
    {
        $("#majorimage").attr("src", "Image resources/Tunneltoothercave.png");
    }
})

//If the player clicks on the tunnel entrance.
$("#otherentrance").on("click", function(event)
{
    if($("#majorimage").attr("src") == "Image resources/Tunneltoothercave.png")
    {
        $("#majorimage").attr("src", "Image resources/Labdoor.png");
    }
})

//If the player clicks on the door of the lab.
$("#doortolab").on("click", function(event)
{
    if($("#majorimage").attr("src") == "Image resources/Labdoor.png")
    {
        $("#crystalclear").remove();
        $("#otherentrance").remove();
        $("#majorimage").attr("src", "Image resources/Welcomercomputer.png");
    }
})

//If the player clicks on the computer of the lab, it will play a sound effect.
$("#computeron").on("click", function(event)
{
    if($("#majorimage").attr("src") == "Image resources/Welcomercomputer.png")
    {
        $("#majorimage").attr("src", "Image resources/Welcomercomputeron.png");
        var computersound = new Audio('Sound effects/Computer_voice.mp3');
        computersound.play();
    }
})

//If the player clicks on the drawer.
$("#drawer01").on("click", function(event)
{
    if($("#majorimage").attr("src") == "Image resources/Labsegment02.png")
    {
        $("#drawer01").remove();
        $("#firstnote").css('opacity', '1.0');
        $("#firstnote").prop('src', 'Tools/Note01.png');
        $("#secondnote").css('opacity', '1.0');
        $("#secondnote").prop('src', 'Tools/Note02.png');
        $("#thirdnote").css('opacity', '1.0');
        $("#thirdnote").prop('src', 'Tools/Note03.png');
    }
})

//If the player clicks on the door of the engine room.
$("#engineroom").on("click", function(event)
{
    if($("#majorimage").attr("src") == "Image resources/Labsegment03.png")
    {
        alert("No permission for newbies to enter the engine room!");
    }
})

//If the player clicks on the door of the portal room.
//In that case, the boss of the game appears.
$("#portalroom").on("click", function(event)
{
    if($("#majorimage").attr("src") == "Image resources/Labsegment03.png")
    {
        $("#majorimage").attr("src", "Image resources/Boss-stage.png");
        $("#finalboss").css('opacity', '1.0');
        $("#bosshealthbar").css('opacity', '1.0');
        $("#bossfullhealth").css('opacity', '1.0');
    }
})

//helping variable for the health value of the boss
//this stands for the actual health value of the boss
var modifiedheight = 700;

/*Axe is a powerful tool, which takes 30 health points
of the boss.*/
$("#axeitem").on("click", function(event)
{
    if($("#majorimage").attr("src") == "Image resources/Boss-stage.png")
    {
        modifiedheight -= 30;
        $("#bosshealthbar").height(modifiedheight);
        if(modifiedheight <= 0)
        {
            $("#finalboss").remove();
            $("#bossfullhealth").remove();
            $("#leftmove").remove();
            $("#rightmove").remove();
            $("#axeitem").remove();
            $("#bowlitem").remove();
            $("#screwdriveritem").remove();
            $("#firstnote").remove();
            $("#secondnote").remove();
            $("#thirdnote").remove();
            $("#majorimage").attr("src", "Image resources/Aveomachine portal.png");
        }
    }
})

/*Bowl is also a powerful tool, which takes 20 health points
of the boss.*/
$("#bowlitem").on("click", function(event)
{
    if($("#majorimage").attr("src") == "Image resources/Boss-stage.png")
    {
        modifiedheight -= 20;
        $("#bosshealthbar").height(modifiedheight);
        if(modifiedheight <= 0)
        {
            $("#finalboss").remove();
            $("#bossfullhealth").remove();
            $("#leftmove").remove();
            $("#rightmove").remove();
            $("#axeitem").remove();
            $("#bowlitem").remove();
            $("#screwdriveritem").remove();
            $("#firstnote").remove();
            $("#secondnote").remove();
            $("#thirdnote").remove();
            $("#majorimage").attr("src", "Image resources/Aveomachine portal.png");
        }
    }
})

/*Screwdriver is a small tool, which takes 10 health points
of the boss.*/
$("#screwdriveritem").on("click", function(event)
{
    if($("#majorimage").attr("src") == "Image resources/Boss-stage.png")
    {
        modifiedheight -= 10;
        $("#bosshealthbar").height(modifiedheight);
        if(modifiedheight <= 0)
        {
            $("#finalboss").remove();
            $("#bossfullhealth").remove();
            $("#leftmove").remove();
            $("#rightmove").remove();
            $("#axeitem").remove();
            $("#bowlitem").remove();
            $("#screwdriveritem").remove();
            $("#firstnote").remove();
            $("#secondnote").remove();
            $("#thirdnote").remove();
            $("#majorimage").attr("src", "Image resources/Aveomachine portal.png");
        }
    }
})

//If the player clicks on the portal.
$("#aveoportal").on("click", function(event)
{
    if($("#majorimage").attr("src") == "Image resources/Aveomachine portal.png")
    {
        $("#walkthrough").remove();
        $("#majorimage").attr("src", "Image resources/Closingimage.png");
    }
})

//If the player clicks on the first note item.
$("#firstnote").on("click", function(event)
{
    alert("So, you made through?\nGood! We knew you could do it!\nWe have chosen you randomly out of the crowd to finish our work!");
})

//If the player clicks on the second note item.
$("#secondnote").on("click", function(event)
{
    alert("However, for your safety, we had to put you into a pantry!\nThat was the test.\nGlad that you found our ship, even if was attacked!\nAlso you did find our weekend house and the way to this lab!");
})

//If the player clicks on the third note item.
$("#thirdnote").on("click", function(event)
{
    alert("We are about to stop a mad scientist, who has an interesting system.\nWe are about to build into his system our one, as a virus, in order to stop him!\nHowever, only you can activate the portal machine for it!\nEnter the portal room!");
})

//The scenarios, which occur if the player clicks on the right movement button.
$("#rightmove").on("click", function()
{
    if($("#majorimage").attr("src") == "Image resources/Cave01.png")
    {
        $("#majorimage").attr("src", "Image resources/Cave02.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Introimage.png")
    {
        $("#majorimage").attr("src", "Image resources/Introsequel.png");
        $("#hiddencrystal").css('opacity', '1.0');
    }
    else if($("#majorimage").attr("src") == "Image resources/Mushroomway.png")
    {
        $("#majorimage").attr("src", "Image resources/Introimage.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Crystalgate.png")
    {
        $("#majorimage").attr("src", "Image resources/Mushroomway.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Welcomercomputer.png")
    {
        $("#majorimage").attr("src", "Image resources/Labsegment01.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Welcomercomputeron.png")
    {
        $("#majorimage").attr("src", "Image resources/Labsegment01.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Labsegment01.png")
    {
        $("#majorimage").attr("src", "Image resources/Labsegment02.png");
        var labambientsound = new Audio('Sound effects/Bubble_Time.mp3');
        labambientsound.play();
    }
    else if($("#majorimage").attr("src") == "Image resources/Labsegment02.png")
    {
        $("#majorimage").attr("src", "Image resources/Labsegment03.png");
    }
})

//The scenarios, which occur if the player clicks on the left movement button.
$("#leftmove").on("click", function()
{
    if($("#majorimage").attr("src") == "Image resources/Cave02.png")
    {
        $("#majorimage").attr("src", "Image resources/Cave01.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Introsequel.png")
    {
        $("#majorimage").attr("src", "Image resources/Introimage.png");
        $("#hiddencrystal").css('opacity', '0.0');
    }
    else if($("#majorimage").attr("src") == "Image resources/Introimage.png")
    {
        $("#majorimage").attr("src", "Image resources/Mushroomway.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Mushroomway.png")
    {
        $("#majorimage").attr("src", "Image resources/Crystalgate.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Labsegment01.png")
    {
        $("#majorimage").attr("src", "Image resources/Welcomercomputer.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Welcomercomputer.png")
    {
        alert("No way back!");
    }
    else if($("#majorimage").attr("src") == "Image resources/Labsegment02.png")
    {
        $("#majorimage").attr("src", "Image resources/Labsegment01.png");
    }
    else if($("#majorimage").attr("src") == "Image resources/Labsegment03.png")
    {
        $("#majorimage").attr("src", "Image resources/Labsegment02.png");
    }
})