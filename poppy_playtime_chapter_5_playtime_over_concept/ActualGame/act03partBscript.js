//The following arrays stand for the dialog scenarios.
//The logic is that XY_character_line[0] and XY_character_speech_[0] are in pairs, and so on.
//XY_character_speech_[0] is played, and XY_character_line[0] is shown until the end of XY_character_speech_[0] audio file.
//Then it moves to the next one in XY_character_speech and XY_character_line arrays.
var MaleOrphan1lines =
[
    "What is going on?",
    "Wait! Where is Poppy?",
    "Could you lead us to them?"
];

var maleorphan1speech = new Array(3);
maleorphan1speech[0] = new Audio('../Voice/Act03/Male orphan 1_1.mp3');
maleorphan1speech[1] = new Audio('../Voice/Act03/Male orphan 1 again_1.mp3');
maleorphan1speech[2] = new Audio('../Voice/Act03/Male orphan 1 final_1.mp3');

var MaleOrphan2lines =
[
    "Huggy Wuggy? Kissy Missy?",
    "Caroline? (shocked, recognizing his little sister)",
    "What happened?"
];

var maleorphan2speech = new Array(3);
maleorphan2speech[0] = new Audio('../Voice/Act03/Maleorphan2_1.mp3');
maleorphan2speech[1] = new Audio('../Voice/Act03/Maleorphan2_2.mp3');
maleorphan2speech[2] = new Audio('../Voice/Act03/Maleorphan2_3.mp3');

var FemaleOrphan1lines =
[
    "Looks like we got awake by somebody!",
    "Finally! No more food type, which we dread of, no more toying on us by the Prototype!"
];

var femaleorphan1speech = new Array(2);
femaleorphan1speech[0] = new Audio('../Voice/Act03/Femaleorphan1_1.mp3');
femaleorphan1speech[1] = new Audio('../Voice/Act03/Femaleorphan1_2.mp3');

var FemaleOrphan2lines =
[
    "And Dr. Jasper Chamberlain?",
    "After her!"
];

var femaleorphan2speech = new Array(2);
femaleorphan2speech[0] = new Audio('../Voice/Act03/Femaleorphan2_1.mp3');
femaleorphan2speech[1] = new Audio('../Voice/Act03/Femaleorphan2_2.mp3');

var Poppylines =
[
    "You took him down, and you can do the same with me, I know I deserve it. But before that, as the right for last words, I have to tell you who I am and why I am like this! Elliot Ludwig was my father, and it was his decision…(sniffs)",
    "After losing my mother, papa became restless. He was afraid of losing me, so he asked for the most daredevil surgeons of the world. While they were called heretics by medicine, only they could stretch the limits like Leonardo Da Vinci.",
    "They were requested to shrink me: only the essential organs, into a doll body. The operation was successful, but…the paper records and the recipe were destroyed. Daddy was afraid of consequences related to this move.",
    "He forced the surgeons with oath not to tell anyone the recipe or what happened. Not even the workers and employees of his factory could speak about a speaking doll, who was actually a human. As for me, I was like a flea put into a closed bottle, and only specific sentences I were allowed to let out from my mouth.",
    "As Leith Pierre took the ownership of the factory, many things changed, into worse! While I could move around and speak freely, not only once were the given tasks regarding the other humans turned into toys beyond my limits.",
    "They tried to recreate the process and recipe via many experiments, and they were merely close to the original. To my honest, most of the experiments did not have the same amount of restrain like I had. Yet, 1006 was treated more well than how I was.",
    "I didn’t get as much attention as I wanted, and they admired him more than me. Eventually, he learned their personality and style. That’s why I hated him and this place. As the number of incidents increased rapidly over the years, I wanted to end the torture. I asked Prototype to do something with the bad people.",
    "He commanded many experiments under this operation: The Hour of Joy. However, this didn’t happen according to my expectations. I rebuked him for being like how the bad people were, he locked me into a case, for hoping that I will change my opinion.",
    "Little did Prototype know that I had been planning during that time once I get out by the help of anybody, I will fix everything. It was you, who opened my case, and did literally everything I told you to, without raising any voice.",
    "In spite of the fact that I numerously let you down, you endured. With little assurance, you’ve done the impossible. You saw literally all segments of this facility, except for some hidden staircases and escape corridors.",
    "Before you crush me into pieces, could you tell me what made you come back to Playtime Co?",
    "(looks at the letter) Wait! I recognize this writing style! Rebecca Dune!"
];

var poppyspeech = new Array(12);
poppyspeech[0] = new Audio('../Voice/Act03/Poppy01Act03.mp3');
poppyspeech[1] = new Audio('../Voice/Act03/Poppy02Act03.mp3');
poppyspeech[2] = new Audio('../Voice/Act03/Poppy03Act03.mp3');
poppyspeech[3] = new Audio('../Voice/Act03/Poppy04Act03.mp3');
poppyspeech[4] = new Audio('../Voice/Act03/Poppy05Act03.mp3');
poppyspeech[5] = new Audio('../Voice/Act03/Poppy06Act03.mp3');
poppyspeech[6] = new Audio('../Voice/Act03/Poppy07Act03.mp3');
poppyspeech[7] = new Audio('../Voice/Act03/Poppy08Act03.mp3');
poppyspeech[8] = new Audio('../Voice/Act03/Poppy09Act03.mp3');
poppyspeech[9] = new Audio('../Voice/Act03/Poppy10Act03.mp3');
poppyspeech[10] = new Audio('../Voice/Act03/Poppy11Act03.mp3');
poppyspeech[11] = new Audio('../Voice/Act03/Poppy12Act03.mp3');

var Catbeelines = 
[
    "Did somebody mention my adoptive mama?",
    "Meow, meow, meow, meow, buzz! (chirpy)",
    "While everyone was dealing with the chaos, I didn’t want to participate in it, I escaped, and took shelter somewhere in the caves with Rebecca Dune and Tod Jolt.",
    "What do you think I intend to do with you all? (giggles)"
];

var catbeespeech = new Array(4);
catbeespeech[0] = new Audio('../Voice/Act03/Catbee01.mp3');
catbeespeech[1] = new Audio('../Voice/Act03/Catbee02.mp3');
catbeespeech[2] = new Audio('../Voice/Act03/Catbee03.mp3');
catbeespeech[3] = new Audio('../Voice/Act03/Catbee04.mp3');

//Clicking on this button stops the final rpg battle and starts the dialog before the case puzzle.
$("#finalrpghit").on("click", function()
{
    $("#finalrpghit").remove();
    var bossdefeated = new Audio("../Sounds/crank.mp3");
    bossdefeated.play();
    setTimeout(function()
    {
        $("#introimage").prop('src', "../Background/Act03ScenesandMap/Finalbattleaftermath02.png");
    }, 3500);
    setTimeout(function()
    {
        $("#introimage").prop('src', "../Background/Borderimage.png");
    }, 7000);
    setTimeout(function()
    {
        $("#introimage").prop('src', "../Background/Act03ScenesandMap/Orphansroom01.png");
    }, 12000);
    setTimeout(function()
    {
        $("#dialogbox").text("Huggy Wuggy: Well, mission accomplished! All the orphans, all the 39 of them are alive!");
        $("#dialogbox").css("display", "block");
        var huggywuggyreport = new Audio("../Voice/Act03/HuggyWuggy01Act03.mp3");
        huggywuggyreport.play();
    }, 14000);
    setTimeout(function()
    {
        $("#dialogbox").text("Male orphan #1: " + MaleOrphan1lines[0]);
        maleorphan1speech[0].play();
    }, 22000);
    setTimeout(function()
    {
        $("#dialogbox").text("Female orphan #1: " + FemaleOrphan1lines[0]);
        femaleorphan1speech[0].play();
    }, 24000);
    setTimeout(function()
    {
        $("#dialogbox").text("Male orphan #2: " + MaleOrphan2lines[0]);
        maleorphan2speech[0].play();
    }, 28000);
    setTimeout(function()
    {
        $("#dialogbox").text("");
        $("#dialogbox").css("display", "none");
    }, 33000);
    setTimeout(function()
    {
        $("#introimage").prop('src', "../Background/Act03ScenesandMap/Orphansroom02.png");
    }, 34000);
    setTimeout(function()
    {
        $("#dialogbox").css("display", "block");
        $("#dialogbox").text("Female orphan #2: " + FemaleOrphan2lines[0]);
        femaleorphan2speech[0].play();
    }, 36000);
    setTimeout(function()
    {
        $("#dialogbox").text("Female orphan #1: " + FemaleOrphan1lines[1]);
        femaleorphan1speech[1].play();
    }, 40000);
    setTimeout(function()
    {
        $("#dialogbox").text("Male orphan #1: " + MaleOrphan1lines[1]);
        maleorphan1speech[1].play();
    }, 47000);
    setTimeout(function()
    {
        $("#dialogbox").text("Female orphan #2: " + FemaleOrphan2lines[1]);
        femaleorphan2speech[1].play();
    }, 50000);
    setTimeout(function()
    {
        $("#dialogbox").text("");
        $("#dialogbox").css("display", "none");
    }, 51000);
    setTimeout(function()
    {
        $("#introimage").prop('src', "../Background/Act03ScenesandMap/Orphansroom03.png");
    }, 52000);
    setTimeout(function()
    {
        $("#dialogbox").text("Edit the text values with clicking on them in order to unlock the case! (CW and ACW)");
        $("#dialogbox").css("display", "block");
    }, 53000);
    setTimeout(function()
    {
        $("#dialogbox").text("");
        $("#dialogbox").css("display", "none");
        $("#caseswitches").css("display", "flex");
    }, 58000);
});

//This function stands for the puzzle related to the case of Poppy.
//Cliciking on one value changes it to its increased one, i.e. 1 to 2, 2 to 3 and so on.
//The player has to click on the values according to ingame message in order to open the case.
//"findit" parameter stands for optimizing the code.
//The last if case is the solution to the puzzle.
//For understanding this section more, please check the html file!
function switchhandler(findit)
{
    if($("#pair"+findit).text() == "1")
    {
        $("#pair"+findit).html("2");
    }
    else if($("#pair"+findit).text() == "2")
    {
        $("#pair"+findit).html("3");
    }
    else if($("#pair"+findit).text() == "3")
    {
        $("#pair"+findit).html("4");
    }
    else if($("#pair"+findit).text() == "4")
    {
        $("#pair"+findit).html("1");
    }

    if($("#pair"+findit).text() == "A")
    {
        $("#pair"+findit).html("B");
    }
    else if($("#pair"+findit).text() == "B")
    {
        $("#pair"+findit).html("C");
    }
    else if($("#pair"+findit).text() == "C")
    {
        $("#pair"+findit).html("D");
    }
    else if($("#pair"+findit).text() == "D")
    {
        $("#pair"+findit).html("A");
    }

    if(($("#pair1one").text() == "1" && $("#pair1two").text() == "3" && $("#pair1three").text() == "4" && $("#pair1four").text() == "2")
    && ($("#pair2a").text() == "D" && $("#pair2b").text() == "B" && $("#pair2c").text() == "C" && $("#pair2d").text() == "A"))
    {
        $("#caseswitches").remove();
        $("#caseopened").css("display", "block");
    }
}

$("#pair1one").on("click", function()
{
   switchhandler("1one");
});

$("#pair1two").on("click", function()
{
    switchhandler("1two");
});

$("#pair1three").on("click", function()
{
    switchhandler("1three");
});

$("#pair1four").on("click", function()
{
    switchhandler("1four");
});

$("#pair2a").on("click", function()
{
    switchhandler("2a");
});

$("#pair2b").on("click", function()
{
    switchhandler("2b");
});

$("#pair2c").on("click", function()
{
    switchhandler("2c");
});

$("#pair2d").on("click", function()
{
    switchhandler("2d");
});

//This function stands for imitating fading of the image, depending on the value of function parameter.
//"appear" parameter value means the image fades in, while "disappear" ensures that the image fades out.
function imageopacityhandler(mode)
{
    if(mode == "appear")
    {
        $("#introimage").animate({"opacity": "1.0"}, 2000);
    }
    else if(mode == "disappear")
    {
        $("#introimage").animate({"opacity": "0.0"}, 2000);
    }
}

//Once this button is clicked, the player starts the story ending dialogs and the story conclusion scene.
$("#caseopened").on("click", function()
{
    $("#caseopened").remove();
    $("#introimage").prop('src', "../Background/Act03ScenesandMap/Orphansroom04.png");
    setTimeout(function()
    {
        $("#dialogbox").css("display", "block");
        $("#dialogbox").text("Poppy: " + Poppylines[0]);
        poppyspeech[0].play();
    }, 2000);
    setTimeout(function()
    {
        $("#dialogbox").text("Poppy: " + Poppylines[1]);
        poppyspeech[1].play();
    }, 20000);
    setTimeout(function()
    {
        $("#dialogbox").text("Poppy: " + Poppylines[2]);
        poppyspeech[2].play();
    }, 36000);
    setTimeout(function()
    {
        $("#dialogbox").text("Poppy: " + Poppylines[3]);
        poppyspeech[3].play();
    }, 50000);
    setTimeout(function()
    {
        $("#dialogbox").text("Poppy: " + Poppylines[4]);
        poppyspeech[4].play();
    }, 69000);
    setTimeout(function()
    {
        $("#dialogbox").text("Poppy: " + Poppylines[5]);
        poppyspeech[5].play();
    }, 83000);
    setTimeout(function()
    {
        $("#dialogbox").text("Poppy: " + Poppylines[6]);
        poppyspeech[6].play();
    }, 102000);
    setTimeout(function()
    {
        $("#dialogbox").text("Poppy: " + Poppylines[7]);
        poppyspeech[7].play();
    }, 124000);
    setTimeout(function()
    {
        $("#dialogbox").text("Poppy: " + Poppylines[8]);
        poppyspeech[8].play();
    }, 142000);
    setTimeout(function()
    {
        $("#dialogbox").text("Poppy: " + Poppylines[9]);
        poppyspeech[9].play();
    }, 158000);
    setTimeout(function()
    {
        $("#dialogbox").text("Poppy: " + Poppylines[10]);
        poppyspeech[10].play();
    }, 174000);
    setTimeout(function()
    {
        $("#dialogbox").text("");
        $("#dialogbox").css("display", "none");
    }, 180000);
    setTimeout(function()
    {
        $("#introimage").prop('src', "../Background/Act03ScenesandMap/Orphansroom05.png");
    }, 181000);
    setTimeout(function()
    {
        $("#dialogbox").css("display", "block");
        $("#dialogbox").text("Poppy: " + Poppylines[11]);
        poppyspeech[11].play();
    }, 183000);
    setTimeout(function()
    {
        $("#dialogbox").text("");
        $("#dialogbox").css("display", "none");
    }, 188000);
    setTimeout(function()
    {
        $("#introimage").prop('src', "../Background/Act03ScenesandMap/Orphansroom06.png");
    }, 189000);
    setTimeout(function()
    {   
        $("#dialogbox").css("display", "block");
        $("#dialogbox").text("Catbee: " + Catbeelines[0]);
        catbeespeech[0].play();
    }, 190000);
    setTimeout(function()
    {   
        $("#dialogbox").text("Male orphan #2: " + MaleOrphan2lines[1]);
        maleorphan2speech[1].play();
    }, 194000);
    setTimeout(function()
    {   
        $("#dialogbox").text("Catbee: " + Catbeelines[1]);
        catbeespeech[1].play();
    }, 196000);
    setTimeout(function()
    {   
        $("#dialogbox").text("Male orphan #2: " + MaleOrphan2lines[2]);
        maleorphan2speech[2].play();
    }, 199000);
    setTimeout(function()
    {   
        $("#dialogbox").text("Catbee: " + Catbeelines[2]);
        catbeespeech[2].play();
    }, 201000);
    setTimeout(function()
    {   
        $("#dialogbox").text("Male orphan #1: " + MaleOrphan1lines[2]);
        maleorphan1speech[2].play();
    }, 212000);
    setTimeout(function()
    {   
        $("#dialogbox").text("Catbee: " + Catbeelines[3]);
        catbeespeech[3].play();
    }, 215000);
    setTimeout(function()
    {   
        $("#dialogbox").text("");
        $("#dialogbox").css("display", "none");
    }, 220000);
    setTimeout(function()
    {   
        $("#introimage").prop('src', "../Background/Act03ScenesandMap/Storyclosing01.png");
    }, 221000);
    setTimeout(function()
    {   
        $("#introimage").prop('src', "../Background/Act03ScenesandMap/Storyclosing02.png");
    }, 223000);
    setTimeout(function()
    {   
        $("#introimage").prop('src', "../Background/Act03ScenesandMap/Storyclosing03.png");
    }, 225000);
    setTimeout(function()
    {   
        $("#introimage").prop('src', "../Background/Act03ScenesandMap/Storyclosing04.png");
    }, 226000);
    setTimeout(function()
    {   
        $("#introimage").prop('src', "../Background/Act03ScenesandMap/Storyclosing05.png");
        var factoryleaving = new Audio("../Sounds/Thunder_Sound.mp3");
        factoryleaving.play();
    }, 227000);
    setTimeout(function()
    {   
        imageopacityhandler("disappear");
    }, 243000);
    setTimeout(function()
    {   
        $("#introimage").prop('src', "../Background/Act03ScenesandMap/Storyclosing06.png");
        imageopacityhandler("appear");
    }, 245000);
    setTimeout(function()
    {   
        imageopacityhandler("disappear");
    }, 255000);
    setTimeout(function()
    {
        window.location = "../Startermenu/creditsroll.html";
    }, 258000);
});