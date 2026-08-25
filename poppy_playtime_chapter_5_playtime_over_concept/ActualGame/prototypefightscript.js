var rpgbattlehealth = 550; //total amount of HP of the rpg fight's boss character

//The boss fight can be started by clicking on the button with the id #startthebattle, it starts the music of the scene as well.
$("#startthebattle").on("click", function()
{
    $("#startthebattle").remove();
    $("#musicstarter h3").text("");
    $("#musicstarter").css("display", "none");
    var finalbattlemusic = new Audio("../Music/JohnPogany - Final fight theme (slowed).mp3");
    finalbattlemusic.play();
});

//chosing omnihand
$("#omnihand").on("click", function()
{
    $("#omnihand").css("border", "2px solid red");
    $("#purplehand").css("border", "none");
    $("#flarehand").css("border", "none");
    localStorage.setItem("omnihand_ready", "0");
    localStorage.setItem("purplehand_ready", "1");
    $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_usable.png");
    if(localStorage.getItem("yellowhand_ready") == "0")
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_yellowhand_usable.png");
    }
    if(localStorage.getItem("bluehand_ready") == '0')
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_bluehand_usable.png");
    }
});

//chosing purplehand
$("#purplehand").on("click", function()
{
    $("#purplehand").css("border", "2px solid red");
    $("#flarehand").css("border", "none");
    $("#omnihand").css("border", "none");
    localStorage.setItem("purplehand_ready", "0");
    console.log(localStorage.getItem("purplehand_ready"));
    localStorage.setItem("omnihand_ready", "1");
    $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_usable.png");
    if(localStorage.getItem("yellowhand_ready") == '0')
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_yellowhand_usable.png");
    }
    if(localStorage.getItem("bluehand_ready") == '0')
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_bluehand_usable.png");
    }
});

//chosing yellowhand
$("#yellowhand").on("click", function()
{
    $("#bluehand").css("border", "none");
    $("#yellowhand").css("border", "2px solid red");
    localStorage.setItem("yellowhand_ready", "0");
    localStorage.setItem("bluehand_ready", "1");
    if(localStorage.getItem("purplehand_ready") == '0' && localStorage.getItem("yellowhand_ready") == '0')
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_yellowhand_usable.png");
    }
    if(localStorage.getItem("omnihand_ready") == "0" && localStorage.getItem("yellowhand_ready") == '0')
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_yellowhand_usable.png");
    }
});

//chosing bluehand
$("#bluehand").on("click", function()
{
    $("#yellowhand").css("border", "none");
    $("#bluehand").css("border", "2px solid red");
    localStorage.setItem("bluehand_ready", "0");
    localStorage.setItem("yellowhand_ready", "1");
    if(localStorage.getItem("purplehand_ready") == '0' && localStorage.getItem("bluehand_ready") == '0')
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_bluehand_usable.png");
    }
    if(localStorage.getItem("omnihand_ready") == "0" && localStorage.getItem("bluehand_ready") == '0')
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_bluehand_usable.png");
    }
});

//Gameover function, which automatically restarts the rpg battle.
function GameOverSituation()
{
    $("#hands_to_use").css("display", "none");
    $("#playercharacter").css("display", "none");
    $("#bosscharacter").css("display", "none");
    $("#bosshealthbar").css("display", "none");
    $("#musicstarter h3").text("");
    $("#musicstarter").css("display", "none");
    $("#specialbossattack").css("display", "none");
    $("#introimage").prop("src", "../Background/GameOverMessages/Gameoverscreen06.png");
    setTimeout(function()
    {
        window.location = "prototpyefight.html";
    }, 5000);
}

//This function is used for continously checking the actual HP value of the boss in the rpg battle.
//If any grabpack hand usage ensures that the player reaches the winning point, then the boss figure will disappear from the screen.
//Background image changes according to HP value, indicating that the fight is not static.
//Dodgeable attacks of the boss in the rpg battle appear at given point (given HP value), the player has limited time to dodge them.
//(Letter) part in the message shows which grabpack hand to use for dodging.
//Due to Javascript code anomaly, only 3 grabpack hand dodgeable scenarios are in, the rest are clickable buttons.
function RpgBattleHealthChecker()
{
    if(rpgbattlehealth < 540)
    {
        $("#introimage").prop('src', "../Background/Act03Battle/Prototypefight02.png");
    }
    if(rpgbattlehealth == 520)
    {
        $("#musicstarter h3").html("Sword fingers! Dodge! (P)");
        $("#musicstarter").css("display", "block");
        const timeforbossmove01 = setTimeout(GameOverSituation, 3000);
        $(document).keydown(function(e)
        {
            if(e.keyCode==69)
            {
                if(localStorage.getItem("purplehand_ready") == '0')
                {
                    clearTimeout(timeforbossmove01);
                    $("#musicstarter h3").html("");
                    $("#musicstarter").css("display", "none");
                }
            }
        });
    }
    if(rpgbattlehealth < 510)
    {
        $("#introimage").prop('src', "../Background/Act03Battle/Prototypefight03.png");
    }
    if(rpgbattlehealth < 480)
    {
        $("#introimage").prop('src', "../Background/Act03Battle/Prototypefight04.png");
        $("#bosscharacter").css("bottom", "150px");
    }
    if(rpgbattlehealth == 460)
    {
        $("#musicstarter h3").html("Flamethrower! Dodge! (Y)");
        $("#musicstarter").css("display", "block");
        const timeforbossmove02 = setTimeout(GameOverSituation, 3000);
        $(document).keydown(function(e)
        {
            if(e.keyCode==81)
            {
                if(localStorage.getItem("yellowhand_ready") == '0')
                {
                    clearTimeout(timeforbossmove02);
                    $("#musicstarter h3").html("");
                    $("#musicstarter").css("display", "none");
                }
            }
        });
    }
    if(rpgbattlehealth < 450)
    {
        $("#introimage").prop('src', "../Background/Act03Battle/Prototypefight05.png");
        $("#bosscharacter").css("bottom", "150px");
    }
    if(rpgbattlehealth < 420)
    {
        $("#introimage").prop('src', "../Background/Act03Battle/Prototypefight06.png");
        $("#bosscharacter").css("bottom", "150px");
    }
    if(rpgbattlehealth < 390)
    {
        $("#introimage").prop('src', "../Background/Act03Battle/Prototypefight07.png");
        $("#bosscharacter").css("bottom", "150px");
    }
    if(rpgbattlehealth < 360)
    {
        $("#introimage").prop('src', "../Background/Act03Battle/Prototypefight08.png");
        $("#bosscharacter").css("bottom", "150px");
    }
    if(rpgbattlehealth == 340)
    {
        $("#musicstarter h3").html("Leg strike! Dodge! (O)");
        $("#musicstarter").css("display", "block");
        const timeforbossmove03 = setTimeout(GameOverSituation, 3000);
        $(document).keydown(function(e)
        {
            if(e.keyCode==69)
            {
                if(localStorage.getItem("omnihand_ready") == '0')
                {
                    clearTimeout(timeforbossmove03);
                    $("#musicstarter h3").html("");
                    $("#musicstarter").css("display", "none");
                }
            }
        });
    }
    if(rpgbattlehealth < 330)
    {
        $("#introimage").prop('src', "../Background/Act03Battle/Prototypefight09.png");
        $("#bosscharacter").css("bottom", "280px");
        $("#bosscharacter").css("left", "500px");
        $("#playercharacter").css("bottom", "300px");
    }
    if(rpgbattlehealth < 300)
    {
        $("#introimage").prop('src', "../Background/Act03Battle/Prototypefight10.png");
        $("#bosscharacter").css("bottom", "200px");
        $("#bosscharacter").css("left", "400px");
        $("#playercharacter").css("bottom", "200px");
    }
    if(rpgbattlehealth == 290)
    {
        $("#specialbossattack").css("display", "block");
        $("#specialbossattack").html("Critter strike! Click to dodge!")
        const timeforbossmove04 = setTimeout(GameOverSituation, 3000);
        $("#specialbossattack").on("click", function()
        {
            clearTimeout(timeforbossmove04);
            $("#specialbossattack").css("display", "none");
        });
    }
    if(rpgbattlehealth < 270)
    {
        $("#introimage").prop('src', "../Background/Act03Battle/Prototypefight11.png");
    }
    if(rpgbattlehealth == 260)
    {
        $("#specialbossattack").css("display", "block");
        $("#specialbossattack").html("Droid strike! Click to dodge!")
        const timeforbossmove05 = setTimeout(GameOverSituation, 3000);
        $("#specialbossattack").on("click", function()
        {
            clearTimeout(timeforbossmove05);
            $("#specialbossattack").css("display", "none");
        });
    }
    if(rpgbattlehealth < 240)
    {
        $("#introimage").prop('src', "../Background/Act03Battle/Prototypefight12.png");
    }
    if(rpgbattlehealth < 230)
    {
        $("#introimage").prop('src', "../Background/Act03Battle/Prototypefight13.png");
    }
    if(rpgbattlehealth == 220)
    {
        $("#specialbossattack").css("display", "block");
        $("#specialbossattack").html("Gas pipe throw! Click to dodge!")
        const timeforbossmove06 = setTimeout(GameOverSituation, 3000);
        $("#specialbossattack").on("click", function()
        {
            clearTimeout(timeforbossmove06);
            $("#specialbossattack").css("display", "none");
        });
    }
    if(rpgbattlehealth < 210)
    {
        $("#introimage").prop('src', "../Background/Act03Battle/Prototypefight14.png");
        $("#playercharacter").css("left", "160px");
    }
    if(rpgbattlehealth == 200)
    {
        $("#specialbossattack").css("display", "block");
        $("#specialbossattack").html("Plastic bag throw! Click to dodge!")
        const timeforbossmove07 = setTimeout(GameOverSituation, 3000);
        $("#specialbossattack").on("click", function()
        {
            clearTimeout(timeforbossmove07);
            $("#specialbossattack").css("display", "none");
        });
    }
    if(rpgbattlehealth < 180)
    {
        $("#introimage").prop('src', "../Background/Act03Battle/Prototypefight15.png");
        $("#bosscharacter").css("left", "500px");
    }
    if(rpgbattlehealth < 150)
    {
        $("#introimage").prop('src', "../Background/Act03Battle/Prototypefight16.png");
    }
    if(rpgbattlehealth == 140)
    {
        $("#specialbossattack").css("display", "block");
        $("#specialbossattack").html("Toxic water splash! Click to dodge!")
        const timeforbossmove08 = setTimeout(GameOverSituation, 3000);
        $("#specialbossattack").on("click", function()
        {
            clearTimeout(timeforbossmove08);
            $("#specialbossattack").css("display", "none");
        });
    }
    if(rpgbattlehealth < 120)
    {
        $("#introimage").prop('src', "../Background/Act03Battle/Prototypefight17.png");
    }
    if(rpgbattlehealth < 90)
    {
        $("#introimage").prop('src', "../Background/Act03Battle/Prototypefight18.png");
    }
    if(rpgbattlehealth == 70)
    {
        $("#specialbossattack").css("display", "block");
        $("#specialbossattack").html("Electric wire! Click to dodge!")
        const timeforbossmove09 = setTimeout(GameOverSituation, 3000);
        $("#specialbossattack").on("click", function()
        {
            clearTimeout(timeforbossmove09);
            $("#specialbossattack").css("display", "none");
        });
    }
    if(rpgbattlehealth < 60)
    {
        $("#introimage").prop('src', "../Background/Act03Battle/Prototypefight19.png");
    }
    if(rpgbattlehealth == 50)
    {
        $("#specialbossattack").css("display", "block");
        $("#specialbossattack").html("Whirling arm strike! Click to dodge!")
        const timeforbossmove10 = setTimeout(GameOverSituation, 3000);
        $("#specialbossattack").on("click", function()
        {
            clearTimeout(timeforbossmove10);
            $("#specialbossattack").css("display", "none");
        });
    }
    if(rpgbattlehealth < 30)
    {
        $("#introimage").prop('src', "../Background/Act03Battle/Prototypefight20.png");
    }
    if(rpgbattlehealth == 10)
    {
        $("#specialbossattack").css("display", "block");
        $("#specialbossattack").html("Continous flamethrower shots! Click to dodge!")
        const timeforbossmove11 = setTimeout(GameOverSituation, 3000);
        $("#specialbossattack").on("click", function()
        {
            clearTimeout(timeforbossmove11);
            $("#specialbossattack").css("display", "none");
        });
    }
    if(rpgbattlehealth <= 0)
    {
        $("#hands_to_use").css("display", "none");
        $("#playercharacter").css("display", "none");
        $("#bosscharacter").css("display", "none");
        $("#bosshealthbar").css("display", "none");
        $("#musicstarter h3").text("");
        $("#musicstarter").css("display", "");
        window.location = "act03partB.html";
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
            rpgbattlehealth -= 1;
            console.log(rpgbattlehealth);
            $("#actualbosshealth").css("width", rpgbattlehealth);
            RpgBattleHealthChecker();
        }
        if(localStorage.getItem("yellowhand_ready") == "0")
        {
            rpgbattlehealth -= 4;
            console.log(rpgbattlehealth);
            $("#actualbosshealth").css("width", rpgbattlehealth);
            RpgBattleHealthChecker();
        }
    }
    //E key for using right hand
    if(e.keyCode==69)
    {
        if(localStorage.getItem("purplehand_ready") == "0")
        {
            rpgbattlehealth -= 2;
            console.log(rpgbattlehealth);
            $("#actualbosshealth").css("width", rpgbattlehealth);
            RpgBattleHealthChecker();
        }
        if(localStorage.getItem("omnihand_ready") == "0")
        {
            rpgbattlehealth -= 1;
            console.log(rpgbattlehealth);
            $("#actualbosshealth").css("width", rpgbattlehealth);
            RpgBattleHealthChecker();
        }
    }
});