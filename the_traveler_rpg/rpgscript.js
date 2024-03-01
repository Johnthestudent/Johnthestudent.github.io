//Player character values (they will change for the events of this window)
var battlescene_health = parseInt(localStorage.getItem("hero_health"));
var battlescene_attack = parseInt(localStorage.getItem("hero_attack"));
var battlescene_defense = parseInt(localStorage.getItem("hero_defense"));
var battlescene_speed = parseInt(localStorage.getItem("hero_speed"));
var battlescene_intelligence = parseInt(localStorage.getItem("hero_intelligence"));

//Opponent character values (they will change for the events of this window)
var opponentscene_health = parseInt(localStorage.getItem("battle_health"));
var opponentscene_attack = parseInt(localStorage.getItem("battle_attack"));
var opponentscene_defense = parseInt(localStorage.getItem("battle_defense"));
var opponentscene_speed = parseInt(localStorage.getItem("battle_speed"));
var opponentscene_intelligence = parseInt(localStorage.getItem("battle_intelligence"));

//Setting player character
//If Mary is the chosen hero
if(localStorage.getItem("hero_name") == "Mary")
{
    $("#playercharacter").attr("src", "Character sources/RPG_Hero_Mary.png");
    $("#characterweapon").attr("src", "Tools sources/Mary's sword.png");
    document.getElementById("weaponstat").innerHTML = parseInt(localStorage.getItem("Mary_Sword_attack")) + " damage";

    document.getElementById("baseattack1").innerHTML = "Sword attack" + " (" + parseInt(localStorage.getItem("Mary_Sword_attack")) + " damage)";
    document.getElementById("baseattack2").innerHTML = "Ram attack" + " (" + parseInt(localStorage.getItem("Mary_Ram_attack")) + " damage)";
    document.getElementById("baseattack3").innerHTML = "Wolf strike " + " (" + parseInt(localStorage.getItem("Mary_Wolf_strike")) + " damage)";
    document.getElementById("specialattack1").innerHTML = "Water gem (30 damage)";
    document.getElementById("specialattack2").innerHTML = "Fire gem (120 damage)";
    document.getElementById("specialattack3").innerHTML = "Lightning gem (200 damage)";
    document.getElementById("specialattack4").innerHTML = "Alpha stare (30 damage)";
    
    document.getElementById("rpghealth").innerHTML = battlescene_health;
    document.getElementById("rpgattack").innerHTML = battlescene_attack;
    document.getElementById("rpgdefense").innerHTML = battlescene_defense;
    document.getElementById("rpgspeed").innerHTML = battlescene_speed;
    document.getElementById("rpgintelligence").innerHTML = battlescene_intelligence;
    
    document.getElementById("basehealth").innerHTML = localStorage.getItem("hero_health");
    document.getElementById("baseattack").innerHTML = localStorage.getItem("hero_attack");
    document.getElementById("basedefense").innerHTML = localStorage.getItem("hero_defense");
    document.getElementById("basespeed").innerHTML = localStorage.getItem("hero_speed");
    document.getElementById("baseintelligence").innerHTML = localStorage.getItem("hero_intelligence");
}
//If Nate is the chosen hero
else if(localStorage.getItem("hero_name") == "Nate")
{
    $("#playercharacter").attr("src", "Character sources/RPG_Hero_Nate.png");
    document.getElementById("baseattack1").innerHTML = "Sword attack";
    document.getElementById("weaponstat").innerHTML = "80 damage";

    document.getElementById("rpghealth").innerHTML = battlescene_health;
    document.getElementById("rpgattack").innerHTML = battlescene_attack;
    document.getElementById("rpgdefense").innerHTML = battlescene_defense;
    document.getElementById("rpgspeed").innerHTML = battlescene_speed;
    document.getElementById("rpgintelligence").innerHTML = battlescene_intelligence;
    
    document.getElementById("basehealth").innerHTML = localStorage.getItem("hero_health");
    document.getElementById("baseattack").innerHTML = localStorage.getItem("hero_attack");
    document.getElementById("basedefense").innerHTML = localStorage.getItem("hero_defense");
    document.getElementById("basespeed").innerHTML = localStorage.getItem("hero_speed");
    document.getElementById("baseintelligence").innerHTML = localStorage.getItem("hero_intelligence");
}


//Setting opponent character and background for the rpg battle
//Mission 1 - Giant Cockroach
if(localStorage.getItem("mission1_complete") == 1)
{
    $("#rpgscenario").attr("src", "Background sources/RPGscene01.png");
    $("#enemycharacter").attr("src", "Character sources/Opponent_Giant_Cockroach.png");
    //New health values
    localStorage.setItem("battle_health", 300);
    opponentscene_health = parseInt(localStorage.getItem("battle_health"));
    document.getElementById("opponenthealth").innerHTML = opponentscene_health;
    localStorage.setItem("max_health", 300);
    document.getElementById("opponentmaxhealth").innerHTML = localStorage.getItem("max_health");

    //New attack values
    localStorage.setItem("battle_attack", 60);
    opponentscene_attack = parseInt(localStorage.getItem("battle_attack"));
    document.getElementById("opponentattack").innerHTML = opponentscene_attack;
    localStorage.setItem("max_attack", 60);
    document.getElementById("opponentmaxattack").innerHTML = localStorage.getItem("max_attack");
    
    //New defense values
    localStorage.setItem("battle_defense", 100);
    opponentscene_defense = parseInt(localStorage.getItem("battle_defense"));
    document.getElementById("opponentdefense").innerHTML = opponentscene_defense;
    localStorage.setItem("max_defense", 100);
    document.getElementById("opponentmaxdefense").innerHTML = localStorage.getItem("max_defense");

    //New speed values
    localStorage.setItem("battle_speed", 70);
    opponentscene_speed = parseInt(localStorage.getItem("battle_speed"));
    document.getElementById("opponentspeed").innerHTML = opponentscene_speed;
    localStorage.setItem("max_speed", 70);
    document.getElementById("opponentmaxspeed").innerHTML = localStorage.getItem("max_speed");

    //New intelligence values
    localStorage.setItem("battle_intelligence", 20);
    opponentscene_intelligence = parseInt(localStorage.getItem("battle_intelligence"));
    document.getElementById("opponentintelligence").innerHTML = opponentscene_intelligence;
    localStorage.setItem("max_intelligence", 20);
    document.getElementById("opponnentmaxintelligence").innerHTML = localStorage.getItem("max_intelligence");
}
//Mission 2 - Forest Outlaw
else if(localStorage.getItem("mission2_complete") == 1)
{
    $("#rpgscenario").attr("src", "Background sources/RPGscene02.png");
    $("#enemycharacter").attr("src", "Character sources/Opponent_Forest_Outlaw.png");
    $("#enemycharacter").css("width", "9%");
    document.getElementById("enemycharacter").style.left = '700px';
    document.getElementById("enemycharacter").style.top = '10px';
    //New health values
    localStorage.setItem("battle_health", 200);
    opponentscene_health = parseInt(localStorage.getItem("battle_health"));
    document.getElementById("opponenthealth").innerHTML = opponentscene_health;
    localStorage.setItem("max_health", 200);
    document.getElementById("opponentmaxhealth").innerHTML = localStorage.getItem("max_health");

    //New attack values
    localStorage.setItem("battle_attack", 100);
    opponentscene_attack = parseInt(localStorage.getItem("battle_attack"));
    document.getElementById("opponentattack").innerHTML = opponentscene_attack;
    localStorage.setItem("max_attack", 100);
    document.getElementById("opponentmaxattack").innerHTML = localStorage.getItem("max_attack");
    
    //New defense values
    localStorage.setItem("battle_defense", 80);
    opponentscene_defense = parseInt(localStorage.getItem("battle_defense"));
    document.getElementById("opponentdefense").innerHTML = opponentscene_defense;
    localStorage.setItem("max_defense", 80);
    document.getElementById("opponentmaxdefense").innerHTML = localStorage.getItem("max_defense");

    //New speed values
    localStorage.setItem("battle_speed", 90);
    opponentscene_speed = parseInt(localStorage.getItem("battle_speed"));
    document.getElementById("opponentspeed").innerHTML = opponentscene_speed;
    localStorage.setItem("max_speed", 90);
    document.getElementById("opponentmaxspeed").innerHTML = localStorage.getItem("max_speed");

    //New intelligence values
    localStorage.setItem("battle_intelligence", 50);
    opponentscene_intelligence = parseInt(localStorage.getItem("battle_intelligence"));
    document.getElementById("opponentintelligence").innerHTML = opponentscene_intelligence;
    localStorage.setItem("max_intelligence", 50);
    document.getElementById("opponnentmaxintelligence").innerHTML = localStorage.getItem("max_intelligence");
}
//Mission 3 - Rising Sun Magician School students and teachers
else if(localStorage.getItem("mission3_complete") == 1)
{
    var mission03opponent = Math.floor((Math.random() * 3) + 1);
    var mission03location = Math.floor((Math.random() * 3) + 1);
    switch (mission03opponent)
    {
        case 1:
            $("#enemycharacter").attr("src", "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png");
            $("#enemycharacter").css("width", "9%");
            document.getElementById("enemycharacter").style.left = '700px';
            document.getElementById("enemycharacter").style.top = '0px';
            //New health values
            localStorage.setItem("battle_health", 100);
            opponentscene_health = parseInt(localStorage.getItem("battle_health"));
            document.getElementById("opponenthealth").innerHTML = opponentscene_health;
            localStorage.setItem("max_health", 100);
            document.getElementById("opponentmaxhealth").innerHTML = localStorage.getItem("max_health");

            //New attack values
            localStorage.setItem("battle_attack", 100);
            opponentscene_attack = parseInt(localStorage.getItem("battle_attack"));
            document.getElementById("opponentattack").innerHTML = opponentscene_attack;
            localStorage.setItem("max_attack", 100);
            document.getElementById("opponentmaxattack").innerHTML = localStorage.getItem("max_attack");

            //New defense values
            localStorage.setItem("battle_defense", 90);
            opponentscene_defense = parseInt(localStorage.getItem("battle_defense"));
            document.getElementById("opponentdefense").innerHTML = opponentscene_defense;
            localStorage.setItem("max_defense", 90);
            document.getElementById("opponentmaxdefense").innerHTML = localStorage.getItem("max_defense");

            //New speed values
            localStorage.setItem("battle_speed", 100);
            opponentscene_speed = parseInt(localStorage.getItem("battle_speed"));
            document.getElementById("opponentspeed").innerHTML = opponentscene_speed;
            localStorage.setItem("max_speed", 100);
            document.getElementById("opponentmaxspeed").innerHTML = localStorage.getItem("max_speed");

            //New intelligence values
            localStorage.setItem("battle_intelligence", 90);
            opponentscene_intelligence = parseInt(localStorage.getItem("battle_intelligence"));
            document.getElementById("opponentintelligence").innerHTML = opponentscene_intelligence;
            localStorage.setItem("max_intelligence", 90);
            document.getElementById("opponnentmaxintelligence").innerHTML = localStorage.getItem("max_intelligence");

            //Map section generating
            switch(mission03location)
            {
                case 1:
                    $("#rpgscenario").attr("src", "Background sources/RPGscene03.png");
                    break;
                case 2:
                    $("#rpgscenario").attr("src", "Background sources/RPGscene04.png");
                    document.getElementById("playercharacter").style.left = '230px';  
                    break;
                case 3:
                    $("#rpgscenario").attr("src", "Background sources/RPGscene05.png");  
                    break;
            }
            break;
        case 2:
            $("#enemycharacter").attr("src", "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png");
            $("#enemycharacter").css("width", "9%");
            document.getElementById("enemycharacter").style.left = '700px';
            document.getElementById("enemycharacter").style.top = '0px';
            //New health values
            localStorage.setItem("battle_health", 100);
            opponentscene_health = parseInt(localStorage.getItem("battle_health"));
            document.getElementById("opponenthealth").innerHTML = opponentscene_health;
            localStorage.setItem("max_health", 100);
            document.getElementById("opponentmaxhealth").innerHTML = localStorage.getItem("max_health");

            //New attack values
            localStorage.setItem("battle_attack", 100);
            opponentscene_attack = parseInt(localStorage.getItem("battle_attack"));
            document.getElementById("opponentattack").innerHTML = opponentscene_attack;
            localStorage.setItem("max_attack", 100);
            document.getElementById("opponentmaxattack").innerHTML = localStorage.getItem("max_attack");

            //New defense values
            localStorage.setItem("battle_defense", 90);
            opponentscene_defense = parseInt(localStorage.getItem("battle_defense"));
            document.getElementById("opponentdefense").innerHTML = opponentscene_defense;
            localStorage.setItem("max_defense", 90);
            document.getElementById("opponentmaxdefense").innerHTML = localStorage.getItem("max_defense");

            //New speed values
            localStorage.setItem("battle_speed", 100);
            opponentscene_speed = parseInt(localStorage.getItem("battle_speed"));
            document.getElementById("opponentspeed").innerHTML = opponentscene_speed;
            localStorage.setItem("max_speed", 100);
            document.getElementById("opponentmaxspeed").innerHTML = localStorage.getItem("max_speed");

            //New intelligence values
            localStorage.setItem("battle_intelligence", 90);
            opponentscene_intelligence = parseInt(localStorage.getItem("battle_intelligence"));
            document.getElementById("opponentintelligence").innerHTML = opponentscene_intelligence;
            localStorage.setItem("max_intelligence", 90);
            document.getElementById("opponnentmaxintelligence").innerHTML = localStorage.getItem("max_intelligence");

            //Map section generating
            switch(mission03location)
            {
                case 1:
                    $("#rpgscenario").attr("src", "Background sources/RPGscene03.png");
                    break;
                case 2:
                    $("#rpgscenario").attr("src", "Background sources/RPGscene04.png");
                    document.getElementById("playercharacter").style.left = '230px';    
                    break;
                case 3:
                    $("#rpgscenario").attr("src", "Background sources/RPGscene05.png");  
                    break;
            }
            break;
        case 3:
            $("#rpgscenario").attr("src", "Background sources/RPGscene06.png");
            $("#enemycharacter").attr("src", "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png");
            $("#enemycharacter").css("width", "9%");
            document.getElementById("enemycharacter").style.left = '700px';
            document.getElementById("enemycharacter").style.top = '0px';
            //New health values
            localStorage.setItem("battle_health", 250);
            opponentscene_health = parseInt(localStorage.getItem("battle_health"));
            document.getElementById("opponenthealth").innerHTML = opponentscene_health;
            localStorage.setItem("max_health", 250);
            document.getElementById("opponentmaxhealth").innerHTML = localStorage.getItem("max_health");

            //New attack values
            localStorage.setItem("battle_attack", 150);
            opponentscene_attack = parseInt(localStorage.getItem("battle_attack"));
            document.getElementById("opponentattack").innerHTML = opponentscene_attack;
            localStorage.setItem("max_attack", 150);
            document.getElementById("opponentmaxattack").innerHTML = localStorage.getItem("max_attack");

            //New defense values
            localStorage.setItem("battle_defense", 100);
            opponentscene_defense = parseInt(localStorage.getItem("battle_defense"));
            document.getElementById("opponentdefense").innerHTML = opponentscene_defense;
            localStorage.setItem("max_defense", 100);
            document.getElementById("opponentmaxdefense").innerHTML = localStorage.getItem("max_defense");

            //New speed values
            localStorage.setItem("battle_speed", 100);
            opponentscene_speed = parseInt(localStorage.getItem("battle_speed"));
            document.getElementById("opponentspeed").innerHTML = opponentscene_speed;
            localStorage.setItem("max_speed", 100);
            document.getElementById("opponentmaxspeed").innerHTML = localStorage.getItem("max_speed");

            //New intelligence values
            localStorage.setItem("battle_intelligence", 200);
            opponentscene_intelligence = parseInt(localStorage.getItem("battle_intelligence"));
            document.getElementById("opponentintelligence").innerHTML = opponentscene_intelligence;
            localStorage.setItem("max_intelligence", 200);
            document.getElementById("opponnentmaxintelligence").innerHTML = localStorage.getItem("max_intelligence");
            break;
    }
}
//Mission 4 - Order of Crimson Sword Skirmisher
else if(localStorage.getItem("mission4_complete") == 1)
{
    $("#rpgscenario").attr("src", "Background sources/RPGscene07.png");
    $("#enemycharacter").attr("src", "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png");
    $("#enemycharacter").css("width", "7%");
    document.getElementById("enemycharacter").style.left = '540px';
    //New health values
    localStorage.setItem("battle_health", 200);
    opponentscene_health = parseInt(localStorage.getItem("battle_health"));
    document.getElementById("opponenthealth").innerHTML = opponentscene_health;
    localStorage.setItem("max_health", 200);
    document.getElementById("opponentmaxhealth").innerHTML = localStorage.getItem("max_health");

    //New attack values
    localStorage.setItem("battle_attack", 110);
    opponentscene_attack = parseInt(localStorage.getItem("battle_attack"));
    document.getElementById("opponentattack").innerHTML = opponentscene_attack;
    localStorage.setItem("max_attack", 110);
    document.getElementById("opponentmaxattack").innerHTML = localStorage.getItem("max_attack");
    
    //New defense values
    localStorage.setItem("battle_defense", 100);
    opponentscene_defense = parseInt(localStorage.getItem("battle_defense"));
    document.getElementById("opponentdefense").innerHTML = opponentscene_defense;
    localStorage.setItem("max_defense", 100);
    document.getElementById("opponentmaxdefense").innerHTML = localStorage.getItem("max_defense");

    //New speed values
    localStorage.setItem("battle_speed", 70);
    opponentscene_speed = parseInt(localStorage.getItem("battle_speed"));
    document.getElementById("opponentspeed").innerHTML = opponentscene_speed;
    localStorage.setItem("max_speed", 70);
    document.getElementById("opponentmaxspeed").innerHTML = localStorage.getItem("max_speed");

    //New intelligence values
    localStorage.setItem("battle_intelligence", 60);
    opponentscene_intelligence = parseInt(localStorage.getItem("battle_intelligence"));
    document.getElementById("opponentintelligence").innerHTML = opponentscene_intelligence;
    localStorage.setItem("max_intelligence", 60);
    document.getElementById("opponnentmaxintelligence").innerHTML = localStorage.getItem("max_intelligence");
}
//Mission 5 - Order of Golden Scorpion warrior
else if(localStorage.getItem("mission5_complete") == 1)
{
    //if the rounds are not won
    if(localStorage.getItem("goldenscorpionduelplayerwin") == 1)
    {
        $("#rpgscenario").attr("src", "Background sources/RPGscene08.png");
        $("#enemycharacter").attr("src", "Character sources/Duel_Opponent_Golden_Scorpion_Warrior.png");
        $("#enemycharacter").css("width", "9%");
        //New health values
        localStorage.setItem("battle_health", 500);
        opponentscene_health = parseInt(localStorage.getItem("battle_health"));
        document.getElementById("opponenthealth").innerHTML = opponentscene_health;
        localStorage.setItem("max_health", 500);
        document.getElementById("opponentmaxhealth").innerHTML = localStorage.getItem("max_health");

        //New attack values
        localStorage.setItem("battle_attack", 150);
        opponentscene_attack = parseInt(localStorage.getItem("battle_attack"));
        document.getElementById("opponentattack").innerHTML = opponentscene_attack;
        localStorage.setItem("max_attack", 150);
        document.getElementById("opponentmaxattack").innerHTML = localStorage.getItem("max_attack");
        
        //New defense values
        localStorage.setItem("battle_defense", 120);
        opponentscene_defense = parseInt(localStorage.getItem("battle_defense"));
        document.getElementById("opponentdefense").innerHTML = opponentscene_defense;
        localStorage.setItem("max_defense", 120);
        document.getElementById("opponentmaxdefense").innerHTML = localStorage.getItem("max_defense");

        //New speed values
        localStorage.setItem("battle_speed", 200);
        opponentscene_speed = parseInt(localStorage.getItem("battle_speed"));
        document.getElementById("opponentspeed").innerHTML = opponentscene_speed;
        localStorage.setItem("max_speed", 200);
        document.getElementById("opponentmaxspeed").innerHTML = localStorage.getItem("max_speed");

        //New intelligence values
        localStorage.setItem("battle_intelligence", 200);
        opponentscene_intelligence = parseInt(localStorage.getItem("battle_intelligence"));
        document.getElementById("opponentintelligence").innerHTML = opponentscene_intelligence;
        localStorage.setItem("max_intelligence", 200);
        document.getElementById("opponnentmaxintelligence").innerHTML = localStorage.getItem("max_intelligence");
    }
    //if all the 3 rounds are won
    if(localStorage.getItem("goldenscorpionduelplayerwin") == 0)
    {
        $("#rpgscenario").attr("src", "Background sources/RPGscene09.png");
        $("#enemycharacter").attr("src", "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png");
        $("#enemycharacter").css("width", "7%");
        document.getElementById("enemycharacter").style.left = '540px';
        //New health values
        localStorage.setItem("battle_health", 200);
        opponentscene_health = parseInt(localStorage.getItem("battle_health"));
        document.getElementById("opponenthealth").innerHTML = opponentscene_health;
        localStorage.setItem("max_health", 200);
        document.getElementById("opponentmaxhealth").innerHTML = localStorage.getItem("max_health");

        //New attack values
        localStorage.setItem("battle_attack", 110);
        opponentscene_attack = parseInt(localStorage.getItem("battle_attack"));
        document.getElementById("opponentattack").innerHTML = opponentscene_attack;
        localStorage.setItem("max_attack", 110);
        document.getElementById("opponentmaxattack").innerHTML = localStorage.getItem("max_attack");
        
        //New defense values
        localStorage.setItem("battle_defense", 100);
        opponentscene_defense = parseInt(localStorage.getItem("battle_defense"));
        document.getElementById("opponentdefense").innerHTML = opponentscene_defense;
        localStorage.setItem("max_defense", 100);
        document.getElementById("opponentmaxdefense").innerHTML = localStorage.getItem("max_defense");

        //New speed values
        localStorage.setItem("battle_speed", 70);
        opponentscene_speed = parseInt(localStorage.getItem("battle_speed"));
        document.getElementById("opponentspeed").innerHTML = opponentscene_speed;
        localStorage.setItem("max_speed", 70);
        document.getElementById("opponentmaxspeed").innerHTML = localStorage.getItem("max_speed");

        //New intelligence values
        localStorage.setItem("battle_intelligence", 60);
        opponentscene_intelligence = parseInt(localStorage.getItem("battle_intelligence"));
        document.getElementById("opponentintelligence").innerHTML = opponentscene_intelligence;
        localStorage.setItem("max_intelligence", 60);
        document.getElementById("opponnentmaxintelligence").innerHTML = localStorage.getItem("max_intelligence");
    }
}

//About the player character's moves and the opponent character's moves
/*
Helper info about character A and B values
if A attack > B defense -> then A attack + (the difference between A attack and B defense) else: A attack - (the difference between A attack and B defense)
if A speed > B speed -> then A attack + (the difference between A speed and B speed) else: A attack - (the difference between A speed and B speed)
*/
//Giant cockroach moves
//Giant cockroach first move
function scratch()
{
    document.getElementById("opponentmove").innerHTML = "scratch";
    battlescene_health -=10;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Giant cockroach second move
function bite()
{
    document.getElementById("opponentmove").innerHTML = "bite";
    battlescene_health -= 20;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Giant cockroach third move
function noise()
{
    document.getElementById("opponentmove").innerHTML = "noise";
    battlescene_health -= 5;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Forest outlaw moves
//Forest outlaw first move
function arrowshoot()
{
    document.getElementById("opponentmove").innerHTML = "arrowshoot";
    battlescene_health -=30;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Forest outlaw second move
function stealthfox()
{
    document.getElementById("opponentmove").innerHTML = "stealthfox";
    battlescene_health -=20;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Forest outlaw third move
function axeattack()
{
    document.getElementById("opponentmove").innerHTML = "axeattack";
    battlescene_health -=40;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Rising Sun Magician School student and teacher moves
//Rising Sun Magician School student first move
function lightbeam()
{
    document.getElementById("opponentmove").innerHTML = "lightbeam";
    battlescene_health -=10;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Rising Sun Magician School student second move
function contrastoverload()
{
    document.getElementById("opponentmove").innerHTML = "contrastoverload";
    battlescene_speed -=10;
    document.getElementById("rpgspeed").innerHTML = battlescene_speed;
}
//Rising Sun Magician School teacher first move
function uvlight()
{
    document.getElementById("opponentmove").innerHTML = "uvlight";
    battlescene_defense -=10;
    document.getElementById("rpgdefense").innerHTML = battlescene_defense;
}
//Rising Sun Magician School teacher second move
function cannonshot()
{
    document.getElementById("opponentmove").innerHTML = "cannonshot";
    battlescene_health -=10;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Order of Crimson Sword Skirmisher moves
//Order of Crimson Sword Skirmisher first move
function crossbowshoot()
{
    document.getElementById("opponentmove").innerHTML = "maulhit";
    battlescene_health -=50;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Order of Crimson Sword Skirmisher second move
function maulhit()
{
    document.getElementById("opponentmove").innerHTML = "maulhit";
    battlescene_health -=40;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Order of Crimson Sword Skirmisher third move
function shieldsmash()
{
    document.getElementById("opponentmove").innerHTML = "shieldsmash";
    battlescene_health -=10;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Order of Golden Scorpion warrior moves
//Order of Golden Scorpion warrior first move
function katarstrike()
{
    document.getElementById("opponentmove").innerHTML = "katarstrike";
    battlescene_health -=50;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Order of Golden Scorpion warrior second move
function saberattack()
{
    document.getElementById("opponentmove").innerHTML = "saberattack";
    battlescene_health -=40;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Order of Golden Scorpion warrior third move
function chainattack()
{
    document.getElementById("opponentmove").innerHTML = "chainattack";
    battlescene_health -=20;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Order of Golden Scorpion warrior fourth move
function gazelledance()
{
    document.getElementById("opponentmove").innerHTML = "gazelledance";
    battlescene_health -=50;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
    battlescene_defense -=10;
    document.getElementById("rpgdefense").innerHTML = battlescene_defense;
}
//Order of Golden Scorpion warrior fifth move
function whirlingdervish()
{
    document.getElementById("opponentmove").innerHTML = "whirlingdervish";
    battlescene_health -=80;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
    battlescene_speed -=30;
    document.getElementById("rpgspeed").innerHTML = battlescene_speed;
}
//Order of Crimson Sword Markswoman moves
//Order of Crimson Sword Markswoman first move
function greatarrowshot()
{
    document.getElementById("opponentmove").innerHTML = "greatarrowshot";
    battlescene_health -=60;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Order of Crimson Sword Markswoman second move
function macehit()
{
    document.getElementById("opponentmove").innerHTML = "macehit";
    battlescene_health -=50;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Corrupted Snake moves
//Corrupted Snake first move
function snakebite()
{
    document.getElementById("opponentmove").innerHTML = "snakebite";
    battlescene_health -=40;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Corrupted Snake second move
function coiling()
{
    document.getElementById("opponentmove").innerHTML = "snakebite";
    battlescene_health -=60;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
    battlescene_attack -=30;
    document.getElementById("rpgattack").innerHTML = battlescene_attack;
    battlescene_defense -=40;
    document.getElementById("rpgdefense").innerHTML = battlescene_defense;
}
//Corrupted Snake third move
function snaketailwhip()
{
    document.getElementById("opponentmove").innerHTML = "snaketailwhip";
    battlescene_health -=30;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Order of Crimson Sword Footman moves
//Order of Crimson Sword Footman first move
function swordstrike()
{
    document.getElementById("opponentmove").innerHTML = "swordstrike";
    battlescene_health -=50;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Mumuska moves
//Mumuska first move
function staffstrike()
{
    document.getElementById("opponentmove").innerHTML = "staffstrike";
    battlescene_health -=40;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Mumuska second move
function eagleflight()
{
    document.getElementById("opponentmove").innerHTML = "eagleflight";
    battlescene_health -=100;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Mumuska third move
function karatekick()
{
    document.getElementById("opponentmove").innerHTML = "karatekick";
    battlescene_health -=50;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Mumuska fourth move
function electricshock()
{
    document.getElementById("opponentmove").innerHTML = "electricshock";
    battlescene_health -=250;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
    battlescene_speed -=50;
    document.getElementById("rpgspeed").innerHTML = battlescene_speed;
    battlescene_defense -=70;
    document.getElementById("rpgdefense").innerHTML = battlescene_defense;
}
//Mumuska fifth move
function smokebomb()
{
    document.getElementById("opponentmove").innerHTML = "smokebomb";
    battlescene_speed -=80;
    document.getElementById("rpgspeed").innerHTML = battlescene_speed;
    battlescene_defense -=60;
    document.getElementById("rpgdefense").innerHTML = battlescene_defense;
}
//Mumuska sixth move
function electricshuriken()
{
    document.getElementById("opponentmove").innerHTML = "electricshuriken";
    battlescene_health -=100;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
    battlescene_speed -=50;
    document.getElementById("rpgspeed").innerHTML = battlescene_speed;
    battlescene_defense -=70;
    document.getElementById("rpgdefense").innerHTML = battlescene_defense;
}
//Mumuska seventh move
function tornadostrike()
{
    document.getElementById("opponentmove").innerHTML = "tornadostrike";
    battlescene_health -=50;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
    battlescene_speed -=100;
    document.getElementById("rpgspeed").innerHTML = battlescene_speed;
    battlescene_defense -=30;
    document.getElementById("rpgdefense").innerHTML = battlescene_defense;
}

//Blue Moon Magician School student moves
//Blue Moon Magician School student first move
function birdstrike()
{
    document.getElementById("opponentmove").innerHTML = "birdstrike";
    battlescene_health -=90;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Blue Moon Magician School student second move
function arcaneshoot()
{
    document.getElementById("opponentmove").innerHTML = "birdstrike";
    battlescene_health -=50;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
    battlescene_attack -=30;
    document.getElementById("rpgattack").innerHTML = battlescene_attack;
}
//Blue Moon Magician School student third move
function steamcloud()
{
    document.getElementById("opponentmove").innerHTML = "steamcloud";
    battlescene_speed -=40;
    document.getElementById("rpgspeed").innerHTML = battlescene_speed;
    battlescene_defense -=30;
    document.getElementById("rpgdefense").innerHTML = battlescene_defense;
}
//Blue Moon Magician School teacher moves
//Blue Moon Magician School teacher first move
//Blue Moon Magician School student second move
function arcaneblast()
{
    document.getElementById("opponentmove").innerHTML = "arcaneblast";
    battlescene_health -=100;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
    battlescene_attack -=60;
    document.getElementById("rpgattack").innerHTML = battlescene_attack;
}
//Blue Moon Magician School teacher second move
function bigmaulstrike()
{
    document.getElementById("opponentmove").innerHTML = "bigmaulstrike";
    battlescene_health -=130;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Blue Moon Magician School teacher third move
function mirrorclone()
{
    document.getElementById("opponentmove").innerHTML = "mirrorclone";
    battlescene_speed -=40;
    document.getElementById("rpgspeed").innerHTML = battlescene_speed;
}
//Corrupted White bear moves
//Corrupted White bear first move
function beardash()
{
    document.getElementById("opponentmove").innerHTML = "beardash";
    battlescene_health -=120;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Corrupted White bear second move
function bearyell()
{
    document.getElementById("opponentmove").innerHTML = "bearyell";
    battlescene_health -=10;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Corrupted White bear third move
function bearpawhit()
{
    document.getElementById("opponentmove").innerHTML = "bearpawhit";
    battlescene_health -=100;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Cseperke moves
//Cseperke first move
function moonspearstrike()
{
    document.getElementById("opponentmove").innerHTML = "moonspearstrike";
    battlescene_health -=100;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Cseperke second move
function winterelegance()
{
    document.getElementById("opponentmove").innerHTML = "winterelegance";
    battlescene_health -=150;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Cseperke third move
function kungfustrike()
{
    document.getElementById("opponentmove").innerHTML = "kungfustrike";
    battlescene_health -=80;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Cseperke fourth move
function sodawater()
{
    document.getElementById("opponentmove").innerHTML = "sodawater";
    battlescene_speed -=30;
    document.getElementById("rpgspeed").innerHTML = battlescene_speed;
}
//Cseperke fifth move
function antiadrenalineflute()
{
    document.getElementById("opponentmove").innerHTML = "antiadrenalineflute";
    battlescene_speed -=30;
    document.getElementById("rpgspeed").innerHTML = battlescene_speed;
    battlescene_attack -=30;
    document.getElementById("rpgattack").innerHTML = battlescene_attack;
}
//Ice Crystal Magician School student moves
//Ice Crystal Magician School student first move
function coldwind()
{
    document.getElementById("opponentmove").innerHTML = "coldwind";
    battlescene_health -=20;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
    battlescene_speed -=30;
    document.getElementById("rpgspeed").innerHTML = battlescene_speed;
}
//Ice Crystal Magician School student second move
function snowball()
{
    document.getElementById("opponentmove").innerHTML = "snowball";
    battlescene_speed -=10;
    document.getElementById("rpgspeed").innerHTML = battlescene_speed;
    battlescene_defense -=10;
    document.getElementById("rpgdefense").innerHTML = battlescene_defense;
}
//Ice Crystal Magician School teacher moves
//Ice Crystal Magician School teacher first move
function icewall()
{
    document.getElementById("opponentmove").innerHTML = "icewall";
    battlescene_health -=50;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
    battlescene_speed -=70;
    document.getElementById("rpgspeed").innerHTML = battlescene_speed;
}
//Ice Crystal Magician School teacher second move
function pickaxehit()
{
    document.getElementById("opponentmove").innerHTML = "pickaxehit";
    battlescene_health -=80;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Order of Snow Owl archer moves
//Order of Snow Owl archer first move
function royalarrowshoot()
{
    document.getElementById("opponentmove").innerHTML = "royalarrowshoot";
    battlescene_health -=100;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Order of Snow Owl archer second move
function twohandedswordattack()
{
    document.getElementById("opponentmove").innerHTML = "twohandedswordattack";
    battlescene_health -=130;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Red Sand Magician School student moves
//Red Sand Magician School student first move
function scorpionshoot()
{
    document.getElementById("opponentmove").innerHTML = "scorpionshoot";
    battlescene_health -=60;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
    battlescene_defense -=30;
    document.getElementById("rpgdefense").innerHTML = battlescene_defense;
}
//Red Sand Magician School student second move
function sandstormimitation()
{
    document.getElementById("opponentmove").innerHTML = "sandstormimitation";
    battlescene_defense -=100;
    document.getElementById("rpgdefense").innerHTML = battlescene_defense;
    battlescene_speed -=70;
    document.getElementById("rpgspeed").innerHTML = battlescene_speed;
}
//Red Sand Magician School teacher moves
//Red Sand Magician School teacher first move
function pyramidambientsound()
{
    document.getElementById("opponentmove").innerHTML = "pyramidambientsound";
    battlescene_defense -=10;
    document.getElementById("rpgdefense").innerHTML = battlescene_defense;
    battlescene_speed -=70;
    document.getElementById("rpgspeed").innerHTML = battlescene_speed;
}

//Corrupted Red Desert spider moves
//Corrupted Red Desert spider first move
function spiderbite()
{
    document.getElementById("opponentmove").innerHTML = "spiderbite";
    battlescene_health -=30;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
    battlescene_defense -=50;
    document.getElementById("rpgdefense").innerHTML = battlescene_defense;
    battlescene_speed -=40;
    document.getElementById("rpgspeed").innerHTML = battlescene_speed;
}
//Corrupted Red Desert spider second move
function spiderlegscratch()
{
    document.getElementById("opponentmove").innerHTML = "spiderlegscratch";
    battlescene_health -=20;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Smasher moves
//Smasher first move
function smashermaulstrike()
{
    document.getElementById("opponentmove").innerHTML = "smashermaulstrike";
    battlescene_health -=130;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Smasher second move
function smashermauldash()
{
    document.getElementById("opponentmove").innerHTML = "smashermaulstrike";
    battlescene_health -=100;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
}
//Smasher third move
function electricshoot()
{
    document.getElementById("opponentmove").innerHTML = "electricshoot";
    battlescene_health -=140;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
    battlescene_defense -=80;
    document.getElementById("rpgdefense").innerHTML = battlescene_defense;
    battlescene_speed -=80;
    document.getElementById("rpgspeed").innerHTML = battlescene_speed;
}
//Smasher fourth move
function yooshout()
{
    document.getElementById("opponentmove").innerHTML = "yooshout";
    battlescene_health -=10;
    document.getElementById("rpghealth").innerHTML = battlescene_health;
    battlescene_speed -=10;
    document.getElementById("rpgspeed").innerHTML = battlescene_speed;
}
//Base attack #1
function baseattack1()
{
    if(localStorage.getItem("hero_name") == "Mary")
    {
        var gainexperience = parseInt(localStorage.getItem("hero_experience"));
        var bowsgathered = parseInt(localStorage.getItem("item_bow"));
        var arrowsgathered = parseInt(localStorage.getItem("item_bag_of_arrows"));
        var axegathered = parseInt(localStorage.getItem("item_axe"));
        var maulgathered = parseInt(localStorage.getItem("item_maul"));
        var crossbowgathered = parseInt(localStorage.getItem("item_crossbow"));
        var shieldgathered = parseInt(localStorage.getItem("item_shield"));
        var difference = parseInt(localStorage.getItem("max_defense")) - battlescene_attack;
        var difference1 = parseInt(localStorage.getItem("max_speed")) - battlescene_speed;
        //Attack and Defense difference
        if(parseInt(localStorage.getItem("max_defense")) < battlescene_attack)
        {
            opponentscene_health -= parseInt(localStorage.getItem("Mary_Sword_attack")) + difference;
            document.getElementById("opponenthealth").innerHTML = opponentscene_health;
        }
        else if(parseInt(localStorage.getItem("max_defense")) > battlescene_attack)
        {
            opponentscene_health -= parseInt(localStorage.getItem("Mary_Sword_attack")) - difference;
            document.getElementById("opponenthealth").innerHTML = opponentscene_health; 
        }
        else
        {
            opponentscene_health -= parseInt(localStorage.getItem("Mary_Sword_attack"));
            document.getElementById("opponenthealth").innerHTML = opponentscene_health;
        }
        //Speed difference bonus
        if(parseInt(localStorage.getItem("max_speed")) < battlescene_speed)
        {
            opponentscene_health -= parseInt(localStorage.getItem("Mary_Sword_attack")) + difference1;
            document.getElementById("opponenthealth").innerHTML = opponentscene_health;
        }
        else if(parseInt(localStorage.getItem("max_speed")) > battlescene_speed)
        {
            opponentscene_health -= parseInt(localStorage.getItem("Mary_Sword_attack")) - difference1;
            document.getElementById("opponenthealth").innerHTML = opponentscene_health; 
        }
        else
        {
            opponentscene_health -= parseInt(localStorage.getItem("Mary_Sword_attack"));
            document.getElementById("opponenthealth").innerHTML = opponentscene_health;
        }
        var opponentmoves = Math.floor((Math.random() * 3) + 1);
        switch(opponentmoves)
        {
            case 1:
                //Mission 1 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
                {
                    setTimeout(scratch(), 5000);
                    break;
                }
                //Mission 2 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
                {
                    setTimeout(arrowshoot(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
                $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
                {
                    setTimeout(lightbeam(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
                {
                    setTimeout(uvlight(), 5000);
                    break;
                }
                //Mission 4 and 5 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
                {
                    setTimeout(maulhit(), 5000);
                    break;
                }
                //Mission 5 duel opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Duel_Opponent_Golden_Scorpion_Warrior.png")
                {
                    //TODO
                }
            case 2:
                //Mission 1 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
                {
                    setTimeout(bite(), 5000);
                    break;
                }
                //Mission 2 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
                {
                    setTimeout(stealthfox(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
                $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
                {
                    setTimeout(contrastoverload(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
                {
                    setTimeout(cannonshot(), 5000);
                    break;
                }
                //Mission 4 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
                {
                    setTimeout(crossbowshoot(), 5000);
                    break;
                }
                //Mission 5 duel opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Duel_Opponent_Golden_Scorpion_Warrior.png")
                {
                    //TODO
                }
            case 3:
                //Mission 1 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
                {
                    setTimeout(noise(), 5000);
                    break;
                }
                //Mission 2 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
                {
                    setTimeout(axeattack(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
                $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
                {
                    setTimeout(lightbeam(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
                {
                    setTimeout(uvlight(), 5000);
                    break;
                }
                //Mission 4 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
                {
                    setTimeout(shieldsmash(), 5000);
                    break;
                }
                //Mission 5 duel opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Duel_Opponent_Golden_Scorpion_Warrior.png")
                {
                    //TODO
                }
        }
        //Victory condition
        if(opponentscene_health <= 0)
        {
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
            {
                alert("Victory");
                window.location.href='map.html';
                //TODO
                var roaches = parseInt(localStorage.getItem("roacheswin"));
                localStorage.setItem("roacheswin", ++roaches);
                localStorage.setItem("hero_experience", gainexperience + 5);    
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
            {
                alert("Victory");
                window.location.href='map.html';
                //TODO
                var forestoutlaws = parseInt(localStorage.getItem("forestoutlawswin"));
                localStorage.setItem("forestoutlawswin", ++forestoutlaws);
                localStorage.setItem("hero_experience", gainexperience + 10); 
                localStorage.setItem("item_axe", ++axegathered);
                localStorage.setItem("item_bag_of_arrows", ++arrowsgathered);
                localStorage.setItem("item_bow", ++bowsgathered);
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
            $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
            {
                alert("Victory");
                var risingsunmagicianschoolstudents = localStorage.getItem("sunmagicianstudentswin");
                localStorage.setItem("sunmagicianstudentswin", ++risingsunmagicianschoolstudents);
                window.location.href='map.html';
                localStorage.setItem("hero_experience", gainexperience + 20); 
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
            {
                alert("Victory");
                var risingsunmagicianschoolteachers = localStorage.getItem("sunmagicianteacherswin");
                localStorage.setItem("sunmagicianteacherswin", ++risingsunmagicianschoolteachers);
                window.location.href='map.html';
                localStorage.setItem("hero_experience", gainexperience + 50); 
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
            {
                alert("Victory");
                var crimsonswordskirmisher = localStorage.getItem("crimsonswordskirmisherswin01");
                localStorage.setItem("crimsonswordskirmisherswin01", ++crimsonswordskirmisher);
                localStorage.setItem("item_maul", ++maulgathered);
                localStorage.setItem("item_crossbow", ++crossbowgathered);
                localStorage.setItem("item_bag_of_arrows", ++arrowsgathered);
                localStorage.setItem("item_shield", ++shieldgathered);
                window.location.href='map.html';
                localStorage.setItem("hero_experience", gainexperience + 100);
            }
        }

        //Defeat condition
        if(battlescene_health <= 0)
        {
            alert("You lost the battle!");
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
            $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png" ||
            $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
            {
                localStorage.setItem("sunmagicianschoolplayerdefeat", 0);
            }
            window.location.href='map.html';
        }
    }
}

//Base attack #2
function baseattack2()
{  
    if(localStorage.getItem("hero_name") == "Mary")
    {
        var gainexperience = parseInt(localStorage.getItem("hero_experience"));
        var bowsgathered = parseInt(localStorage.getItem("item_bow"));
        var arrowsgathered = parseInt(localStorage.getItem("item_bag_of_arrows"));
        var axegathered = parseInt(localStorage.getItem("item_axe"));
        var maulgathered = parseInt(localStorage.getItem("item_maul"));
        var crossbowgathered = parseInt(localStorage.getItem("item_crossbow"));
        var shieldgathered = parseInt(localStorage.getItem("item_shield"));
        var difference = parseInt(localStorage.getItem("max_defense")) - battlescene_attack;
        var difference1 = parseInt(localStorage.getItem("max_speed")) - battlescene_speed;
        //Attack and Defense difference
        if(parseInt(localStorage.getItem("max_defense")) < battlescene_attack)
        {
            opponentscene_health -= parseInt(localStorage.getItem("Mary_Ram_attack")) + difference;
            document.getElementById("opponenthealth").innerHTML = opponentscene_health;
        }
        else if(parseInt(localStorage.getItem("max_defense")) > battlescene_attack)
        {
            opponentscene_health -= parseInt(localStorage.getItem("Mary_Ram_attack")) - difference;
            document.getElementById("opponenthealth").innerHTML = opponentscene_health; 
        }
        else
        {
            opponentscene_health -= parseInt(localStorage.getItem("Mary_Ram_attack"));
            document.getElementById("opponenthealth").innerHTML = opponentscene_health;
        }
        //Speed difference bonus
        if(parseInt(localStorage.getItem("max_speed")) < battlescene_speed)
        {
            opponentscene_health -= parseInt(localStorage.getItem("Mary_Ram_attack")) + difference1;
            document.getElementById("opponenthealth").innerHTML = opponentscene_health;
        }
        else if(parseInt(localStorage.getItem("max_speed")) > battlescene_speed)
        {
            opponentscene_health -= parseInt(localStorage.getItem("Mary_Ram_attack")) - difference1;
            document.getElementById("opponenthealth").innerHTML = opponentscene_health; 
        }
        else
        {
            opponentscene_health -= parseInt(localStorage.getItem("Mary_Ram_attack"));
            document.getElementById("opponenthealth").innerHTML = opponentscene_health;
        }
        var opponentmoves = Math.floor((Math.random() * 3) + 1);
        switch(opponentmoves)
        {
            case 1:
                //Mission 1 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
                {
                    setTimeout(scratch(), 5000);
                    break;
                }
                //Mission 2 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
                {
                    setTimeout(arrowshoot(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
                $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
                {
                    setTimeout(lightbeam(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
                {
                    setTimeout(uvlight(), 5000);
                    break;
                }
                //Mission 4 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
                {
                    setTimeout(maulhit(), 5000);
                    break;
                }
                //Mission 5 duel opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Duel_Opponent_Golden_Scorpion_Warrior.png")
                {
                    //TODO
                }
            case 2:
                //Mission 1 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
                {
                    setTimeout(bite(), 5000);
                    break;
                }
                //Mission 2 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
                {
                    setTimeout(stealthfox(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
                $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
                {
                    setTimeout(contrastoverload(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
                {
                    setTimeout(cannonshot(), 5000);
                    break;
                }
                //Mission 4 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
                {
                    setTimeout(crossbowshoot(), 5000);
                    break;
                }
                //Mission 5 duel opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Duel_Opponent_Golden_Scorpion_Warrior.png")
                {
                    //TODO
                }
            case 3:
                //Mission 1 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
                {
                    setTimeout(noise(), 5000);
                    break;
                }
                //Mission 2 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
                {
                    setTimeout(axeattack(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
                $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
                {
                    setTimeout(lightbeam(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
                {
                    setTimeout(uvlight(), 5000);
                    break;
                }
                //Mission 4 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
                {
                    setTimeout(shieldsmash(), 5000);
                    break;
                }
                //Mission 5 duel opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Duel_Opponent_Golden_Scorpion_Warrior.png")
                {
                    //TODO
                }
        }
        //Victory condition
        if(opponentscene_health <= 0)
        {
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
            {
                alert("Victory");
                window.location.href='map.html';
                //TODO
                var roaches = parseInt(localStorage.getItem("roacheswin"));
                localStorage.setItem("roacheswin", ++roaches);
                localStorage.setItem("hero_experience", gainexperience + 5);    
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
            {
                alert("Victory");
                window.location.href='map.html';
                //TODO
                var forestoutlaws = parseInt(localStorage.getItem("forestoutlawswin"));
                localStorage.setItem("forestoutlawswin", ++forestoutlaws);
                localStorage.setItem("hero_experience", gainexperience + 10);
                localStorage.setItem("item_axe", ++axegathered);
                localStorage.setItem("item_bag_of_arrows", ++arrowsgathered);
                localStorage.setItem("item_bow", ++bowsgathered);    
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
            $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
            {
                alert("Victory");
                var risingsunmagicianschoolstudents = localStorage.getItem("sunmagicianstudentswin");
                localStorage.setItem("sunmagicianstudentswin", ++risingsunmagicianschoolstudents);
                window.location.href='map.html';
                localStorage.setItem("hero_experience", gainexperience + 20); 
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
            {
                alert("Victory");
                var risingsunmagicianschoolteachers = localStorage.getItem("sunmagicianteacherswin");
                localStorage.setItem("sunmagicianteacherswin", ++risingsunmagicianschoolteachers);
                window.location.href='map.html';
                localStorage.setItem("hero_experience", gainexperience + 50); 
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
            {
                alert("Victory");
                var crimsonswordskirmisher = localStorage.getItem("crimsonswordskirmisherswin01");
                localStorage.setItem("crimsonswordskirmisherswin01", ++crimsonswordskirmisher);
                localStorage.setItem("item_maul", ++maulgathered);
                localStorage.setItem("item_crossbow", ++crossbowgathered);
                localStorage.setItem("item_bag_of_arrows", ++arrowsgathered);
                localStorage.setItem("item_shield", ++shieldgathered);
                window.location.href='map.html';
                localStorage.setItem("hero_experience", gainexperience + 100);
            }
        }

        //Defeat condition
        if(battlescene_health <= 0)
        {
            alert("You lost the battle!");
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
            $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png" ||
            $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
            {
                localStorage.setItem("sunmagicianschoolplayerdefeat", 0);
            }
            window.location.href='map.html';
        }
    }
}

//Base attack #3
function baseattack3()
{
    if(localStorage.getItem("hero_name") == "Mary")
    {
        var gainexperience = parseInt(localStorage.getItem("hero_experience"));
        var bowsgathered = parseInt(localStorage.getItem("item_bow"));
        var arrowsgathered = parseInt(localStorage.getItem("item_bag_of_arrows"));
        var axegathered = parseInt(localStorage.getItem("item_axe"));
        var maulgathered = parseInt(localStorage.getItem("item_maul"));
        var crossbowgathered = parseInt(localStorage.getItem("item_crossbow"));
        var shieldgathered = parseInt(localStorage.getItem("item_shield"));
        var difference = parseInt(localStorage.getItem("max_defense")) - battlescene_attack;
        var difference1 = parseInt(localStorage.getItem("max_speed")) - battlescene_speed;
        //Attack, Defense differences
        if(parseInt(localStorage.getItem("max_defense")) < battlescene_attack)
        {   
            opponentscene_health -= parseInt(localStorage.getItem("Mary_Wolf_strike")) + difference;
            document.getElementById("opponenthealth").innerHTML = opponentscene_health;
        }
        else if(parseInt(localStorage.getItem("max_defense")) > battlescene_attack)
        {
            opponentscene_health -= parseInt(localStorage.getItem("Mary_Wolf_strike")) - difference;
            document.getElementById("opponenthealth").innerHTML = opponentscene_health;
        }
        else
        {
            opponentscene_health -= parseInt(localStorage.getItem("Mary_Wolf_strike"));
            document.getElementById("opponenthealth").innerHTML = opponentscene_health;
        }
        //Speed difference bonus
        if(parseInt(localStorage.getItem("max_speed")) < battlescene_speed)
        {
            opponentscene_health -= parseInt(localStorage.getItem("Mary_Wolf_strike")) + difference1;
            document.getElementById("opponenthealth").innerHTML = opponentscene_health;
        }
        else if(parseInt(localStorage.getItem("max_speed")) > battlescene_speed)
        {
            opponentscene_health -= parseInt(localStorage.getItem("Mary_Wolf_strike")) - difference1;
            document.getElementById("opponenthealth").innerHTML = opponentscene_health;
        }
        else
        {
            opponentscene_health -= parseInt(localStorage.getItem("Mary_Wolf_strike"));
            document.getElementById("opponenthealth").innerHTML = opponentscene_health;
        }

        var opponentmoves = Math.floor((Math.random() * 3) + 1);
        switch(opponentmoves)
        {
            case 1:
                //Mission 1 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
                {
                    setTimeout(scratch(), 5000);
                    break;
                }
                //Mission 2 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
                {
                    setTimeout(arrowshoot(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
                $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
                {
                    setTimeout(lightbeam(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
                {
                    setTimeout(uvlight(), 5000);
                    break;
                }
                //Mission 4 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
                {
                    setTimeout(maulhit(), 5000);
                    break;
                }
            case 2:
                //Mission 1 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
                {
                    setTimeout(bite(), 5000);
                    break;
                }
                //Mission 2 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
                {
                    setTimeout(stealthfox(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
                $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
                {
                    setTimeout(contrastoverload(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
                {
                    setTimeout(cannonshot(), 5000);
                    break;
                }
                //Mission 4 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
                {
                    setTimeout(crossbowshoot(), 5000);
                    break;
                }
            case 3:
                //Mission 1 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
                {
                    setTimeout(noise(), 5000);
                    break;
                }
                //Mission 2 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
                {
                    setTimeout(axeattack(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
                $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
                {
                    setTimeout(lightbeam(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
                {
                    setTimeout(uvlight(), 5000);
                    break;
                }
                //Mission 4 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
                {
                    setTimeout(shieldsmash(), 5000);
                    break;
                }
                //Mission 5 duel opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Duel_Opponent_Golden_Scorpion_Warrior.png")
                {
                    //TODO
                }
        }
        //Victory condition
        if(opponentscene_health <= 0)
        {
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
            {
                alert("Victory");
                window.location.href='map.html';
                //TODO
                var roaches = parseInt(localStorage.getItem("roacheswin"));
                localStorage.setItem("roacheswin", ++roaches);
                localStorage.setItem("hero_experience", gainexperience + 5);    
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
            {
                alert("Victory");
                window.location.href='map.html';
                //TODO
                var forestoutlaws = parseInt(localStorage.getItem("forestoutlawswin"));
                localStorage.setItem("forestoutlawswin", ++forestoutlaws);
                localStorage.setItem("hero_experience", gainexperience + 10);
                localStorage.setItem("item_axe", ++axegathered);
                localStorage.setItem("item_bag_of_arrows", ++arrowsgathered);
                localStorage.setItem("item_bow", ++bowsgathered);    
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
            $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
            {
                alert("Victory");
                var risingsunmagicianschoolstudents = localStorage.getItem("sunmagicianstudentswin");
                localStorage.setItem("sunmagicianstudentswin", ++risingsunmagicianschoolstudents);
                window.location.href='map.html';
                localStorage.setItem("hero_experience", gainexperience + 20); 
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
            {
                alert("Victory");
                var risingsunmagicianschoolteachers = localStorage.getItem("sunmagicianteacherswin");
                localStorage.setItem("sunmagicianteacherswin", ++risingsunmagicianschoolteachers);
                window.location.href='map.html';
                localStorage.setItem("hero_experience", gainexperience + 50); 
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
            {
                alert("Victory");
                var crimsonswordskirmisher = localStorage.getItem("crimsonswordskirmisherswin01");
                localStorage.setItem("crimsonswordskirmisherswin01", ++crimsonswordskirmisher);
                localStorage.setItem("item_maul", ++maulgathered);
                localStorage.setItem("item_crossbow", ++crossbowgathered);
                localStorage.setItem("item_bag_of_arrows", ++arrowsgathered);
                localStorage.setItem("item_shield", ++shieldgathered);
                window.location.href='map.html';
                localStorage.setItem("hero_experience", gainexperience + 100);
            }
        }

        //Defeat condition
        if(battlescene_health <= 0)
        {
            alert("You lost the battle!");
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
            $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png" ||
            $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
            {
                localStorage.setItem("sunmagicianschoolplayerdefeat", 0);
            }
            window.location.href='map.html';
        }  
    }
}

//Special attacks require intelligence to be used
//Special attack #1
function specialattack1()
{
    if(localStorage.getItem("hero_name") == "Mary")
    {
        var gainexperience = parseInt(localStorage.getItem("hero_experience"));
        var bowsgathered = parseInt(localStorage.getItem("item_bow"));
        var arrowsgathered = parseInt(localStorage.getItem("item_bag_of_arrows"));
        var axegathered = parseInt(localStorage.getItem("item_axe"));
        var maulgathered = parseInt(localStorage.getItem("item_maul"));
        var crossbowgathered = parseInt(localStorage.getItem("item_crossbow"));
        var shieldgathered = parseInt(localStorage.getItem("item_shield"));
        var difference = parseInt(localStorage.getItem("max_defense")) - battlescene_attack;
        //Attack, Defense differences
        if(parseInt(localStorage.getItem("max_defense")) < battlescene_attack)
        {   
            if(battlescene_intelligence < 10)
            {
                alert("You don't have enough intelligence points to use this skill!");
            }
            else
            {
                opponentscene_health -= (30 + difference);
                document.getElementById("opponenthealth").innerHTML = opponentscene_health;
                battlescene_intelligence -= 10;
                document.getElementById("rpgintelligence").innerHTML = battlescene_intelligence;
            }
        }
        else if(parseInt(localStorage.getItem("max_defense")) > battlescene_attack)
        {
            if(battlescene_intelligence < 10)
            {
                alert("You don't have enough intelligence points to use this skill!");
            }
            else
            {
                opponentscene_health -= (30 - difference);
                document.getElementById("opponenthealth").innerHTML = opponentscene_health;
                battlescene_intelligence -= 10;
                document.getElementById("rpgintelligence").innerHTML = battlescene_intelligence;
            }
        }
        else
        {
            if(battlescene_intelligence < 10)
            {
                alert("You don't have enough intelligence points to use this skill!");
            }
            else
            {           
                opponentscene_health -= 30;
                document.getElementById("opponenthealth").innerHTML = opponentscene_health;
                battlescene_intelligence -= 10;
                document.getElementById("rpgintelligence").innerHTML = battlescene_intelligence;
            }
        }

        var opponentmoves = Math.floor((Math.random() * 3) + 1);
        switch(opponentmoves)
        {
            case 1:
                //Mission 1 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
                {
                    setTimeout(scratch(), 5000);
                    break;
                }
                //Mission 2 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
                {
                    setTimeout(arrowshoot(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
                $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
                {
                    setTimeout(lightbeam(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
                {
                    setTimeout(uvlight(), 5000);
                    break;
                }
                //Mission 4 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
                {
                    setTimeout(maulhit(), 5000);
                    break;
                }
                //Mission 5 duel opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Duel_Opponent_Golden_Scorpion_Warrior.png")
                {
                    //TODO
                }
            case 2:
                //Mission 1 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
                {
                    setTimeout(bite(), 5000);
                    break;
                }
                //Mission 2 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
                {
                    setTimeout(stealthfox(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
                $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
                {
                    setTimeout(contrastoverload(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
                {
                    setTimeout(cannonshot(), 5000);
                    break;
                }
                //Mission 4 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
                {
                    setTimeout(crossbowshoot(), 5000);
                    break;
                }
                //Mission 5 duel opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Duel_Opponent_Golden_Scorpion_Warrior.png")
                {
                    //TODO
                }
            case 3:
                //Mission 1 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
                {
                    setTimeout(noise(), 5000);
                    break;
                }
                //Mission 2 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
                {
                    setTimeout(axeattack(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
                $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
                {
                    setTimeout(lightbeam(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
                {
                    setTimeout(uvlight(), 5000);
                    break;
                }
                //Mission 4 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
                {
                    setTimeout(shieldsmash(), 5000);
                    break;
                }
                //Mission 5 duel opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Duel_Opponent_Golden_Scorpion_Warrior.png")
                {
                    //TODO
                }
        }
        //Victory condition
        if(opponentscene_health <= 0)
        {
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
            {
                alert("Victory");
                window.location.href='map.html';
                //TODO
                var roaches = parseInt(localStorage.getItem("roacheswin"));
                localStorage.setItem("roacheswin", ++roaches);
                localStorage.setItem("hero_experience", gainexperience + 5);    
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
            {
                alert("Victory");
                window.location.href='map.html';
                //TODO
                var forestoutlaws = parseInt(localStorage.getItem("forestoutlawswin"));
                localStorage.setItem("forestoutlawswin", ++forestoutlaws);
                localStorage.setItem("hero_experience", gainexperience + 10);
                localStorage.setItem("item_axe", ++axegathered);
                localStorage.setItem("item_bag_of_arrows", ++arrowsgathered);
                localStorage.setItem("item_bow", ++bowsgathered);    
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
            $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
            {
                alert("Victory");
                var risingsunmagicianschoolstudents = localStorage.getItem("sunmagicianstudentswin");
                localStorage.setItem("sunmagicianstudentswin", ++risingsunmagicianschoolstudents);
                window.location.href='map.html';
                localStorage.setItem("hero_experience", gainexperience + 20); 
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
            {
                alert("Victory");
                var risingsunmagicianschoolteachers = localStorage.getItem("sunmagicianteacherswin");
                localStorage.setItem("sunmagicianteacherswin", ++risingsunmagicianschoolteachers);
                window.location.href='map.html';
                localStorage.setItem("hero_experience", gainexperience + 50); 
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
            {
                alert("Victory");
                var crimsonswordskirmisher = localStorage.getItem("crimsonswordskirmisherswin01");
                localStorage.setItem("crimsonswordskirmisherswin01", ++crimsonswordskirmisher);
                localStorage.setItem("item_maul", ++maulgathered);
                localStorage.setItem("item_crossbow", ++crossbowgathered);
                localStorage.setItem("item_bag_of_arrows", ++arrowsgathered);
                localStorage.setItem("item_shield", ++shieldgathered);
                window.location.href='map.html';
                localStorage.setItem("hero_experience", gainexperience + 100);
            }
        }

        //Defeat condition
        if(battlescene_health <= 0)
        {
            alert("You lost the battle!");
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
            $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png" ||
            $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
            {
                localStorage.setItem("sunmagicianschoolplayerdefeat", 0);
            }
            window.location.href='map.html';
        }  
    }
}

//Special attack #2
function specialattack2()
{
    if(localStorage.getItem("hero_name") == "Mary")
    {
        var gainexperience = parseInt(localStorage.getItem("hero_experience"));
        var bowsgathered = parseInt(localStorage.getItem("item_bow"));
        var arrowsgathered = parseInt(localStorage.getItem("item_bag_of_arrows"));
        var axegathered = parseInt(localStorage.getItem("item_axe"));
        var maulgathered = parseInt(localStorage.getItem("item_maul"));
        var crossbowgathered = parseInt(localStorage.getItem("item_crossbow"));
        var shieldgathered = parseInt(localStorage.getItem("item_shield"));
        var difference = parseInt(localStorage.getItem("max_defense")) - battlescene_attack;
        //Attack, Defense differences
        if(parseInt(localStorage.getItem("max_defense")) < battlescene_attack)
        {   
            if(battlescene_intelligence < 20)
            {
                alert("You don't have enough intelligence points to use this skill!");
            }
            else
            {
                opponentscene_health -= (120 + difference);
                document.getElementById("opponenthealth").innerHTML = opponentscene_health;
                opponentscene_defense -= 20;
                document.getElementById("opponentdefense").innerHTML = opponentscene_defense;
                battlescene_intelligence -= 20;
                document.getElementById("rpgintelligence").innerHTML = battlescene_intelligence;
            }
        }
        else if(parseInt(localStorage.getItem("max_defense")) > battlescene_attack)
        {
            if(battlescene_intelligence < 20)
            {
                alert("You don't have enough intelligence points to use this skill!");
            }
            else
            {
                opponentscene_health -= (120 - difference);
                document.getElementById("opponenthealth").innerHTML = opponentscene_health;
                opponentscene_defense -= 20;
                document.getElementById("opponentdefense").innerHTML = opponentscene_defense;
                battlescene_intelligence -= 20;
                document.getElementById("rpgintelligence").innerHTML = battlescene_intelligence;
            }
        }
        else
        {
            if(battlescene_intelligence < 20)
            {
                alert("You don't have enough intelligence points to use this skill!");
            }
            else
            {
                opponentscene_health -= 120;
                document.getElementById("opponenthealth").innerHTML = opponentscene_health;
                opponentscene_defense -= 20;
                document.getElementById("opponentdefense").innerHTML = opponentscene_defense;
                battlescene_intelligence -= 20;
                document.getElementById("rpgintelligence").innerHTML = battlescene_intelligence;
            }
        }

        var opponentmoves = Math.floor((Math.random() * 3) + 1);
        switch(opponentmoves)
        {
            case 1:
                //Mission 1 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
                {
                    setTimeout(scratch(), 5000);
                    break;
                }
                //Mission 2 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
                {
                    setTimeout(arrowshoot(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
                $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
                {
                    setTimeout(lightbeam(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
                {
                    setTimeout(uvlight(), 5000);
                    break;
                }
                //Mission 4 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
                {
                    setTimeout(maulhit(), 5000);
                    break;
                }
                //Mission 5 duel opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Duel_Opponent_Golden_Scorpion_Warrior.png")
                {
                    //TODO
                }
            case 2:
                //Mission 1 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
                {
                    setTimeout(bite(), 5000);
                    break;
                }
                //Mission 2 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
                {
                    setTimeout(stealthfox(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
                $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
                {
                    setTimeout(contrastoverload(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
                {
                    setTimeout(cannonshot(), 5000);
                    break;
                }
                //Mission 4 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
                {
                    setTimeout(crossbowshoot(), 5000);
                    break;
                }
                //Mission 5 duel opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Duel_Opponent_Golden_Scorpion_Warrior.png")
                {
                    //TODO
                }
            case 3:
                //Mission 1 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
                {
                    setTimeout(noise(), 5000);
                    break;
                }
                //Mission 2 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
                {
                    setTimeout(axeattack(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
                $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
                {
                    setTimeout(lightbeam(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
                {
                    setTimeout(uvlight(), 5000);
                    break;
                }
                //Mission 4 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
                {
                    setTimeout(shieldsmash(), 5000);
                    break;
                }
                //Mission 5 duel opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Duel_Opponent_Golden_Scorpion_Warrior.png")
                {
                    //TODO
                }
        }
        //Victory condition
        if(opponentscene_health <= 0)
        {
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
            {
                alert("Victory");
                window.location.href='map.html';
                //TODO
                var roaches = parseInt(localStorage.getItem("roacheswin"));
                localStorage.setItem("roacheswin", ++roaches);
                localStorage.setItem("hero_experience", gainexperience + 5);    
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
            {
                alert("Victory");
                window.location.href='map.html';
                //TODO
                var forestoutlaws = parseInt(localStorage.getItem("forestoutlawswin"));
                localStorage.setItem("forestoutlawswin", ++forestoutlaws);
                localStorage.setItem("hero_experience", gainexperience + 10);
                localStorage.setItem("item_axe", ++axegathered);
                localStorage.setItem("item_bag_of_arrows", ++arrowsgathered);
                localStorage.setItem("item_bow", ++bowsgathered);    
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
            $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
            {
                alert("Victory");
                var risingsunmagicianschoolstudents = localStorage.getItem("sunmagicianstudentswin");
                localStorage.setItem("sunmagicianstudentswin", ++risingsunmagicianschoolstudents);
                window.location.href='map.html';
                localStorage.setItem("hero_experience", gainexperience + 20); 
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
            {
                alert("Victory");
                var risingsunmagicianschoolteachers = localStorage.getItem("sunmagicianteacherswin");
                localStorage.setItem("sunmagicianteacherswin", ++risingsunmagicianschoolteachers);
                window.location.href='map.html';
                localStorage.setItem("hero_experience", gainexperience + 50); 
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
            {
                alert("Victory");
                var crimsonswordskirmisher = localStorage.getItem("crimsonswordskirmisherswin01");
                localStorage.setItem("crimsonswordskirmisherswin01", ++crimsonswordskirmisher);
                localStorage.setItem("item_maul", ++maulgathered);
                localStorage.setItem("item_crossbow", ++crossbowgathered);
                localStorage.setItem("item_bag_of_arrows", ++arrowsgathered);
                localStorage.setItem("item_shield", ++shieldgathered);
                window.location.href='map.html';
                localStorage.setItem("hero_experience", gainexperience + 100);
            }
        }

        //Defeat condition
        if(battlescene_health <= 0)
        {
            alert("You lost the battle!");
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
            $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png" ||
            $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
            {
                localStorage.setItem("sunmagicianschoolplayerdefeat", 0);
            }
            window.location.href='map.html';
        }  
    }
}

//Special attack #3
function specialattack3()
{
    if(localStorage.getItem("hero_name") == "Mary")
    {
        var gainexperience = parseInt(localStorage.getItem("hero_experience"));
        var bowsgathered = parseInt(localStorage.getItem("item_bow"));
        var arrowsgathered = parseInt(localStorage.getItem("item_bag_of_arrows"));
        var axegathered = parseInt(localStorage.getItem("item_axe"));
        var maulgathered = parseInt(localStorage.getItem("item_maul"));
        var crossbowgathered = parseInt(localStorage.getItem("item_crossbow"));
        var shieldgathered = parseInt(localStorage.getItem("item_shield"));
        var difference = parseInt(localStorage.getItem("max_defense")) - battlescene_attack;
        //Attack, Defense differences
        if(parseInt(localStorage.getItem("max_defense")) < battlescene_attack)
        {   
            if(battlescene_intelligence < 40)
            {
                alert("You don't have enough intelligence points to use this skill!");
            }
            else
            {
                opponentscene_health -= (200 + difference);
                document.getElementById("opponenthealth").innerHTML = opponentscene_health;
                opponentscene_speed -= 20;
                document.getElementById("opponentspeed").innerHTML = opponentscene_speed;
                battlescene_intelligence -= 40;
                document.getElementById("rpgintelligence").innerHTML = battlescene_intelligence;
            }
        }
        else if(parseInt(localStorage.getItem("max_defense")) > battlescene_attack)
        {
            if(battlescene_intelligence < 40)
            {
                alert("You don't have enough intelligence points to use this skill!");
            }
            else
            {
                opponentscene_health -= (200 - difference);
                document.getElementById("opponenthealth").innerHTML = opponentscene_health;
                opponentscene_speed -= 20;
                document.getElementById("opponentspeed").innerHTML = opponentscene_speed;
                battlescene_intelligence -= 40;
                document.getElementById("rpgintelligence").innerHTML = battlescene_intelligence;            
            }
        }
        else
        {
            if(battlescene_intelligence < 40)
            {
                alert("You don't have enough intelligence points to use this skill!");
            }
            else
            {
                opponentscene_health -= 200;
                document.getElementById("opponenthealth").innerHTML = opponentscene_health;
                opponentscene_speed -= 20;
                document.getElementById("opponentspeed").innerHTML = opponentscene_speed;
                battlescene_intelligence -= 40;
                document.getElementById("rpgintelligence").innerHTML = battlescene_intelligence;                
            }
        }

        var opponentmoves = Math.floor((Math.random() * 3) + 1);
        switch(opponentmoves)
        {
            case 1:
                //Mission 1 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
                {
                    setTimeout(scratch(), 5000);
                    break;
                }
                //Mission 2 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
                {
                    setTimeout(arrowshoot(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
                $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
                {
                    setTimeout(lightbeam(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
                {
                    setTimeout(uvlight(), 5000);
                    break;
                }
                //Mission 4 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
                {
                    setTimeout(maulhit(), 5000);
                    break;
                }
                //Mission 5 duel opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Duel_Opponent_Golden_Scorpion_Warrior.png")
                {
                    //TODO
                }
            case 2:
                //Mission 1 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
                {
                    setTimeout(bite(), 5000);
                    break;
                }
                //Mission 2 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
                {
                    setTimeout(stealthfox(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
                $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
                {
                    setTimeout(contrastoverload(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
                {
                    setTimeout(cannonshot(), 5000);
                    break;
                }
                //Mission 4 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
                {
                    setTimeout(crossbowshoot(), 5000);
                    break;
                }
                //Mission 5 duel opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Duel_Opponent_Golden_Scorpion_Warrior.png")
                {
                    //TODO
                }
            case 3:
                //Mission 1 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
                {
                    setTimeout(noise(), 5000);
                    break;
                }
                //Mission 2 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
                {
                    setTimeout(axeattack(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
                $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
                {
                    setTimeout(lightbeam(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
                {
                    setTimeout(uvlight(), 5000);
                    break;
                }
                //Mission 4 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
                {
                    setTimeout(shieldsmash(), 5000);
                    break;
                }
                //Mission 5 duel opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Duel_Opponent_Golden_Scorpion_Warrior.png")
                {
                    //TODO
                }
        }
        //Victory condition
        if(opponentscene_health <= 0)
        {
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
            {
                alert("Victory");
                window.location.href='map.html';
                //TODO
                var roaches = parseInt(localStorage.getItem("roacheswin"));
                localStorage.setItem("roacheswin", ++roaches);
                localStorage.setItem("hero_experience", gainexperience + 5);    
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
            {
                alert("Victory");
                window.location.href='map.html';
                //TODO
                var forestoutlaws = parseInt(localStorage.getItem("forestoutlawswin"));
                localStorage.setItem("forestoutlawswin", ++forestoutlaws);
                localStorage.setItem("hero_experience", gainexperience + 10);
                localStorage.setItem("item_axe", ++axegathered);
                localStorage.setItem("item_bag_of_arrows", ++arrowsgathered);
                localStorage.setItem("item_bow", ++bowsgathered);    
            };
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
            $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
            {
                alert("Victory");
                var risingsunmagicianschoolstudents = localStorage.getItem("sunmagicianstudentswin");
                localStorage.setItem("sunmagicianstudentswin", ++risingsunmagicianschoolstudents);
                window.location.href='map.html';
                localStorage.setItem("hero_experience", gainexperience + 20); 
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
            {
                alert("Victory");
                var risingsunmagicianschoolteachers = localStorage.getItem("sunmagicianteacherswin");
                localStorage.setItem("sunmagicianteacherswin", ++risingsunmagicianschoolteachers);
                window.location.href='map.html';
                localStorage.setItem("hero_experience", gainexperience + 50); 
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
            {
                alert("Victory");
                var crimsonswordskirmisher = localStorage.getItem("crimsonswordskirmisherswin01");
                localStorage.setItem("crimsonswordskirmisherswin01", ++crimsonswordskirmisher);
                localStorage.setItem("item_maul", ++maulgathered);
                localStorage.setItem("item_crossbow", ++crossbowgathered);
                localStorage.setItem("item_bag_of_arrows", ++arrowsgathered);
                localStorage.setItem("item_shield", ++shieldgathered);
                window.location.href='map.html';
                localStorage.setItem("hero_experience", gainexperience + 100);
            }
        }

        //Defeat condition
        if(battlescene_health <= 0)
        {
            alert("You lost the battle!");
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
            $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png" ||
            $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
            {
                localStorage.setItem("sunmagicianschoolplayerdefeat", 0);
            }
            window.location.href='map.html';
        }  
    }
}

//Special attack #4
function specialattack4()
{
    if(localStorage.getItem("hero_name") == "Mary")
    {
        var gainexperience = parseInt(localStorage.getItem("hero_experience"));
        var bowsgathered = parseInt(localStorage.getItem("item_bow"));
        var arrowsgathered = parseInt(localStorage.getItem("item_bag_of_arrows"));
        var axegathered = parseInt(localStorage.getItem("item_axe"));
        var maulgathered = parseInt(localStorage.getItem("item_maul"));
        var crossbowgathered = parseInt(localStorage.getItem("item_crossbow"));
        var shieldgathered = parseInt(localStorage.getItem("item_shield"));
        var difference = parseInt(localStorage.getItem("max_defense")) - battlescene_attack;
        //Attack, Defense differences
        if(parseInt(localStorage.getItem("max_defense")) < battlescene_attack)
        {   
            if(battlescene_intelligence < 10)
            {
                alert("You don't have enough intelligence points to use this skill!");
            }
            else
            {
                opponentscene_health -= (30 + difference);
                document.getElementById("opponenthealth").innerHTML = opponentscene_health;
                opponentscene_speed -= 50;
                document.getElementById("opponentspeed").innerHTML = opponentscene_speed;
                battlescene_intelligence -= 10;
                document.getElementById("rpgintelligence").innerHTML = battlescene_intelligence;
            }
        }
        else if(parseInt(localStorage.getItem("max_defense")) > battlescene_attack)
        {
            if(battlescene_intelligence < 10)
            {
                alert("You don't have enough intelligence points to use this skill!");
            }
            else
            {
                opponentscene_health -= (30 - difference);
                document.getElementById("opponenthealth").innerHTML = opponentscene_health;
                opponentscene_speed -= 50;
                document.getElementById("opponentspeed").innerHTML = opponentscene_speed;
                battlescene_intelligence -= 10;
                document.getElementById("rpgintelligence").innerHTML = battlescene_intelligence;
            }
        }
        else
        {
            if(battlescene_intelligence < 10)
            {
                alert("You don't have enough intelligence points to use this skill!");
            }
            else
            {
                opponentscene_health -= 30;
                document.getElementById("opponenthealth").innerHTML = opponentscene_health;
                opponentscene_speed -= 50;
                document.getElementById("opponentspeed").innerHTML = opponentscene_speed;
                battlescene_intelligence -= 10;
                document.getElementById("rpgintelligence").innerHTML = battlescene_intelligence;
            }
        }

        var opponentmoves = Math.floor((Math.random() * 3) + 1);
        switch(opponentmoves)
        {
            case 1:
                //Mission 1 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
                {
                    setTimeout(scratch(), 5000);
                    break;
                }
                //Mission 2 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
                {
                    setTimeout(arrowshoot(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
                $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
                {
                    setTimeout(lightbeam(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
                {
                    setTimeout(uvlight(), 5000);
                    break;
                }
                //Mission 4 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
                {
                    setTimeout(maulhit(), 5000);
                    break;
                }
                //Mission 5 duel opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Duel_Opponent_Golden_Scorpion_Warrior.png")
                {
                    //TODO
                }
            case 2:
                //Mission 1 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
                {
                    setTimeout(bite(), 5000);
                    break;
                }
                //Mission 2 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
                {
                    setTimeout(stealthfox(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
                $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
                {
                    setTimeout(contrastoverload(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
                {
                    setTimeout(cannonshot(), 5000);
                    break;
                }
                //Mission 4 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
                {
                    setTimeout(crossbowshoot(), 5000);
                    break;
                }
                //Mission 5 duel opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Duel_Opponent_Golden_Scorpion_Warrior.png")
                {
                    //TODO
                }
            case 3:
                //Mission 1 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
                {
                    setTimeout(noise(), 5000);
                    break;
                }
                //Mission 2 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
                {
                    setTimeout(axeattack(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
                $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
                {
                    setTimeout(lightbeam(), 5000);
                    break;
                }
                //Mission 3 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
                {
                    setTimeout(uvlight(), 5000);
                    break;
                }
                //Mission 4 opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
                {
                    setTimeout(shieldsmash(), 5000);
                    break;
                }
                //Mission 5 duel opponent character
                if($("#enemycharacter").attr("src") == "Character sources/Duel_Opponent_Golden_Scorpion_Warrior.png")
                {
                    //TODO
                }
        }
        
        //Victory condition
        if(opponentscene_health <= 0)
        {
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Giant_Cockroach.png")
            {
                alert("Victory");
                window.location.href='map.html';
                //TODO
                var roaches = parseInt(localStorage.getItem("roacheswin"));
                localStorage.setItem("roacheswin", ++roaches);
                localStorage.setItem("hero_experience", gainexperience + 5);    
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Forest_Outlaw.png")
            {
                alert("Victory");
                window.location.href='map.html';
                //TODO
                var forestoutlaws = parseInt(localStorage.getItem("forestoutlawswin"));
                localStorage.setItem("forestoutlawswin", ++forestoutlaws);
                localStorage.setItem("hero_experience", gainexperience + 10);
                localStorage.setItem("item_axe", ++axegathered);
                localStorage.setItem("item_bag_of_arrows", ++arrowsgathered);
                localStorage.setItem("item_bow", ++bowsgathered);    
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
            $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png")
            {
                alert("Victory");
                var risingsunmagicianschoolstudents = localStorage.getItem("sunmagicianstudentswin");
                localStorage.setItem("sunmagicianstudentswin", ++risingsunmagicianschoolstudents);
                window.location.href='map.html';
                localStorage.setItem("hero_experience", gainexperience + 20); 
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
            {
                alert("Victory");
                var risingsunmagicianschoolteachers = localStorage.getItem("sunmagicianteacherswin");
                localStorage.setItem("sunmagicianteacherswin", ++risingsunmagicianschoolteachers);
                window.location.href='map.html';
                localStorage.setItem("hero_experience", gainexperience + 50); 
            }
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Order_of_Crimson_Sword_Skirmisher.png")
            {
                alert("Victory");
                var crimsonswordskirmisher = localStorage.getItem("crimsonswordskirmisherswin01");
                localStorage.setItem("crimsonswordskirmisherswin01", ++crimsonswordskirmisher);
                localStorage.setItem("item_maul", ++maulgathered);
                localStorage.setItem("item_crossbow", ++crossbowgathered);
                localStorage.setItem("item_bag_of_arrows", ++arrowsgathered);
                localStorage.setItem("item_shield", ++shieldgathered);
                window.location.href='map.html';
                localStorage.setItem("hero_experience", gainexperience + 100);
            }
        }

        //Defeat condition
        if(battlescene_health <= 0)
        {
            alert("You lost the battle!");
            if($("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Female.png" ||
            $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Student_Male.png" ||
            $("#enemycharacter").attr("src") == "Character sources/Opponent_Rising_Sun_Magician_School_Teacher.png")
            {
                localStorage.setItem("sunmagicianschoolplayerdefeat", 0);
            }
            window.location.href='map.html';
        }
    }
}

//Card attack
function cardattack()
{
    /*var gainexperience = parseInt(localStorage.getItem("hero_experience"));
    if(localStorage.getItem("number_of_cards") == 0)
    {
        alert("You have no cards to use!");
    }
    else
    {
        alert("Opening card menu");
        //TODO
        window.location.href = "cards.html";
    }*/
    alert("Will come in one later version of this game!");
}

//Recover HP
function recovercharacter()
{
    var amountofmedicalliquid = parseInt(localStorage.getItem("item_medical_liquid"));
    //base medic
    if(amountofmedicalliquid > 0 && localStorage.getItem("mediclevel01") != 0 && localStorage.getItem("mediclevel02") != 0 && localStorage.getItem("mediclevel03") != 0 && localStorage.getItem("mediclevel04") != 0)
    {
        battlescene_health = battlescene_health * 1.25;
        document.getElementById("rpghealth").innerHTML = battlescene_health;
        localStorage.setItem("item_medical_liquid", --amountofmedicalliquid);
    }
    //medic level 1
    if(amountofmedicalliquid > 0 && localStorage.getItem("mediclevel01") == 0 && localStorage.getItem("mediclevel02") != 0 && localStorage.getItem("mediclevel03") != 0 && localStorage.getItem("mediclevel04") != 0)
    {
        battlescene_health = battlescene_health * 1.30;
        document.getElementById("rpghealth").innerHTML = battlescene_health;
        localStorage.setItem("item_medical_liquid", --amountofmedicalliquid);
    }
    //medic level 2
    if(amountofmedicalliquid > 0 && localStorage.getItem("mediclevel01") == 0 && localStorage.getItem("mediclevel02") == 0 && localStorage.getItem("mediclevel03") != 0 && localStorage.getItem("mediclevel04") != 0)
    {
        battlescene_health = battlescene_health * 1.35;
        document.getElementById("rpghealth").innerHTML = battlescene_health;
        localStorage.setItem("item_medical_liquid", --amountofmedicalliquid);
    }
    //medic level 3
    if(amountofmedicalliquid > 0 && localStorage.getItem("mediclevel01") == 0 && localStorage.getItem("mediclevel02") == 0 && localStorage.getItem("mediclevel03") == 0 && localStorage.getItem("mediclevel04") != 0)
    {
        battlescene_health = battlescene_health * 1.40;
        document.getElementById("rpghealth").innerHTML = battlescene_health;
        localStorage.setItem("item_medical_liquid", --amountofmedicalliquid);
    }
    //medic level 4
    if(amountofmedicalliquid > 0 && localStorage.getItem("mediclevel01") == 0 && localStorage.getItem("mediclevel02") == 0 && localStorage.getItem("mediclevel03") == 0 && localStorage.getItem("mediclevel04") == 0)
    {
        battlescene_health = battlescene_health * 1.45;
        document.getElementById("rpghealth").innerHTML = battlescene_health;
        localStorage.setItem("item_medical_liquid", --amountofmedicalliquid);
    }
    //no medic liquid available
    else if(amountofmedicalliquid == 0)
    {
        alert("You have no medical liquid to recover HP for the character!");
    }
}

//responsivity
//experimental
/*if (window.matchMedia('(max-width: 1280px)').matches)
{
    $("#enemycharacter").css("width", "9%");
}*/
/*if (window.matchMedia('(min-width: 1920px)').matches)
{
    $("#enemycharacter").css("width", "9%");
}*/