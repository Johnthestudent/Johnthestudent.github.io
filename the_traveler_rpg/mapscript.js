//Opponent character rpg based localstorage values
localStorage.setItem("battle_health", 100);
localStorage.setItem("max_health", 100);
localStorage.setItem("battle_attack", 100);
localStorage.setItem("max_attack", 100);
localStorage.setItem("battle_defense", 100);
localStorage.setItem("max_defense", 100);
localStorage.setItem("battle_speed", 100);
localStorage.setItem("max_speed", 100);
localStorage.setItem("battle_intelligence", 100);
localStorage.setItem("max_intelligence", 100);

var numberofclicks_forquest = 0; //helper variable for making Quests button togglable 
var numberofclicks_forstory = 0; //helper variable for making Story button togglable 

document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));

//level up possibility check
//gives a warning message when the player has reached enough xp to level up the character
if(parseInt(localStorage.getItem("hero_experience")) > parseInt(localStorage.getItem("level_up_point_limit")))
{
    document.getElementById("leveluppossibility").innerHTML = "Yes";
    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
}
else
{
    document.getElementById("leveluppossibility").innerHTML = "No";
    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
}

//mission completeness check
if(localStorage.getItem("mission1_complete") == 0)
{
    $("#adventuremap").prop("src", "Background sources/Mapsection02.png");
}
if(localStorage.getItem("mission2_complete") == 0)
{
    $("#adventuremap").prop("src", "Background sources/Mapsection03.png");
}
if(localStorage.getItem("mission3_complete") == 0)
{
    $("#adventuremap").prop("src", "Background sources/Mapsection04.png");
}
if(localStorage.getItem("mission4_complete") == 0)
{
    $("#adventuremap").prop("src", "Background sources/Mapsection05.png");
}
if(localStorage.getItem("mission5_complete") == 0)
{
    $("#adventuremap").prop("src", "Background sources/Mapsection06.png");
}
if(localStorage.getItem("mission6_complete") == 0)
{
    $("#adventuremap").prop("src", "Background sources/Mapsection07.png");
}
if(localStorage.getItem("mission7_complete") == 0)
{
    $("#adventuremap").prop("src", "Background sources/Mapsection08.png");
}
if(localStorage.getItem("mission8_complete") == 0)
{
    $("#adventuremap").prop("src", "Background sources/Mapsection09.png");
}
if(localStorage.getItem("mission9_complete") == 0)
{
    $("#adventuremap").prop("src", "Background sources/Mapsection10.png");
}
if(localStorage.getItem("mission10_complete") == 0)
{
    $("#adventuremap").prop("src", "Background sources/Mapsection11.png");
}
if(localStorage.getItem("mission11_complete") == 0)
{
    $("#adventuremap").prop("src", "Background sources/Mapsection12.png");
}
if(localStorage.getItem("mission12_complete") == 0)
{
    $("#adventuremap").prop("src", "Background sources/Mapsection13.png");
}
if(localStorage.getItem("mission13_complete") == 0)
{
    $("#adventuremap").prop("src", "Background sources/Mapsection14.png");
}
if(localStorage.getItem("mission14_complete") == 0)
{
    $("#adventuremap").prop("src", "Background sources/Mapsection15.png");
}
if(localStorage.getItem("mission15_complete") == 0)
{
    $("#adventuremap").prop("src", "Background sources/Mapsection16.png");
}
if(localStorage.getItem("mission16_complete") == 0)
{
    $("#adventuremap").prop("src", "Background sources/Mapsection17.png");
}
if(localStorage.getItem("mission17_complete") == 0)
{
    $("#adventuremap").prop("src", "Background sources/Mapsection18.png");
}
if(localStorage.getItem("mission18_complete") == 0)
{
    $("#adventuremap").prop("src", "Background sources/Mapsection19.png");
}
if(localStorage.getItem("mission19_complete") == 0)
{
    $("#adventuremap").prop("src", "Background sources/Mapsection20.png");
}
if(localStorage.getItem("mission20_complete") == 0)
{
    $("#adventuremap").prop("src", "Background sources/Mapsection21.png");
}
if(localStorage.getItem("mission21_complete") == 0)
{
    $("#adventuremap").prop("src", "Background sources/Gameclosingsection.png");
    $("#majorplace").css("display", "none");
    $("#random01").css("display", "none");
    $("#random02").css("display", "none");
    $("#random03").css("display", "none");
    $("#forbattle").css("display", "none");
}
if($("#adventuremap").attr("src") == "Background sources/Gameclosingsection.png")
{
    $("#majorplace").css("display", "none");
    $("#random01").css("display", "none");
    $("#random02").css("display", "none");
    $("#random03").css("display", "none");
    $("#forbattle").css("display", "none");
}

//Background music for the game
if($("#adventuremap").attr("src") == "Background sources/Mapsection01.png")
{   
    var night_travel = new Audio('Sound effects/JohnPogany - Night theme.ogg');
    if(localStorage.getItem("mission4_complete") == 1)
    {   
        night_travel.play();
    }
}
if($("#adventuremap").attr("src") == "Background sources/Mapsection05.png")
{   
    var desert_warrior = new Audio('Sound effects/JohnPogany - White desert.ogg');
    if(localStorage.getItem("mission4_complete") == 1)
    {   
        desert_warrior.play();
    }
}
if($("#adventuremap").attr("src") == "Background sources/Mapsection08.png")
{   
    var night_watch = new Audio('Sound effects/JohnPogany - Night theme.ogg');
    if(localStorage.getItem("mission4_complete") == 1)
    {   
        night_watch.play();
    }
}
if($("#adventuremap").attr("src") == "Background sources/Mapsection09.png")
{   
    var jungle_path = new Audio('Sound effects/JohnPogany - Jungle theme.ogg');
    if(localStorage.getItem("mission4_complete") == 1)
    {   
        jungle_path.play();
    }
}
if($("#adventuremap").attr("src") == "Background sources/Mapsection10.png")
{   
    var siege_stronghold1 = new Audio('Sound effects/JohnPogany - Siege battle theme.ogg');
    if(localStorage.getItem("mission4_complete") == 1)
    {   
        siege_stronghold1.play();
    }
}
if($("#adventuremap").attr("src") == "Background sources/Mapsection12.png")
{   
    var siege_stronghold2 = new Audio('Sound effects/JohnPogany - Siege battle theme.ogg');
    if(localStorage.getItem("mission4_complete") == 1)
    {   
        siege_stronghold2.play();
    }
}
if($("#adventuremap").attr("src") == "Background sources/Mapsection13.png")
{   
    var barbar_encounter = new Audio('Sound effects/JohnPogany - Trouble theme.ogg');
    if(localStorage.getItem("mission4_complete") == 1)
    {   
        barbar_encounter.play();
    }
}

//button coordinate and inner text change for change of map section
//Mapsection 1, aka Mission 1 button coordinates are defined in the mapstyle.css file
if($("#adventuremap").attr("src") == "Background sources/Mapsection01.png")
{
    document.getElementById("majorplace").innerHTML = "The stronghold";
    document.getElementById("random01").style.left = '600px';
    document.getElementById("random01").style.bottom = '500px';
    document.getElementById("random02").style.left = '450px';
    document.getElementById("random02").style.bottom = '400px';
    document.getElementById("random03").style.left = '200px';
    document.getElementById("random03").style.bottom = '400px';
    document.getElementById("forbattle").style.left = '300px';
    document.getElementById("forbattle").style.bottom = '600px';
    document.getElementById("majorplace").style.left = '600px';
    document.getElementById("majorplace").style.bottom = '600px';
}
//Mapsection 2
if($("#adventuremap").attr("src") == "Background sources/Mapsection02.png")
{
    document.getElementById("forbattle").style.left = '300px';
    document.getElementById("forbattle").style.top = '500px';
    document.getElementById("majorplace").style.top = '300px';
    document.getElementById("majorplace").style.left = '300px';
    document.getElementById("majorplace").innerHTML = "Contaminated water";
    document.getElementById("random02").style.left = '600px';
    document.getElementById("random03").style.left = '250px';
    document.getElementById("random03").style.bottom = '500px';
}
//Mapsection 3
if($("#adventuremap").attr("src") == "Background sources/Mapsection03.png")
{
    document.getElementById("forbattle").style.left = '240px';
    document.getElementById("forbattle").style.top = '350px';
    document.getElementById("majorplace").style.top = '250px';
    document.getElementById("majorplace").style.left = '240px';
    document.getElementById("majorplace").innerHTML = "Rising Sun Magician School";
    $("#majorplace").css("font-size", "18px");
    document.getElementById("random01").style.left = '650px';
}
//Mapsection 4
if($("#adventuremap").attr("src") == "Background sources/Mapsection04.png")
{
    document.getElementById("forbattle").style.left = '350px';
    document.getElementById("forbattle").style.top = '500px';
    document.getElementById("majorplace").style.top = '570px';
    document.getElementById("majorplace").style.left = '350px';
    document.getElementById("majorplace").innerHTML = "Harbor of Aser Town";
    document.getElementById("random01").style.left = '250px';
    document.getElementById("random03").style.left = '250px';
    document.getElementById("random03").style.top = '250px';
    document.getElementById("random02").style.left = '250px';
    document.getElementById("random02").style.top = '450px';
}
//Mapsection 5
if($("#adventuremap").attr("src") == "Background sources/Mapsection05.png")
{
    document.getElementById("forbattle").style.left = '500px';
    document.getElementById("forbattle").style.top = '450px';
    document.getElementById("majorplace").style.top = '540px';
    document.getElementById("majorplace").style.left = '500px';
    document.getElementById("majorplace").innerHTML = "Aser Town";
    document.getElementById("random01").style.left = '250px';
    document.getElementById("random03").style.left = '300px';
    document.getElementById("random03").style.top = '250px';
    document.getElementById("random02").style.left = '250px';
    document.getElementById("random02").style.top = '450px';
}
//Mapsection 6
if($("#adventuremap").attr("src") == "Background sources/Mapsection06.png")
{
    document.getElementById("majorplace").innerHTML = "Harbor of Alqamarrehad Town";
    $("#majorplace").css("font-size", "14px");
    document.getElementById("majorplace").style.top = '500px';
    document.getElementById("majorplace").style.left = '620px';
    document.getElementById("random01").style.left = '300px';
    document.getElementById("random01").style.bottom = '350px';
    document.getElementById("random02").style.left = '450px';
    document.getElementById("random02").style.bottom = '300px';
    document.getElementById("random03").style.left = '200px';
    document.getElementById("random03").style.bottom = '300px';
    document.getElementById("forbattle").style.left = '300px';
    document.getElementById("forbattle").style.bottom = '400px';
}
//Mapsection 7
if($("#adventuremap").attr("src") == "Background sources/Mapsection07.png")
{
    document.getElementById("majorplace").innerHTML = "Alqamarrehad Town";
    document.getElementById("majorplace").style.top = '400px';
    document.getElementById("majorplace").style.left = '400px';
    document.getElementById("random01").style.left = '600px';
    document.getElementById("random01").style.bottom = '600px';
    document.getElementById("random02").style.left = '300px';
    document.getElementById("random02").style.bottom = '400px';
    document.getElementById("random03").style.left = '200px';
    document.getElementById("random03").style.bottom = '550px';
    document.getElementById("forbattle").style.left = '400px';
    document.getElementById("forbattle").style.bottom = '550px';
}
//Mapsection 8
if($("#adventuremap").attr("src") == "Background sources/Mapsection08.png")
{
    document.getElementById("majorplace").innerHTML = "Milkene Town";
    document.getElementById("majorplace").style.top = '300px';
    document.getElementById("majorplace").style.left = '450px';
    document.getElementById("random01").style.left = '200px';
    document.getElementById("random01").style.bottom = '500px';
    document.getElementById("random02").style.left = '450px';
    document.getElementById("random02").style.bottom = '400px';
    document.getElementById("random03").style.left = '200px';
    document.getElementById("random03").style.bottom = '400px';
    document.getElementById("forbattle").style.left = '450px';
    document.getElementById("forbattle").style.bottom = '500px';
}
//Mapsection 9
if($("#adventuremap").attr("src") == "Background sources/Mapsection09.png")
{
    document.getElementById("majorplace").innerHTML = "End of the jungle";
    document.getElementById("majorplace").style.top = '170px';
    document.getElementById("majorplace").style.left = '500px';
    document.getElementById("random01").style.left = '600px';
    document.getElementById("random01").style.bottom = '500px';
    document.getElementById("random02").style.left = '450px';
    document.getElementById("random02").style.bottom = '370px';
    document.getElementById("random03").style.left = '650px';
    document.getElementById("random03").style.bottom = '300px';
    document.getElementById("forbattle").style.left = '480px';
    document.getElementById("forbattle").style.bottom = '600px';
}
//Mapsection 10
if($("#adventuremap").attr("src") == "Background sources/Mapsection10.png")
{
    document.getElementById("majorplace").innerHTML = "Marsh castle";
    document.getElementById("majorplace").style.top = '400px';
    document.getElementById("majorplace").style.left = '350px';
    document.getElementById("random01").style.left = '600px';
    document.getElementById("random01").style.bottom = '500px';
    document.getElementById("random02").style.left = '640px';
    document.getElementById("random02").style.bottom = '400px';
    document.getElementById("random03").style.left = '180px';
    document.getElementById("random03").style.bottom = '590px';
    document.getElementById("forbattle").style.left = '350px';
    document.getElementById("forbattle").style.bottom = '390px';
}
//Mapsection 11
if($("#adventuremap").attr("src") == "Background sources/Mapsection11.png")
{
    document.getElementById("majorplace").innerHTML = "Blue Moon Magician School";
    $("#majorplace").css("font-size", "18px");
    document.getElementById("majorplace").style.top = '540px';
    document.getElementById("majorplace").style.left = '315px';
    document.getElementById("random01").style.left = '500px';
    document.getElementById("random01").style.bottom = '300px';
    document.getElementById("random02").style.left = '550px';
    document.getElementById("random02").style.bottom = '450px';
    document.getElementById("random03").style.left = '450px';
    document.getElementById("random03").style.bottom = '600px';
    document.getElementById("forbattle").style.left = '315px';
    document.getElementById("forbattle").style.bottom = '400px';
}
//Mapsection 12
if($("#adventuremap").attr("src") == "Background sources/Mapsection12.png")
{
    document.getElementById("majorplace").innerHTML = "Othello castle";
    document.getElementById("majorplace").style.top = '200px';
    document.getElementById("majorplace").style.left = '250px';
    document.getElementById("random01").style.left = '600px';
    document.getElementById("random01").style.bottom = '500px';
    document.getElementById("random02").style.left = '450px';
    document.getElementById("random02").style.bottom = '400px';
    document.getElementById("random03").style.left = '200px';
    document.getElementById("random03").style.bottom = '400px';
    document.getElementById("forbattle").style.left = '200px';
    document.getElementById("forbattle").style.bottom = '500px';
}
//Mapsection 13
if($("#adventuremap").attr("src") == "Background sources/Mapsection13.png")
{
    document.getElementById("majorplace").innerHTML = "Barbarian lands";
    document.getElementById("random01").style.left = '600px';
    document.getElementById("random01").style.bottom = '500px';
    document.getElementById("random02").style.left = '450px';
    document.getElementById("random02").style.bottom = '400px';
    document.getElementById("random03").style.left = '200px';
    document.getElementById("random03").style.bottom = '400px';
    document.getElementById("forbattle").style.left = '300px';
    document.getElementById("forbattle").style.bottom = '600px';
    document.getElementById("majorplace").style.top = '540px';
    document.getElementById("majorplace").style.left = '500px';
}
//Mapsection 14
if($("#adventuremap").attr("src") == "Background sources/Mapsection14.png")
{
    document.getElementById("majorplace").innerHTML = "Barbarian lands";
    document.getElementById("majorplace").style.top = '560px';
    document.getElementById("majorplace").style.left = '200px';
    document.getElementById("random01").style.left = '600px';
    document.getElementById("random01").style.bottom = '500px';
    document.getElementById("random02").style.left = '350px';
    document.getElementById("random02").style.bottom = '500px';
    document.getElementById("random03").style.left = '600px';
    document.getElementById("random03").style.bottom = '300px';
    document.getElementById("forbattle").style.left = '300px';
    document.getElementById("forbattle").style.bottom = '600px';
}
//Mapsection 15
if($("#adventuremap").attr("src") == "Background sources/Mapsection15.png")
{
    document.getElementById("majorplace").innerHTML = "Ice Crystal Magician School";
    $("#majorplace").css("font-size", "18px");
    document.getElementById("majorplace").style.top = '400px';
    document.getElementById("majorplace").style.left = '485px';
    document.getElementById("random01").style.left = '600px';
    document.getElementById("random01").style.bottom = '640px';
    document.getElementById("random02").style.left = '250px';
    document.getElementById("random02").style.bottom = '500px';
    document.getElementById("random03").style.left = '200px';
    document.getElementById("random03").style.bottom = '600px';
    document.getElementById("forbattle").style.left = '485px';
    document.getElementById("forbattle").style.bottom = '570px';
}
//Mapsection 16
if($("#adventuremap").attr("src") == "Background sources/Mapsection16.png")
{
    document.getElementById("majorplace").innerHTML = "Hidegcheg Town";
    document.getElementById("majorplace").style.top = '350px';
    document.getElementById("majorplace").style.left = '350px';
    document.getElementById("random01").style.left = '600px';
    document.getElementById("random01").style.bottom = '500px';
    document.getElementById("random02").style.left = '450px';
    document.getElementById("random02").style.bottom = '430px';
    document.getElementById("random03").style.left = '200px';
    document.getElementById("random03").style.bottom = '430px';
    document.getElementById("forbattle").style.left = '300px';
    document.getElementById("forbattle").style.bottom = '600px';
}
//Mapsection 17
if($("#adventuremap").attr("src") == "Background sources/Mapsection17.png")
{
    document.getElementById("majorplace").innerHTML = "Railway";
    document.getElementById("majorplace").style.top = '320px';
    document.getElementById("majorplace").style.left = '200px';
    document.getElementById("random01").style.left = '600px';
    document.getElementById("random01").style.bottom = '500px';
    document.getElementById("random02").style.left = '300px';
    document.getElementById("random02").style.bottom = '500px';
    document.getElementById("random03").style.left = '200px';
    document.getElementById("random03").style.bottom = '400px';
    document.getElementById("forbattle").style.left = '300px';
    document.getElementById("forbattle").style.bottom = '630px';
}
//Mapsection 18
if($("#adventuremap").attr("src") == "Background sources/Mapsection18.png")
{
    document.getElementById("majorplace").innerHTML = "Nomadic territory";
    document.getElementById("random01").style.left = '600px';
    document.getElementById("random01").style.bottom = '500px';
    document.getElementById("random02").style.left = '450px';
    document.getElementById("random02").style.bottom = '400px';
    document.getElementById("random03").style.left = '200px';
    document.getElementById("random03").style.bottom = '400px';
    document.getElementById("forbattle").style.left = '300px';
    document.getElementById("forbattle").style.bottom = '600px';
    document.getElementById("majorplace").style.top = '540px';
    document.getElementById("majorplace").style.left = '500px';
}
//Mapsection 19
if($("#adventuremap").attr("src") == "Background sources/Mapsection19.png")
{
    document.getElementById("majorplace").innerHTML = "Red Sand Magician School";
    $("#majorplace").css("font-size", "18px");
    document.getElementById("majorplace").style.top = '350px';
    document.getElementById("majorplace").style.left = '270px';    
    document.getElementById("random01").style.left = '600px';
    document.getElementById("random01").style.bottom = '500px';
    document.getElementById("random02").style.left = '450px';
    document.getElementById("random02").style.bottom = '400px';
    document.getElementById("random03").style.left = '200px';
    document.getElementById("random03").style.bottom = '400px';
    document.getElementById("forbattle").style.left = '270px';
    document.getElementById("forbattle").style.bottom = '590px';
}
//Mapsection 20
if($("#adventuremap").attr("src") == "Background sources/Mapsection20.png")
{
    document.getElementById("majorplace").innerHTML = "New camp";
    document.getElementById("random01").style.left = '600px';
    document.getElementById("random01").style.bottom = '500px';
    document.getElementById("random02").style.left = '450px';
    document.getElementById("random02").style.bottom = '400px';
    document.getElementById("random03").style.left = '200px';
    document.getElementById("random03").style.bottom = '400px';
    document.getElementById("forbattle").style.left = '300px';
    document.getElementById("forbattle").style.bottom = '600px';
    document.getElementById("majorplace").style.top = '540px';
    document.getElementById("majorplace").style.left = '500px';
}
//Mapsection 21
if($("#adventuremap").attr("src") == "Background sources/Mapsection21.png")
{
    document.getElementById("majorplace").innerHTML = "Camp of the Smasher";
    document.getElementById("majorplace").style.top = '350px';
    document.getElementById("majorplace").style.left = '300px';
    document.getElementById("random01").style.left = '600px';
    document.getElementById("random01").style.bottom = '500px';
    document.getElementById("random02").style.left = '450px';
    document.getElementById("random02").style.bottom = '400px';
    document.getElementById("random03").style.left = '200px';
    document.getElementById("random03").style.bottom = '400px';
    document.getElementById("forbattle").style.left = '300px';
    document.getElementById("forbattle").style.bottom = '600px';
}
//Quest message button handling
$("#questmessage").on("click", function()
{
    numberofclicks_forquest+=1;
    //Showing info related to the quests
    if(numberofclicks_forquest % 2 != 0)
    {
        $("#mapimage").prop("src", "Background sources/Questimage.png");
        $("#adventuremap").css("display", "none");
        document.getElementById('questmessage').innerHTML = "Back to map";
        $("#situationmessage").css("display", "none");
        $("#forwardbutton").css("display", "none");
        $("#backwardbutton").css("display", "none");
        $("#majorplace").css("display", "none");
        $("#random01").css("display", "none");
        $("#random02").css("display", "none");
        $("#random03").css("display", "none");
        $("#forbattle").css("display", "none");
        $("#questdescription").css("display", "block");
        $("#levelhelper").css('display', "none");
        $("#addresourcesforquests").css('display', "none");
    }
    //Going back to the map menu
    else if(numberofclicks_forquest % 2 == 0)
    {
        $("#mapimage").prop("src", "Background sources/Mapimage.png");
        $("#adventuremap").css("display", "block");
        document.getElementById('questmessage').innerHTML = "Quests";
        $("#situationmessage").css("display", "block");
        $("#forwardbutton").css("display", "block");
        $("#backwardbutton").css("display", "block");
        $("#majorplace").css("display", "block");
        $("#random01").css("display", "block");
        $("#random02").css("display", "block");
        $("#random03").css("display", "block");
        $("#forbattle").css("display", "block");
        $("#questdescription").css("display", "none");
        $("#levelhelper").css('display', "block");
        $("#addresourcesforquests").css('display', "flex");
    }
    //The mission description changes based on the missions and the map sections
    if(($("#adventuremap").attr("src") == "Background sources/Mapsection01.png") && (localStorage.getItem("mission1_complete") == 1))
    {
        document.getElementById("missionname").innerHTML = "Mission 1.: Arriving at the borders";
        document.getElementById("missiondescription").innerHTML = "Not so far from the border of the Millitun Empire, there is a fortress. It had been holding back the attacks of the nomads for centuries, yet, it had to be abandoned 230 years ago, and only in ruins does it keep standing. It has to be rebuilt, so that it is going to serve as a base and a meeting point. Finish the rebuilding by finding wood and stone in the operational area! Also, wipe out the big cockroaches roaming around!";
        document.getElementById("victoryconditions").innerHTML = "Gather enough stone and wooden logs to repair the stronghold and defeat big cockroaches!"
        document.getElementById("conditionslist").innerHTML = "<ul><li>10 wooden logs</li><li>10 stone</li><li>10 defeated cockroaches</li></ul>"
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection02.png") && (localStorage.getItem("mission2_complete") == 1))
    {
        document.getElementById("missionname").innerHTML = "Mission 2.: Fresh water";
        document.getElementById("missiondescription").innerHTML = "People of Dunnabah town of Pearl Sultanate wrote a letter about contaminated water at the segment of river nearby. Clear the water, and find the people responsible for what happened!";
        document.getElementById("victoryconditions").innerHTML = "Clear the contaminated water and find the people responsible for that!"
        document.getElementById("conditionslist").innerHTML = "<ul><li>4 places to decontaminate</li><li>20 defeated forest bandits</li></ul>"
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection03.png") && (localStorage.getItem("mission3_complete") == 1))
    {
        document.getElementById("missionname").innerHTML = "Mission 3.: Sunset";
        document.getElementById("missiondescription").innerHTML = "The Rising Sun Magician School has to be closed! There are many light and firearm based tools in the classrooms, and the teachers are cunning! Besiege the school, before the Order of the Crimson Sword finds that place!";
        document.getElementById("victoryconditions").innerHTML = "Besiege Rising Sun Magician School!";
        document.getElementById("conditionslist").innerHTML = "<ul><li>40 defeated magician students</li><li>10 defeated magician teachers</li></ul>";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection04.png") && (localStorage.getItem("mission4_complete") == 1))
    {
        document.getElementById("missionname").innerHTML = "Mission 4.: Riverway";
        document.getElementById("missiondescription").innerHTML = "We have to get to the capital of Pearl Sultanate, Aser! Construct a small ship and take a journey up to Aser via the river! Be aware of the nearby parties of the Order of the Crimson Sword!";
        document.getElementById("victoryconditions").innerHTML = "Get to Aser town via ship through the river";
        document.getElementById("conditionslist").innerHTML = "<ul><li>10 defeated Order of Crimson sword skirmishers</li><li>4 wooden logs for the boat</li><li>1 sail for the boat</li></ul>";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection05.png") && (localStorage.getItem("mission5_complete") == 1))
    {
        document.getElementById("missionname").innerHTML = "Mission 5.: Scorpion sting";
        document.getElementById("missiondescription").innerHTML = "The Order of the Golden Scorpion wants to test your skills. Challenge 3 of them in a fair duel! Only for winning all 3 rounds will you get permission from them to go outside to the desert to seek warbands of the Order of the Crimson Sword!";
        document.getElementById("victoryconditions").innerHTML = "Challenge the Order of the Golden Scorpion, and gained permission, seek warbands around Aser";
        document.getElementById("conditionslist").innerHTML = "<ul><li>3 won duels against the Order of Golden Scorpion</li><li>10 defeated Order of Crimson sword skirmishers</li></ul>";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection06.png") && (localStorage.getItem("mission6_complete") == 1))
    {
        document.getElementById("missionname").innerHTML = "Mission 6.: Battleship";
        document.getElementById("missiondescription").innerHTML = "The Pearl Sultanate has given us this battleship as a gift. Repair it, set sail and fight your way up to the town of Alqamarrehad via sea!";
        document.getElementById("victoryconditions").innerHTML = "Gather resources to repair the battleship and fight way up to Alqamarrehad town through the sea";
        document.getElementById("conditionslist").innerHTML = "<ul><li>10 defeated Order of Crimson sword markswomen</li><li>10 wooden logs for the ship</li><li>5 iron ingots for the ship</li><li>4 sails for the ship</li></ul>";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection07.png") && (localStorage.getItem("mission7_complete") == 1))
    {
        document.getElementById("missionname").innerHTML = "Mission 7.: Alqamarrehad";
        document.getElementById("missiondescription").innerHTML = "The town of Alqamarrehad had already seen warriors of the Order of the Crimson Sword before, but they are back, and they are about to do so something during night. Your task is to be the nightguard of this town for this night.";
        document.getElementById("victoryconditions").innerHTML = "Defend the town against the Order of Crimson Sword";
        document.getElementById("conditionslist").innerHTML = "<ul><li>20 defeated Order of Crimson sword markswomen</li></ul>";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection08.png") && (localStorage.getItem("mission8_complete") == 1))
    {
        document.getElementById("missionname").innerHTML = "Mission 8.: Nightguard";
        document.getElementById("missiondescription").innerHTML = "We have arrived into another kingdom, the Kingdom of Asimia. The town of Milkene is preparing for the arrival of the Order of The Crimson Sword. Gather the remaining resources!";
        document.getElementById("victoryconditions").innerHTML = "Gather resources for the nightguards of Milkene town";
        document.getElementById("conditionslist").innerHTML = "<ul><li>10 copper ingots for the defenders</li><li>20 coal chunks for the defenders</li><li>5 breads for the defenders</li></ul>";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection09.png") && (localStorage.getItem("mission9_complete") == 1))
    {
        document.getElementById("missionname").innerHTML = "Mission 9.: Jungle mayhem";
        document.getElementById("missiondescription").innerHTML = "We have to get to Marsh castle, which is located at the southern border of the Kingdom of Cuprum! However, the way up to it is in a lush jungle. Therefore, watch your steps and be aware of the wild animals!";
        document.getElementById("victoryconditions").innerHTML = "Seek warbands in the jungle of Lugas peninsula";
        document.getElementById("conditionslist").innerHTML = "<ul><li>10 defeated jungle snakes</li></ul>";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection10.png") && (localStorage.getItem("mission10_complete") == 1))
    {
        document.getElementById("missionname").innerHTML = "Mission 10.: Marsh castle";
        document.getElementById("missiondescription").innerHTML = "Marsh castle, located in the southern region of the Kingdom of Cuprum, is known to be a neigh impenetrable fortress. Until our arrival to this place, it had survived many onslaughts from the Order of the Crimson Sword. Scouts reported that another massive army from them is on its way to the castle. Repair the castle and prepare yourself for this “final” siege!";
        document.getElementById("victoryconditions").innerHTML = "Repair Marsh castle and defend it";
        document.getElementById("conditionslist").innerHTML = "<ul><li>30 defeated Order of Crimson sword footmen</li><li>40 wooden logs</li><li>20 stone</li><li>level 2 builder unlocked</li></ul>";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection11.png") && (localStorage.getItem("mission11_complete") == 1))
    {
        document.getElementById("missionname").innerHTML = "Mission 11.: Lunar eclipse";
        document.getElementById("missiondescription").innerHTML = "The Blue Moon Magician School has to be closed! The students and the teachers are capable of flying with capes, no magic but physics! Therefore, this siege will truly test your speed and intelligence! Pass the duel test, and then besiege the school, before the Order of the Crimson Sword takes it!";
        document.getElementById("victoryconditions").innerHTML = "Challenge Mumuska, and having won the challenge, besiege Blue Moon Magician School";
        document.getElementById("conditionslist").innerHTML = "<ul><li>1 time won the challenge against Mumuska</li><li>40 defeated magician students</li><li>10 defeated magician teachers</li></ul>";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection12.png") && (localStorage.getItem("mission12_complete") == 1))
    {
        document.getElementById("missionname").innerHTML = "Mission 12.: Othello castle";
        document.getElementById("missiondescription").innerHTML = "Othello castle, the most northern fortress of the Kingdom of Cuprum, has been recently besieged by the Order of the Crimson Sword. The order’s troops retreated and scattered all around the area. Defend the castle!";
        document.getElementById("victoryconditions").innerHTML = "Defend the area of Othello castle";
        document.getElementById("conditionslist").innerHTML = "<ul><li>30 defeated Order of Crimson sword footmen</li><li>20 wooden logs</li><li>40 stone</li><li>level 4 builder unlocked</li></ul>";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection13.png") && (localStorage.getItem("mission13_complete") == 1))
    {
        document.getElementById("missionname").innerHTML = "Mission 13.: Into the lands of ever winter";
        document.getElementById("missiondescription").innerHTML = "The northern barbarian tribes won’t allow us to enter their territory without payment. Gather the required resources for the payment!";
        document.getElementById("victoryconditions").innerHTML = "Gather the required resources for the payment";
        document.getElementById("conditionslist").innerHTML = "<ul><li>20 fruitbaskets</li><li>10 coal chunks</li></ul>";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection14.png") && (localStorage.getItem("mission14_complete") == 1))
    {
        document.getElementById("missionname").innerHTML = "Mission 14.: Through snow and ice";
        document.getElementById("missiondescription").innerHTML = "Pass through the taiga to get to the next destination point! Be aware! Wild animals are present in that area!";
        document.getElementById("victoryconditions").innerHTML = "Get through the taiga";
        document.getElementById("conditionslist").innerHTML = "<ul><li>10 defeated white bears</li></ul>";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection15.png") && (localStorage.getItem("mission15_complete") == 1))
    {
        document.getElementById("missionname").innerHTML = "Mission 15.: Frosty or not frosty";
        document.getElementById("missiondescription").innerHTML = "The Ice Crystal Magician School has to be closed! They are pillagers and have high defense values. Pass the duel test, and then besiege the school, before the Order of the Crimson Sword takes it!";
        document.getElementById("victoryconditions").innerHTML = "Challenge Cseperke, and having won the challenge, besiege Ice Crystal Magician School";
        document.getElementById("conditionslist").innerHTML = "<ul><li>1 time won the challenge against Cseperke</li><li>40 defeated magician students</li><li>10 defeated magician teachers</li></ul>";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection16.png") && (localStorage.getItem("mission16_complete") == 1))
    {
        document.getElementById("missionname").innerHTML = "Mission 16.: Hunter";
        document.getElementById("missiondescription").innerHTML = "Before entering that territory of Kingdom of Havas, you have to pass the test of the Order of the Snow Owl!";
        document.getElementById("victoryconditions").innerHTML = "Challenge the Order of Snow Owl, and gained permission, seek warbands around Hidegcheg town";
        document.getElementById("conditionslist").innerHTML = "<ul><li>4 won duels against the Order of Snow Owl</li><li>10 defeated white bears</li></ul>";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection17.png") && (localStorage.getItem("mission17_complete") == 1))
    {
        document.getElementById("missionname").innerHTML = "Mission 17.: Railway";
        document.getElementById("missiondescription").innerHTML = "The Order of the Crimson Sword had ruined this railway, while we were passing through the taiga. Gather enough wood, iron and coal to fix everything and start our way to a train station at the border of the Kingdom of Cuprum.";
        document.getElementById("victoryconditions").innerHTML = "Gather resources to fix the rails and the tank engine";
        document.getElementById("conditionslist").innerHTML = "<ul><li>10 iron ingots</li><li>4 coal chunks</li><li>30 wooden logs</li></ul>";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection18.png") && (localStorage.getItem("mission18_complete") == 1))
    {
        document.getElementById("missionname").innerHTML = "Mission 18.: Nomads encounter";
        document.getElementById("missiondescription").innerHTML = "Similar case here on the steppes, like on the lands of the barbarian tribes. Gather resources for the payment!";
        document.getElementById("victoryconditions").innerHTML = "Gather resources as payment for territory pass";
        document.getElementById("conditionslist").innerHTML = "<ul><li>10 ice cubs</li><li>20 raw meat</li></ul>";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection19.png") && (localStorage.getItem("mission19_complete") == 1))
    {
        document.getElementById("missionname").innerHTML = "Mission 19.: Sandstorm";
        document.getElementById("missiondescription").innerHTML = "The final magician school, which we have to take down, is the Red Sand Magician School. This one takes in orphans and outcast of nomadic tribes, so their stats are well-balanced. Use levelled up skills if needed!";
        document.getElementById("victoryconditions").innerHTML = "Besiege Red Sand Magician School";
        document.getElementById("conditionslist").innerHTML = "<ul><li>40 defeated magician students</li><li>10 defeated magician teachers</li></ul>";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection20.png") && (localStorage.getItem("mission20_complete") == 1))
    {
        document.getElementById("missionname").innerHTML = "Mission 20.: Legion indeed";
        document.getElementById("missiondescription").innerHTML = "Lord Sín Csipa, aka the Smasher, a Japanese warlord, has become the leader of the Order of the Crimson Sword. Gather resources for this camp of ours to withstand the Legion of the order coming, and take up the fight against it! The Smasher will really send in all the beasts he has!";
        document.getElementById("victoryconditions").innerHTML = "Gather resources for the camp and defeat the legion of spiders";
        document.getElementById("conditionslist").innerHTML = "<ul><li>30 spears for the camp</li><li>1 defeated spider legion</li></ul>";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection21.png") && (localStorage.getItem("mission21_complete") == 1))
    {
        document.getElementById("missionname").innerHTML = "Mission 21.: Final strike";
        document.getElementById("missiondescription").innerHTML = "The Smasher gathered the remnants of his forces into a Hussite like fortress, covered with explosives and other booby traps. Therefore, direct approach would be too risky, so use the moonstone ballistas to activate the traps, get a clear path and take the Smasher and the Order of the Crimson Sword down!";
        document.getElementById("victoryconditions").innerHTML = "Besiege the last fortress of the Order of Crimson Sword and defeat the Smasher";
        document.getElementById("conditionslist").innerHTML = "<ul><li>4 moonballistas</li><li>defeat the Smasher</li></ul>";
    }
    else if(localStorage.getItem("mission21_complete") == 0)
    {
        document.getElementById("missionname").innerHTML = "You have won the game!";
        document.getElementById("missiondescription").innerHTML = "Thanks for playing!";
        document.getElementById("victoryconditions").innerHTML = "Try to walkthrough the game with the rest of the choosable characters!";
        document.getElementById("conditionslist").innerHTML = "Having any questions related to the game, ask via the contact, given in the Info section!";
    }
});

//Story message button handling
$("#charactermessage").on("click", function()
{
    numberofclicks_forstory += 1;
    //Showing info related to the story
    if(numberofclicks_forstory % 2 != 0)
    {
        $("#storydescription").css("display", "block");
        $("#adventuremap").css("display", "none");
        $("#situationmessage").css("display", "none");
        $("#forwardbutton").css("display", "none");
        $("#backwardbutton").css("display", "none");
        $("#majorplace").css("display", "none");
        $("#random01").css("display", "none");
        $("#random02").css("display", "none");
        $("#random03").css("display", "none");
        $("#forbattle").css("display", "none");
        $("#levelhelper").css('display', "none");
        $("#addresourcesforquests").css('display', "none");
    }
    //Going back to the map menu
    else if(numberofclicks_forstory % 2 == 0)
    {
        $("#storydescription").css("display", "none");
        $("#adventuremap").css("display", "block");
        $("#situationmessage").css("display", "block");
        $("#forwardbutton").css("display", "block");
        $("#backwardbutton").css("display", "block");
        $("#majorplace").css("display", "block");
        $("#random01").css("display", "block");
        $("#random02").css("display", "block");
        $("#random03").css("display", "block");
        $("#forbattle").css("display", "block");
        $("#levelhelper").css('display', "block");
        $("#addresourcesforquests").css('display', "flex");
    }
    //The story and characters shown varies based on the missions and map sections
    //Intro section
    if($("#adventuremap").attr("src") == "Background sources/Gameintrosection.png")
    {
        document.getElementById("storymessage").innerHTML = "King Thomas IV: We are going to need a careful strategy! They said that the soldiers of that Order can appear anywhere! Balanced number of parties, warbands and patrols of ours and our neighbors have to roam around the borders, the settlements and the chosen areas! For making the entire operation easy and lessening the Order’s interest in this continent, we can allow only one adventurer to come and do the part of the Adventurer Guild of London in this operation!";
        $("#storyteller").prop('src', "Character sources/King_Thomas_IV.png");
    }
    //For Mission 1 
    if(($("#adventuremap").attr("src") == "Background sources/Mapsection01.png") && (localStorage.getItem("mission1_complete") == 1))
    {
        document.getElementById("storymessage").innerHTML = "Millitunian centurion: Aha! An adventurer of the Adventurer Guild of London! We have been waiting for you! It took a couple months since the start of the crusade! Some armies of the Order of the Crimson Sword have been taken down, yet they keep coming! Here is the list of tasks to do!";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection01.png") && (localStorage.getItem("mission1_complete") == 0))
    {
        document.getElementById("missiondescription").innerHTML = "The fortress is complete, so the journey following the way given by King Thomas IV has begun!";
        document.getElementById("victoryconditions").innerHTML = "";
        document.getElementById("conditionslist").innerHTML = "";
        $("#storyteller").prop('src', "Mission sources/Mission01_complete_fortress.png");
    }
    //For Mission 2
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection02.png") && (localStorage.getItem("mission2_complete") == 1))
    {
        document.getElementById("storymessage").innerHTML = "Millitunian centurion: Look at the river! That is surely the work of the Order of the Crimson Sword! We are better to decontaminate the water, because we received complaints from Dunnabah town of Pearl Sultanate!";
        $("#storyteller").prop('src', "Character sources/Millitunian_Centurion.png");
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection02.png") && (localStorage.getItem("mission2_complete") == 0))
    {
        document.getElementById("storymessage").innerHTML = "The river is clean, the highwaymen are caught!";
        $("#storyteller").prop('src', "Mission sources/Mission02_complete_clean_river.png");
    }
    //For Mission 3
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection03.png") && (localStorage.getItem("mission3_complete") == 1))
    {
        $("#storyteller").prop('src', "Character sources/Veronika_introduction.png");
        if(localStorage.getItem("hero_name") == "Nate" || localStorage.getItem("hero_name") == "Emilia" || localStorage.getItem("hero_name") == "Ryuzen")
        {
            document.getElementById("storymessage").innerHTML = "Veronika: Greetings! I am Veronika. Adventurer from the Adventurer Guild of Silvertown. Wait a second…it is really you! From that mission at Alqamarrehad! Glad that you are here! We need a key person to besiege the Rising Sun Magician School! I was expelled from that place years ago, so I can give you a map about the entire school.";
        }
        else if(localStorage.getItem("hero_name") == "Mary" || localStorage.getItem("hero_name") == "Ian" || localStorage.getItem("hero_name") == "Olav"
        || localStorage.getItem("hero_name") == "Bo" || localStorage.getItem("hero_name") == "Daisuke" || localStorage.getItem("hero_name") == "Erin"
        || localStorage.getItem("hero_name") == "Midna")
        {
            document.getElementById("storymessage").innerHTML = "Veronika: Greetings! I am Veronika. Adventurer from the Adventurer Guild of Silvertown. Glad that you are here! Are you an adventurer from the Adventurer Guild of London? Good. We need a key person to besiege the Rising Sun Magician School! I was expelled from that place years ago, so I can give you a map about the entire school.";
        }
        //If the player won the battle
        if(localStorage.getItem("sunmagicianschoolplayerwin") == 0 && localStorage.getItem("mission3_complete") == 0)
        {
            document.getElementById("storymessage").innerHTML = "The Rising Sun Magician School is no more! The area is safe!";
            $("#storyteller").prop('src', "Mission sources/Mission03_complete_defeated_rising_sun_magician_school.png");
        }
        //If the player lost the battle
        if(localStorage.getItem("sunmagicianschoolplayerdefeat") == 0)
        {
            $("#storyteller").prop('src', "Character sources/Veronika_lost_battle.png");
            document.getElementById("storymessage").innerHTML = "Veronika: Beaten by them? Oh, I forgot to tell you about their ways! Nevermind! Try again! You know that I am not going back to that place! So, who is going to enter the building for the siege? You, obviously!";
        }
    }
    //For Mission 4
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection04.png") && (localStorage.getItem("mission4_complete") == 1))
    {
        document.getElementById("storymessage").innerHTML = "Veronika: The people of Dunnabah are thankful for what you have done! However, there is still a long journey waiting for you! As for me, I have to go back to the Disciple’s Way School of Silvertown!";
        $("#storyteller").prop('src', "Character sources/Veronika_saying_goodbye.png");
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection04.png") && (localStorage.getItem("mission4_complete") == 0))
    {
        document.getElementById("storymessage").innerHTML = "We have arrived! Welcome to Aser town, capital of the Pearl Sultanate!";
        $("#storyteller").prop('src', "Mission sources/Mission04_complete_arriving_to_aser_town.png");
    }
    //For Mission 5
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection05.png") && (localStorage.getItem("mission5_complete") == 1))
    {
        document.getElementById("storymessage").innerHTML = "Golden Scorpion warrior: Excuse me? Are you truly about to give a helping hand in that crusade? What an honorable action! Yet, you cannot go outside for the next operation without our permission! Sisters! Challenge that adventurer!";
        $("#storyteller").prop('src', "Character sources/Golden_Scorpion_warrior.png");
        //If the player won the battle
        if(localStorage.getItem("goldenscorpionduelplayerwin") == 0)
        {
            document.getElementById("storymessage").innerHTML = "Golden Scorpion warrior: You have proven yourself! Many fear us, but you showed us trust! Please, accept this form of aid of ours! You will surely need it for your journey!";
            $("#storyteller").prop('src', "Character sources/Golden_Scorpion_warrior_victory.png");
        }
        //If the player lost the battle
        if(localStorage.getItem("goldenscorpionduelplayerdefeat") == 0)
        {
            $("#storyteller").prop('src', "Character sources/Golden_Scorpion_warrior_lost_battle.png");
            document.getElementById("storymessage").innerHTML = "Golden Scorpion warrior: Are you alright? Anybody, who challenges us, must consider these: elegance and intelligence! We will wait for you until you truly get ready for our challenge!";
        }
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection05.png") && (localStorage.getItem("mission5_complete") == 0))
    {
        document.getElementById("storymessage").innerHTML = "Golden Scorpion warrior: You have proven yourself! Many fear us, but you showed us trust! Please, accept this form of aid of ours! You will surely need it for your journey!";
        $("#storyteller").prop('src', "Character sources/Golden_Scorpion_warrior_victory.png");
    }
    //For Mission 6
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection06.png") && (localStorage.getItem("mission6_complete") == 1))
    {
        document.getElementById("storymessage").innerHTML = "Sailor: Do you want that ship? It is free of charge, provided that you repair it by yourself!";
        $("#storyteller").prop('src', "Character sources/Sailor.png");
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection06.png") && (localStorage.getItem("mission6_complete") == 0))
    {
        document.getElementById("storymessage").innerHTML = "Town in our sight! To the harbor!";
        $("#storyteller").prop('src', "Mission sources/Mission06_complete_arriving_to_alqamarrehad_town.png");
    }
    //For Mission 7
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection07.png") && (localStorage.getItem("mission7_complete") == 1))
    {
        document.getElementById("storymessage").innerHTML = "Ezra: Glad that you have arrived! I am Ezra, adventurer from the Adventurer Guild of Silvertown. I have been ordered by King Thomas IV to assist you in defending this town, which is more likely to be besieged around night.";
        $("#storyteller").prop('src', "Character sources/Ezra_introduction.png");
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection07.png") && (localStorage.getItem("mission7_complete") == 0))
    {
        document.getElementById("storymessage").innerHTML = "Morning has come! Good job! ";
        $("#storyteller").prop('src', "Mission sources/Mission07_complete_alqamarrehad_town_victory.png");
    }
    //For Mission 8
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection08.png") && (localStorage.getItem("mission8_complete") == 1))
    {
        document.getElementById("storymessage").innerHTML = "Ezra: What a night! Nevertheless, the crusade is far from over! The town of Milkene from the Kingdom of Asimia asked for a neigh similar help! Take my ship! I am needed in the neighboring villages.";
        $("#storyteller").prop('src', "Character sources/Ezra_introduction.png");
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection08.png") && (localStorage.getItem("mission8_complete") == 0))
    {
        document.getElementById("storymessage").innerHTML = "We are victorious, adventurer!";
        $("#storyteller").prop('src', "Mission sources/Mission08_complete_milkene_town_victory.png");
    }
    //For Mission 9
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection09.png") && (localStorage.getItem("mission9_complete") == 1))
    {
        $("#storyteller").prop('src', "Character sources/Naftali_introduction.png");
        if(localStorage.getItem("hero_name") == "Nate" || localStorage.getItem("hero_name") == "Mary" || localStorage.getItem("hero_name") == "Bo"
        || localStorage.getItem("hero_name") == "Olav")
        {
        document.getElementById("storymessage").innerHTML = "Naftali: Greetings! I am Naftali, adventurer from the Adventurer Guild of Silvertown. Wait a second! I have seen you before! On the mission of saving Leto, the white wolf, on that jungle island. Glad that you are here. The Lugas tribes managed to handle things on this peninsula relatively easily, but we heard that some animals became loyal to the Order of the Crimson Sword. I know the tribes well, because I am a Lugas man. I have been ordered by King Thomas IV to assist you through its jungles.";
        }
        else if(localStorage.getItem("hero_name") == "Emilia" || localStorage.getItem("hero_name") == "Ian" || localStorage.getItem("hero_name") == "Ryuzen"
        || localStorage.getItem("hero_name") == "Daisuke" || localStorage.getItem("hero_name") == "Erin" || localStorage.getItem("hero_name") == "Midna")
        {
            document.getElementById("storymessage").innerHTML = "Naftali: Greetings! I am Naftali, adventurer from the Adventurer Guild of Silvertown. You are from the Adventurer Guild of London? Glad that you are here. The Lugas tribes managed to handle things on this peninsula relatively easily, but we heard that some animals became loyal to the Order of the Crimson Sword. I know the tribes well, because I am a Lugas man. I have been ordered by King Thomas IV to assist you through its jungles.";
        }
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection09.png") && (localStorage.getItem("mission9_complete") == 0))
    {
        document.getElementById("storymessage").innerHTML = "Naftali: You fit the conditions to become a hunter in any tribe. Wishing the best for the rest of your journey! I have to go back to that village over there! They are counting on me!";
        $("#storyteller").prop('src', "Mission sources/Mission09_complete_at_the_other_edge_of_the_jungle.png");
    }
    //For Mission 10
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection10.png") && (localStorage.getItem("mission10_complete") == 1))
    {
        document.getElementById("storymessage").innerHTML = "Teutonic captain: Greetings stranger! A little helping hand would be great. This castle survived many onslaughts from the Order of the Crimson Sword. Yet, they keep coming. We are asking for a little help from you!";
        $("#storyteller").prop('src', "Character sources/Teutonic_Captain.png");
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection10.png") && (localStorage.getItem("mission10_complete") == 0))
    {
        document.getElementById("storymessage").innerHTML = "Teutonic captain: The castle has held firm! Praise God for this victory!";
        $("#storyteller").prop('src', "Mission sources/Mission10_complete_marsh_castle_victory.png");
    }
    //For Mission 11
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection11.png") && (localStorage.getItem("mission11_complete") == 1))
    {
        $("#storyteller").prop('src', "Character sources/Mumuska_introduction.png");
        if(localStorage.getItem("hero_name") == "Nate" || localStorage.getItem("hero_name") == "Mary" || localStorage.getItem("hero_name") == "Bo"
        || localStorage.getItem("hero_name") == "Olav")
        {
        document.getElementById("storymessage").innerHTML = "Mumuska: Greetings! My name is Mumuska, and I am an adventurer from the Adventurer Guild of Silvertown. Wait a second! I have seen you before! On the mission of saving Leto, the white wolf, on that jungle island. Glad that you are here! We need a key person to besiege the Blue Moon Magician School! I was expelled from that place last year, so I can give you a map about the entire school. However, before going into the school, you have to beat me in a friendly duel in order to pass a test! That is the order of King Thomas IV!";
        }
        else if(localStorage.getItem("hero_name") == "Emilia" || localStorage.getItem("hero_name") == "Ian" || localStorage.getItem("hero_name") == "Ryuzen"
        || localStorage.getItem("hero_name") == "Daisuke" || localStorage.getItem("hero_name") == "Erin" || localStorage.getItem("hero_name") == "Midna")
        {
            document.getElementById("storymessage").innerHTML = "Mumuska: Greetings! My name is Mumuska, and I am an adventurer from the Adventurer Guild of Silvertown. You are from the Adventurer Guild of London? Glad that you are here! We need a key person to besiege the Blue Moon Magician School! I was expelled from that place last year, so I can give you a map about the entire school. However, before going into the school, you have to beat me in a friendly duel in order to pass a test! That is the order of King Thomas IV!";
        }
        //If the player won the battle
        if(localStorage.getItem("mumuskaduelplayerwin") == 0)
        {
            document.getElementById("storymessage").innerHTML = "Mumuska: Phew! That was amazing! Don’t worry, I am okay! You passed the test. Therefore, you are free to continue your mission! ";
            $("#storyteller").prop('src', "Character sources/Mumuska_victory.png");
        }
        //If the player lost the battle
        if(localStorage.getItem("mumuskaduelplayerdefeat") == 0)
        {
            $("#storyteller").prop('src', "Character sources/Mumuska_lost_battle.png");
            document.getElementById("storymessage").innerHTML = "Mumuska: Don’t worry! You can give another try to this duel test! Just only when you are ready to retake it!";
        }
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection11.png") && (localStorage.getItem("mission11_complete") == 0))
    {
        $("#storyteller").prop('src', "Mission sources/Mission11_complete_defeated_blue_moon_magician_school.png");
        document.getElementById("storymessage").innerHTML = "The Blue Moon Magician School is no more! The area is safe!";
    }
    //For Mission 12
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection12.png") && (localStorage.getItem("mission12_complete") == 1))
    {
        $("#storyteller").prop('src', "Character sources/Mumuska_saying_goodbye.png");
        document.getElementById("storymessage").innerHTML = "Mumuska: I have to go back to Silvertown, you know, it is schooltime! Here is a train ticket. Your destination is on it: Othello castle. Goodbye!";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection12.png") && (localStorage.getItem("mission12_complete") == 0))
    {
        document.getElementById("storymessage").innerHTML = "We are victorious!";
        $("#storyteller").prop('src', "Mission sources/Mission12_complete_othello_castle_victory.png");
    }
    //For Mission 13
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection13.png") && (localStorage.getItem("mission13_complete") == 1))
    {
        $("#storyteller").prop('src', "Character sources/Northern_Barbarian.png");
        document.getElementById("storymessage").innerHTML = "Northern barbarian: No one is passing this border without payment!";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection13.png") && (localStorage.getItem("mission13_complete") == 0))
    {
        $("#storyteller").prop('src', "Character sources/Northern_Barbarian.png");
        document.getElementById("storymessage").innerHTML = "Northern barbarian: I see what you are up to. Follow me!";
    }
    //For Mission 14
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection14.png") && (localStorage.getItem("mission14_complete") == 1))
    {
        $("#storyteller").prop('src', "Character sources/Northern_Barbarian.png");
        document.getElementById("storymessage").innerHTML = "Northern barbarian: I see what you are up to. Follow me!";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection14.png") && (localStorage.getItem("mission14_complete") == 0))
    {
        $("#storyteller").prop('src', "Mission sources/Mission14_complete_snow_tour.png");
        document.getElementById("storymessage").innerHTML = "Finally, we have made it! Does anybody need a hot tea?";
    }
    //For Mission 15
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection15.png") && (localStorage.getItem("mission15_complete") == 1))
    {
        $("#storyteller").prop('src', "Character sources/Cseperke_introduction.png");
        document.getElementById("storymessage").innerHTML = "Cseperke: Greetings! I am Cseperke, adventurer from the Adventurer Guild of Silvertown. Are you a participant of the crusade against the Order of the Crimson Sword? Good to know. Let me be brief: the Ice Crystal Magician School is nearby. I had been expelled from that place years ago, so I can give you a map of the building. You have to besiege the school and bring back what they have looted from the nearby villages. However, before going into the school, you have to beat me in a friendly duel in order to pass a test! That is the order of King Thomas IV!";
        //If the player won the battle
        if(localStorage.getItem("cseperkeduelplayerwin") == 0)
        {
            document.getElementById("storymessage").innerHTML = "Cseperke: You passed the test! Don’t be concerned about me, I am fine! Take this map!";
            $("#storyteller").prop('src', "Character sources/Cseperke_victory.png");
        }
        //If the player lost the battle
        if(localStorage.getItem("cseperkeduelplayerdefeat") == 0)
        {
            $("#storyteller").prop('src', "Character sources/Cseperke_lost_battle.png");
            document.getElementById("storymessage").innerHTML = "Cseperke: Are you alright? Cheer! The test is still available! Come back when you are ready!";
        }
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection15.png") && (localStorage.getItem("mission15_complete") == 0))
    {
        document.getElementById("storymessage").innerHTML = "Victory! The Ice Crystal Magician School is no more!";
        $("#storyteller").prop('src', "Mission sources/Mission15_complete_defeated_ice_crystal_magician_school.png");
    }
    //For Mission 16
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection16.png") && (localStorage.getItem("mission16_complete") == 1))
    {
        document.getElementById("storymessage").innerHTML = "Snow Owl archer: Halt! We cannot allow you to go out to that area of the Kingdom of Havas without testing your skills!";
        $("#storyteller").prop('src', "Character sources/Snow_Owl_Archer.png");
        //If the player won the battle
        if(localStorage.getItem("snowowlduelplayerwin") == 0)
        {
            document.getElementById("storymessage").innerHTML = "Snow Owl archer: Congratulations! You are fit enough to fight against warbands of the Order of the Crimson Sword in this kingdom.";
            $("#storyteller").prop('src', "Character sources/Snow_Owl_Archer.png");
        }
        //If the player lost the battle
        if(localStorage.getItem("snowowlduelplayerdefeat") == 0)
        {
            $("#storyteller").prop('src', "Character sources/Snow_Owl_Archer.png");
            document.getElementById("storymessage").innerHTML = "Snow Owl archer: We do highly suggest you to get stronger and only after that should you try again the test!";
        }
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection16.png") && (localStorage.getItem("mission16_complete") == 0))
    {
        document.getElementById("storymessage").innerHTML = "We are ready! The king is grateful.";
        $("#storyteller").prop('src', "Character sources/Snow_Owl_Archer.png");
    }
    //For Mission 17
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection17.png") && (localStorage.getItem("mission17_complete") == 1))
    {
        document.getElementById("storymessage").innerHTML = "Train station master: Good morning! Do you have engineering experience? Any working hand counts here for fixing this railway!";
        $("#storyteller").prop('src', "Character sources/Train_Station_Master.png");
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection17.png") && (localStorage.getItem("mission17_complete") == 0))
    {
        document.getElementById("storymessage").innerHTML = "Mission accomplished! Full steam ahead!";
        $("#storyteller").prop('src', "Mission sources/Mission17_complete_train.png");
    }
    //For Mission 18
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection18.png") && (localStorage.getItem("mission18_complete") == 1))
    {
        document.getElementById("storymessage").innerHTML = "Ogodaj: Good day to you! I am Ogodaj, adventurer of the Adventurer Guild of Silvertown. Veronika, who is my girlfriend, told me about you. I am originated from the Huníj nomadic tribe. It is their territory, and they ask for a payment if you want to pass through.";
        $("#storyteller").prop('src', "Character sources/Ogodaj.png");
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection18.png") && (localStorage.getItem("mission18_complete") == 0))
    {
        $("#storyteller").prop('src', "Mission sources/Mission18_complete_resources_for_nomads.png");
        document.getElementById("storymessage").innerHTML = "Ogodaj: Well done, adventurer! You have proven yourself!";
    }
    //For Mission 19
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection19.png") && (localStorage.getItem("mission19_complete") == 1))
    {
        $("#storyteller").prop('src', "Mission sources/Mission18_complete_resources_for_nomads.png");
        document.getElementById("storymessage").innerHTML = "Read mission / quest description!";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection19.png") && (localStorage.getItem("mission19_complete") == 0))
    {
        $("#storyteller").prop('src', "Mission sources/Mission19_complete_defeated_red_sand_magician_school.png");
        document.getElementById("storymessage").innerHTML = "The Red Sand Magician School is no more! Victory is ours!";
    }
    //For Mission 20
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection20.png") && (localStorage.getItem("mission20_complete") == 1))
    {
        $("#storyteller").prop('src', "Character sources/The_Smasher.png");
        document.getElementById("storymessage").innerHTML = "Smasher: You have caused fair enough trouble for me! May I give you a chance to face with my Legion?";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection20.png") && (localStorage.getItem("mission20_complete") == 0))
    {
        $("#storyteller").prop('src', "Mission sources/Mission20_complete_defeated_legion.png");
        document.getElementById("storymessage").innerHTML = "The Legion of the Order of the Crimson Sword is vanquished!";
    }
    //For Mission 21
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection21.png") && (localStorage.getItem("mission21_complete") == 1))
    {
        $("#storyteller").prop('src', "Character sources/The_Smasher.png");
        document.getElementById("storymessage").innerHTML = "Smasher: Gold they had, and a master of them I have become. Last year, in 2021, I tried conquering this continent with nomads and other tribes, but the Adventurer Guild of Silvertown busted me, and ruined my plans! Now you, from the Adventurer Guild of London, has stopped my second attempt of conquering these lands with the aid of monsters from the Order of the Crimson Sword! I am not finished yet! Come forth!";
    }
    else if(($("#adventuremap").attr("src") == "Background sources/Mapsection21.png") && (localStorage.getItem("mission21_complete") == 0))
    {
        $("#storyteller").prop('src', "Mission sources/Mission21_complete_defeated_smasher.png");
        document.getElementById("storymessage").innerHTML = "The Order of the Crimson Sword is defeated!";
    }
});

//Helper variables for gathering resoruces based on the random scene buttons
var x01 = parseInt(localStorage.getItem("item_wooden_logs"));
var x02 = parseInt(localStorage.getItem("item_stone"));
var x03 = parseInt(localStorage.getItem("item_fruit_basket"));
var x04 = parseInt(localStorage.getItem("item_herbal_flower"));
var x05 = parseInt(localStorage.getItem("item_herbs"));
var x06 = parseInt(localStorage.getItem("item_sand"));
var x07 = parseInt(localStorage.getItem("item_raw_meat"));
var x08 = parseInt(localStorage.getItem("item_coal"));
var x09 = parseInt(localStorage.getItem("item_copper_ingot"));
var x10 = parseInt(localStorage.getItem("item_sail"));
var xA = parseInt(localStorage.getItem("hero_experience"));
var x11 = parseInt(localStorage.getItem("item_iron_ingot"));
var x12 = parseInt(localStorage.getItem("item_bread"));
var x13 = parseInt(localStorage.getItem("item_medical_liquid"));
var x14 = parseInt(localStorage.getItem("item_ice_cube"));
var x15 = parseInt(localStorage.getItem("item_spear"));
var x16 = parseInt(localStorage.getItem("item_moonballista"));
var x17 = parseInt(localStorage.getItem("item_gold_ingot"));
var x18 = parseInt(localStorage.getItem("item_moon_stone"));
var x19 = parseInt(localStorage.getItem("item_iron_bucket_with_oil"));
var x20 = parseInt(localStorage.getItem("item_iron_bucket"));
var x21 = parseInt(localStorage.getItem("item_silver_ingot"));
//First random scene button
$("#random01").on("click", function()
{
    //Mission 1 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection01.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y01 = Math.floor((Math.random() * 3) + 1);
        switch (y01)
        {
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Wooden logs gathered!</h2>";
                //Base miner level
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_wooden_logs", ++x01 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_wooden_logs", x01+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_wooden_logs", x01+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_wooden_logs", x01+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_wooden_logs", x01+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 2:
                document.getElementById("situationmessage").innerHTML = "<h2>RPG scene!</h2>";
                if(localStorage.getItem("hero_name") == "Mary")
                {
                   window.location.href='rpg.html'; 
                }
                if(localStorage.getItem("hero_name") == "Nate")
                {
                    window.location.href='rpgNate.html';
                }
                if(localStorage.getItem("hero_name") == "Ian")
                {
                    window.location.href='rpgIan.html';
                }
                if(localStorage.getItem("hero_name") == "Emilia")
                {
                    window.location.href='rpgEmilia.html';
                }
                if(localStorage.getItem("hero_name") == "Olav")
                {
                    window.location.href='rpgOlav.html';
                }
                if(localStorage.getItem("hero_name") == "Bo")
                {
                    window.location.href='rpgBo.html';
                }
                if(localStorage.getItem("hero_name") == "Ryuzen")
                {
                    window.location.href='rpgRyuzen.html';
                }
                if(localStorage.getItem("hero_name") == "Daisuke")
                {
                    window.location.href='rpgDaisuke.html';
                }
                if(localStorage.getItem("hero_name") == "Erin")
                {
                    window.location.href='rpgErin.html';
                }
                if(localStorage.getItem("hero_name") == "Midna")
                {
                    window.location.href='rpgMidna.html';
                }                                                                                                 
                break;
            case 3:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }
    }
    //Mission 2 map section
    else if($("#adventuremap").attr("src") == "Background sources/Mapsection02.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y01 = Math.floor((Math.random() * 2) + 1);
        switch (y01)
        {
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Wooden logs gathered!</h2>";
                //Base miner level
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_wooden_logs", ++x01 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_wooden_logs", x01+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_wooden_logs", x01+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_wooden_logs", x01+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_wooden_logs", x01+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 2:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }
    }
    //Mission 3 map section
    else if($("#adventuremap").attr("src") == "Background sources/Mapsection03.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y01 = Math.floor((Math.random() * 3) + 1);
        switch (y01)
        {
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Wooden logs gathered!</h2>";
                //Base miner level
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_wooden_logs", ++x01 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_wooden_logs", x01+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_wooden_logs", x01+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_wooden_logs", x01+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_wooden_logs", x01+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 2:
                document.getElementById("situationmessage").innerHTML = "<h2>Basket of fruits gathered!</h2>";
                localStorage.setItem("item_fruit_basket", ++x03 );
                localStorage.setItem("hero_experience", xA += 10);
                document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                break;
            case 3:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }
    }
    //Mission 4 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection04.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    }
    //Mission 5 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection05.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    }
    //Mission 6 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection06.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    }
    //Mission 7 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection07.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y03 = Math.floor((Math.random() * 2) + 1);
        switch (y03)
        {
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Raw meat gathered!</h2>";
                localStorage.setItem("item_raw_meat", ++x07 );
                localStorage.setItem("hero_experience", xA += 5);
                document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                break;
            case 2:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }
    }
    //Mission 8 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection08.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    }
    //Mission 9 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection09.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y01 = Math.floor((Math.random() * 3) + 1);
        switch (y01)
        {   
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Basket of fruits gathered!</h2>";
                localStorage.setItem("item_fruit_basket", ++x03 );
                localStorage.setItem("hero_experience", xA += 10);
                document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                break;
            case 2:
                document.getElementById("situationmessage").innerHTML = "<h2>Raw meat gathered!</h2>";
                localStorage.setItem("item_raw_meat", ++x07 );
                localStorage.setItem("hero_experience", xA += 5);
                document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                break;
            case 3:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }
    }
    //Mission 10 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection10.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y01 = Math.floor((Math.random() * 2) + 1);
        switch (y01)
        {   
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Wooden logs gathered!</h2>";
                //Base miner level
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_wooden_logs", ++x01 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_wooden_logs", x01+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_wooden_logs", x01+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_wooden_logs", x01+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_wooden_logs", x01+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 2:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }
    }
    //Mission 11 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection11.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y01 = Math.floor((Math.random() * 4) + 1);
        switch (y01)
        {   
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Wooden logs gathered!</h2>";
                //Base miner level
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_wooden_logs", ++x01 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_wooden_logs", x01+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_wooden_logs", x01+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_wooden_logs", x01+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_wooden_logs", x01+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 2:
                document.getElementById("situationmessage").innerHTML = "<h2>Herbal flower gathered!</h2>";
                localStorage.setItem("item_herbal_flower", ++x04 );
                localStorage.setItem("hero_experience", xA += 20);
                document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                break;
            case 3:
                document.getElementById("situationmessage").innerHTML = "<h2>Herbs gathered!</h2>";
                localStorage.setItem("item_herbs", ++x05 );
                localStorage.setItem("hero_experience", xA += 15);
                document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                break;
            case 4:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }
    }    
    //Mission 12 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection12.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y01 = Math.floor((Math.random() * 4) + 1);
        switch (y01)
        {   
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Wooden logs gathered!</h2>";
                //Base miner level
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_wooden_logs", ++x01 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_wooden_logs", x01+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_wooden_logs", x01+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_wooden_logs", x01+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_wooden_logs", x01+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 2:
                document.getElementById("situationmessage").innerHTML = "<h2>Herbal flower gathered!</h2>";
                localStorage.setItem("item_herbal_flower", ++x04 );
                localStorage.setItem("hero_experience", xA += 20);
                document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                break;
            case 3:
                document.getElementById("situationmessage").innerHTML = "<h2>Herbs gathered!</h2>";
                localStorage.setItem("item_herbs", ++x05 );
                localStorage.setItem("hero_experience", xA += 15);
                document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                break;
            case 4:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }
    }    
    //Mission 13 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection13.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y01 = Math.floor((Math.random() * 4) + 1);
        switch (y01)
        {   
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Stone gathered!</h2>";
                //Base miner level
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", ++x02 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_stone", x02+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_stone", x02+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 2:
                if(localStorage.getItem("minerlevel01") != 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 1 required to gather coal!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel01") == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Coal gathered!</h2>";
                    localStorage.setItem("item_coal", ++x08 );
                    localStorage.setItem("hero_experience", xA += 20);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 3:
                if(localStorage.getItem("minerlevel03") != 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 3 required to gather gold!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel03") == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Gold ingot gathered!</h2>";
                    localStorage.setItem("item_gold_ingot", ++x17 );
                    localStorage.setItem("hero_experience", xA += 1000);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 4:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }
    }    
    //Mission 14 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection14.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y01 = Math.floor((Math.random() * 4) + 1);
        switch (y01)
        {   
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Stone gathered!</h2>";
                //Base miner level
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", ++x02 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_stone", x02+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_stone", x02+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 2:
                if(localStorage.getItem("minerlevel01") != 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 1 required to gather coal!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel01") == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Coal gathered!</h2>";
                    localStorage.setItem("item_coal", ++x08 );
                    localStorage.setItem("hero_experience", xA += 20);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 3:
                if(localStorage.getItem("minerlevel03") != 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 3 required to gather iron!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel03") == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Iron ingot gathered!</h2>";
                    localStorage.setItem("item_iron_ingot", ++x11 );
                    localStorage.setItem("hero_experience", xA += 1000);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 4:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }
    }
    //Mission 15 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection15.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y01 = Math.floor((Math.random() * 4) + 1);
        switch (y01)
        {   
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Stone gathered!</h2>";
                //Base miner level
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", ++x02 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_stone", x02+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_stone", x02+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 2:
                if(localStorage.getItem("minerlevel01") != 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 1 required to gather coal!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel01") == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Coal gathered!</h2>";
                    localStorage.setItem("item_coal", ++x08 );
                    localStorage.setItem("hero_experience", xA += 20);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 3:
                if(localStorage.getItem("minerlevel03") != 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 3 required to gather iron!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel03") == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Iron ingot gathered!</h2>";
                    localStorage.setItem("item_iron_ingot", ++x11 );
                    localStorage.setItem("hero_experience", xA += 1000);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 4:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }
    }
    //Mission 16 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection16.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";    
    }
    //Mission 17 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection17.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";    
    }
    //Mission 18 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection18.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";    
    }
    //Mission 19 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection19.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";    
    }
    //Mission 20 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection20.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";    
    }
    //Mission 21 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection21.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";    
    }
});

//Second random scene button
$("#random02").on("click", function()
{
    //Mission 1 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection01.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y02 = Math.floor((Math.random() * 6) + 1);
        switch (y02)
        {
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Stone gathered!</h2>";
                //Base miner level
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", ++x02 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_stone", x02+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_stone", x02+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 2:
                document.getElementById("situationmessage").innerHTML = "<h2>RPG scene!</h2>";
                if(localStorage.getItem("hero_name") == "Mary")
                {
                   window.location.href='rpg.html'; 
                }
                if(localStorage.getItem("hero_name") == "Nate")
                {
                    window.location.href='rpgNate.html';
                }
                if(localStorage.getItem("hero_name") == "Ian")
                {
                    window.location.href='rpgIan.html';
                }
                if(localStorage.getItem("hero_name") == "Emilia")
                {
                    window.location.href='rpgEmilia.html';
                }
                if(localStorage.getItem("hero_name") == "Olav")
                {
                    window.location.href='rpgOlav.html';
                }
                if(localStorage.getItem("hero_name") == "Bo")
                {
                    window.location.href='rpgBo.html';
                }
                if(localStorage.getItem("hero_name") == "Ryuzen")
                {
                    window.location.href='rpgRyuzen.html';
                }
                if(localStorage.getItem("hero_name") == "Daisuke")
                {
                    window.location.href='rpgDaisuke.html';
                }
                if(localStorage.getItem("hero_name") == "Erin")
                {
                    window.location.href='rpgErin.html';
                }
                if(localStorage.getItem("hero_name") == "Midna")
                {
                    window.location.href='rpgMidna.html';
                }                                                                                                                                 
                break;
            case 3:
                document.getElementById("situationmessage").innerHTML = "<h2>Basket of fruits gathered!</h2>";
                localStorage.setItem("item_fruit_basket", ++x03 );
                localStorage.setItem("hero_experience", xA += 10);
                document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                break;
            case 4:
                document.getElementById("situationmessage").innerHTML = "<h2>Herbal flower gathered!</h2>";
                localStorage.setItem("item_herbal_flower", ++x04 );
                localStorage.setItem("hero_experience", xA += 20);
                document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                break;
            case 5:
                document.getElementById("situationmessage").innerHTML = "<h2>Herbs gathered!</h2>";
                localStorage.setItem("item_herbs", ++x05 );
                localStorage.setItem("hero_experience", xA += 15);
                document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                break;
            case 6:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }
    }
    //Mission 2 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection02.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y02 = Math.floor((Math.random() * 4) + 1);
        switch (y02)
        {
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Basket of fruits gathered!</h2>";
                localStorage.setItem("item_fruit_basket", ++x03 );
                localStorage.setItem("hero_experience", xA += 10);
                document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                break;
            case 2:
                document.getElementById("situationmessage").innerHTML = "<h2>Herbal flower gathered!</h2>";
                localStorage.setItem("item_herbal_flower", ++x04 );
                localStorage.setItem("hero_experience", xA += 20);
                document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                break;
            case 3:
                document.getElementById("situationmessage").innerHTML = "<h2>Herbs gathered!</h2>";
                localStorage.setItem("item_herbs", ++x05 );
                localStorage.setItem("hero_experience", xA += 15);
                document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                break;
            case 4:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }
    }
    //Mission 3 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection03.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y02 = Math.floor((Math.random() * 3) + 1);
        switch (y02)
        {
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Herbs gathered!</h2>";
                localStorage.setItem("item_herbs", ++x05 );
                localStorage.setItem("hero_experience", xA += 15);
                document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                break;
            case 2:
                document.getElementById("situationmessage").innerHTML = "<h2>Herbal flower gathered!</h2>";
                localStorage.setItem("item_herbal_flower", ++x04 );
                localStorage.setItem("hero_experience", xA += 20);
                document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                break;
            case 3:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }
    }
    //Mission 4 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection04.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    }
    //Mission 5 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection05.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    }
    //Mission 6 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection06.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    }
    //Mission 7 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection07.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y02 = Math.floor((Math.random() * 3) + 1);
        switch (y02)
        {
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Stone gathered!</h2>";
                //Base miner level
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", ++x02 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_stone", x02+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_stone", x02+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 2:
                document.getElementById("situationmessage").innerHTML = "<h2>Wooden logs gathered!</h2>";
                //Base miner level
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_wooden_logs", ++x01 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_wooden_logs", x01+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_wooden_logs", x01+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_wooden_logs", x01+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_wooden_logs", x01+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 3:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }           
    }
    //Mission 8 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection08.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    }
    //Mission 9 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection09.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y02 = Math.floor((Math.random() * 3) + 1);
        switch (y02)
        {
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Herbs gathered!</h2>";
                localStorage.setItem("item_herbs", ++x05 );
                localStorage.setItem("hero_experience", xA += 15);
                document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                break;
            case 2:
                document.getElementById("situationmessage").innerHTML = "<h2>Herbal flower gathered!</h2>";
                localStorage.setItem("item_herbal_flower", ++x04 );
                localStorage.setItem("hero_experience", xA += 20);
                document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                break;
            case 3:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }
    }
    //Mission 10 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection10.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y02 = Math.floor((Math.random() * 2) + 1);
        switch (y02)
        {   
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Stone gathered!</h2>";
                //Base miner level
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", ++x02 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_stone", x02+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_stone", x02+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 2:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }        
    }       
    //Mission 11 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection11.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y02 = Math.floor((Math.random() * 4) + 1);
        switch (y02)
        {   
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Stone gathered!</h2>";
                //Base miner level
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", ++x02 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_stone", x02+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_stone", x02+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 2:
                if(localStorage.getItem("minerlevel01") != 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 1 required to gather coal!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel01") == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Coal gathered!</h2>";
                    localStorage.setItem("item_coal", ++x08 );
                    localStorage.setItem("hero_experience", xA += 20);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 3:
                if(localStorage.getItem("minerlevel04") != 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 4 is required to gather moonstone!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel04") == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Moonstone gathered!</h2>";
                    localStorage.setItem("item_moon_stone", ++x18 );
                    localStorage.setItem("hero_experience", xA += 5000);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 4:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }        
    }    
    //Mission 12 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection12.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y02 = Math.floor((Math.random() * 2) + 1);
        switch (y02)
        {   
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Stone gathered!</h2>";
                //Base miner level
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", ++x02 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_stone", x02+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_stone", x02+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 2:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }        
    }     
    //Mission 13 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection13.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";    
    }
    //Mission 14 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection14.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y02 = Math.floor((Math.random() * 4) + 1);
        switch (y02)
        {   
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Stone gathered!</h2>";
                //Base miner level
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", ++x02 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_stone", x02+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_stone", x02+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 2:
                if(localStorage.getItem("minerlevel01") != 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 1 required to gather coal!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel01") == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Coal gathered!</h2>";
                    localStorage.setItem("item_coal", ++x08 );
                    localStorage.setItem("hero_experience", xA += 20);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 3:
                if(localStorage.getItem("minerlevel04") != 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 4 is required to gather moonstone!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel04") == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Moonstone gathered!</h2>";
                    localStorage.setItem("item_moon_stone", ++x18 );
                    localStorage.setItem("hero_experience", xA += 5000);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 4:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }        
    }
    //Mission 15 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection15.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y02 = Math.floor((Math.random() * 5) + 1);
        switch (y02)
        {
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Stone gathered!</h2>";
                //Base miner level
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", ++x02 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_stone", x02+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_stone", x02+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 2:
                if(localStorage.getItem("minerlevel04") != 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 4 is required to gather moonstone!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel04") == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Moonstone gathered!</h2>";
                    localStorage.setItem("item_moon_stone", ++x18 );
                    localStorage.setItem("hero_experience", xA += 5000);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 3:
                if(localStorage.getItem("minerlevel04") != 0 && x20 == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 4 and an iron bucket are required to gather oil!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel04") == 0 && x20 == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 4 and an iron bucket are required to gather oil!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel04") == 0 && x20 > 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Bucket of oil gathered!</h2>";
                    localStorage.setItem("item_iron_bucket_with_oil", ++x19 );
                    localStorage.setItem("item_iron_bucket", --x20 );
                    localStorage.setItem("hero_experience", xA += 2500);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 4:
                if(localStorage.getItem("minerlevel03") != 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 3 required to gather silver!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel03") == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Silver ingot gathered!</h2>";
                    localStorage.setItem("item_silver_ingot", ++x21 );
                    localStorage.setItem("hero_experience", xA += 1000);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 5:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;  
        }
    }
    //Mission 16 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection16.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";    
    }
    //Mission 17 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection17.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y02 = Math.floor((Math.random() * 4) + 1);
        switch (y02)
        {
            //Base miner level
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Sand gathered!</h2>";
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_sand", ++x06 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_sand", x06+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                    
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_sand", x06+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                    
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_sand", x06+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                    
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_sand", x06+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                    
                    break;
                }
            case 2:
                if(localStorage.getItem("minerlevel01") != 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 1 required to gather coal!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel01") == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Coal gathered!</h2>";
                    localStorage.setItem("item_coal", ++x08 );
                    localStorage.setItem("hero_experience", xA += 20);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 3:
                if(localStorage.getItem("minerlevel03") != 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 3 required to gather iron!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel03") == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Iron ingot gathered!</h2>";
                    localStorage.setItem("item_iron_ingot", ++x11 );
                    localStorage.setItem("hero_experience", xA += 1000);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 4:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }
    }
    //Mission 18 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection18.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y02 = Math.floor((Math.random() * 3) + 1);
        switch (y02)
        {
            //Base miner level
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Sand gathered!</h2>";
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_sand", ++x06 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_sand", x06+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                    
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_sand", x06+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                    
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_sand", x06+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                    
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_sand", x06+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                    
                    break;
                }
            case 2:
                document.getElementById("situationmessage").innerHTML = "<h2>Raw meat gathered!</h2>";
                localStorage.setItem("item_raw_meat", ++x07 );
                localStorage.setItem("hero_experience", xA += 5);
                document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                break;
            case 3:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }
    }
    //Mission 19 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection19.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";    
    }
    //Mission 20 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection20.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";    
    }
    //Mission 21 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection21.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";    
    }            
});

//Third random scene button
$("#random03").on("click", function()
{
    //Mission 1 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection01.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y03 = Math.floor((Math.random() * 4) + 1);
        switch (y03)
        {
            //Base miner level
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Sand gathered!</h2>";
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_sand", ++x06 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_sand", x06+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                    
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_sand", x06+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                    
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_sand", x06+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                    
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_sand", x06+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                    
                    break;
                }
            case 2:
                document.getElementById("situationmessage").innerHTML = "<h2>Raw meat gathered!</h2>";
                localStorage.setItem("item_raw_meat", ++x07 );
                localStorage.setItem("hero_experience", xA += 5);
                document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                break;
            case 3:
                document.getElementById("situationmessage").innerHTML = "<h2>RPG scene!</h2>";
                if(localStorage.getItem("hero_name") == "Mary")
                {
                   window.location.href='rpg.html'; 
                }
                if(localStorage.getItem("hero_name") == "Nate")
                {
                    window.location.href='rpgNate.html';
                }
                if(localStorage.getItem("hero_name") == "Ian")
                {
                    window.location.href='rpgIan.html';
                }
                if(localStorage.getItem("hero_name") == "Emilia")
                {
                    window.location.href='rpgEmilia.html';
                }
                if(localStorage.getItem("hero_name") == "Olav")
                {
                    window.location.href='rpgOlav.html';
                }
                if(localStorage.getItem("hero_name") == "Bo")
                {
                    window.location.href='rpgBo.html';
                }
                if(localStorage.getItem("hero_name") == "Ryuzen")
                {
                    window.location.href='rpgRyuzen.html';
                }
                if(localStorage.getItem("hero_name") == "Daisuke")
                {
                    window.location.href='rpgDaisuke.html';
                }
                if(localStorage.getItem("hero_name") == "Erin")
                {
                    window.location.href='rpgErin.html';
                }
                if(localStorage.getItem("hero_name") == "Midna")
                {
                    window.location.href='rpgMidna.html';
                }                                                                                                                             
                break;
            case 4:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }
    }
    //Mission 2 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection02.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y03 = Math.floor((Math.random() * 3) + 1);
        switch (y03)
        {
            //Base miner level
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Sand gathered!</h2>";
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_sand", ++x06 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_sand", x06+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                    
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_sand", x06+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                    
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_sand", x06+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                    
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_sand", x06+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                    
                    break;
                }
            case 2:
                document.getElementById("situationmessage").innerHTML = "<h2>Raw meat gathered!</h2>";
                localStorage.setItem("item_raw_meat", ++x07 );
                localStorage.setItem("hero_experience", xA += 5);
                document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                break;
            case 3:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }
    }
    //Mission 3 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection03.png")
    {
        $("#levelhelper").css('opacity', '1');
        console.log(localStorage.getItem("minerlevel04"));
        var y03 = Math.floor((Math.random() * 4) + 1);
        switch (y03)
        {
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Stone gathered!</h2>";
                //Base miner level
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", ++x02 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_stone", x02+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_stone", x02+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 2:
                if(localStorage.getItem("minerlevel01") != 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 1 required to gather coal!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel01") == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Coal gathered!</h2>";
                    localStorage.setItem("item_coal", ++x08 );
                    localStorage.setItem("hero_experience", xA += 20);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 3:
                if(localStorage.getItem("minerlevel02") != 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 2 required to gather copper ingot!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel02") == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Copper ingot gathered!</h2>";
                    localStorage.setItem("item_copper_ingot", ++x09 );
                    localStorage.setItem("hero_experience", xA += 30);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 4:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }
    }
    //Mission 4 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection04.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    }
    //Mission 5 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection05.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    }
    //Mission 6 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection06.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    }
    //Mission 7 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection07.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y03 = Math.floor((Math.random() * 2) + 1);
        switch (y03)
        {
            //Base miner level
            case 1:
                document.getElementById("situationmessage").innerHTML = "<h2>Sand gathered!</h2>";
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_sand", ++x06 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_sand", x06+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                    
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_sand", x06+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                    
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_sand", x06+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                    
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_sand", x06+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));                    
                    break;
                }
            case 2:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }
    }
    //Mission 8 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection08.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    }
    //Mission 9 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection09.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    }
    //Mission 10 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection10.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    }
    //Mission 11 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection11.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y03 = Math.floor((Math.random() * 4) + 1);
        switch (y03)
        {
            case 1:
                if(localStorage.getItem("minerlevel03") != 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 3 required to gather iron!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel03") == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Iron ingot gathered!</h2>";
                    localStorage.setItem("item_iron_ingot", ++x11 );
                    localStorage.setItem("hero_experience", xA += 1000);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 2:
                if(localStorage.getItem("minerlevel03") != 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 3 required to gather gold!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel03") == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Gold ingot gathered!</h2>";
                    localStorage.setItem("item_gold_ingot", ++x17 );
                    localStorage.setItem("hero_experience", xA += 1000);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 3:
                if(localStorage.getItem("minerlevel03") != 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 3 required to gather silver!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel03") == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Silver ingot gathered!</h2>";
                    localStorage.setItem("item_silver_ingot", ++x21 );
                    localStorage.setItem("hero_experience", xA += 1000);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 4:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }
    }
    //Mission 12 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection12.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    } 
    //Mission 13 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection13.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    }
    //Mission 14 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection14.png")
    {
        $("#levelhelper").css('opacity', '1');
        var y03 = Math.floor((Math.random() * 4) + 1);
        switch (y03)
        {
            case 1:
                if(localStorage.getItem("minerlevel03") != 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 3 required to gather iron!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel03") == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Iron ingot gathered!</h2>";
                    localStorage.setItem("item_iron_ingot", ++x11 );
                    localStorage.setItem("hero_experience", xA += 1000);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 2:
                if(localStorage.getItem("minerlevel03") != 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 3 required to gather gold!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel03") == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Gold ingot gathered!</h2>";
                    localStorage.setItem("item_gold_ingot", ++x17 );
                    localStorage.setItem("hero_experience", xA += 1000);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 3:
                if(localStorage.getItem("minerlevel03") != 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Miner level 3 required to gather silver!</h2>";
                    break;
                }
                if(localStorage.getItem("minerlevel03") == 0)
                {
                    document.getElementById("situationmessage").innerHTML = "<h2>Silver ingot gathered!</h2>";
                    localStorage.setItem("item_silver_ingot", ++x21 );
                    localStorage.setItem("hero_experience", xA += 1000);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
            case 4:
                document.getElementById("situationmessage").innerHTML = "<h2>Stone gathered!</h2>";
                //Base miner level
                if(localStorage.getItem("minerlevel01") != 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", ++x02 );
                    localStorage.setItem("hero_experience", xA += 5);
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 1 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") != 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0)
                {
                    localStorage.setItem("item_stone", x02+2 );
                    localStorage.setItem("hero_experience", xA += parseInt(10));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 2 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") != 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+3 );
                    localStorage.setItem("hero_experience", xA += parseInt(15));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 3 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") != 0) 
                {
                    localStorage.setItem("item_stone", x02+4 );
                    localStorage.setItem("hero_experience", xA += parseInt(20));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }
                //Level 4 miner unlocked
                if(localStorage.getItem("minerlevel01") == 0 && localStorage.getItem("minerlevel02") == 0 && localStorage.getItem("minerlevel03") == 0 && localStorage.getItem("minerlevel04") == 0) 
                {
                    localStorage.setItem("item_stone", x02+5 );
                    localStorage.setItem("hero_experience", xA += parseInt(25));
                    document.getElementById("heroxp").innerHTML = parseInt(localStorage.getItem("hero_experience"));
                    document.getElementById("pointlimit").innerHTML = parseInt(localStorage.getItem("level_up_point_limit"));
                    break;
                }                
            case 5:
                document.getElementById("situationmessage").innerHTML = "<h2>Oops! Nothing was found!</h2>";
                break;
        }        
    }
    //Mission 15 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection15.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    }  
    //Mission 16 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection16.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    }     
    //Mission 17 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection17.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    } 
    //Mission 18 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection18.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    }    
    //Mission 19 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection19.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    }
    //Mission 20 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection20.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    }
    //Mission 21 map section
    if($("#adventuremap").attr("src") == "Background sources/Mapsection21.png")
    {
        $("#levelhelper").css('opacity', '1');
        document.getElementById("situationmessage").innerHTML = "<h2>No resources to gather here!</h2>";
    }        
});

//Battle scene button
//This opens the rpg battle scene.
$("#forbattle").on("click", function()
{
    document.getElementById("situationmessage").innerHTML = "<h2>RPG scene!</h2>";
    if($("#adventuremap").attr("src") == "Background sources/Mapsection01.png" || $("#adventuremap").attr("src") == "Background sources/Mapsection02.png" || $("#adventuremap").attr("src") == "Background sources/Mapsection03.png"
    || $("#adventuremap").attr("src") == "Background sources/Mapsection05.png" || $("#adventuremap").attr("src") == "Background sources/Mapsection07.png" || $("#adventuremap").attr("src") == "Background sources/Mapsection09.png"
    || $("#adventuremap").attr("src") == "Background sources/Mapsection11.png" || $("#adventuremap").attr("src") == "Background sources/Mapsection14.png" || $("#adventuremap").attr("src") == "Background sources/Mapsection15.png"
    || $("#adventuremap").attr("src") == "Background sources/Mapsection16.png" || $("#adventuremap").attr("src") == "Background sources/Mapsection19.png")
    {
        if(localStorage.getItem("hero_name") == "Mary")
        {
            window.location.href='rpg.html'; 
        }
        if(localStorage.getItem("hero_name") == "Nate")
        {
            window.location.href='rpgNate.html';
        }
        if(localStorage.getItem("hero_name") == "Ian")
        {
            window.location.href='rpgIan.html';
        }
        if(localStorage.getItem("hero_name") == "Emilia")
        {
            window.location.href='rpgEmilia.html';
        }
        if(localStorage.getItem("hero_name") == "Olav")
        {
            window.location.href='rpgOlav.html';
        }
        if(localStorage.getItem("hero_name") == "Bo")
        {
            window.location.href='rpgBo.html';
        }
        if(localStorage.getItem("hero_name") == "Ryuzen")
        {
            window.location.href='rpgRyuzen.html';
        }
        if(localStorage.getItem("hero_name") == "Daisuke")
        {
            window.location.href='rpgDaisuke.html';
        }
        if(localStorage.getItem("hero_name") == "Erin")
        {
            window.location.href='rpgErin.html';
        }
        if(localStorage.getItem("hero_name") == "Midna")
        {
            window.location.href='rpgMidna.html';
        }                                                 
    }
    if($("#adventuremap").attr("src") == "Background sources/Mapsection04.png")
    {
        if(woodforquest04 >= woodneeded04 && sailforquest04 >= sailneeded04)
        {
            if(localStorage.getItem("hero_name") == "Mary")
            {
                window.location.href='rpg.html'; 
            }
            if(localStorage.getItem("hero_name") == "Nate")
            {
                window.location.href='rpgNate.html';
            }
            if(localStorage.getItem("hero_name") == "Ian")
            {
                window.location.href='rpgIan.html';
            }
            if(localStorage.getItem("hero_name") == "Emilia")
            {
                window.location.href='rpgEmilia.html';
            }
            if(localStorage.getItem("hero_name") == "Olav")
            {
                window.location.href='rpgOlav.html';
            }
            if(localStorage.getItem("hero_name") == "Bo")
            {
                window.location.href='rpgBo.html';
            }
            if(localStorage.getItem("hero_name") == "Ryuzen")
            {
                window.location.href='rpgRyuzen.html';
            }
            if(localStorage.getItem("hero_name") == "Daisuke")
            {
                window.location.href='rpgDaisuke.html';
            }
            if(localStorage.getItem("hero_name") == "Erin")
            {
                window.location.href='rpgErin.html';
            }
            if(localStorage.getItem("hero_name") == "Midna")
            {
                window.location.href='rpgMidna.html';
            }                                                                                                             
        }
        else
        {
            alert("Can't start rpg battle without a complete ship!");
        }
    }
    if($("#adventuremap").attr("src") == "Background sources/Mapsection06.png")
    {
        if(woodforquest06 >= woodneeded06 && sailforquest06 >= sailneeded06 && ironforquest06 >= ironneeded06)
        {
            if(localStorage.getItem("hero_name") == "Mary")
            {
                window.location.href='rpg.html'; 
            }
            if(localStorage.getItem("hero_name") == "Nate")
            {
                window.location.href='rpgNate.html';
            }
            if(localStorage.getItem("hero_name") == "Ian")
            {
                window.location.href='rpgIan.html';
            }
            if(localStorage.getItem("hero_name") == "Emilia")
            {
                window.location.href='rpgEmilia.html';
            }
            if(localStorage.getItem("hero_name") == "Olav")
            {
                window.location.href='rpgOlav.html';
            }
            if(localStorage.getItem("hero_name") == "Bo")
            {
                window.location.href='rpgBo.html';
            }
            if(localStorage.getItem("hero_name") == "Ryuzen")
            {
                window.location.href='rpgRyuzen.html';
            }
            if(localStorage.getItem("hero_name") == "Daisuke")
            {
                window.location.href='rpgDaisuke.html';
            }
            if(localStorage.getItem("hero_name") == "Erin")
            {
                window.location.href='rpgErin.html';
            }
            if(localStorage.getItem("hero_name") == "Midna")
            {
                window.location.href='rpgMidna.html';
            }                                                                                                             
        }
        else
        {
            alert("Can't start rpg battle without a complete ship!");
        }
    }
    if($("#adventuremap").attr("src") == "Background sources/Mapsection08.png")
    {
        alert("No rpg battle for this mission!");
    }
    if($("#adventuremap").attr("src") == "Background sources/Mapsection10.png")
    {
        if(woodformission10 >= woodneeded10 && stoneformission10 >= stoneneeded10 && unlockedbuilder02 == 0)
        {
            if(localStorage.getItem("hero_name") == "Mary")
            {
                window.location.href='rpg.html'; 
            }
            if(localStorage.getItem("hero_name") == "Nate")
            {
                window.location.href='rpgNate.html';
            }
            if(localStorage.getItem("hero_name") == "Ian")
            {
                window.location.href='rpgIan.html';
            }
            if(localStorage.getItem("hero_name") == "Emilia")
            {
                window.location.href='rpgEmilia.html';
            }
            if(localStorage.getItem("hero_name") == "Olav")
            {
                window.location.href='rpgOlav.html';
            }
            if(localStorage.getItem("hero_name") == "Bo")
            {
                window.location.href='rpgBo.html';
            }
            if(localStorage.getItem("hero_name") == "Ryuzen")
            {
                window.location.href='rpgRyuzen.html';
            }
            if(localStorage.getItem("hero_name") == "Daisuke")
            {
                window.location.href='rpgDaisuke.html';
            }
            if(localStorage.getItem("hero_name") == "Erin")
            {
                window.location.href='rpgErin.html';
            } 
            if(localStorage.getItem("hero_name") == "Midna")
            {
                window.location.href='rpgMidna.html';
            }                                                                       
        }
        else
        {
            alert("Can't start rpg battle without a complete stronghold!");
        }
    }
    if($("#adventuremap").attr("src") == "Background sources/Mapsection12.png")
    {
        if(woodformission12 >= woodneeded12 && stoneformission12 >= stoneneeded12 && unlockedbuilder04 == 0)
        {
            if(localStorage.getItem("hero_name") == "Mary")
            {
                window.location.href='rpg.html'; 
            }
            if(localStorage.getItem("hero_name") == "Nate")
            {
                window.location.href='rpgNate.html';
            }
            if(localStorage.getItem("hero_name") == "Ian")
            {
                window.location.href='rpgIan.html';
            }
            if(localStorage.getItem("hero_name") == "Emilia")
            {
                window.location.href='rpgEmilia.html';
            }
            if(localStorage.getItem("hero_name") == "Olav")
            {
                window.location.href='rpgOlav.html';
            }
            if(localStorage.getItem("hero_name") == "Bo")
            {
                window.location.href='rpgBo.html';
            }
            if(localStorage.getItem("hero_name") == "Ryuzen")
            {
                window.location.href='rpgRyuzen.html';
            }
            if(localStorage.getItem("hero_name") == "Daisuke")
            {
                window.location.href='rpgDaisuke.html';
            }
            if(localStorage.getItem("hero_name") == "Erin")
            {
                window.location.href='rpgErin.html';
            }
            if(localStorage.getItem("hero_name") == "Midna")
            {
                window.location.href='rpgMidna.html';
            }                                                                                                             
        }
        else
        {
            alert("Can't start rpg battle without a complete stronghold!");
        }
    }
    if($("#adventuremap").attr("src") == "Background sources/Mapsection13.png")
    {
        alert("No rpg battle for this mission!");
    }
    if($("#adventuremap").attr("src") == "Background sources/Mapsection17.png")
    {
        alert("No rpg battle for this mission!");
    }
    if($("#adventuremap").attr("src") == "Background sources/Mapsection18.png")
    {
        alert("No rpg battle for this mission!");
    }
    if($("#adventuremap").attr("src") == "Background sources/Mapsection20.png")
    {
        if(spearformission20 >= spearneeded20)
        {
            if(localStorage.getItem("hero_name") == "Mary")
            {
                window.location.href='rpg.html'; 
            }
            if(localStorage.getItem("hero_name") == "Nate")
            {
                window.location.href='rpgNate.html';
            }
            if(localStorage.getItem("hero_name") == "Ian")
            {
                window.location.href='rpgIan.html';
            }
            if(localStorage.getItem("hero_name") == "Emilia")
            {
                window.location.href='rpgEmilia.html';
            }
            if(localStorage.getItem("hero_name") == "Olav")
            {
                window.location.href='rpgOlav.html';
            }
            if(localStorage.getItem("hero_name") == "Bo")
            {
                window.location.href='rpgBo.html';
            }
            if(localStorage.getItem("hero_name") == "Ryuzen")
            {
                window.location.href='rpgRyuzen.html';
            }
            if(localStorage.getItem("hero_name") == "Daisuke")
            {
                window.location.href='rpgDaisuke.html';
            }
            if(localStorage.getItem("hero_name") == "Erin")
            {
                window.location.href='rpgErin.html';
            }
            if(localStorage.getItem("hero_name") == "Midna")
            {
                window.location.href='rpgMidna.html';
            }                                                                                                             
        }
        else
        {
            alert("Can't start rpg battle without a complete camp!");
        }
    }
    if($("#adventuremap").attr("src") == "Background sources/Mapsection21.png")
    {
        if(moonballistaformission21 >= moonballistaneeded21)
        {
            if(localStorage.getItem("hero_name") == "Mary")
            {
                window.location.href='rpg.html'; 
            }
            if(localStorage.getItem("hero_name") == "Nate")
            {
                window.location.href='rpgNate.html';
            }
            if(localStorage.getItem("hero_name") == "Ian")
            {
                window.location.href='rpgIan.html';
            }
            if(localStorage.getItem("hero_name") == "Emilia")
            {
                window.location.href='rpgEmilia.html';
            }
            if(localStorage.getItem("hero_name") == "Olav")
            {
                window.location.href='rpgOlav.html';
            }
            if(localStorage.getItem("hero_name") == "Bo")
            {
                window.location.href='rpgBo.html';
            }
            if(localStorage.getItem("hero_name") == "Ryuzen")
            {
                window.location.href='rpgRyuzen.html';
            }
            if(localStorage.getItem("hero_name") == "Daisuke")
            {
                window.location.href='rpgDaisuke.html';
            }
            if(localStorage.getItem("hero_name") == "Erin")
            {
                window.location.href='rpgErin.html';
            }
            if(localStorage.getItem("hero_name") == "Midna")
            {
                window.location.href='rpgMidna.html';
            }                                                      
        }
        else
        {
            alert("Can't start rpg battle without deactivating the traps around the Smasher's camp with moonballistas!");
        }
    }
});

//Helper variables for mission 1
var woodneeded01;
var stoneneeded01;
var roachesdefeat;
var roachestakendown = parseInt(localStorage.getItem("roacheswin"));
var woodforquest01 = parseInt(localStorage.getItem("woodforquest1"));
var stoneforquest01 = parseInt(localStorage.getItem("stoneforquest1"));

//Helper variables for mission 2
var decontaminatedarea;
var forestoutlawsdefeat;
var forestoutlawstakendown = parseInt(localStorage.getItem("forestoutlawswin"));
var decontaminatewater = parseInt(localStorage.getItem("cleanwaterforquest2"));

//Helper variables for mission 3
var magicianstudents01;
var magicianteachers01;
var sunmagestudentstakendown = parseInt(localStorage.getItem("sunmagicianstudentswin"));
var sunmageteacherstakendown = parseInt(localStorage.getItem("sunmagicianteacherswin"));

//Helper variables for mission 4
var crimsonskirmishers01;
var woodneeded04; 
var sailneeded04; 
var crimsonswordskirmisherstakendown01 = parseInt(localStorage.getItem("crimsonswordskirmisherswin01"));
var woodforquest04 = parseInt(localStorage.getItem("woodforquest4"));
var sailforquest04 = parseInt(localStorage.getItem("sailforquest4"));

//Helper variables for mission 5
var goldenscorpions;
var crimsonskirmishers02;
var goldenscorpionsduelwon = parseInt(localStorage.getItem("goldenscorpionwin"));
var crimsonswordskirmisherstakendown02 = parseInt(localStorage.getItem("crimsonswordskirmisherswin02"));

//Helper variables for mission 6
var ironneeded06;
var woodneeded06;
var crimsonmarkswomen01;
var crimsonswordmarkswomentakendown01 = parseInt(localStorage.getItem("crimsonswordmarkswomenwin01"));
var ironforquest06 = parseInt(localStorage.getItem("ironforquest6"));
var woodforquest06 = parseInt(localStorage.getItem("woodforquest6"));
var sailforquest06 = parseInt(localStorage.getItem("sailforquest6"));

//Helper variables for mission 7
var crimsonmarkswomen02;
var crimsonswordmarkswomentakendown02 = parseInt(localStorage.getItem("crimsonswordmarkswomenwin02"));

//Helper variables for mission 8
var breadneeded08;
var coalneeded08;
var copperneeded08;
var breadforquest08 = parseInt(localStorage.getItem("breadforquest8"));
var coalforquest08 = parseInt(localStorage.getItem("coalforquest8"));
var copperforquest08 = parseInt(localStorage.getItem("copperforquest8"));

//Helper variables for mission 9
var corruptedsnakes09;
var corruptedsnakestakendown = parseInt(localStorage.getItem("corruptedsnakeswin"));

//Helper variables for mission 10
var woodneeded10;
var stoneneeded10;
var crimsonfootmen10;
var woodformission10 = parseInt(localStorage.getItem("woodforquest10"));
var stoneformission10 = parseInt(localStorage.getItem("stoneforquest10"));
var crimsonswordfootmentakendown01 = parseInt(localStorage.getItem("crimsonswordfootmenwin01"));
var unlockedbuilder02 = localStorage.getItem("builderlevel02");

//Helper variables for mission 11
var mumuska;
var magicianstudents02;
var magicianteachers02;
var mumuskaduelwon = parseInt(localStorage.getItem("mumuskaduelplayerwin"));
var moonmagestudentstakendown = parseInt(localStorage.getItem("moonmagicianstudentswin"));
var moonmageteacherstakendown = parseInt(localStorage.getItem("moonmagicianteacherswin"));

//Helper variables for mission 12
var crimsonfootmen12;
var woodneeded12;
var stoneneeded12
var crimsonswordfootmentakendown02 = parseInt(localStorage.getItem("crimsonswordfootmenwin02"));
var woodformission12 = parseInt(localStorage.getItem("woodforquest12"));
var stoneformission12 = parseInt(localStorage.getItem("stoneforquest12"));
var unlockedbuilder04 = localStorage.getItem("builderlevel04");

//Helper variables for mission 13
var fruitbasketneeded13;
var coalneeded13;
var fruitbasketformission13 = parseInt(localStorage.getItem("fruitbasketforquest13"));
var coalformission13 = parseInt(localStorage.getItem("coalforquest13"));

//Helper variables for mission 14
var corruptedwhitebears14;
var corruptedwhitebearstakendown01 = parseInt(localStorage.getItem("corruptedwhitebearswin01"));

//Helper variables for mission 15
var cseperke;
var magicianstudents03;
var magicianteachers03;
var cseperkeduelwon = parseInt(localStorage.getItem("cseperkeduelplayerwin"));;
var icemagestudentstakendown = parseInt(localStorage.getItem("icemagicianstudentswin"));
var icemageteacherstakendown = parseInt(localStorage.getItem("icemagicianteacherswin"));

//Helper variables for mission 16
var snowowls;
var corruptedwhitebears16;
var snowowlsduelwon = parseInt(localStorage.getItem("snowowlwin"));
var corruptedwhitebearstakendown02 = parseInt(localStorage.getItem("corruptedwhitebearswin02"));

//Helper variables for mission 17
var woodneeded17;
var ironneeded17;
var coalneeded17;
var woodformission17 = parseInt(localStorage.getItem("woodforquest17"));
var ironformission17 = parseInt(localStorage.getItem("ironforquest17"));
var coalformission17 = parseInt(localStorage.getItem("coalforquest17"));

//Helper variables for mission 18
var meatneeded18;
var icecubeneeded18;
var meatformission18 = parseInt(localStorage.getItem("meatforquest18"));
var icecubeformission18 = parseInt(localStorage.getItem("iceforquest18"));

//Helper variables for mission 19
var magicianstudents04;
var magicianteachers04;
var sandmagestudentstakendown = parseInt(localStorage.getItem("sandmagicianstudentswin"));
var sandmageteacherstakendown = parseInt(localStorage.getItem("sandmagicianteacherswin"));

//Helper variables for mission 20
var spearneeded20;
var corruptedspiders20;
var legionofspiderstakendown = parseInt(localStorage.getItem("legionofcorruptedspiderswin"));
var spearformission20 = parseInt(localStorage.getItem("spearforquest20"));

//Helper variables for mission 21
var moonballistaneeded21;
var smasher;
var moonballistaformission21 = parseInt(localStorage.getItem("moonballistaforquest21"));
var defeatedsmasher = parseInt(localStorage.getItem("smasherwin"));

//Major place button
//The place, where conditional resources are waited, or it can open subscenes.
$("#majorplace").on("click", function()
{
    //Map section 1
    if($("#adventuremap").attr("src") == "Background sources/Mapsection01.png")
    {
        $("#levelhelper").css('opacity', '0');
        woodneeded01 = 10;
        stoneneeded01 = 10;
        roachesdefeat = 10;
        document.getElementById("situationmessage").innerHTML = "<div style='height: 10px; width: 300px;display: block;'><h3 style='margin-bottom: -10px; margin-top: 0px'>Wooden logs: "+woodforquest01+ "/" +woodneeded01+"</h3><h3 style='margin-bottom: -10px;'>Stone: "+stoneforquest01+ "/" +stoneneeded01+"</h3><h3 style='margin-bottom: -10px;'>Defeated cockroaches: "+roachestakendown+ "/" +roachesdefeat+"</h3></div>";
    }
    //Mission closing section of Mission 1
    if((woodforquest01 >= woodneeded01 && stoneforquest01 >= stoneneeded01 && roachestakendown >= roachesdefeat))
    {
        document.getElementById("missiondescription").innerHTML = "The fortress is complete, so the journey following the way given by King Thomas IV has begun!";
        document.getElementById("victoryconditions").innerHTML = "";
        document.getElementById("conditionslist").innerHTML = "";
        localStorage.setItem("mission1_complete", 0);
        $("#storyteller").prop('src', "Mission sources/Mission01_complete_fortress.png");
        document.getElementById("storymessage").innerHTML = "The fortress is complete, so the journey following the way given by King Thomas IV has begun!";
    }
    ///Map section 2
    if($("#adventuremap").attr("src") == "Background sources/Mapsection02.png")
    {
        $("#levelhelper").css('opacity', '0');
        decontaminatedarea = 4;
        forestoutlawsdefeat = 20;
        document.getElementById("situationmessage").innerHTML = "<div style='height: 10px; width: 300px;display: block;'><h3 style='margin-bottom: -10px; margin-top: 0px'>Decontaminated area: "+decontaminatewater+ "/" +decontaminatedarea+"</h3><h3 style='margin-bottom: -10px;'>Defeated forest outlaws: "+forestoutlawstakendown+ "/" +forestoutlawsdefeat+"</h3></div>";
    }
    //Mission closing section of Mission 2
    if((decontaminatewater >= decontaminatedarea && forestoutlawstakendown >= forestoutlawsdefeat))
    {
        localStorage.setItem("mission2_complete", 0);
        document.getElementById("missiondescription").innerHTML = "The river is clean, the highwaymen are caught!";
        document.getElementById("victoryconditions").innerHTML = "";
        document.getElementById("conditionslist").innerHTML = "";
        $("#storyteller").prop('src', "Mission sources/Mission02_complete_clean_river.png");
        document.getElementById("storymessage").innerHTML = "The river is clean, the highwaymen are caught!";
    }
    //Map section 3
    if($("#adventuremap").attr("src") == "Background sources/Mapsection03.png")
    {
        $("#levelhelper").css('opacity', '0');
        magicianstudents01 = 40;
        magicianteachers01 = 10;
        document.getElementById("situationmessage").innerHTML = "<div style='height: 10px; width: 500px;display: block;'><h3 style='margin-bottom: -10px; margin-top: 0px'>Defeated Rising Sun Magician School students: "+sunmagestudentstakendown+ "/" +magicianstudents01+"</h3><h3 style='margin-bottom: -10px;'>Defeated Rising Sun Magician School teachers: "+sunmageteacherstakendown+ "/" +magicianteachers01+"</h3></div>";
    }
    //Mission closing section of Mission 3
    if((sunmagestudentstakendown >= magicianstudents01 && sunmageteacherstakendown >= magicianteachers01))
    {
        localStorage.setItem("mission3_complete", 0);
        localStorage.setItem("sunmagicianschoolplayerdefeat", 1);
        localStorage.setItem("sunmagicianschoolplayerwin", 0);
        document.getElementById("missiondescription").innerHTML = "The Rising Sun Magician School is no more! The area is safe!";
        document.getElementById("victoryconditions").innerHTML = "";
        document.getElementById("conditionslist").innerHTML = "";
        $("#storyteller").prop('src', "Mission sources/Mission03_complete_defeated_rising_sun_magician_school.png");
        document.getElementById("storymessage").innerHTML = "The Rising Sun Magician School is no more! The area is safe!";
    };
    //Map section 4
    if($("#adventuremap").attr("src") == "Background sources/Mapsection04.png")
    {
        $("#levelhelper").css('opacity', '0');
        crimsonskirmishers01 = 10;
        woodneeded04 = 4;
        sailneeded04 = 1;
        document.getElementById("situationmessage").innerHTML = "<div style='height: 10px; width: 500px;display: block;'><h3 style='margin-bottom: -10px; margin-top: 0px'>Defeated Order of Crimson Sword skirmishers: "+crimsonswordskirmisherstakendown01+ "/" +crimsonskirmishers01+"</h3><h3 style='margin-bottom: -10px; margin-top: 10px'>Wooden logs: "+woodforquest04+ "/" +woodneeded04+"</h3><h3 style='margin-bottom: -10px; margin-top: 10px'>Sail: "+sailforquest04+ "/" +sailneeded04+"</h3></div>";
    }
    //Mission closing section of Mission 4
    if((crimsonswordskirmisherstakendown01 >= crimsonskirmishers01 && woodforquest04 >= woodneeded04 && sailforquest04 >= sailneeded04))
    {
        localStorage.setItem("mission4_complete", 0);
        document.getElementById("missiondescription").innerHTML = "We have arrived! Welcome to Aser town, capital of the Pearl Sultanate!";
        document.getElementById("victoryconditions").innerHTML = "";
        document.getElementById("conditionslist").innerHTML = "";
        $("#storyteller").prop('src', "Mission sources/Mission04_complete_arriving_to_aser_town.png");
        document.getElementById("storymessage").innerHTML = "We have arrived! Welcome to Aser town, capital of the Pearl Sultanate!";
    }
    //Map section 5
    if($("#adventuremap").attr("src") == "Background sources/Mapsection05.png")
    {
        $("#levelhelper").css('opacity', '0');
        crimsonskirmishers02 = 10;
        goldenscorpions = 3;
        document.getElementById("situationmessage").innerHTML = "<div style='height: 10px; width: 500px;display: block;'><h3 style='margin-bottom: -10px; margin-top: 0px'>Defeated Order of Crimson Sword skirmishers: "+crimsonswordskirmisherstakendown02+ "/" +crimsonskirmishers02+"</h3><h3 style='margin-bottom: -10px; margin-top: 10px'>Defeated Order of Golden Scorpion warriors: "+goldenscorpionsduelwon+ "/" +goldenscorpions+"</h3></div>";
    }
    //Mission closing section of Mission 5
    if((crimsonswordskirmisherstakendown02 >= crimsonskirmishers02 && goldenscorpionsduelwon >= goldenscorpions))
    {
        localStorage.setItem("goldenscorpionduelplayerdefeat", 1);
        localStorage.setItem("mission5_complete", 0);
        document.getElementById("missiondescription").innerHTML = "<b>Golden Scorpion warrior:</b> You have proven yourself! Many fear us, but you showed us trust! Please, accept this form of aid of ours! You will surely need it for your journey!";
        document.getElementById("victoryconditions").innerHTML = "";
        document.getElementById("conditionslist").innerHTML = "";
        $("#storyteller").prop('src', "Character sources/Golden_Scorpion_warrior_victory.png");
        document.getElementById("storymessage").innerHTML = "<b>Golden Scorpion warrior:</b> You have proven yourself! Many fear us, but you showed us trust! Please, accept this form of aid of ours! You will surely need it for your journey!";
        localStorage.setItem("item_medical_liquid", x13+5 );
    }
    //Map section 6
    if($("#adventuremap").attr("src") == "Background sources/Mapsection06.png")
    {
        $("#levelhelper").css('opacity', '0');
        woodneeded06 = 10;
        sailneeded06 = 4;
        ironneeded06 = 5;
        crimsonmarkswomen01 = 10;
        document.getElementById("situationmessage").innerHTML = "<div style='height: 10px; width: 500px;display: block;'><h3 style='margin-bottom: -10px; margin-top: 0px'>Defeated Order of Crimson Sword markswomen: "+crimsonswordmarkswomentakendown01+ "/" +crimsonmarkswomen01+"</h3><h3 style='margin-bottom: -10px; margin-top: 10px'>Wooden logs: "+woodforquest06+ "/" +woodneeded06+"</h3><h3 style='margin-bottom: -10px; margin-top: 10px'>Sail: "+sailforquest06+ "/" +sailneeded06+"</h3><h3 style='margin-bottom: -10px; margin-top: 10px'>Iron: "+ironforquest06+ "/" +ironneeded06+"</h3></div>";
    }
    //Mission closing section of Mission 6
    if((crimsonswordmarkswomentakendown01 >= crimsonmarkswomen01 && woodforquest06 >= woodneeded06 && sailforquest06 >= sailneeded06 && ironforquest06 >= ironneeded06))
    {
        localStorage.setItem("mission6_complete", 0);
        document.getElementById("missiondescription").innerHTML = "Town in our sight! To the harbor!";
        document.getElementById("victoryconditions").innerHTML = "";
        document.getElementById("conditionslist").innerHTML = "";
        $("#storyteller").prop('src', "Mission sources/Mission06_complete_arriving_to_alqamarrehad_town.png");
        document.getElementById("storymessage").innerHTML = "Town in our sight! To the harbor!";
    }
    //Map section 7
    if($("#adventuremap").attr("src") == "Background sources/Mapsection07.png")
    {
        $("#levelhelper").css('opacity', '0');
        crimsonmarkswomen02 = 20;
        document.getElementById("situationmessage").innerHTML = "<div style='height: 10px; width: 500px;display: block;'><h3 style='margin-bottom: -10px; margin-top: 0px'>Defeated Order of Crimson Sword markswomen: "+crimsonswordmarkswomentakendown02+ "/" +crimsonmarkswomen02+"</h3></div>";
    }
    //Mission closing section of Mission 7
    if(crimsonswordmarkswomentakendown02 >= crimsonmarkswomen02)
    {
        localStorage.setItem("mission7_complete", 0);
        document.getElementById("missiondescription").innerHTML = "Morning has come! Good job!";
        document.getElementById("victoryconditions").innerHTML = "";
        document.getElementById("conditionslist").innerHTML = "";
        $("#storyteller").prop('src', "Mission sources/Mission07_complete_alqamarrehad_town_victory.png");
        document.getElementById("storymessage").innerHTML = "Morning has come! Good job!";
    }
    //Map section 8
    if($("#adventuremap").attr("src") == "Background sources/Mapsection08.png")
    {
        $("#levelhelper").css('opacity', '0');
        breadneeded08 = 5;
        coalneeded08 = 20;
        copperneeded08 = 10;
        document.getElementById("situationmessage").innerHTML = "<div style='height: 10px; width: 500px;display: block;'><h3 style='margin-bottom: -10px; margin-top: 0px'>Bread: "+breadforquest08+ "/" +breadneeded08+"</h3><h3 style='margin-bottom: -10px; margin-top: 10px'>Coal chunks: "+coalforquest08+ "/" +coalneeded08+"</h3><h3 style='margin-bottom: -10px; margin-top: 10px'>Copper: "+copperforquest08+ "/" +copperneeded08+"</h3></div>";
    }
    //Mission closing section of Mission 8
    if((breadforquest08 >= breadneeded08 && coalforquest08 >= coalneeded08 && copperforquest08 >= copperneeded08))
    {
        localStorage.setItem("mission8_complete", 0);
        document.getElementById("missiondescription").innerHTML = "We are victorious, adventurer!";
        document.getElementById("victoryconditions").innerHTML = "";
        document.getElementById("conditionslist").innerHTML = "";
        $("#storyteller").prop('src', "Mission sources/Mission08_complete_milkene_town_victory.png");
        document.getElementById("storymessage").innerHTML = "We are victorious, adventurer!";
    }
    //Map section 9
    if($("#adventuremap").attr("src") == "Background sources/Mapsection09.png")
    {
        $("#levelhelper").css('opacity', '0');
        corruptedsnakes09 = 10;
        document.getElementById("situationmessage").innerHTML = "<div style='height: 10px; width: 500px;display: block;'><h3 style='margin-bottom: -10px; margin-top: 0px'>Defeated corrupted jungle snakes: "+corruptedsnakestakendown+ "/" +corruptedsnakes09+"</h3></div>";
    }
    //Mission closing section of Mission 9
    if(corruptedsnakestakendown >= corruptedsnakes09)
    {
        localStorage.setItem("mission9_complete", 0);
        document.getElementById("missiondescription").innerHTML = "Naftali: You fit the conditions to become a hunter in any tribe. Wishing the best for the rest of your journey! I have to go back to that village over there! They are counting on me!";
        document.getElementById("victoryconditions").innerHTML = "";
        document.getElementById("conditionslist").innerHTML = "";
        $("#storyteller").prop('src', "Mission sources/Mission09_complete_at_the_other_edge_of_the_jungle.png");
        document.getElementById("storymessage").innerHTML = "Naftali: You fit the conditions to become a hunter in any tribe. Wishing the best for the rest of your journey! I have to go back to that village over there! They are counting on me!";
    }
    //Map section 10
    if($("#adventuremap").attr("src") == "Background sources/Mapsection10.png")
    {
        $("#levelhelper").css('opacity', '0');
        crimsonfootmen10 = 30;
        woodneeded10 = 40;
        stoneneeded10 = 20;
        document.getElementById("situationmessage").innerHTML = "<div style='height: 10px; width: 500px;display: block;'><h3 style='margin-bottom: -10px; margin-top: 0px'>Defeated Order of Crimson Sword footmen: "+crimsonswordfootmentakendown01+ "/" +crimsonfootmen10+"</h3><h3 style='margin-bottom: -10px; margin-top: 10px'>Stone: "+stoneformission10+ "/" +stoneneeded10+"</h3><h3 style='margin-bottom: -20px; margin-top: 10px'>Wooden logs: "+woodformission10+ "/" +woodneeded10+"</h3><h3>Builder level 2(must be 0): "+unlockedbuilder02+"</h3></div>";
    }
    //Mission closing section of Mission 10
    if((crimsonswordfootmentakendown01 >= crimsonfootmen10 && woodformission10 >= woodneeded10 && stoneformission10 >= stoneneeded10 && unlockedbuilder02 == 0))
    {
        localStorage.setItem("mission10_complete", 0);
        document.getElementById("missiondescription").innerHTML = "Teutonic captain: The castle has held firm! Praise God for this victory!";
        document.getElementById("victoryconditions").innerHTML = "";
        document.getElementById("conditionslist").innerHTML = "";
        $("#storyteller").prop('src', "Mission sources/Mission10_complete_marsh_castle_victory.png");
        document.getElementById("storymessage").innerHTML = "Teutonic captain: The castle has held firm! Praise God for this victory!";
    }
    //Map section 11
    if($("#adventuremap").attr("src") == "Background sources/Mapsection11.png")
    {
        $("#levelhelper").css('opacity', '0');
        mumuska = "won";
        magicianstudents02 = 40;
        magicianteachers02 = 10;
        document.getElementById("situationmessage").innerHTML = "<div style='height: 10px; width: 500px;display: block;'><h3 style='margin-bottom: -10px; margin-top: 0px'>Challenge of Mumuska: "+mumuskaduelwon+ "/" +mumuska+" first value must be 0</h3><h3 style='margin-bottom: -10px; margin-top: 10px'>Defeated Blue Moon Magician School students: "+moonmagestudentstakendown+ "/" +magicianstudents02+"</h3><h3 style='margin-bottom: -10px; margin-top: 10px'>Defeated Blue Moon Magician School teachers: "+moonmageteacherstakendown+ "/" +magicianteachers02+"</h3></div>";
    }
    //Mission closing section of Mission 11
    if((mumuskaduelwon == 0 && moonmagestudentstakendown >= magicianstudents02 && moonmageteacherstakendown >= magicianteachers02))
    {
        localStorage.setItem("mumuskaduelplayerdefeat", 1);
        localStorage.setItem("mission11_complete", 0);
        document.getElementById("missiondescription").innerHTML = "The Blue Moon Magician School is no more! The area is safe!";
        document.getElementById("victoryconditions").innerHTML = "";
        document.getElementById("conditionslist").innerHTML = "";
        $("#storyteller").prop('src', "Mission sources/Mission11_complete_defeated_blue_moon_magician_school.png");
        document.getElementById("storymessage").innerHTML = "The Blue Moon Magician School is no more! The area is safe!";
    }
    //Map section 12
    if($("#adventuremap").attr("src") == "Background sources/Mapsection12.png")
    {
        $("#levelhelper").css('opacity', '0');
        crimsonfootmen12 = 30;
        woodneeded12 = 20;
        stoneneeded12 = 40;
        document.getElementById("situationmessage").innerHTML = "<div style='height: 10px; width: 500px;display: block;'><h3 style='margin-bottom: -10px; margin-top: 0px'>Defeated Order of Crimson Sword footmen: "+crimsonswordfootmentakendown02+ "/" +crimsonfootmen12+"</h3><h3 style='margin-bottom: -10px; margin-top: 10px'>Stone: "+stoneformission12+ "/" +stoneneeded12+"</h3><h3 style='margin-bottom: -20px; margin-top: 10px'>Wooden logs: "+woodformission12+ "/" +woodneeded12+"</h3><h3>Builder level 4 (must be 0): "+unlockedbuilder04+"</h3></div>";
    }
    //Mission closing section for Mission 12
    if((crimsonswordfootmentakendown02 >= crimsonfootmen12 && woodformission12 >= woodneeded12 && stoneformission12 >= stoneneeded12 && unlockedbuilder04 == 0))
    {
        localStorage.setItem("mission12_complete", 0);
        document.getElementById("missiondescription").innerHTML = "We are victorious!";
        document.getElementById("victoryconditions").innerHTML = "";
        document.getElementById("conditionslist").innerHTML = "";
        $("#storyteller").prop('src', "Mission sources/Mission12_complete_othello_castle_victory.png");
        document.getElementById("storymessage").innerHTML = "We are victorious!";
    }
    //Map section 13
    if($("#adventuremap").attr("src") == "Background sources/Mapsection13.png")
    {
        $("#levelhelper").css('opacity', '0');
        fruitbasketneeded13 = 20;
        coalneeded13 = 10;
        document.getElementById("situationmessage").innerHTML = "<div style='height: 10px; width: 500px;display: block;'><h3 style='margin-bottom: -10px; margin-top: 0px'>Fruit baskets: "+fruitbasketformission13+ "/" +fruitbasketneeded13+"</h3><h3 style='margin-bottom: -10px; margin-top: 0px'>Coal chunks: "+coalformission13+ "/" +coalneeded13+"</h3></div>";
    }
    //Mission closing section for Mission 13
    if((coalformission13 >= coalneeded13 && fruitbasketformission13 >= fruitbasketneeded13))
    {
        localStorage.setItem("mission13_complete", 0);
        document.getElementById("missiondescription").innerHTML = "Northern barbarian: I see what you are up to. Follow me!";
        document.getElementById("victoryconditions").innerHTML = "";
        document.getElementById("conditionslist").innerHTML = "";
        $("#storyteller").prop('src', "Characters sources/Northern_Barbarian.png");
        document.getElementById("storymessage").innerHTML = "Northern barbarian: I see what you are up to. Follow me!";
    }
    //Map section 14
    if($("#adventuremap").attr("src") == "Background sources/Mapsection14.png")
    {
        $("#levelhelper").css('opacity', '0');
        corruptedwhitebears14 = 10;
        document.getElementById("situationmessage").innerHTML = "<div style='height: 10px; width: 500px;display: block;'><h3 style='margin-bottom: -10px; margin-top: 0px'>Defeated corrupted white bears: "+corruptedwhitebearstakendown01+ "/" +corruptedwhitebears14+"</h3></div>";
    }
    //Mission closing section for Mission 14
    if(corruptedwhitebearstakendown01 >= corruptedwhitebears14)
    {
        localStorage.setItem("mission14_complete", 0);
        document.getElementById("missiondescription").innerHTML = "Finally, we have made it! Does anybody need a hot tea?";
        document.getElementById("victoryconditions").innerHTML = "";
        document.getElementById("conditionslist").innerHTML = "";
        $("#storyteller").prop('src', "Mission sources/Mission14_complete_snow_tour.png");
        document.getElementById("storymessage").innerHTML = "Finally, we have made it! Does anybody need a hot tea?";
    }
    //Map section 15
    if($("#adventuremap").attr("src") == "Background sources/Mapsection15.png")
    {
        $("#levelhelper").css('opacity', '0');
        cseperke = "won";
        magicianstudents03 = 40;
        magicianteachers03 = 10;
        document.getElementById("situationmessage").innerHTML = "<div style='height: 10px; width: 500px;display: block;'><h3 style='margin-bottom: -10px; margin-top: 0px'>Challenge of Cseperke: "+cseperkeduelwon+ "/" +cseperke+" first value must be 0</h3><h3 style='margin-bottom: -10px; margin-top: 10px'>Defeated Ice Crystal Magician School students: "+icemagestudentstakendown+ "/" +magicianstudents03+"</h3><h3 style='margin-bottom: -10px; margin-top: 10px'>Defeated Ice Crystal Magician School teachers: "+icemageteacherstakendown+ "/" +magicianteachers03+"</h3></div>";
    }
    //Mission closing section for Mission 15
    if((cseperkeduelwon == 0 && icemagestudentstakendown >= magicianstudents03 && icemageteacherstakendown >= magicianteachers03))
    {
        localStorage.setItem("mission15_complete", 0);
        document.getElementById("missiondescription").innerHTML = "Victory! The Ice Crystal Magician School is no more!";
        document.getElementById("victoryconditions").innerHTML = "";
        document.getElementById("conditionslist").innerHTML = "";
        $("#storyteller").prop('src', "Mission sources/Mission15_complete_defeated_ice_crystal_magician_school.png");
        document.getElementById("storymessage").innerHTML = "Victory! The Ice Crystal Magician School is no more!";
    }
    //Map section 16
    if($("#adventuremap").attr("src") == "Background sources/Mapsection16.png")
    {
        $("#levelhelper").css('opacity', '0');
        snowowls = 4;
        corruptedwhitebears16 = 10;
        document.getElementById("situationmessage").innerHTML = "<div style='height: 10px; width: 500px;display: block;'><h3 style='margin-bottom: -10px; margin-top: 0px'>Defeated corrupted white bears: "+corruptedwhitebearstakendown02+ "/" +corruptedwhitebears16+"</h3><h3 style='margin-bottom: -10px; margin-top: 10px'>Defeated Order of Snow Owl warriors: "+snowowlsduelwon+ "/" +snowowls+"</h3></div>";
    }
    //Mission closing section for Mission 16
    if((corruptedwhitebearstakendown02 >= corruptedwhitebears16 && snowowlsduelwon >= snowowls))
    {
        localStorage.setItem("mission16_complete", 0);
        document.getElementById("missiondescription").innerHTML = "We are ready! The king is grateful.";
        document.getElementById("victoryconditions").innerHTML = "";
        document.getElementById("conditionslist").innerHTML = "";
        $("#storyteller").prop('src', "Character sources/Snow_Owl_Archer.png");
        document.getElementById("storymessage").innerHTML = "We are ready! The king is grateful.";
    }
    //Map section 17
    if($("#adventuremap").attr("src") == "Background sources/Mapsection17.png")
    {
        $("#levelhelper").css('opacity', '0');
        woodneeded17 = 30;
        ironneeded17 = 10;
        coalneeded17 = 4;
        document.getElementById("situationmessage").innerHTML = "<div style='height: 10px; width: 500px;display: block;'><h3 style='margin-bottom: -10px; margin-top: 0px'>Coal chunks: "+coalformission17+ "/" +coalneeded17+"</h3><h3 style='margin-bottom: -10px; margin-top: 10px'>Iron: "+ironformission17+ "/" +ironneeded17+"</h3><h3 style='margin-bottom: -10px; margin-top: 10px'>Wooden logs: "+woodformission17+ "/" +woodneeded17+"</h3></div>";
    }
    //Mission closing section for Mission 17
    if((ironformission17 >= ironneeded17 && coalformission17 >= coalneeded17 && woodformission17 >= woodneeded17))
    {
        localStorage.setItem("mission17_complete", 0);
        document.getElementById("missiondescription").innerHTML = "Mission accomplished! Full steam ahead!";
        document.getElementById("victoryconditions").innerHTML = "";
        document.getElementById("conditionslist").innerHTML = "";
        $("#storyteller").prop('src', "Mission sources/Mission17_complete_train.png");
        document.getElementById("storymessage").innerHTML = "Mission accomplished! Full steam ahead!";
    }
    //Map section 18
    if($("#adventuremap").attr("src") == "Background sources/Mapsection18.png")
    {
        $("#levelhelper").css('opacity', '0');
        meatneeded18 = 20;
        icecubeneeded18 = 10;
        document.getElementById("situationmessage").innerHTML = "<div style='height: 10px; width: 500px;display: block;'><h3 style='margin-bottom: -10px; margin-top: 0px'>Raw meat: "+meatformission18+ "/" +meatneeded18+"</h3><h3 style='margin-bottom: -10px; margin-top: 10px'>Ice cube: "+icecubeformission18+ "/" +icecubeneeded18+"</h3></div>";
    }
    //Mission closing section for Mission 18
    if((icecubeformission18 >= icecubeneeded18 && meatformission18 >= meatneeded18))
    {
        localStorage.setItem("mission18_complete", 0);
        document.getElementById("missiondescription").innerHTML = "Ogodaj: Well done, adventurer! You have proven yourself!";
        document.getElementById("victoryconditions").innerHTML = "";
        document.getElementById("conditionslist").innerHTML = "";
        $("#storyteller").prop('src', "Mission sources/Mission18_complete_resources_for_nomads.png");
        document.getElementById("storymessage").innerHTML = "Ogodaj: Well done, adventurer! You have proven yourself!";
    }
    //Map section 19
    if($("#adventuremap").attr("src") == "Background sources/Mapsection19.png")
    {
        $("#levelhelper").css('opacity', '0');
        magicianstudents04 = 40;
        magicianteachers04 = 10;
        document.getElementById("situationmessage").innerHTML = "<div style='height: 10px; width: 500px;display: block;'><h3 style='margin-bottom: -10px; margin-top: 0px'>Defeated Red Sand Magician School students: "+sandmagestudentstakendown+ "/" +magicianstudents04+"</h3><h3 style='margin-bottom: -10px;'>Defeated Red Sand Magician School teachers: "+sandmageteacherstakendown+ "/" +magicianteachers04+"</h3></div>";
    }
    //Mission closing section for Mission 19
    if((sandmageteacherstakendown >= magicianteachers04 && sandmagestudentstakendown >= magicianstudents04))
    {
        localStorage.setItem("mission19_complete", 0);
        document.getElementById("missiondescription").innerHTML = "The Red Sand Magician School is no more! Victory is ours!";
        document.getElementById("victoryconditions").innerHTML = "";
        document.getElementById("conditionslist").innerHTML = "";
        $("#storyteller").prop('src', "Mission sources/Mission19_complete_defeated_red_sand_magician_school.png");
        document.getElementById("storymessage").innerHTML = "The Red Sand Magician School is no more! Victory is ours!";
    }
    //Map section 20
    if($("#adventuremap").attr("src") == "Background sources/Mapsection20.png")
    {
        $("#levelhelper").css('opacity', '0');
        spearneeded20 = 30;
        corruptedspiders20 = 1;
        document.getElementById("situationmessage").innerHTML = "<div style='height: 10px; width: 500px;display: block;'><h3 style='margin-bottom: -10px; margin-top: 0px'>Spear: "+spearformission20+ "/" +spearneeded20+"</h3><h3 style='margin-bottom: -10px;'>Defeated Legion of spiders: "+legionofspiderstakendown+ "/" +corruptedspiders20+"</h3></div>";
    }
    //Mission closing section for Mission 20
    if((legionofspiderstakendown >= corruptedspiders20 && spearformission20 >= spearneeded20))
    {
        localStorage.setItem("mission20_complete", 0);
        document.getElementById("missiondescription").innerHTML = "The Legion of the Order of the Crimson Sword is vanquished!";
        document.getElementById("victoryconditions").innerHTML = "";
        document.getElementById("conditionslist").innerHTML = "";
        $("#storyteller").prop('src', "Mission sources/Mission20_complete_defeated_legion.png");
        document.getElementById("storymessage").innerHTML = "The Legion of the Order of the Crimson Sword is vanquished!";
    }
    //Map section 21
    if($("#adventuremap").attr("src") == "Background sources/Mapsection21.png")
    {
        $("#levelhelper").css('opacity', '0');
        moonballistaneeded21 = 4;
        smasher = "won";
        document.getElementById("situationmessage").innerHTML = "<div style='height: 10px; width: 500px;display: block;'><h3 style='margin-bottom: -10px; margin-top: 0px'>Moonballista: "+moonballistaformission21+ "/" +moonballistaneeded21+"</h3><h3 style='margin-bottom: -10px;'>Defeat the Smasher: "+defeatedsmasher+ "/" +smasher+" (first value must be 0)</h3></div>";
    }
    //Mission closing section for Mission 21
    if((moonballistaformission21 >= moonballistaneeded21 && defeatedsmasher == 0))
    {
        localStorage.setItem("mission21_complete", 0);
        document.getElementById("missiondescription").innerHTML = "The Order of the Crimson Sword is defeated!";
        document.getElementById("victoryconditions").innerHTML = "";
        document.getElementById("conditionslist").innerHTML = "";
        $("#storyteller").prop('src', "Mission sources/Mission21_complete_defeated_smasher.png");
        document.getElementById("storymessage").innerHTML = "The Order of the Crimson Sword is defeated!";
    }
});

//Move on in the map
$("#forwardbutton").on("click", function()
{
    if($("#adventuremap").attr("src") == "Background sources/Gameintrosection.png")
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection01.png");
        $("#majorplace").css("display", "block");
        $("#random01").css("display", "block");
        $("#random02").css("display", "block");
        $("#random03").css("display", "block");
        $("#forbattle").css("display", "block");
        $("#levelhelper").css("display", "block");
    }
    //Mission 1
    if(localStorage.getItem("mission1_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection02.png");
    }

    //Mission 2
    if(localStorage.getItem("mission2_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection03.png");
    }

    //Mission 3
    if(localStorage.getItem("mission3_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection04.png");
    }

    //Mission 4
    if(localStorage.getItem("mission4_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection05.png");
    }

    //Mission 5
    if(localStorage.getItem("mission5_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection06.png");
    }

    //Mission 6
    if(localStorage.getItem("mission6_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection07.png");
    }

    //Mission 7
    if(localStorage.getItem("mission7_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection08.png");
    }

    //Mission 8
    if(localStorage.getItem("mission8_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection09.png");
    }

    //Mission 9
    if(localStorage.getItem("mission9_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection10.png");
    }

    //Mission 10
    if(localStorage.getItem("mission10_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection11.png");
    }

    //Mission 11
    if(localStorage.getItem("mission11_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection12.png");
    }

    //Mission 12
    if(localStorage.getItem("mission12_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection13.png");
    }

    //Mission 13
    if(localStorage.getItem("mission13_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection14.png");
    }

    //Mission 14
    if(localStorage.getItem("mission14_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection15.png");
    }

    //Mission 15
    if(localStorage.getItem("mission15_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection16.png");
    }

    //Mission 16
    if(localStorage.getItem("mission16_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection17.png");
    }

    //Mission 17
    if(localStorage.getItem("mission17_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection18.png");
    }

    //Mission 18
    if(localStorage.getItem("mission18_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection19.png");
    }

    //Mission 19
    if(localStorage.getItem("mission19_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection20.png");
    }

    //Mission 20
    if(localStorage.getItem("mission20_complete") == 0)
    {
    $("#adventuremap").prop("src", "Background sources/Mapsection21.png");
    }

    //Misson 21
    if(localStorage.getItem("mission21_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Gameclosingsection.png");
        $("#majorplace").css("display", "none");
        $("#random01").css("display", "none");
        $("#random02").css("display", "none");
        $("#random03").css("display", "none");
        $("#forbattle").css("display", "none");
    }
});

//Move backward in the map
$("#backwardbutton").on("click", function()
{   
    //The intro section 
    if($("#adventuremap").attr("src") == "Background sources/Mapsection01.png")
    {
        $("#adventuremap").prop("src", "Background sources/Gameintrosection.png");
        //TODO
        //$("#storydescription").css("display", "block");
        //$("#adventuremap").css("display", "none");
        //$("#situationmessage").css("display", "none");
        //$("#forwardbutton").css("display", "none");
        //$("#backwardbutton").css("display", "none");
        $("#majorplace").css("display", "none");
        $("#random01").css("display", "none");
        $("#random02").css("display", "none");
        $("#random03").css("display", "none");
        $("#forbattle").css("display", "none");
        $("#levelhelper").css('display', "none");
        //document.getElementById("storymessage").innerHTML = "King Thomas IV: We are going to need a careful strategy! They said that the soldiers of that Order can appear anywhere! Balanced number of parties, warbands and patrols of ours and our neighbors have to roam around the borders, the settlements and the chosen areas! For making the entire operation easy and lessening the Order’s interest in this continent, we can allow only one adventurer to come and do the part of the Adventurer Guild of London in this operation!";
        //$("#storyteller").prop('src', "Character sources/Millitunian_Centurion.png");
        //document.getElementById("missionname").innerHTML = "Mission 1.: Arriving at the borders";
        //document.getElementById("missiondescription").innerHTML = "Having emerged victorious against Redstoneville, King Thomas IV, monarch of the Kingdom of Silvertown, had to face with a new challenge: his adventurers had to work together with adventurers from another guild 3 times in a row to stop dark forces. At the third time, the other guild’s adventurers reported about a new threat: the Order of the Crimson Sword. ";
    }
    //Back to Map section 1
    /*if($("#adventuremap").attr("src") == "Background sources/Mapsection02.png" && localStorage.getItem("mission1_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection01.png");
    }
    //Back to Map section 2
    if($("#adventuremap").attr("src") == "Background sources/Mapsection03.png" && localStorage.getItem("mission2_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection02.png");
    }
    if($("#adventuremap").attr("src") == "Background sources/Mapsection04.png" && localStorage.getItem("mission3_complete") == 0)
    {
        $("#adventuremap").prop("src", "Background sources/Mapsection03.png");
    }*/
})

//adding wood for the quests
$("#addingwood").on("click", function()
{
    if(parseInt(localStorage.getItem("item_wooden_logs")) == 0)
    {
        localStorage.setItem("item_wooden_logs", x01);
    }
    else
    {
        if($("#adventuremap").attr("src") == "Background sources/Mapsection01.png")
        {
            localStorage.setItem("item_wooden_logs", --x01);
            localStorage.setItem("woodforquest1", ++woodforquest01);
        }
        if($("#adventuremap").attr("src") == "Background sources/Mapsection04.png")
        {
            localStorage.setItem("item_wooden_logs", --x01);
            localStorage.setItem("woodforquest4", ++woodforquest04);
        }
        if($("#adventuremap").attr("src") == "Background sources/Mapsection06.png")
        {
            localStorage.setItem("item_wooden_logs", --x01);
            localStorage.setItem("woodforquest6", ++woodforquest06);
        }
        if($("#adventuremap").attr("src") == "Background sources/Mapsection10.png")
        {
            localStorage.setItem("item_wooden_logs", --x01);
            localStorage.setItem("woodforquest10", ++woodformission10);
        }
        if($("#adventuremap").attr("src") == "Background sources/Mapsection12.png")
        {
            localStorage.setItem("item_wooden_logs", --x01);
            localStorage.setItem("woodforquest12", ++woodformission12);
        }
        if($("#adventuremap").attr("src") == "Background sources/Mapsection17.png")
        {
            localStorage.setItem("item_wooden_logs", --x01);
            localStorage.setItem("woodforquest17", ++woodformission17);
        }
    }
});

//adding stone for the quests
$("#addingstone").on("click", function()
{
    if(parseInt(localStorage.getItem("item_stone")) == 0)
    {
        localStorage.setItem("item_stone", x02);
    }
    else
    {
        if($("#adventuremap").attr("src") == "Background sources/Mapsection01.png")
        {
            localStorage.setItem("item_stone", --x02);
            localStorage.setItem("stoneforquest1", ++stoneforquest01);
        }
        if($("#adventuremap").attr("src") == "Background sources/Mapsection10.png")
        {
            localStorage.setItem("item_stone", --x02);
            localStorage.setItem("stoneforquest10", ++stoneformission10);
        }
        if($("#adventuremap").attr("src") == "Background sources/Mapsection12.png")
        {
            localStorage.setItem("item_stone", --x02);
            localStorage.setItem("stoneforquest12", ++stoneformission12);
        }
    }
});

//adding medical liquid for the quests
$("#addingmedicalliquid").on("click", function()
{
    if(parseInt(localStorage.getItem("item_medical_liquid")) == 0)
    {
        localStorage.setItem("item_medical_liquid", x13);
    }
    else
    {
        if($("#adventuremap").attr("src") == "Background sources/Mapsection02.png")
        {
            localStorage.setItem("item_medical_liquid", --x13);
            localStorage.setItem("cleanwaterforquest2", ++decontaminatewater);
        }
    }
});

//adding sail for the quests
$("#addingsail").on("click", function()
{
    if(parseInt(localStorage.getItem("item_sail")) == 0)
    {
        localStorage.setItem("item_sail", x10);
    }
    else
    {
        if($("#adventuremap").attr("src") == "Background sources/Mapsection04.png")
        {
            localStorage.setItem("item_sail", --x10);
            localStorage.setItem("sailforquest4", ++sailforquest04);
        }
        if($("#adventuremap").attr("src") == "Background sources/Mapsection06.png")
        {
            localStorage.setItem("item_sail", --x10);
            localStorage.setItem("sailforquest6", ++sailforquest06);
        }
    }
});

//adding iron for the quests
$("#addingiron").on("click", function()
{
    if(parseInt(localStorage.getItem("item_iron_ingot")) == 0)
    {
        localStorage.setItem("item_iron_ingot", x11);
    }
    else
    {
        if($("#adventuremap").attr("src") == "Background sources/Mapsection06.png")
        {
            localStorage.setItem("item_iron_ingot", --x11);
            localStorage.setItem("ironforquest6", ++ironforquest06);
        }
        if($("#adventuremap").attr("src") == "Background sources/Mapsection17.png")
        {
            localStorage.setItem("item_iron_ingot", --x11);
            localStorage.setItem("ironforquest17", ++ironformission17);
        }
    }
});

//adding bread for the quests
$("#addingbread").on("click", function()
{
    if(parseInt(localStorage.getItem("item_bread")) == 0)
    {
        localStorage.setItem("item_bread", x12);
    }
    else
    {
        if($("#adventuremap").attr("src") == "Background sources/Mapsection08.png")
        {
            localStorage.setItem("item_bread", --x12);
            localStorage.setItem("breadforquest8", ++breadforquest08);
        }
    }
});

//adding coal for the quests
$("#addingcoal").on("click", function()
{
    if(parseInt(localStorage.getItem("item_coal")) == 0)
    {
        localStorage.setItem("item_coal", x08);
    }
    else
    {
        if($("#adventuremap").attr("src") == "Background sources/Mapsection08.png")
        {
            localStorage.setItem("item_coal", --x08);
            localStorage.setItem("coalforquest8", ++coalforquest08);
        }
        if($("#adventuremap").attr("src") == "Background sources/Mapsection13.png")
        {
            localStorage.setItem("item_coal", --x08);
            localStorage.setItem("coalforquest13", ++coalformission13);
        }
        if($("#adventuremap").attr("src") == "Background sources/Mapsection17.png")
        {
            localStorage.setItem("item_coal", --x08);
            localStorage.setItem("coalforquest17", ++coalformission17);
        }
    }
});

//adding copper for the quests
$("#addingcopper").on("click", function()
{
    if(parseInt(localStorage.getItem("item_copper_ingot")) == 0)
    {
        localStorage.setItem("item_copper_ingot", x09);
    }
    else
    {
        if($("#adventuremap").attr("src") == "Background sources/Mapsection08.png")
        {
            localStorage.setItem("item_copper_ingot", --x09);
            localStorage.setItem("copperforquest8", ++copperforquest08);
        }
    }
});

//adding fruitbasket for the quests
$("#addingfruitbasket").on("click", function()
{
    if(parseInt(localStorage.getItem("item_fruit_basket")) == 0)
    {
        localStorage.setItem("item_fruit_basket", x03);
    }
    else
    {
        if($("#adventuremap").attr("src") == "Background sources/Mapsection13.png")
        {
            localStorage.setItem("item_fruit_basket", --x03);
            localStorage.setItem("fruitbasketforquest13", ++fruitbasketformission13);
        }
    }
});

//adding meat for the quests
$("#addingmeat").on("click", function()
{
    if(parseInt(localStorage.getItem("item_raw_meat")) == 0)
    {
        localStorage.setItem("item_raw_meat", x07);
    }
    else
    {
        if($("#adventuremap").attr("src") == "Background sources/Mapsection18.png")
        {
            localStorage.setItem("item_raw_meat", --x07);
            localStorage.setItem("meatforquest18", ++meatformission18);
        }
    }
});

//adding ice cube for the quests
$("#addingice").on("click", function()
{
    if(parseInt(localStorage.getItem("item_ice_cube")) == 0)
    {
        localStorage.setItem("item_ice_cube", x14);
    }
    else
    {
        if($("#adventuremap").attr("src") == "Background sources/Mapsection18.png")
        {
            localStorage.setItem("item_ice_cube", --x14);
            localStorage.setItem("iceforquest18", ++icecubeformission18);
        }
    }
});

//adding spear for the quests
$("#addingspear").on("click", function()
{
    if(parseInt(localStorage.getItem("item_spear")) == 0)
    {
        localStorage.setItem("item_spear", x15);
    }
    else
    {
        if($("#adventuremap").attr("src") == "Background sources/Mapsection20.png")
        {
            localStorage.setItem("item_spear", --x15);
            localStorage.setItem("spearforquest20", ++spearformission20);
        }
    }
});

//adding moonballista for the quests
$("#addingmoonballista").on("click", function()
{
    if(parseInt(localStorage.getItem("item_moonballista")) == 0)
    {
        localStorage.setItem("item_moonballista", x16);
    }
    else
    {
        if($("#adventuremap").attr("src") == "Background sources/Mapsection21.png")
        {
            localStorage.setItem("item_moonballista", --x16);
            localStorage.setItem("moonballistaforquest21", ++moonballistaformission21);
        }
    }
});