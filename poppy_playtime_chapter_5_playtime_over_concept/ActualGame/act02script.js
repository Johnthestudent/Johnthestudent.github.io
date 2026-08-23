//The following arrays stand for the dialog scenarios and VHS play scenarios.
//The logic is that XY_character_line[0] and XY_character_speech_[0] are in pairs, and so on.
//XY_character_speech_[0] is played, and XY_character_line[0] is shown until the end of XY_character_speech_[0] audio file.
//Then it moves to the next one in XY_character_speech and XY_character_line arrays.
//Scientist and Occupational Physician lines go with the audio files in the VHS scene handling functions.
var KissyMissylines = 
[
    "I can fix it, but it would take some minutes, and..up to that moment I will have it fixed, well...you should seek for the yellow hand! It must be somewhere near a store room!",
    "TADA! I am back with a new blue hand, or actually, it's the same blue hand, but fixed!",
    "Don't lose hope! There must be still at least one of them...you know!"
];

var kissymissyspeech = new Array(3);
kissymissyspeech[0] = new Audio('../Voice/Act02/KissyMissy01Act02.mp3');
kissymissyspeech[1] = new Audio('../Voice/Act02/KissyMissy02Act02.mp3');
kissymissyspeech[2] = new Audio('../Voice/Act02/KissyMissy03Act02.mp3');

var scientistaboutMommylines =
[
    "New log…about experiment 1222…project name: Mommy Longlegs.",
    "The experiment Marie was absolutely against every single step, which we made, in order to create such a wonderful toy, and guess what? She remained aggressive and hostile towards to every single colleague of mine and every single worker of Playtime Co factory.",
    "Except for the kids! She tried to behave as if she was the shepherd of a lost flock, or as if she was their mother.",
    "However, any single moment, when things are not happening according to her will, or if she is just aggravated by any of the workers of Playtime Co factory, there is a huge possibility, that she would snap, right in front of the kids! The very only group of people she trusts! End of log!"
];

var scientistaboutBobbylines =
[
    "New log, experiment 1186, project name: Bobby Bearhug.",
    "To my honest, I haven’t expected this..one part of Bigger Bodies Initiative failing ridiculously, right at the very first set of tasks, for a single day.",
    "Nevermind! Harley Sawyer has decided about her fate, and as for the rest, they have a very huge room for improvement!"
];

var OccupationalPhysicianlines = 
[
    "Alright! Let me get this straight: as the occupational physician of Playtime Co factory, I didn’t want to talk about it for several years to be honest, just because Dr. Harley Sawyer has become the boss of the Labs, but..I guess the time has come to explain myself, or make a confession.",
    "For the past 3 years, I have been having workers in my room, showing strange symptoms, thanks to the red smoke, which is used for the experiments. The symptoms were..instant loss appetite, or actually, instant loss of thirst, and losing consciousness again and again,",
    "and after regaining it, showing apathete, or actually, aggressiveness, or just simply not caring for the environment, or there..",
    "That’s is the case, that everybody under the effect of the red smoke will become more cold blooded than ever! (sighs) I guess Playtime Co’s idea about this red smoke was not the smartest!"
];

var originalposition = 600; //position of the moving boss character
//The following two helper variables are standing for responsivity based game object positioning
let gamewidth = window.innerWidth;
let gameheight = window.innerHeight;

/*Clicking on this button starts the first scene of act02.*/
$("#bluehand_check").on("click", function()
{
    $("#bluehand_check").remove();
    $("#dialogbox").css("display", "block");
    $("#dialogbox").text("Kissy Missy: " + KissyMissylines[0]);
    kissymissyspeech[0].play();

    setTimeout(function()
    {
        $("#dialogbox").css("display", "none");
        $("#dialogbox").text("");
        $("#goingfurther").css("display", "block");
    }, 14000);
});

/*Clicking on this button ends the first scene of act02.*/
$("#goingfurther").on("click", function()
{
    $("#goingfurther").remove();
    $("#introimage").prop('src', "../Background/Act02ScenesandMap/Labstoresection01.png");
    $("#playercharacter").css("display", "block");
    $("#hands_to_use").css("display", "flex");
    var musicforact02 = new Audio("../Music/In The Mountains - Free Song (Ambience).mp3");
    musicforact02.play();
    musicforact02.volume = 0.5;

    setTimeout(function()
    {
        $("#helperbox").css("display", "block");
        $("#helperbox").text("After using a hand to open a door, click on the black rectangle to enter the room!");
    },2000);

    setTimeout(function()
    {
        $("#helperbox").css("display", "none");
        $("#helperbox").text("");
    },7000);
});

//chosing omnihand
$("#omnihand").on("click", function()
{
    $("#omnihand").css("border", "2px solid red");
    $("#purplehand").css("border", "none");
    $("#flarehand").css("border", "none");
    localStorage.setItem("omnihand_ready", "0");
    localStorage.setItem("purplehand_ready", "1");
    localStorage.setItem("flarehand_ready", "1");
    if(localStorage.getItem("frontal_look") == "0")
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_other_usable.png");
    }
    if(localStorage.getItem("frontal_look") == "1")
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_usable.png");
    }
    
    if(localStorage.getItem("yellowhand_ready") == "0")
    {
        if(localStorage.getItem("frontal_look") == "0")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_yellowhand_other_usable.png");
        }
        if(localStorage.getItem("frontal_look") == "1")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_yellowhand_usable.png");
        }        
    }
    if(localStorage.getItem("bluehand_ready") == '0')
    {
        if(localStorage.getItem("frontal_look") == "0")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_bluehand_other_usable.png");
        }
        if(localStorage.getItem("frontal_look") == "1")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_bluehand_usable.png");
        }
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
    localStorage.setItem("flarehand_ready", "1");
    localStorage.setItem("omnihand_ready", "1");
    if(localStorage.getItem("frontal_look") == "0")
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_other_usable.png");
    }
    if(localStorage.getItem("frontal_look") == "1")
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_usable.png");
    }
    
    if(localStorage.getItem("yellowhand_ready") == '0')
    {
        if(localStorage.getItem("frontal_look") == "0")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_yellowhand_other_usable.png");
        }
        if(localStorage.getItem("frontal_look") == "1")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_yellowhand_usable.png");
        }
    }
    if(localStorage.getItem("bluehand_ready") == '0')
    {
        if(localStorage.getItem("frontal_look") == "0")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_bluehand_other_usable.png");
        }
        if(localStorage.getItem("frontal_look") == "1")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_bluehand_usable.png");
        }
    }
});

//chosing flarehand
$("#flarehand").on("click", function()
{
    if(localStorage.getItem("flarehand_operational") == "0")
    {
        $("#flarehand").css("border", "2px solid red");
        $("#purplehand").css("border", "none");
        $("#omnihand").css("border", "none");
        localStorage.setItem("flarehand_ready", "0");
        localStorage.setItem("purplehand_ready", "1");
        localStorage.setItem("omnihand_ready", "1");
        if(localStorage.getItem("frontal_look") == "0")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_flarehand_other_usable.png");
        }
        if(localStorage.getItem("frontal_look") == "1")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_flarehand_usable.png");
        }
    }
});

//chosing yellowhand
$("#yellowhand").on("click", function()
{
    if(localStorage.getItem("yellowhand_operational") == "0")
    {
        $("#bluehand").css("border", "none");
        $("#yellowhand").css("border", "2px solid red");
        localStorage.setItem("yellowhand_ready", "0");
        localStorage.setItem("bluehand_ready", "1");
    }
    if(localStorage.getItem("purplehand_ready") == '0' && localStorage.getItem("yellowhand_ready") == '0')
    {
        if(localStorage.getItem("frontal_look") == "0")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_yellowhand_other_usable.png");
        }
        if(localStorage.getItem("frontal_look") == "1")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_yellowhand_usable.png");
        }
        
    }
    if(localStorage.getItem("omnihand_ready") == "0" && localStorage.getItem("yellowhand_ready") == '0')
    {
        if(localStorage.getItem("frontal_look") == "0")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_yellowhand_other_usable.png");
        }
        if(localStorage.getItem("frontal_look") == "1")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_yellowhand_usable.png");
        }
    }
});

//chosing bluehand
$("#bluehand").on("click", function()
{
    if(localStorage.getItem("bluehand_operational") == "0")
    {
        $("#yellowhand").css("border", "none");
        $("#bluehand").css("border", "2px solid red");
        localStorage.setItem("bluehand_ready", "0");
        localStorage.setItem("yellowhand_ready", "1");
    }
    if(localStorage.getItem("purplehand_ready") == '0' && localStorage.getItem("bluehand_ready") == '0')
    {
        if(localStorage.getItem("frontal_look") == "0")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_bluehand_other_usable.png");
        }
        if(localStorage.getItem("frontal_look") == "1")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_bluehand_usable.png");
        }
    }
    if(localStorage.getItem("omnihand_ready") == "0" && localStorage.getItem("bluehand_ready") == '0')
    {
        if(localStorage.getItem("frontal_look") == "0")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_bluehand_other_usable.png");
        }
        if(localStorage.getItem("frontal_look") == "1")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_bluehand_usable.png");
        }
    }
});

$(".trophybox").on("click", function()
{
    $(".trophybox").css("display", "none");
    $("#brontrophy").css("display", "block");
    setTimeout(function()
    {
        $("#brontrophy").remove();
    }, 3000);
});

$("#pianosaurustrophy").on("click", function()
{
    $("#pianosaurustrophy").remove();
});

$("#doeytrophy").on("click", function()
{
    $("#doeytrophy").remove();
});

//Clicking on the doorto id rectangles will switch background image, and imitate room entering.
$("#doortopass").on("click", function()
{
    if($("#introimage").attr("src") == "../Background/Act02ScenesandMap/Labstoresection02.png")
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsLabA101.png');
        $("#doortopass").css("display", "none");
        if(gamewidth == 1280)
        {
            $("#playercharacter").css("left", "640px");
        }
        else if(gamewidth == 1920)
        {
            $("#playercharacter").css("left", "770px");
        }
        $("#mommyvhs").css("display", "block");
        $(".trophybox").css("display", "none");

        setTimeout(function()
        {
            $("#helperbox").css("display", "block");
            $("#helperbox").text("Collect VHS tapes in order to play them on their VCR-s! Warning: once left the tape behind, there is not always a way back!");
        },2000);
    
        setTimeout(function()
        {
            $("#helperbox").css("display", "none");
            $("#helperbox").text("");
        },7000);
    }
});

$("#doortolaba2").on("click", function()
{
    if($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA103.png")
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsLabA201.png');
        $("#doortolaba2").css("display", "none");
        if(gamewidth == 1280)
        {

        }
        else if(gamewidth == 1920)
        {
            $("#playercharacter").css("left", "10px");
        }
    }
});

$("#doortolaba3").on("click", function()
{
    if($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA203.png")
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsLabA301.png');
        $("#doortolaba3").css("display", "none");
        $("#bobbyvhs").css("display", "block");
    }
});

$("#doortostaffrooms").on("click", function()
{
    $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsStaffrooms01.png');
    $("#doortostaffrooms").css("display", "none");
    if(gamewidth == 1280)
    {
        $("#playercharacter").css("left", "640px");
    }
    else if(gamewidth == 1920)
    {
        $("#playercharacter").css("left", "770px");
    }
    $("#vhs_scene03").css("display", "none");
});

$("#doortosecondbossfight").on("click", function()
{
    $("#introimage").prop('src', '../Background/Act02Battle/LabsTesterRoom01.png');
    $("#doortosecondbossfight").css("display", "none");
    if(gamewidth == 1280)
    {
        $("#playercharacter").css("left", "640px");
    }
    else if(gamewidth == 1920)
    {
        $("#playercharacter").css("left", "770px");
    }
});

$("#occupationalphysiciannote").on("click", function()
{
    $("#occupationalphysiciannotetext").css("display", "block");
    $("#occupationalphysiciannote").remove();
});

$("#occupationalphysiciannotetext button").on("click", function()
{
    $("#occupationalphysiciannotetext").remove();
});

$("#engineernote").on("click", function()
{
    $("#yellowhandnotetext").css("display", "block");
    $("#engineernote").remove();
});

$("#yellowhandnotetext button").on("click", function()
{
    $("#yellowhandnotetext").remove();
});

$("#powercellfordoor").on("click", function()
{
    localStorage.setItem("powercell_in_inventory", "0");
    $("#powercellfordoor").remove();
});

$("#oilcapsule").on("click", function()
{
    $("#oilcapsule").remove();
    localStorage.setItem("oilcapsule_in_inventory", "0");
});

$("#yellowhandcollectable").on("click", function()
{
    $("#yellowhandcollectable").remove();
    localStorage.setItem("yellowhand_operational", "0");
    $("#yellowhand").css("opacity", "1.0");
});

$("#levercollectable").on("click", function()
{
    $("#levercollectable").remove();
    $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsCaveElevatorRoom04leverin.png');
});

//Clicking on this button starts the second boss fight in the game, which is basically a chase sequence.
//That can be stopped by using the oil capsule object and the flare hand.
//For further info see the E key handling of the $(document).keydown(function(e) segment!
$("#secondbossfight").on("click", function()
{
    $("#secondbossfight").remove();
    var killywillyspeech = new Audio("../Voice/Act02/KillyWilly01Act02.mp3");
    $("#dialogbox").css("display", "block");
    $("#dialogbox").text("Killy Willy: Who disturbs my quietude?! Oh, there you are, brother!");
    killywillyspeech.play();
    setTimeout(function()
    {
        $("#dialogbox").css("display", "none");
        $("#dialogbox").text("");
        $("#bosscharacter").css("display", "block");
        $("#bosshealthbar").css("display", "block");
    }, 8000);
    let secondbosschase = setInterval(function()
    {
        var movementspeed = 10;
        originalposition -= movementspeed;
        $("#bosscharacter").css("left", originalposition);
        //console.log("boss move: " + originalposition); //testing purposes only
        if(originalposition <= 10)
        {
            clearInterval(secondbosschase); //this stops the boss chase sequence, but with a gameover
            $("#hands_to_use").css("display", "none");
            $("#playercharacter").css("display", "none");
            $("#bosscharacter").css("display", "none");
            $("#bosshealthbar").css("display", "none");
            $("#introimage").prop("src", "../Background/GameOverMessages/Gameoverscreen02.png");
            setTimeout(function()
            {
                window.location = "act02.html";
            }, 5000);
        }
        $(document).keydown(function(e)
        {
            if(e.keyCode==69)
            {
                if(localStorage.getItem("flarehand_ready") == '0')
                {
                    if(localStorage.getItem("oilcapsule_in_inventory") == "0")
                    {
                        clearInterval(secondbosschase); //this is the core of stopping the boss chase sequence
                    }
                }
            }
        });
    }, 500);
});

//Clicking on this button leads to the scene after the second boss fight.
$("#aftersecondbossbattle").on("click", function()
{
    $("#aftersecondbossbattle").remove();
    $("#hands_to_use").css("display", "none");
    $("#playercharacter").css("display", "none");
    $("#bosshealthbar").css("display", "none");
    $("#introimage").prop('src', "../Background/Act02ScenesandMap/Analyzing the situation part 2.png");
    setTimeout(function()
    {
        $("#helperbox").css("display", "block");
        $("#helperbox").text("You have to keep going on without the flare hand!");
    },2000);

    setTimeout(function()
    {
        $("#helperbox").css("display", "none");
        $("#helperbox").text("");
        $("#totherooms").css("display", "block");
    },7000);

});

//Clicking on this button ends the scene after the second boss fight.
$("#totherooms").on("click", function()
{
    $("#totherooms").remove();
    $("#introimage").prop('src', "../Background/Act02ScenesandMap/LabsCaveOffice01.png");
    $("#playercharacter").css("display", "block");
    $("#playercharacter").prop('src', "../Sprites/Player/Player_basic_other_usable.png");
    if(gamewidth == 1280)
    {
        $("#playercharacter").css("left", "640px");
    }
    else if(gamewidth == 1920)
    {
        $("#playercharacter").css("left", "770px");
    }
    $("#hands_to_use").css("display", "flex");
    $("#flarehand").css("opacity", "0.5");
});

//Clicking on this button starts the blue-hand retrieving scene.
$("#returnofbluehand").on("click", function()
{
    $("#returnofbluehand").remove();
    $("#dialogbox").css("display", "block");
    $("#dialogbox").text("Kissy Missy: " + KissyMissylines[1]);
    kissymissyspeech[1].play();
    var secondmusicforact02 = new Audio("../Music/JohnPogany - Sadness.ogg");
    secondmusicforact02.play();
    secondmusicforact02.volume = 0.5;
    setTimeout(function()
    {
        $("#dialogbox").css("display", "none");
        $("#dialogbox").text("");
        localStorage.setItem("bluehand_operational", "0");
        $("#bluehand").css("opacity", "1.0");
    }, 8000);
});

$("#kissymissynewmessage").on("click", function()
{
    $("#kissymissynewmessage").remove();
    $("#dialogbox").css("display", "block");
    $("#dialogbox").text("Kissy Missy: " + KissyMissylines[2]);
    kissymissyspeech[2].play();

    setTimeout(function()
    {
        $("#dialogbox").css("display", "none");
        $("#dialogbox").text("");
        $("#imagesign").css("display", "block");
    }, 7000);
});

//Clicking on this button starts the ending scene of act02.
$("#imagesign").on("click", function()
{
    $("#imagesign").remove();
    $("#hands_to_use").css("display", "none");
    $("#playercharacter").css("display", "none");
    $("#introimage").prop('src', "../Background/Act02ScenesandMap/LabsCorridor06.png");
    var deepshock = new Audio("../Sounds/Cinematic Boom - sound effect - [High quality].mp3");
    deepshock.play();
    setTimeout(function()
    {
        $("#dialogbox").css("display", "block");
        $("#dialogbox").text("Player: No, no, no, NOOOOO!");
        var playershock = new Audio("../Voice/Act02/Player01Act02.mp3");
        playershock.play();
    },4000);
    setTimeout(function()
    {
        $("#dialogbox").css("display", "none");
        $("#dialogbox").text("");
        $("#toact03").css("display", "block");
    },8000); 
});

//This button ends act02 and starts act03partA.
$("#toact03").on("click", function()
{
    window.location = "act03partA.html";
});

//Clicking on the purplepad id square imitates the long jump with the purple hand. (stands for purplepad1-2-3-4)
$("#purplepad").on("click",function()
{
    if($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA303.png" && localStorage.getItem("purplehand_ready") == '0')
    {
        if(gamewidth == 1280)
        {
            $("#playercharacter").animate({"left": "440px", "bottom": "370px"});
        }
        else if(gamewidth == 1920)
        {
            $("#playercharacter").animate({"left": "490px", "bottom": "430px"});
        }
        $("#purplepad").css("display", "none");
    }
});

$("#purplepad2").on("click",function()
{
    if($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA303.png" && localStorage.getItem("purplehand_ready") == '0')
    {
        if(gamewidth == 1280)
        {
            $("#playercharacter").animate({"left": "200px", "bottom": "610px"});
        }
        else if(gamewidth == 1920)
        {
            $("#playercharacter").animate({"left": "220px", "bottom": "700px"});
        }
        $("#purplepad2").css("display", "none");
    }
});

$("#purplepad3").on("click",function()
{
    if($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA303.png" && localStorage.getItem("purplehand_ready") == '0')
    {
        if(gamewidth == 1280)
        {
            $("#playercharacter").animate({"left": "60px", "bottom": "210px"});
        }
        else if(gamewidth == 1920)
        {
            $("#playercharacter").animate({"left": "70px", "bottom": "150px"});
        }
        $("#purplepad3").css("display", "none");
    }
});

$("#purplepad4").on("click",function()
{
    if($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCaveStoreRoom01.png" && localStorage.getItem("purplehand_ready") == '0')
    {
        if(gamewidth == 1280)
        {
            $("#playercharacter").animate({"left": "220px"});
        }
        else if(gamewidth == 1920)
        {
            $("#playercharacter").animate({"left": "200px"});
        }
        $("#purplepad4").css("display", "none");
    }
});

//vhs id image, VHS_player function, #backfromvhs button and vhs_scene div are meant to be for handling a VHS scene.
//Player clicks on the vhs image, then on the vhs_scene05 div, which is a message box over a VCR.
//Clicking on the message box, aka starting the VHS playing scene is possible only if the player has the VHS tape.
//Having the VHS tape is checked via a localstorage value.
//After a sound effect does the vhs_player function get called, same logic like for the character line and speech arrays.
$("#mommyvhs").on("click", function()
{
    $("#mommyvhs").remove();
    localStorage.setItem("mommy_longlegs_vhs_in_inventory", "0");
});

function VHS02_player()
{
    var scientist01voice = new Audio('../Voice/VHSTapes/MommyLongLegsVHSTapeFinal.mp3');
    scientist01voice.play();
    $("#dialogbox").css("display", "block");
    $("#dialogbox").text("Scientist: " + scientistaboutMommylines[0]);
    setTimeout(function()
    {
        $("#dialogbox").text("Scientist: " + scientistaboutMommylines[1]);
    }, 10500);
    setTimeout(function()
    {
        $("#dialogbox").text("Scientist: " + scientistaboutMommylines[2]);
    }, 31500);
    setTimeout(function()
    {
        $("#dialogbox").text("Scientist: " + scientistaboutMommylines[3]);
    }, 42500);
    setTimeout(function()
    {
        $("#dialogbox").css("display", "none");
        $("#dialogbox").text("");
        $("#introimage").prop('src', '../Background/VHSPlayScenario/MommyVHSplay01.png');
        $("#backfromvhs02").css("display", "block");
    }, 65000);
}

$("#backfromvhs02").on("click", function()
{
    $("#backfromvhs02").remove();
    $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsLabA102.png');
    $("#playercharacter").css("display", "block");
});

$("#vhs_scene02").on("click", function()
{
    if(localStorage.getItem("mommy_longlegs_vhs_in_inventory") == "0")
    {
        $("#playercharacter").css("display", "none");
        $("#vhs_scene02").remove();
        $("#introimage").prop('src', '../Background/VHSPlayScenario/MommyVHSplay01.png');
        var puttinginvhs = new Audio('../Sounds/VHS Tape Going Into VHS Player sound effect.mp3');

        puttinginvhs.play();
        setTimeout(function()
        {
            VHS02_player();
            $("#introimage").prop('src', '../Background/VHSPlayScenario/MommyVHSplay02.png');
        }, 5000);
    }
});

//Third VHS playing scene handling
$("#bobbyvhs").on("click", function()
{
    $("#bobbyvhs").remove();
    localStorage.setItem("bobby_bearhug_vhs_in_inventory", "0");
});

function VHS03_player()
{
    var scientist02voice = new Audio('../Voice/VHSTapes/BobbyBearhugVHStapeFinal.mp3');
    scientist02voice.play();
    $("#dialogbox").css("display", "block");
    $("#dialogbox").text("Scientist: " + scientistaboutBobbylines[0]);
    setTimeout(function()
    {
        $("#dialogbox").text("Scientist: " + scientistaboutBobbylines[1]);
    }, 9500);
    setTimeout(function()
    {
        $("#dialogbox").text("Scientist: " + scientistaboutBobbylines[2]);
    }, 25000);
    setTimeout(function()
    {
        $("#dialogbox").css("display", "none");
        $("#dialogbox").text("");
        $("#introimage").prop('src', '../Background/VHSPlayScenario/BobbyVHSplay01.png');
        $("#backfromvhs03").css("display", "block");
    }, 40000);
}

$("#vhs_scene03").on("click", function()
{
    if(localStorage.getItem("bobby_bearhug_vhs_in_inventory") == "0")
    {
        $("#playercharacter").css("display", "none");
        $("#vhs_scene03").remove();
        $("#introimage").prop('src', '../Background/VHSPlayScenario/BobbyVHSplay01.png');
        var puttinginvhs = new Audio('../Sounds/VHS Tape Going Into VHS Player sound effect.mp3');

        puttinginvhs.play();
        setTimeout(function()
        {
            VHS03_player();
            $("#introimage").prop('src', '../Background/VHSPlayScenario/BobbyVHSplay02.png');
        }, 5000);
    }
});

$("#backfromvhs03").on("click", function()
{
    $("#backfromvhs03").remove();
    $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsLabA305.png');
    $("#playercharacter").css("display", "block");
});

//Fourth VHS playing scene handling
$("#occupationalphysicianvhs").on("click", function()
{
    $("#occupationalphysicianvhs").remove();
    localStorage.setItem("occupational_physician_vhs_in_inventory", "0");
});

function VHS04_player()
{
    var occupationalphysicianvoice = new Audio('../Voice/VHSTapes/OccupationalPhysicianVHSTapeFinal.mp3');
    occupationalphysicianvoice.play();
    $("#dialogbox").css("display", "block");
    $("#dialogbox").text("Occupational Physician: " + OccupationalPhysicianlines[0]);
    setTimeout(function()
    {
        $("#dialogbox").text("Occupational Physician: " + OccupationalPhysicianlines[1]);
    }, 21500);
    setTimeout(function()
    {
        $("#dialogbox").text("Occupational Physician: " + OccupationalPhysicianlines[2]);
    }, 47000);
    setTimeout(function()
    {
        $("#dialogbox").text("Occupational Physician: " + OccupationalPhysicianlines[3]);
    }, 57500);
    setTimeout(function()
    {
        $("#dialogbox").css("display", "none");
        $("#dialogbox").text("");
        $("#introimage").prop('src', '../Background/VHSPlayScenario/OccupationalPhysicianVHSplay01.png');
        $("#backfromvhs04").css("display", "block");
    }, 79000);
}

$("#vhs_scene04").on("click", function()
{
    if(localStorage.getItem("occupational_physician_vhs_in_inventory") == "0")
    {
        $("#playercharacter").css("display", "none");
        $("#vhs_scene04").remove();
        $("#introimage").prop('src', '../Background/VHSPlayScenario/OccupationalPhysicianVHSplay01.png');
        var puttinginvhs = new Audio('../Sounds/VHS Tape Going Into VHS Player sound effect.mp3');

        puttinginvhs.play();
        setTimeout(function()
        {
            VHS04_player();
            $("#introimage").prop('src', '../Background/VHSPlayScenario/OccupationalPhysicianVHSplay02.png');
        }, 5000);
    }
});

$("#backfromvhs04").on("click", function()
{
    $("#backfromvhs04").remove();
    $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsCaveOffice04.png');
    $("#playercharacter").css("display", "block");
});

//This function handles the D key based moving of the player character to the right. The handling is based on
//the gameimageborderright parameter, because it is used according to the responsivity values (full screen or laptop view).
//Each array value represents an image change scenario (going further on the map) or a game over event, or a dialog event starter point.
//The characternewposition parameter stands for the image change scenario.
function DKeyMove(gameimageborderright, characternewposition)
{
    var xpoz= parseInt($("#playercharacter").css("left"));
    localStorage.setItem("frontal_look", "1");
    console.log(xpoz);
    if(xpoz < gameimageborderright[0] - $("#playercharacter").width())
    {
        $("#playercharacter").css("left", xpoz+20);
        if($("#playercharacter").attr("src") == "../Sprites/Player/Player_basic_purplehand_yellowhand_other_usable.png")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_yellowhand_usable.png");
        }
        if($("#playercharacter").attr("src") == "../Sprites/Player/Player_basic_purplehand_bluehand_other_usable.png")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_bluehand_usable.png");
        }
        if($("#playercharacter").attr("src") == "../Sprites/Player/Player_basic_omnihand_bluehand_other_usable.png")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_bluehand_usable.png");
        }
        if($("#playercharacter").attr("src") == "../Sprites/Player/Player_basic_omnihand_yellowhand_other_usable.png")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_yellowhand_usable.png");
        }
        if($("#playercharacter").attr("src") == "../Sprites/Player/Player_basic_other_usable.png")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_usable.png");
        }
        if($("#playercharacter").attr("src") == "../Sprites/Player/Player_basic_flarehand_other_usable.png")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_flarehand_usable.png");
        }
        if($("#playercharacter").attr("src") == "../Sprites/Player/Player_basic_omnihand_other_usable.png")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_usable.png");
        }
        if($("#playercharacter").attr("src") == "../Sprites/Player/Player_basic_purplehand_other_usable.png")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_usable.png");
        }
    }
    if(xpoz == gameimageborderright[1] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/Labstoresection02.png"))
    {
        $("#playercharacter").css("left", characternewposition);
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/Labstoresection01.png');
        $(".trophybox").css("display", "flex");
    }
    if(xpoz == gameimageborderright[2] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA102.png"))
    {
        $("#playercharacter").css("left", characternewposition);
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsLabA101.png');
        $("#mommyvhs").css("display", "block");
        $("#vhs_scene02").css("display", "none");
    }
    if(xpoz == gameimageborderright[3] - $("#playercharacter").width() && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA103.png"))
    {
        $("#playercharacter").css("left", xpoz+20);
    }

    if(xpoz == gameimageborderright[4] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsStaffrooms04.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsStaffrooms03.png');
        $("#playercharacter").css("left", characternewposition);
        $("#powercellfordoor").css("display", "block");
        $("#occupationalphysiciannote").css("display", "block");
    }
    if(xpoz == gameimageborderright[5] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCaveStoreRoomStairs02.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsCaveStoreRoomStairs03.png');
        $("#playercharacter").css("left", characternewposition);
    }
    if(xpoz == gameimageborderright[6] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCaveStoreRoomStairs03.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsCaveStoreRoomStairs04.png');
        $("#playercharacter").css("left", characternewposition);
    }
    if(xpoz == gameimageborderright[7] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCaveStoreRoomStairs04.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsCaveElevatorRoom01brickblockadeon.png');
        $("#playercharacter").css("left", characternewposition);
        setTimeout(function()
        {
            $("#helperbox").css("display", "block");
            $("#helperbox").text("Use the yellow hand to crush the brick blockade, which has a special yellow hand crossed with a circle and a line!");
        },2000);
    
        setTimeout(function()
        {
            $("#helperbox").css("display", "none");
            $("#helperbox").text("");
        },7000);
    }
    if(xpoz == gameimageborderright[8] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCaveElevatorRoom01.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsCaveElevatorRoom02.png');
        $("#playercharacter").css("left", characternewposition);
    }
    if(xpoz == gameimageborderright[9] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCaveElevatorRoom02.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsCaveElevatorRoom03.png');
        $("#playercharacter").css("left", characternewposition);
    }
    if(xpoz == gameimageborderright[10] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCaveElevatorRoom03.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsCaveElevatorRoom04.png');
        $("#playercharacter").css("left", characternewposition);
        $("#levercollectable").css("display", "block");
    }
    if(xpoz == gameimageborderright[11] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCaveElevatorRoom04leverin.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsCorridor01.png');
        $("#playercharacter").css("left", characternewposition);
    }
    if(xpoz == gameimageborderright[12] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCorridor01.png"))
    {
        $("#returnofbluehand").css("display", "block");
    }
}

//This function handles the A key based moving of the player character to the left. The handling is based on
//the gameimageborderleft array parameter, because it is used according to the responsivity values (full screen or laptop view).
//Each array value represents an image change scenario (going further on the map) or a game over event, or a dialog event starter point.
//The characternewposition array parameter stands for the image change scenario.
function AKeyMove(gameimageborderleft, characternewposition)
{
    var xpoz= parseInt($("#playercharacter").css("left"));
    if(xpoz > 0)
    {
        $("#playercharacter").css("left", xpoz-20);
        localStorage.setItem("frontal_look", "0");
        if($("#playercharacter").attr("src") == "../Sprites/Player/Player_basic_purplehand_yellowhand_usable.png")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_yellowhand_other_usable.png");
        }
        if($("#playercharacter").attr("src") == "../Sprites/Player/Player_basic_purplehand_bluehand_usable.png")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_bluehand_other_usable.png");
        }
        if($("#playercharacter").attr("src") == "../Sprites/Player/Player_basic_omnihand_bluehand_usable.png")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_bluehand_other_usable.png");
        }
        if($("#playercharacter").attr("src") == "../Sprites/Player/Player_basic_omnihand_yellowhand_usable.png")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_yellowhand_other_usable.png");
        }
        if($("#playercharacter").attr("src") == "../Sprites/Player/Player_basic_usable.png")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_other_usable.png");
        }
        if($("#playercharacter").attr("src") == "../Sprites/Player/Player_basic_flarehand_usable.png")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_flarehand_other_usable.png");
        }
        if($("#playercharacter").attr("src") == "../Sprites/Player/Player_basic_omnihand_usable.png")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_other_usable.png");
        }
        if($("#playercharacter").attr("src") == "../Sprites/Player/Player_basic_purplehand_usable.png")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_other_usable.png");
        }
    }
    console.log(xpoz);
    if(xpoz == gameimageborderleft[0] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/Labstoresection01.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/Labstoresection02.png');
        $(".trophybox").css("display", "flex");
        $("#playercharacter").css("left", characternewposition[0]);
    }

    if(xpoz == gameimageborderleft[1] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA101.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsLabA102.png');
        $("#playercharacter").css("left", characternewposition[1]);
        $("#mommyvhs").css("display", "none");
        $("#vhs_scene02").css("display", "block");
    }
    if(xpoz == gameimageborderleft[2] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA301.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsLabA302laseron.png');
        $("#playercharacter").css("left", characternewposition[2]);
        $("#bobbyvhs").css("display", "none");
    }
    if(xpoz == gameimageborderleft[3] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA302laseron.png"))
    {
        $("#hands_to_use").css("display", "none");
        $("#playercharacter").css("display", "none");
        $("#introimage").prop("src", "../Background/GameOverMessages/Gameoverscreen01.png");
        setTimeout(function()
        {
            window.location = "act02.html";
        }, 5000);
    }
    if(xpoz == gameimageborderleft[4] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA302.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsLabA303.png');
        $("#playercharacter").css("left", characternewposition[3]);
        $("#purplepad").css("display", "block");
        $("#purplepad2").css("display", "block");
        $("#purplepad3").css("display", "block");
        setTimeout(function()
        {
            $("#helperbox").css("display", "block");
            $("#helperbox").text("Click on the purple squares on the launch pads to use the base property of the purple hand!");
        },2000);
    
        setTimeout(function()
        {
            $("#helperbox").css("display", "none");
            $("#helperbox").text("");
        },7000);
    }

    if(xpoz == gameimageborderleft[5] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsStaffrooms01.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsStaffrooms02.png');
        $("#playercharacter").css("left", characternewposition[4]);
        $("#pianosaurustrophy").css("display", "block");
    }

    if(xpoz == gameimageborderleft[6] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsStaffrooms03.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsStaffrooms04.png');
        $("#playercharacter").css("left", characternewposition[5]);
        $("#powercellfordoor").css("display", "none");
        $("#occupationalphysiciannote").css("display", "none");
        setTimeout(function()
        {
            $("#helperbox").css("display", "block");
            $("#helperbox").text("Use a battery to open the door!");
        },2000);
    
        setTimeout(function()
        {
            $("#helperbox").css("display", "none");
            $("#helperbox").text("");
        },7000);
    }

    if(xpoz == gameimageborderleft[7] && ($("#introimage").attr("src") == "../Background/Act02Battle/LabsTesterRoom01.png"))
    {
        $("#secondbossfight").css("display", "block");
    }

    if(xpoz == gameimageborderleft[8] && ($("#introimage").attr("src") == "../Background/Act02Battle/LabsTesterRoom01.png"))
    {
        $("#introimage").prop('src', '../Background/Act02Battle/LabsTesterRoom02.png');
        $("#playercharacter").css("left", characternewposition[6]);
    }

    if(xpoz == gameimageborderleft[9] && ($("#introimage").attr("src") == "../Background/Act02Battle/LabsTesterRoom02.png"))
    {
        $("#introimage").prop('src', '../Background/Act02Battle/LabsTesterRoom03.png');
        $("#playercharacter").css("left", characternewposition[7]);
        $("#oilcapsule").css("display", "block");
    }

    if(xpoz == gameimageborderleft[10] &&($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCaveOffice01.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsCaveOffice02.png');
        $("#playercharacter").css("left", characternewposition[8]);
        $("#watersurface").css("display", "block");
        var waterambient = new Audio("../Sounds/Water_Bubbles.mp3");
        waterambient.play();
        waterambient.volume = 0.7;
    }

    if(xpoz == gameimageborderleft[11] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCaveOffice02.png"))
    {
        $("#hands_to_use").css("display", "none");
        $("#playercharacter").css("display", "none");
        $("#introimage").prop("src", "../Background/GameOverMessages/Gameoverscreen03.png");
        setTimeout(function()
        {
            window.location = "act02.html";
        }, 5000);
    }

    if(xpoz == gameimageborderleft[12] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCaveOffice03.png"))
    {
        $("#hands_to_use").css("display", "none");
        $("#playercharacter").css("display", "none");
        $("#introimage").prop("src", "../Background/GameOverMessages/Gameoverscreen03.png");
        setTimeout(function()
        {
            window.location = "act02.html";
        }, 5000);
    }
    if(xpoz == gameimageborderleft[13] &&($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCaveOffice04.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsCaveStoreRoom01.png');
        $("#playercharacter").css("left", characternewposition[9]);
        $("#purplepad4").css("display", "block");
        $("#occupationalphysicianvhs").css("display", "none");
        $("#vhs_scene04").css("display", "none");
    }
    if(xpoz == gameimageborderleft[14] &&($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCaveStoreRoom01.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsCaveStoreRoom02.png');
        $("#playercharacter").css("left", characternewposition[10]);
        $("#doeytrophy").css("display", "block");
    }
    if(xpoz == gameimageborderleft[15] &&($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCaveStoreRoom02.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsCaveStoreRoom03.png');
        $("#playercharacter").css("left", characternewposition[11]);
        $("#engineernote").css("display", "block");
        $("#yellowhandcollectable").css("display", "block");
        $("#doeytrophy").css("display", "none");
    }
    if(xpoz == gameimageborderleft[16] &&($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCaveStoreRoom03.png"))
    {
        $("#playercharacter").css("left", characternewposition[12]);
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsCaveStoreRoomStairs01.png');
        $("#engineernote").css("display", "none");
    }    
}

//This function handles the S key based moving of the player character downward. The handling is based on
//the gameimageborderright parameter, because it is used according to the responsivity values (full screen or laptop view).
//Each array value represents an image change scenario (going further on the map) or a game over event, or a dialog event starter point.
//The characternewposition parameter stands for the image change scenario.
function SKeyMove(gameimageborderdown, characternewposition)
{
    var ypoz= parseInt($("#playercharacter").css("bottom"));
    console.log(ypoz);
    if(ypoz > gameimageborderdown[0])
    {
        $("#playercharacter").css("bottom", ypoz-20);
    }
    if(ypoz == gameimageborderdown[1] && $("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA303.png")
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsLabA304trapon.png');
        $("#playercharacter").css("bottom", characternewposition);
        setTimeout(function()
        {
            $("#helperbox").css("display", "block");
            $("#helperbox").text("Use the flare hand to remove the fire signed blockade!");
        },2000);
    
        setTimeout(function()
        {
            $("#helperbox").css("display", "none");
            $("#helperbox").text("");
        },7000);
    }
    if(ypoz == gameimageborderdown[2] && $("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA304.png")
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsLabA305.png');
        $("#vhs_scene03").css("display", "block");
        $("#playercharacter").css("bottom", characternewposition);
    }
    if(ypoz == gameimageborderdown[3] && $("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsStaffrooms02.png")
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsStaffrooms03.png');
        $("#occupationalphysiciannote").css("display", "block");
        $("#powercellfordoor").css("display", "block");
        $("#pianosaurustrophy").css("display", "none");
        $("#playercharacter").css("bottom", characternewposition);
    }
    if(ypoz == gameimageborderdown[4] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCaveOffice02.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsCaveOffice03.png');
        $("#playercharacter").css("bottom", characternewposition);
        $("#occupationalphysicianvhs").css("display", "block");
    }
    if(ypoz == gameimageborderdown[5] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCaveOffice03.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsCaveOffice04.png');
        $("#playercharacter").css("bottom", characternewposition);
        $("#occupationalphysicianvhs").css("display", "none");
        $("#vhs_scene04").css("display", "block");
    }
    if(ypoz == gameimageborderdown[6] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCaveStoreRoomStairs01.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsCaveStoreRoomStairs02.png');
        $("#playercharacter").css("bottom", characternewposition);
    }
    if(ypoz == gameimageborderdown[7] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCorridor01.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsCorridor02.png');
        $("#playercharacter").css("bottom", characternewposition);
    }
    if(ypoz == gameimageborderdown[8] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCorridor02.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsCorridor03.png');
        $("#playercharacter").css("bottom", characternewposition);
    }
    if(ypoz == gameimageborderdown[9] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCorridor03.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsCorridor04.png');
        $("#playercharacter").css("bottom", characternewposition);
    }
    if(ypoz == gameimageborderdown[10] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCorridor04.png"))
    {
        $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsCorridor05.png');
        $("#playercharacter").css("bottom", characternewposition);
    }
    if(ypoz == gameimageborderdown[11] && ($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCorridor05.png"))
    {
        $("#kissymissynewmessage").css("display", "block");
    }   
}

//This function handles the W key based moving of the player character upward. The handling is based on
//the gameimageborderright parameter, because it is used according to the responsivity values (full screen or laptop view).
//Each array value represents an image change scenario (going further on the map) or a game over event, or a dialog event starter point.
//The characternewposition parameter stands for the image change scenario.
function WKeyMove(gameimageborderup, characternewposition)
{
    var ypoz= parseInt($("#playercharacter").css("bottom"));
    console.log(ypoz);
    if(ypoz < gameimageborderup[0])
    {
        $("#playercharacter").css("bottom", ypoz+20);
    }
    if(ypoz == gameimageborderup[1])
    {
        if($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA102.png")
        {
            $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsLabA103.png');
            $("#playercharacter").css("bottom", characternewposition);
            $("#vhs_scene02").css("display", "none");
        }
    } 
    if(ypoz == gameimageborderup[2])
    {
        if($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA201.png")
        {
            $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsLabA202laseron.png');
            $("#playercharacter").css("bottom", characternewposition);
            setTimeout(function()
            {
                $("#helperbox").css("display", "block");
                $("#helperbox").text("Disable laser traps with the omnihand! You can't jump over them at all!");
            },2000);
        
            setTimeout(function()
            {
                $("#helperbox").css("display", "none");
                $("#helperbox").text("");
            },7000);
        }
        if($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA202.png")
        {
            $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsLabA203.png');
            $("#playercharacter").css("bottom", characternewposition);
        }
    }
    if(ypoz == gameimageborderup[3])
    {
        if($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA202laseron.png")
        {
            $("#hands_to_use").css("display", "none");
            $("#playercharacter").css("display", "none");
            $("#introimage").prop("src", "../Background/GameOverMessages/Gameoverscreen01.png");
            setTimeout(function()
            {
                window.location = "act02.html";
            }, 5000);
        }
    }
}

//Key event handling, which is essential for character movement and grabpack hand usage.
//Sprite switching occurs with D and A keys, character movement with D, A, S, W keys.
//Grabpack usage with mouse click and Q and E keys.
//xpoz and ypoz are for background image switching and collision checking.
$(document).keydown(function(e)
{
    //laptop view
    if(gamewidth == 1280)
    {
        //key D to move right
        if(e.keyCode==68)
        {
            DKeyMove([800, 680, 680, 680, 680, 680, 640, 680, 680, 640, 680, 680, 420], 40);
        }
        //key A to move left
        if(e.keyCode==65)
        {
            AKeyMove([0, 0, 0, 400, 0, 0, 0, 80, 40, 10, 0, 180, 180, 0, 20, 40, 0], ["640px", "640px", "640px", "640px", "640px", "640px", "130px", "110px", "640px", "640px", "640px", "640px", "640px"]);
        }
        //key S to move down
        if(e.keyCode==83)
        {
            SKeyMove([200, 190, 200, 200, 220, 200, 200, 240, 260, 220, 200, 260], "500px");
        }
        //key W to move up
        if(e.keyCode==87)
        {
            WKeyMove([600, 560, 550, 310], "170px");
        }
    }
    //full screen view
    else if(gamewidth == 1920)
    {
        //key D to move right
        if(e.keyCode==68)
        {
            DKeyMove([1000, 810, 810, 370, 810, 810, 790, 810, 790, 710, 810, 810, 510], 10);
        }
        //key A to move left
        if(e.keyCode==65)
        {
            AKeyMove([-10, -10, -10, 410, -10, -10, -10, 150, 10, -10, -10, 210, 210, -10, 0, 10, -10], ["770px", "770px", "770px", "770px", "770px", "770px", "130px", "110px", "770px", "770px", "770px", "770px", "770px"]);
        }
        //key S to move down
        if(e.keyCode==83)
        {
            SKeyMove([200, 150, 200, 200, 220, 200, 200, 240, 260, 220, 200, 260], "500px");
        }
        //key W to move up
        if(e.keyCode==87)
        {
            WKeyMove([600, 580, 610, 330], "150px");
        }
    }

    //Q key for using left hand
    if(e.keyCode==81)
    {
        if(localStorage.getItem("yellowhand_ready") == "0")
        {
            if($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsCaveElevatorRoom01brickblockadeon.png")
            {
                $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsCaveElevatorRoom01.png');
                setTimeout(function()
                {
                    $("#helperbox").css("display", "block");
                    $("#helperbox").text("No rectangle to click on, use the D key to enter that door!");
                },2000);
            
                setTimeout(function()
                {
                    $("#helperbox").css("display", "none");
                    $("#helperbox").text("");
                },7000);
            }
        }
    }
    //E key for using right hand
    if(e.keyCode==69)
    {  
        if(localStorage.getItem("omnihand_ready") == "0")
        {
            if($("#introimage").attr("src") == "../Background/Act02ScenesandMap/Labstoresection02.png")
            {
                $("#doortopass").css("display", "block");
            }
            
            if($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA202laseron.png")
            {
                $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsLabA202.png');
            }

            if($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA203.png")
            {
                $("#doortolaba3").css("display", "block"); 
            }

            if($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA302laseron.png")
            {
                $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsLabA302.png');
            }

            if($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA305.png")
            {
                $("#doortostaffrooms").css("display", "block");
            }

            if($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsStaffrooms04.png" && localStorage.getItem("powercell_in_inventory") == "0")
            {
                $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsStaffrooms04powercellin.png');
                $("#doortosecondbossfight").css("display", "block");
            }
        }

        if(localStorage.getItem("purplehand_ready") == '0')
        {
            if($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA103.png")
            {
                $("#doortolaba2").css("display", "block");             
            }  
        }
        
        if(localStorage.getItem("flarehand_ready") == '0')
        {
            if($("#introimage").attr("src") == "../Background/Act02ScenesandMap/LabsLabA304trapon.png")
            {
                $("#introimage").prop('src', '../Background/Act02ScenesandMap/LabsLabA304.png');
            }
            //This segment is an essential part of closing the boss chase sequence.
            //The case is that both here and at the boss chase sequence handler code segment does this have to be in, otherwise it won't work.
            if($("#introimage").attr("src") == "../Background/Act02Battle/LabsTesterRoom03.png" && localStorage.getItem("oilcapsule_in_inventory") == "0")
            {
                $("#bosscharacter").remove();
                $("#actualbosshealth").animate({width: "0px"}, 1000);
                $("#aftersecondbossbattle").css("display", "block");
                localStorage.setItem("flarehand_operational", "1");
            }
        }
    }
});