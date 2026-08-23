//The following arrays stand for the dialog scenarios and VHS play scenarios.
//The logic is that XY_character_line[0] and XY_character_speech_[0] are in pairs, and so on.
//XY_character_speech_[0] is played, and XY_character_line[0] is shown until the end of XY_character_speech_[0] audio file.
//Then it moves to the next one in XY_character_speech and XY_character_line arrays.
//Warden, Tod and Rebbeca lines go with the audio file in the VHS scene handling function, alongside with the introspeech array of audio files.
var wardenlines =
[
    "Greetings! My name is..ah…Man, I should stay anonym! I am often called, or they called me the Warden, who was the chief of the Prison section of Playtime Co factory.",
    "I remember that day as if it happened yesterday, even if it was 10 years ago, and…I..I remember how did I escape. The Doctor g..gave me a chance. However, with the price of handling him over the Omnihand, which I had, and…",
    "After the successful escape, I did have literally no dare to talk about what truly happened there. For 10 years! However, starting last week, I had..talk with several..relatives of every single visitor and every single worker, who were there at that day in that factory, and..they made confessions.",
    "And…what they said was truly..heart-gripping, because not only in the factory did these..TOYS attack, but in..every single household, where any family could buy even just a single toy from Playtime Co factory.",
    "They managed to take down those..toys on their own, with literally no help from the ..authorities, and…they remained silent…for 10 YEARS about this!",
    "And..after hearing more than 509 confessions out of the people, who had a dare to talk about it, I started to have a feeling, that whoever orchestrized this attack of the toys, might do it again, anytime at any other segment of the residental areas.",
    "Therefore, I am sending this tape to anybody, who had sheltered him or herself into a bastion or a stronghold near the factory, just in order to stay alive or stay away from the toys!",
    "That the orchestrator of that day should be stopped! That’s all for now! Thank you!"
];

var Todlines =
[
    "So, you are saying that this tape came from the Warden?",
    "What does he expect from us? We have just forgotten how to use...the grabpack! The basic tool, which was used by the workers of this factory to roam around, and actually, even if there are any grabpacks functioning in that factory, still they are heavily guarded by those toys!",
    "You mean that biologist? He was fired, not so many days before that day!",
    "And how on Earth are you going to convince him...to enter that factory?!",
    "I am sorry, Rebecca, but..I just simply can't allow you to do so! The risk is too high!"
];

var Rebeccalines =
[
    "Yes. I have no doubt about that. It must be him.",
    "You heard him right. There must be somebody who would stop the orchestrator of that day, and I think he meant..that specific man. That oddly behaving man.",
    "Yes. He must know the weaknesses of these toys. Therefore, he is our only option!",
    "I can send a letter to him, I remember his address. Also, I can send him this VHS tape about Poppy. In spite of the fact that she is..locked somewhere in the factory, she knows the further steps..in order to achieve our goal.",
    "Listen, Tod! The era of behaving like Fabius did, when Hannibal was roaming around Italy, is over for us! We need that biologist to enter Playtime Co factory, and stop that orchestrator of that day with the help of Poppy!"
];

var introspeech = new Array(10);
introspeech[0] = new Audio('../Voice/Introscene/StrongholdMan01.mp3');
introspeech[1] = new Audio('../Voice/Introscene/StrongholdWoman01.mp3');
introspeech[2] = new Audio('../Voice/Introscene/StrongholdMan02.mp3');
introspeech[3] = new Audio('../Voice/Introscene/StrongholdWoman02.mp3');
introspeech[4] = new Audio('../Voice/Introscene/StrongholdMan03.mp3');
introspeech[5] = new Audio('../Voice/Introscene/StrongholdWoman03.mp3');
introspeech[6] = new Audio('../Voice/Introscene/StrongholdMan04.mp3');
introspeech[7] = new Audio('../Voice/Introscene/StrongholdWoman04.mp3');
introspeech[8] = new Audio('../Voice/Introscene/StrongholdMan05.mp3');
introspeech[9] = new Audio('../Voice/Introscene/StrongholdWoman05.mp3');

var playerlines =
[
    "Aaaah, my head! What the....? How?",
    "Sooo? Peace?",
    "Listen up, you surrealistic droid or whatever you are! I don't care in which parts of the Labs you are, I am going to find you, and I am going to depart you, bit by bit! Now, where is that little damn girl?" 
];

var playerspeech = new Array(3);
playerspeech[0] = new Audio('../Voice/Act01/Player01Act01.mp3');
playerspeech[1] = new Audio('../Voice/Act01/Player02Act01.mp3');
playerspeech[2] = new Audio('../Voice/Act01/Player03Act01.mp3');

var HuggyWuggylines =
[
    "Well, first things first, I took a very long fall. You know what I am referring to, and Prototype found me and..hehehe...To tell the truth, he is not the finest surgeon at all.",
    "He forced me to get to this point in that state, and deal with you.",
    "Of course, but...I would like to get out of this factory as well, and I have a real home! Once I did give a try to get to that point, but they caught me in the woods!"
];

var huggywuggyspeech = new Array(3);
huggywuggyspeech[0] = new Audio('../Voice/Act01/HuggyWuggy01Act01.mp3');
huggywuggyspeech[1] = new Audio('../Voice/Act01/HuggyWuggy02Act01.mp3');
huggywuggyspeech[2] = new Audio('../Voice/Act01/HuggyWuggy03Act01.mp3');

var KissyMissylines = 
[
    "Oh my! You saw something from the past while you were unconscious, didn't you?",
    "Well, it took a while to find him and convince him to turn to our side, and also, you see..hehe..fix our hands and arms."
];

var kissymissyspeech = new Array(3);
kissymissyspeech[0] = new Audio('../Voice/Act01/KissyMissy01Act01.mp3');
kissymissyspeech[1] = new Audio('../Voice/Act01/KissyMissy02Act01.mp3');

var Prototypelines =
[
    "Well, well, well! Look at yourself, Huggy Wuggy! After all what I did to you, you have become a turncoat, haven't you?",
    "In case you are worried about her, let me tell you: I caught her! It was not a difficult case at all. Afterall, she didn't concentrate while crying and running, and in addition, she is not in the case, where you found her, but in a significantly stronger!",
    "(giggling) One of my soliders from the rest of my toy army is still hungry. Who is the Jack in the box? Boxy Boo?"
];

var prototypespeech = new Array(3);
prototypespeech[0] = new Audio('../Voice/Act01/Prototype01Act01.mp3');
prototypespeech[1] = new Audio('../Voice/Act01/Prototype02Act01.mp3');
prototypespeech[2] = new Audio('../Voice/Act01/Prototype03Act01.mp3');

//VHS_player function and vhs_scene div are meant to be for handling a VHS scene.
//Clicking on the message box, aka starting the VHS playing scene is possible only if the player has the VHS tape.
//After a sound effect does the vhs_player function get called, same logic like for the character line and speech arrays.
function VHS_player()
{
    var wardenvoice = new Audio('../Voice/VHSTapes/WardenVHSTapeFinal.mp3');
    wardenvoice.play();
    $("#dialogbox").css("display", "block");
    $("#dialogbox").text("Warden: " + wardenlines[0]);
    setTimeout(function()
    {
        $("#dialogbox").text("Warden: " + wardenlines[1]);
    }, 20000)
    setTimeout(function()
    {
        $("#dialogbox").text("Warden: " + wardenlines[2]);
    }, 44000)
    setTimeout(function()
    {
        $("#dialogbox").text("Warden: " + wardenlines[3]);
    }, 80000)
    setTimeout(function()
    {
        $("#dialogbox").text("Warden: " + wardenlines[4]);
    }, 104000)
    setTimeout(function()
    {
        $("#dialogbox").text("Warden: " + wardenlines[5]);
    }, 122000)
    setTimeout(function()
    {
        $("#dialogbox").text("Warden: " + wardenlines[6]);
    }, 151000)
    setTimeout(function()
    {
        $("#dialogbox").text("Warden: " + wardenlines[7]);
    }, 166000)
    setTimeout(function()
    {
        $("#introimage").prop('src', '../Background/VHSPlayScenario/Gamebeginningscene01.png');
        $("#dialogbox").text("");
    }, 176000); 
}

$("#vhs_scene01").on("click", function(event)
{
    $("#vhs_scene01").remove();
    var puttinginvhs = new Audio('../Sounds/VHS Tape Going Into VHS Player sound effect.mp3');

    puttinginvhs.play();
    setTimeout(function()
    {
        VHS_player();
        $("#introimage").prop('src', '../Background/VHSPlayScenario/Gamebeginningscene02.png');
    }, 5000);
});

//Dialog between characters Tod and Rebecca start after the VHS play scene.
setTimeout(function()
{
    $("#dialogbox").text("Tod: " + Todlines[0]);
    introspeech[0].play();
}, 187000); 

setTimeout(function()
{
    $("#dialogbox").text("Rebecca: " + Rebeccalines[0]);
    introspeech[1].play();
}, 196000);

setTimeout(function()
{
    $("#dialogbox").text("Tod: " + Todlines[1]);
    introspeech[2].play();
}, 206000);

setTimeout(function()
{
    $("#dialogbox").text("Rebecca: " + Rebeccalines[1]);
    introspeech[3].play();
}, 235000);

setTimeout(function()
{
    $("#dialogbox").text("Tod: " + Todlines[2]);
    introspeech[4].play();
}, 250000);

setTimeout(function()
{
    $("#dialogbox").text("Rebecca: " + Rebeccalines[2]);
    introspeech[5].play();
}, 258000);

setTimeout(function()
{
    $("#dialogbox").text("Tod: " + Todlines[3]);
    introspeech[6].play();
}, 266000);

setTimeout(function()
{
    $("#dialogbox").text("Rebecca: " + Rebeccalines[3]);
    introspeech[7].play();
}, 274000);

setTimeout(function()
{
    $("#dialogbox").text("Tod: " + Todlines[4]);
    introspeech[8].play();
}, 296000);

setTimeout(function()
{
    $("#dialogbox").text("Rebecca: " + Rebeccalines[4]);
    introspeech[9].play();
}, 305000);

//This shows the intro image after the dialog between Tod and Rebecca.
setTimeout(function()
{
    var intronoise = new Audio("../Sounds/Cinematic Boom - sound effect - [High quality].mp3");
    intronoise.play();
    $("#introimage").prop('src', '../Background/Otherintroimage.png');
    $("#dialogbox").css("display", "block");
    $("#dialogbox").text("");
}, 329000);

setTimeout(function()
{
    $("#startitalready").css("display", "block");
}, 333000);

/*Clicking on this button starts the first scene of the game after the intro.*/
$("#startitalready").on("click", function(event)
{
    $("#startitalready").css("display", "none");
    $("#vhs_scene01").remove();
    $("#introimage").prop('src', '../Background/Act01ScenesandMap/Labentrance.png');
    $("#dialogbox").css("display", "block");
    $("#dialogbox").text("Player: " + playerlines[0]);
    playerspeech[0].play();
    setTimeout(function()
    {
        $("#dialogbox").text("Kissy Missy: " + KissyMissylines[0]);
        kissymissyspeech[0].play();
    },6000);
    setTimeout(function()
    {
        $("#dialogbox").text("Huggy Wuggy: " + HuggyWuggylines[0]);
        huggywuggyspeech[0].play();
    },16000);
    setTimeout(function()
    {
        $("#dialogbox").text("Huggy Wuggy: " + HuggyWuggylines[1]);
        huggywuggyspeech[1].play();
    },36000);
    setTimeout(function()
    {
        $("#dialogbox").text("Kissy Missy: " + KissyMissylines[1]);
        kissymissyspeech[1].play();
    },43000);
    setTimeout(function()
    {
        $("#dialogbox").text("Player: " + playerlines[1]);
        playerspeech[1].play();
    },55000);
    setTimeout(function()
    {
        $("#dialogbox").text("Huggy Wuggy: " + HuggyWuggylines[2]);
        huggywuggyspeech[2].play();
    },58000);
    setTimeout(function()
    {
        $("#dialogbox").text("");
        $("#dialogbox").css("display", "none");
        $("#getoutoflabsection").css("display", "block");
    },75000);
});

/*This button starts the gameplay after the first scene.*/
$("#getoutoflabsection").on("click", function(event)
{
    $("#getoutoflabsection").css("display", "none");
    $("#introimage").prop('src', '../Background/Act01ScenesandMap/Labwelcomingroom.png');
    $("#playercharacter").css("display", "block");
    $("#hands_to_use").css("display", "flex");

    setTimeout(function()
    {
        $("#helperbox").css("display", "block");
        $("#helperbox").text("Use W, A, S and D keys to move around!");
    },2000);

    setTimeout(function()
    {
        $("#helperbox").css("display", "none");
        $("#helperbox").text("");
    },7000);
});

/*This button starts the prelude before the rpg fight.*/
$("#startrpgbattle").on("click", function(event)
{
    $("#dialogbox").css("display", "block");
    $("#startrpgbattle").css("display", "none");
    $("#dialogbox").text("Prototype: " + Prototypelines[0]);
    prototypespeech[0].play();
    setTimeout(function()
    {
        $("#dialogbox").text("Player: " + playerlines[2]);
        playerspeech[2].play();
    },11000);
    setTimeout(function()
    {
        $("#dialogbox").text("Prototype: " + Prototypelines[1]);
        prototypespeech[1].play();
    },31000);
    setTimeout(function()
    {
        $("#dialogbox").text("Prototype: " + Prototypelines[2]);
        prototypespeech[2].play();
    },56000);
    setTimeout(function()
    {
        $("#dialogbox").css("display", "none");
        $("#dialogbox").text("");
        $("#boxyfight").css("display", "block");
    }, 70000);
});

$("#boxyfight").on("click", function()
{
    window.location = "rpgofact01.html";
});

//choosing omnihand
$("#omnihand").on("click", function()
{
    $("#omnihand").css("border", "2px solid red");
    $("#purplehand").css("border", "none");
    $("#flarehand").css("border", "none");
    if(localStorage.getItem("frontal_look") == "0")
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_bluehand_other_usable.png");
    }
    if(localStorage.getItem("frontal_look") == "1")
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_bluehand_usable.png");
    }
});

//choosing purplehand
$("#purplehand").on("click", function()
{
    $("#purplehand").css("border", "2px solid red");
    $("#flarehand").css("border", "none");
    $("#omnihand").css("border", "none");
    if(localStorage.getItem("frontal_look") == "0")
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_bluehand_other_usable.png");
    }
    if(localStorage.getItem("frontal_look") == "1")
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_bluehand_usable.png");
    }
});

//choosing flarehand
$("#flarehand").on("click", function()
{
    $("#flarehand").css("border", "2px solid red");
    $("#purplehand").css("border", "none");
    $("#omnihand").css("border", "none");
    if(localStorage.getItem("frontal_look") == "0")
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_flarehand_bluehand_other_usable.png");
    }
    if(localStorage.getItem("frontal_look") == "1")
    {
        $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_flarehand_bluehand_usable.png");
    } 
});

//The following two helper variables are standing for responsivity based game object positioning
let gamewidth = window.innerWidth;
let gameheight = window.innerHeight;

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

//This function handles the D key based moving of the player character to the right. The handling is based on
//the gameimageborderright parameter, because it is used according to the responsivity values (full screen or laptop view).
function DKeyMove(gameimageborderright)
{
    var xpoz= parseInt($("#playercharacter").css("left"));
    localStorage.setItem("frontal_look", "1");
    if(xpoz < gameimageborderright - $("#playercharacter").width())
    {
        $("#playercharacter").css("left", xpoz+20);
        if($("#playercharacter").attr("src") == "../Sprites/Player/Player_basic_purplehand_bluehand_other_usable.png")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_bluehand_usable.png");
        }
        if($("#playercharacter").attr("src") == "../Sprites/Player/Player_basic_omnihand_bluehand_other_usable.png")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_bluehand_usable.png");
        }
        if($("#playercharacter").attr("src") == "../Sprites/Player/Player_basic_flarehand_bluehand_other_usable.png")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_flarehand_bluehand_usable.png");
        }
    }
}

//This function handles the W key based moving of the player character to the left. The handling is based on
//the gameimageborderleft array parameter, because it is used according to the responsivity values (full screen or laptop view).
//Each array value represents an image change scenario (going further on the map) or a game over event, or a dialog event starter point.
//The characternewposition parameter stands for the image change scenario.
function AKeyMove(gameimageborderleft, characternewposition)
{
    var xpoz= parseInt($("#playercharacter").css("left"));
    localStorage.setItem("frontal_look", "0");
    if(xpoz > 0)
    {
        $("#playercharacter").css("left", xpoz-20);
        if($("#playercharacter").attr("src") == "../Sprites/Player/Player_basic_purplehand_bluehand_usable.png")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_purplehand_bluehand_other_usable.png");
        }
        if($("#playercharacter").attr("src") == "../Sprites/Player/Player_basic_omnihand_bluehand_usable.png")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_omnihand_bluehand_other_usable.png");
        }
        if($("#playercharacter").attr("src") == "../Sprites/Player/Player_basic_flarehand_bluehand_usable.png")
        {
            $("#playercharacter").prop("src", "../Sprites/Player/Player_basic_flarehand_bluehand_other_usable.png");
        }
    }
    console.log(xpoz);
    if(xpoz == gameimageborderleft[0] && ($("#introimage").attr("src") == "../Background/Act01ScenesandMap/Labwelcomingroom.png"))
    {
        $("#introimage").prop('src', '../Background/Act01ScenesandMap/Labwelcomingroompart2.png');
        $("#playercharacter").css("left", characternewposition);
    }

    if(xpoz == gameimageborderleft[1] && ($("#introimage").attr("src") == "../Background/Act01ScenesandMap/Labwelcomingroompart2.png"))
    {
        $("#introimage").css("filter", "brightness(50%)");
        $("#startrpgbattle").css("display", "block");
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
            AKeyMove([0, 60], "640px");
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
            AKeyMove([-10, 90], "770px");
        }
    }

    //key S to move down
    if(e.keyCode==83)
    {
        var ypoz= parseInt($("#playercharacter").css("bottom"));
        if(ypoz > 200)
        {
            $("#playercharacter").css("bottom", ypoz-20);
        } 
    }
    //key W to move up
    if(e.keyCode==87)
    {
        var ypoz= parseInt($("#playercharacter").css("bottom"));
        if(ypoz < 600)
        {
            $("#playercharacter").css("bottom", ypoz+20);
        } 
    }
});