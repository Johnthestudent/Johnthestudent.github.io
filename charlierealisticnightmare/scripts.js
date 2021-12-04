//helping variables
var rightduck = 0;
var leftduck = 0;
var jumpduck = 0;
var downduck = 0;
var hitit = 0;

//right movement
$("#rightway").on("click", function() {
    rightduck++;
    if(rightduck == 4)
    {
        $("#froggy").remove();
        $("body").css({background: "url('Background images/02GrayBridgeandTrees.jpg') no-repeat"});
        $("body").css("background-size", "1920px");
        $("#game").append('<img id ="waspy" src="Sprite casual images/waspunitsprite.png" />');
    }
})

//left movement
$("#leftway").on("click", function()
{
    rightduck--;
    leftduck++;
    if(rightduck == 0)
    {
        $("#playercharacter").remove();
        alert("GAME OVER: There is no way back!");
        alert("Press F5 to restart!");
    }
})

//dive movement
$("#activate").on("click", function()
{
    downduck++;
    if(downduck == 4)
    {
        $("#waspy").remove();
        $("body").css({background: "url('Background images/03Woodlightlandscapenature.jpg') no-repeat"});
        $("body").css("background-size", "1920px");
        $("#game").append('<img id ="tarajos" src="Sprite casual images/porcupineunitsprite.png" />'); 
    }
})

//up movement
$("#jump").on("click", function()
{
    jumpduck++;
    if(jumpduck == 4)
    {
        $("#tarajos").remove();
        $("#bosshealth").css("background", "purple");
        $("#bosstext").text("bosshealth: ");
        $("body").css({background: "url('Background images/05PanoramicGreenField.jpg') no-repeat"});
        $("body").css("background-size", "1920px");
        $("#game").append('<img id ="hornetboss" src="Sprite casual images/bosssprite.png" />');
    }
})

//game over event #1
$("#froggy").on("click", function()
{
    $("#playercharacter").remove();
    alert("GAME OVER: Frogs and ducks are not always friends!");
    alert("Press F5 to restart!");
})

//game over event #2
$("#waspy").on("click", function()
{
    $("#playercharacter").remove();
    alert("GAME OVER: Wasps are basically annoying and hostile!");
    alert("Press F5 to restart!");
})

//game over event #3
$("#tarajos").on("click", function()
{
    $("#playercharacter").remove();
    alert("GAME OVER: OOOUCH!");
    alert("Press F5 to restart!");
})

//game over event #4
$("#hornetboss").on("click", function()
{
    $("#playercharacter").remove();
    alert("GAME OVER: Don't touch the hornet!");
    alert("Press F5 to restart!");
})

//helping variable for the boss fight
var modifiedwidth = 900;

//action required for the boss fight
$("#playercharacter").on("click", function()
{
    modifiedwidth -= 10;
    $("#bosshealth").width(modifiedwidth);
    hitit++;
    if(hitit == 90)
    {
        $("#hornetboss").remove();
        $("#playercharacter").remove();
        $("#bosstext").remove();
        alert("Congratulations! You bet the game! The duck's nightmare is over!");
    }
})