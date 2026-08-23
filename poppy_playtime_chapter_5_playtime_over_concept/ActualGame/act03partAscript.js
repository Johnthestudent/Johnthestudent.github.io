//The following arrays stand for the dialog scenarios.
//The logic is that XY_character_line[0] and XY_character_speech_[0] are in pairs, and so on.
//XY_character_speech_[0] is played, and XY_character_line[0] is shown until the end of XY_character_speech_[0] audio file.
//Then it moves to the next one in XY_character_speech and XY_character_line arrays.
//PrototypeVHSlines go with the single audio file in the VHS scene handling functions.
var PrototypeVHSlines = 
[
    "Alright! Listen, fellow toy soldiers of mine! From this day, you are going to be stationed at several parts of this factory. NO OBJECTIONS!",
    "Huggy Wuggy! Close to the entrance!",
    "Mommy Longlegs! Around the game station!",
    "Smiling critters! Right at Playcare, Playhouse!",
    "And as for the doctor, in his own turtle shell!"
];

var PrototypePreludelines =
[
    "There, there! These two monkeys, these two traitors won't intervene!",
    "Oh! Me silly not introducing myself in front of a human! Nevermind! Here I am! Greetings! My name is the Prototype! I assume you heard a few information about me, DIDN'T YOU?",
    "While you got know Poppy as a doll, who was angry at me, guess what: for a while, a pretty while we were friends. However, as she got tortured more and more by those wicked mad scientists, she got more bitter.",
    "So did I. And as for the rest of the toys, the same. Exactly the same for such treatment. Those scientists sticked us, beat us, tore us, and they DIDN'T FEEL IT!",
    "She asked me once to deal with those bad people, and I had a splendid idea: the Hour of Joy. I commanded every single toy, whom I could, just to tear down those humans,",
    "and after that glorious event, Poppy just snapped, stating that this event didn't happen according to her will. We just got an argument, and I just locked her into a case.",
    "Not fainting for that? Good, because I do have an offer for you! Me, Prototype, or project 1-0-0-6, as they called me, probably the very first creation of Playtime Co alongside with Poppy, I offer you to join my side to work with me!",
    "Oh, sorry, but in spite of your yes, I DON'T TRUST HUMANS TO WORK WITH!",
    "No? Fine! In that case let's us have a duel! Anything you have, anything you know are free to use. NEITHER WILL I HOLD BACK ANYTHING!"
];

var prototypespeech = new Array(7);
prototypespeech[0] = new Audio('../Voice/Act03/Prototype01Act03.mp3');
prototypespeech[1] = new Audio('../Voice/Act03/Prototype02Act03.mp3');
prototypespeech[2] = new Audio('../Voice/Act03/Prototype03Act03.mp3');
prototypespeech[3] = new Audio('../Voice/Act03/Prototype04Act03.mp3');
prototypespeech[4] = new Audio('../Voice/Act03/Prototype05Act03.mp3');
prototypespeech[5] = new Audio('../Voice/Act03/Prototype06Act03.mp3');
prototypespeech[6] = new Audio('../Voice/Act03/Prototype07Act03.mp3');

//chosing omnihand
$("#omnihand").on("click", function()
{
    $("#omnihand").css("border", "2px solid red");
    $("#purplehand").css("border", "none");
    $("#flarehand").css("border", "none");
    localStorage.setItem("omnihand_ready", "0");
    localStorage.setItem("purplehand_ready", "1");
    if(localStorage.getItem("frontal_look") == "0")
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_other_usable.png");
    }
    if(localStorage.getItem("frontal_look") == "1")
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_usable.png");
    }
    if(localStorage.getItem("yellowhand_ready") == "0" && localStorage.getItem("omnihand_ready") == "0")
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
    if(localStorage.getItem("bluehand_ready") == '0' && localStorage.getItem("omnihand_ready") == "0")
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
    localStorage.setItem("omnihand_ready", "1");
    if(localStorage.getItem("frontal_look") == "0")
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_other_usable.png");
    }
    if(localStorage.getItem("frontal_look") == "1")
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_usable.png");
    }
    
    if(localStorage.getItem("yellowhand_ready") == "0" && localStorage.getItem("purplehand_ready") == "0")
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
    if(localStorage.getItem("bluehand_ready") == '0' && localStorage.getItem("purplehand_ready") == "0")
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

//chosing yellowhand
$("#yellowhand").on("click", function()
{
    $("#bluehand").css("border", "none");
    $("#yellowhand").css("border", "2px solid red");
    localStorage.setItem("yellowhand_ready", "0");
    localStorage.setItem("bluehand_ready", "1");
    if(localStorage.getItem("frontal_look") == "0")
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_yellowhand_other_usable.png");
    }
    if(localStorage.getItem("frontal_look") == "1")
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_yellowhand_usable.png");
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
    $("#yellowhand").css("border", "none");
    $("#bluehand").css("border", "2px solid red");
    localStorage.setItem("bluehand_ready", "0");
    localStorage.setItem("yellowhand_ready", "1");
    if(localStorage.getItem("frontal_look") == "0")
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_bluehand_other_usable.png");
    }
    if(localStorage.getItem("frontal_look") == "1")
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_bluehand_usable.png");
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

$("#bronnote").on("click", function()
{
    $("#bronnotetext").css("display", "block");
    $("#bronnote").remove();
});

$("#bronnotetext button").on("click", function()
{
    $("#bronnotetext").remove();
});

$("#catbeenote").on("click", function()
{
    $("#catbeenotetext").css("display", "block");
    $("#catbeenote").remove();
});

$("#catbeenotetext button").on("click", function()
{
    $("#catbeenotetext").remove();
});

$("#stellanote").on("click", function()
{
    $("#stellanotetext").css("display", "block");
    $("#stellanote").remove();
});

$("#stellanotetext button").on("click", function()
{
    $("#stellanotetext").remove();
});

$("#lemontrophy").on("click", function()
{
    $("#lemontrophy").remove();
});


//Clicking on the purplepad id square imitates the long jump with the purple hand.
//Warning: gamewidth responsivity checking has to be inside the body of the function, otherwise, it won't allow key operations working!
$("#purplepad").on("click", function()
{
    if($("#introimage").attr("src") == "../Background/Act03ScenesandMap/LabsTopSecurePlace04.png" && localStorage.getItem("purplehand_ready") == '0')
    {
        if(gamewidth == 1280)
        {
            $("#playercharacter").animate({"left": "250px"});
        }
        else if(gamewidth == 1920)
        {
            $("#playercharacter").animate({"left": "290px"});
        }
        $("#purplepad").css("display", "none");
    }
});

//prototypevhs id image, VHS05_player function, #backfromvhs05 button and vhs_scene05 div are meant to be for handling a VHS scene.
//Player clicks on the vhs image, then on the vhs_scene05 div, which is a message box over a VCR.
//Clicking on the message box, aka starting the VHS playing scene is possible only if the player has the VHS tape.
//Having the VHS tape is checked via a localstorage value.
//After a sound effect does the vhs_player function get called, same logic like for the character line and speech arrays.
$("#prototypevhs").on("click", function()
{
    $("#prototypevhs").remove();
    localStorage.setItem("prototype_vhs_in_inventory", "0");
});

function VHS05_player()
{
    var prototypevhsvoice = new Audio('../Voice/VHSTapes/PrototypeVHSTapeFinal.mp3');
    prototypevhsvoice.play();
    $("#dialogbox").css("display", "block");
    $("#dialogbox").text("Prototype: " + PrototypeVHSlines[0]);
    setTimeout(function()
    {
        $("#dialogbox").text("Prototype: " + PrototypeVHSlines[1]);
    }, 18500);
    setTimeout(function()
    {
        $("#dialogbox").text("Prototype: " + PrototypeVHSlines[2]);
    }, 23500);
    setTimeout(function()
    {
        $("#dialogbox").text("Prototype: " + PrototypeVHSlines[3]);
    }, 28500);
    setTimeout(function()
    {
        $("#dialogbox").text("Prototype: " + PrototypeVHSlines[4]);
    }, 37000);
    setTimeout(function()
    {
        $("#dialogbox").css("display", "none");
        $("#dialogbox").text("");
        $("#introimage").prop('src', '../Background/VHSPlayScenario/PrototypeVHSplay01.png');
        $("#backfromvhs05").css("display", "block");
    }, 46000);
}

$("#backfromvhs05").on("click", function()
{
    $("#backfromvhs05").remove();
    $("#introimage").prop('src', '../Background/Act03ScenesandMap/LabsTopSecurePlace07.png');
    $("#playercharacter").css("display", "block");
});

$("#vhs_scene05").on("click", function()
{
    if(localStorage.getItem("prototype_vhs_in_inventory") == "0")
    {
        $("#playercharacter").css("display", "none");
        $("#vhs_scene05").remove();
        $("#introimage").prop('src', '../Background/VHSPlayScenario/PrototypeVHSplay01.png');
        var puttinginvhs = new Audio('../Sounds/VHS Tape Going Into VHS Player sound effect.mp3');

        puttinginvhs.play();
        setTimeout(function()
        {
            VHS05_player();
            $("#introimage").prop('src', '../Background/VHSPlayScenario/PrototypeVHSplay02.png');
        }, 5000);
    }
});

//Clicking on this button starts Prototype speech before the final battle.
$("#preludetofinalbattle").on("click", function()
{
    $("#preludetofinalbattle").remove();
    $("#playercharacter").css("display", "none");
    $("#hands_to_use").css("display", "none");
    $("#introimage").prop('src', '../Background/Act03ScenesandMap/Finalbattleprelude01.png');
    var jumpscare = new Audio('../Music/JohnPogany - Danger.ogg');
    jumpscare.play();
    setTimeout(function()
    {
        $("#introimage").prop('src', '../Background/Act03ScenesandMap/Finalbattleprelude02.png');
    }, 3000);
    setTimeout(function()
    {
        $("#dialogbox").css("display", "block");
        $("#dialogbox").text("Prototype: " + PrototypePreludelines[0]);
        prototypespeech[0].play();
    }, 4000);
    setTimeout(function()
    {
        $("#dialogbox").css("display", "none");
        $("#dialogbox").text("");
    }, 13000);
    setTimeout(function()
    {
        $("#introimage").prop('src', '../Background/Act03ScenesandMap/Finalbattleprelude03.png');
    }, 14000);
    setTimeout(function()
    {
        $("#dialogbox").css("display", "block");
        $("#dialogbox").text("Prototype: " + PrototypePreludelines[1]);
        prototypespeech[1].play();
    }, 15000);
    setTimeout(function()
    {
        $("#dialogbox").css("display", "none");
        $("#dialogbox").text("");
    }, 37000);
    setTimeout(function()
    {
        $("#introimage").prop('src', '../Background/Act03ScenesandMap/Finalbattleprelude04.png');
    }, 38000);
    setTimeout(function()
    {
        $("#dialogbox").css("display", "block");
        $("#dialogbox").text("Prototype: " + PrototypePreludelines[2]);
        prototypespeech[2].play();
    }, 39000);
    setTimeout(function()
    {
        $("#dialogbox").text("Prototype: " + PrototypePreludelines[3]);
    }, 64000);
    setTimeout(function()
    {
        $("#dialogbox").text("Prototype: " + PrototypePreludelines[4]);
        prototypespeech[3].play();
    }, 85000);
    setTimeout(function()
    {
        $("#dialogbox").text("Prototype: " + PrototypePreludelines[5]);
    }, 105000);
    setTimeout(function()
    {
        $("#dialogbox").css("display", "none");
        $("#dialogbox").text("");
    }, 125000);
    setTimeout(function()
    {
        $("#introimage").prop('src', '../Background/Act03ScenesandMap/Finalbattleprelude05.png');
    }, 126000);
    setTimeout(function()
    {
        $("#introimage").prop('src', '../Background/Act03ScenesandMap/Finalbattleprelude05.png');
        $("#dialogbox").css("display", "block");
        $("#dialogbox").text("Prototype: " + PrototypePreludelines[6]);
        prototypespeech[4].play();
    }, 127000);
    setTimeout(function()
    {
        $("#dialogbox").css("display", "none");
        $("#dialogbox").text("");
        $("#optionsbeforebattle").css("display", "block");
    }, 159000);
});

//Clicking on this button leads to a gameover scenario.
$("#sayingyes").on("click", function()
{
    $("#sayingyes").remove();
    $("#sayingno").remove();
    $("#dialogbox").css("display", "block");
    $("#dialogbox").text("Prototype: " + PrototypePreludelines[7]);
    prototypespeech[5].play();
    setTimeout(function()
    {
        $("#hands_to_use").css("display", "none");
        $("#dialogbox").css("display", "none");
        $("#dialogbox").text("");
        $("#introimage").prop("src", "../Background/GameOverMessages/Gameoverscreen05.png");
    }, 9000);
    setTimeout(function()
    {
        window.location = "act03partA.html";
    }, 14000);
});

//Clicking on this button leads to the final fight against the Prototype.
$("#sayingno").on("click", function()
{
    $("#sayingyes").remove();
    $("#sayingno").remove();
    $("#dialogbox").css("display", "block");
    $("#dialogbox").text("Prototype: " + PrototypePreludelines[8]);
    prototypespeech[6].play();
    setTimeout(function()
    {
        $("#dialogbox").css("display", "none");
        $("#dialogbox").text("");
        $("#toprototypefight").css("display", "block");
    }, 18000);
});

//Clicking on this button ends act03partA and starts the final fight.
$("#toprototypefight").on("click", function()
{
    window.location = "prototpyefight.html";
});

//The following two helper variables are standing for responsivity based game object positioning
let gamewidth = window.innerWidth;
let gameheight = window.innerHeight;

//This function handles the D key based moving of the player character to the right. The handling is based on
//the gameimageborderright parameter, because it is used according to the responsivity values (full screen or laptop view).
function DKeyMove(gameimageborderright)
{
    var xpoz= parseInt($("#playercharacter").css("left"));
    localStorage.setItem("frontal_look", "1");
    console.log(xpoz);  //testing purposes

    if(xpoz < gameimageborderright - $("#playercharacter").width())
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
    }
}

//This function handles the W key based moving of the player character to upward. The handling is based on
//the gameimageupperborder parameter, because it is used according to the responsivity values (full screen or laptop view).
function WKeyMove(gameimageupperborder)
{
    var ypoz= parseInt($("#playercharacter").css("bottom"));
    console.log(ypoz);
    if(ypoz < gameimageupperborder)
    {
        $("#playercharacter").css("bottom", ypoz+20);
    }
}

//This function handles the W key based moving of the player character to the left. The handling is based on
//the gameimageborderleft array parameter, because it is used according to the responsivity values (full screen or laptop view).
//Each array value represents an image change scenario (going further on the map) or a game over event, or a dialog event starter point.
//The characternewposition parameter stands for the image change scenario.
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
    }
    if(xpoz == gameimageborderleft[0] && $("#introimage").attr("src") == "../Background/Act03ScenesandMap/LabsTopSecurePlace01trapon.png")
    {
        $("#hands_to_use").css("display", "none");
        $("#playercharacter").css("display", "none");
        $("#bronnote").css("display", "none");
        $("#introimage").prop("src", "../Background/GameOverMessages/Gameoverscreen04.png");
        setTimeout(function()
        {
            window.location = "act03partA.html";
        }, 5000);
    }
    if(xpoz == gameimageborderleft[1] && $("#introimage").attr("src") == "../Background/Act03ScenesandMap/LabsTopSecurePlace01traphalfon.png")
    {
        $("#hands_to_use").css("display", "none");
        $("#playercharacter").css("display", "none");
        $("#bronnote").css("display", "none");
        $("#introimage").prop("src", "../Background/GameOverMessages/Gameoverscreen04.png");
        setTimeout(function()
        {
            window.location = "act03partA.html";
        }, 5000);
    }
    if(xpoz == gameimageborderleft[2] && $("#introimage").attr("src") == "../Background/Act03ScenesandMap/LabsTopSecurePlace01.png")
    {
        $("#introimage").prop('src', '../Background/Act03ScenesandMap/LabsTopSecurePlace02laseron.png');
        $("#bronnote").css("display", "none");
        $("#playercharacter").css("left", characternewposition);
        $("#lemontrophy").css("display", "block");
    }
    if(xpoz == gameimageborderleft[3] && $("#introimage").attr("src") == "../Background/Act03ScenesandMap/LabsTopSecurePlace02laseron.png")
    {
        $("#hands_to_use").css("display", "none");
        $("#playercharacter").css("display", "none");
        $("#bronnote").css("display", "none");
        $("#lemontrophy").css("display", "none");
        $("#introimage").prop("src", "../Background/GameOverMessages/Gameoverscreen04.png");
        setTimeout(function()
        {
            window.location = "act03partA.html";
        }, 5000);
    }
    if(xpoz == gameimageborderleft[4] && $("#introimage").attr("src") == "../Background/Act03ScenesandMap/LabsTopSecurePlace02.png")
    {
        $("#introimage").prop('src', '../Background/Act03ScenesandMap/LabsTopSecurePlace03laseron.png');
        $("#playercharacter").css("left", characternewposition);
        $("#catbeenote").css("display", "block");
        $("#lemontrophy").css("display", "none");
    }
    if(xpoz == gameimageborderleft[5] && $("#introimage").attr("src") == "../Background/Act03ScenesandMap/LabsTopSecurePlace03laseron.png")
    {
        $("#hands_to_use").css("display", "none");
        $("#playercharacter").css("display", "none");
        $("#introimage").prop("src", "../Background/GameOverMessages/Gameoverscreen04.png");
        $("#catbeenote").css("display", "none");
        setTimeout(function()
        {
            window.location = "act03partA.html";
        }, 5000);
    }
    if(xpoz == gameimageborderleft[6] && $("#introimage").attr("src") == "../Background/Act03ScenesandMap/LabsTopSecurePlace03.png")
    {
        $("#introimage").prop('src', '../Background/Act03ScenesandMap/LabsTopSecurePlace04.png');
        $("#playercharacter").css("left", characternewposition);
        $("#catbeenote").css("display", "none");
    }
    if(xpoz == gameimageborderleft[7] && $("#introimage").attr("src") == "../Background/Act03ScenesandMap/LabsTopSecurePlace04.png")
    {
        $("#introimage").prop('src', '../Background/Act03ScenesandMap/LabsTopSecurePlace05.png');
        $("#playercharacter").css("left", characternewposition);
        $("#stellanote").css("display", "block");
    }
    if(xpoz == gameimageborderleft[8] && $("#introimage").attr("src") == "../Background/Act03ScenesandMap/LabsTopSecurePlace05.png")
    {
        $("#introimage").prop('src', '../Background/Act03ScenesandMap/LabsTopSecurePlace06.png');
        $("#playercharacter").css("left", characternewposition);
        $("#stellanote").css("display", "none");
    }
    if(xpoz == gameimageborderleft[9] && $("#introimage").attr("src") == "../Background/Act03ScenesandMap/LabsTopSecurePlace06.png")
    {
        $("#introimage").prop('src', '../Background/Act03ScenesandMap/LabsTopSecurePlace07.png');
        $("#playercharacter").css("left", characternewposition);
        $("#stellanote").css("display", "none");
        $("#prototypevhs").css("display", "block");
        $("#vhs_scene05").css("display", "block");
    }
    if(xpoz == gameimageborderleft[10] && $("#introimage").attr("src") == "../Background/Act03ScenesandMap/LabsTopSecurePlace07.png")
    {
        $("#introimage").prop('src', '../Background/Act03ScenesandMap/LabsTopSecurePlace08.png');
        $("#playercharacter").css("left", characternewposition);
        $("#prototypevhs").css("display", "none");
        $("#vhs_scene05").css("display", "none");
    }
    if(xpoz == gameimageborderleft[11] && $("#introimage").attr("src") == "../Background/Act03ScenesandMap/LabsTopSecurePlace08.png")
    {
        $("#preludetofinalbattle").css("display", "block");
    }
    console.log(xpoz);
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
            DKeyMove(800);
        }

        //key W to move up
        if(e.keyCode==87)
        {
            WKeyMove(550);
        }

        //key A to move left
        if(e.keyCode==65)
        {
            AKeyMove([200, 200, 0, 420, 0, 580, 0, 10, 20, 0, 20, 420], "640px");
        }
    }
    //full screen view
    else if(gamewidth == 1920)
    {
        //key D to move right
        if(e.keyCode==68)
        {
            DKeyMove(1000);
        }
        
        //key W to move up
        if(e.keyCode==87)
        {
            WKeyMove(600);
        }

        //key A to move left
        if(e.keyCode==65)
        {
            AKeyMove([230, 230, -10, 530, -10, 690, -10, 10, -10, 10, -10, 410], "770px");
        }
    }

    //key S to move down
    if(e.keyCode==83)
    {
        var ypoz= parseInt($("#playercharacter").css("bottom"));
        console.log(ypoz);
        if(ypoz > 200)
        {
            $("#playercharacter").css("bottom", ypoz-20);
        }
    }
    //Q key for using left hand
    if(e.keyCode==81)
    {
        if(localStorage.getItem("bluehand_ready") == "0")
        {
            if($("#introimage").attr("src") == "../Background/Act03ScenesandMap/LabsTopSecurePlace01trapon.png")
            {
                $("#introimage").prop("src", "../Background/Act03ScenesandMap/LabsTopSecurePlace01traphalfon.png");
            }
        }
    }
    //E key for using right hand
    if(e.keyCode==69)
    {  
        if(localStorage.getItem("omnihand_ready") == "0")
        {
            if($("#introimage").attr("src") == "../Background/Act03ScenesandMap/LabsTopSecurePlace01traphalfon.png")
            {
                $("#introimage").prop("src", "../Background/Act03ScenesandMap/LabsTopSecurePlace01.png");
            }
            if($("#introimage").attr("src") == "../Background/Act03ScenesandMap/LabsTopSecurePlace02laseron.png")
            {
                $("#introimage").prop("src", "../Background/Act03ScenesandMap/LabsTopSecurePlace02.png");
            }
            if($("#introimage").attr("src") == "../Background/Act03ScenesandMap/LabsTopSecurePlace03laseron.png")
            {
                $("#introimage").prop("src", "../Background/Act03ScenesandMap/LabsTopSecurePlace03.png");
            }
            if($("#introimage").attr("src") == "../Background/Act03ScenesandMap/LabsTopSecurePlace04.png")
            {
                $("#purplepad").css("display", "block");
            }
        }
    }
});