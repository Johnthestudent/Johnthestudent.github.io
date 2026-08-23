var timeforboxyfight = 240; //helper variable for counting the boss fight time

//Gameover function, which automatically restarts the rpg battle.
function gameover()
{
    $("#bossfigure").css("display", "none");
    $("#bosshealthbar").css("display", "none");
    $("#timeshower").css("display", "none");
    $("#hands_to_use").css("display", "none");
    $("#introimage").prop("src", "../Background/GameOverMessages/Gameoverscreen01.png");
    setTimeout(function()
    {
        window.location = "rpgofact01.html";
        localStorage.setItem("flarehand_used", "5");
    }, 5000);
}

//The boss fight can be started by clicking on the boss figure, same for starting the music of the scene.
//If the player can't beat the boss of the rpg battle within 60 seconds, then game over.
$("#bossfigure").on("click", function()
{
    $("#musicstarter").remove();
    var battlemusic = new Audio("../Music/Cinematic Score.ogg");
    battlemusic.play();
    setTimeout(function()
    {
        timeforboxyfight -= 4;
        $("#timeforfight").css("width", timeforboxyfight);
    }, 1000);
    $("#timeforfight").animate({
        width: "0%"
    }, 60000, function()
    {
        gameover();
    });  
});

var rpgbattlehealth = 550;  //total amount of HP of the rpg fight's boss character
$("#chargeamount").text(localStorage.getItem("flarehand_used"));
flarehandusage = parseInt(localStorage.getItem("flarehand_used"));

//chosing omnihand
$("#omnihand").on("click", function()
{
    $("#omnihand").css("border", "2px solid red");
    $("#purplehand").css("border", "none");
    $("#flarehand").css("border", "none");
    localStorage.setItem("omnihand_ready", "0");
    localStorage.setItem("purplehand_ready", "1");
    localStorage.setItem("flarehand_ready", "1");
});

//chosing purplehand
$("#purplehand").on("click", function()
{
    $("#purplehand").css("border", "2px solid red");
    $("#flarehand").css("border", "none");
    $("#omnihand").css("border", "none");
    localStorage.setItem("purplehand_ready", "0");
    localStorage.setItem("flarehand_ready", "1");
    localStorage.setItem("omnihand_ready", "1");
});

//chosing flarehand
$("#flarehand").on("click", function()
{
    $("#flarehand").css("border", "2px solid red");
    $("#purplehand").css("border", "none");
    $("#omnihand").css("border", "none");
    localStorage.setItem("flarehand_ready", "0");
    localStorage.setItem("purplehand_ready", "1");
    localStorage.setItem("omnihand_ready", "1");
});

//chosing bluehand
$("#bluehand").on("click", function()
{
    $("#bluehand").css("border", "2px solid red");
    localStorage.setItem("bluehand_ready", "0");
});

//This function is used for continously checking the actual HP value of the boss in the rpg battle.
//If any grabpack hand usage ensures that the player reaches the winning point, then the boss figure will disappear from the screen.
function RPGBattleHealthChecker()
{
    if(rpgbattlehealth < 300)
    {
        $("#introimage").prop('src', "../Background/Act01Battle/BoxyBooFight02.png");
        $("#introimage").css("filter", "brightness(50%)");
    }

    if(rpgbattlehealth <= 0)
    {
        $("#bosshealthbar").css("display", "none");
        $("#bossfigure").css("display", "none");
        $("#toact02").css("display", "block");
    }
}

//Key event handling, which is essential for grabpack hand usage.
//Each grabpack hand decreases the boss HP in the rpg battle in a different way.
//RPGBattleHealthChecker() function is needed for all available grabpack hands.
$(document).keydown(function(e)
{
    //Q key for using left hand
    if(e.keyCode==81)
    {
        if(localStorage.getItem("bluehand_ready") == "0")
        {
            rpgbattlehealth -= 5;
            $("#actualbosshealth").css("width", rpgbattlehealth);
        }
        RPGBattleHealthChecker();
    }

    //E key for using right hand
    if(e.keyCode==69)
    {
        if(localStorage.getItem("flarehand_ready") == "0")
        {
            if(flarehandusage > 0)
            {
                rpgbattlehealth -= 30;
                $("#actualbosshealth").css("width", rpgbattlehealth);
                flarehandusage -= 1;
                localStorage.setItem("flarehand_used", flarehandusage);
                $("#chargeamount").text(flarehandusage);
            }
            else
            {
                localStorage.setItem("flarehand_used", "0");
                $("#chargeamount").text(localStorage.getItem("flarehand_used"));
            }
            RPGBattleHealthChecker();
        }

        if(localStorage.getItem("purplehand_ready") == "0")
        {
            rpgbattlehealth -= 10;
            $("#actualbosshealth").css("width", rpgbattlehealth);
            RPGBattleHealthChecker();
        }   

        if(localStorage.getItem("omnihand_ready") == "0")
        {
            rpgbattlehealth -= 15;
            $("#actualbosshealth").css("width", rpgbattlehealth);
            RPGBattleHealthChecker();
        }
    }
});

$("#toact02").on("click", function()
{
    window.location = "act02.html";
});