var currenthealth = 100;	/*Current number of health points of the wall.*/	
var points = 0;		/*Number of points achieved in the game.*/

/*The function is for ensuring that the starter value of the numeric values appear.*/
function numbershower()
{
    document.getElementById("mypoints").innerHTML = points;	
    document.getElementById("ch").innerHTML = currenthealth;
}

const listen = document.getElementById("div1");

//If an enemy unit reaches the wall.
listen.addEventListener("animationend", () => {
    listen.remove();
    currenthealth = currenthealth - 1;  //regular enemy unit takes 1 health point
    document.getElementById("ch").innerHTML = currenthealth;    //in order to have the upgraded version of the variable
    var unit = $("<div><div>").attr('id', 'div2');
    $("#thegame").append(unit);

    //Secretive game over event
    if(currenthealth == 99 && points == 0)
    {
        listen.addEventListener("animationend", () => {
            listen.remove();
            currenthealth = currenthealth - 1;
            document.getElementById("ch").innerHTML = currenthealth;
            var unit2 = $("<div><div>").attr('id', 'div3');
            $("#thegame").append(unit2);});
            alert("Secretive game over event found! Press F5 to restart!");
    }

    //Game over checking
    if(currenthealth == 0)
    {
        var breach = document.getElementById("wall");
        breach.remove();
        alert("Game over! The wall is destroyed!");
    }
});

//If the enemy unit gets clicked.
$("#div1").on("click", function () {
    this.remove();
    points = points + 10;   //Player gets 10 points for taking down one regular enemy unit.
    $("#mypoints").html(parseInt($("#mypoints").html())+ 10);   //Jquery version of upgrading the variable value presented to the window.
    var unit = $("<div><div>").attr('id', 'div2');
    $("#thegame").append(unit);

        var wave = $("#div2"); //2nd enemy unit
        $(wave).click(function(){
            wave.remove();
            points = points + 10;
            $("#mypoints").html(parseInt($("#mypoints").html())+ 10);
 
            var unit2 = $("<div><div>").attr('id', 'div3');
            $("#thegame").append(unit2);
            
            var unit3 = $("#div3"); //3rd enemy unit
            unit3.click(function(){
                this.remove();
                points = points + 10;
                $("#mypoints").html(parseInt($("#mypoints").html())+ 10);
                
                //creation of a big enemy unit
                var bigboy = $("<div><div>").attr('id', 'div4');
                $("#thegame").append(bigboy);
                $("#div4").animate({left: "1292px"}, 12000, function()
                {
                    $("#div4").remove();
                    currenthealth = currenthealth - 10; //big enemy unit takes 10 health points
                    document.getElementById("ch").innerHTML = currenthealth;
                    alert("Bleh, big enemy unit cannot be taken down yet! :D");
                    
                    //creation of the batteringram unit
                    var batteringram = $("<div><div>").attr('id', 'div5');
                    $("#thegame").append(batteringram); //batteringram unit
                    $("#div5").animate({left: "1392px"}, 12000, function()
                    {
                        currenthealth = currenthealth - 5;  //batteringram unit takes 5 health points
                        document.getElementById("ch").innerHTML = currenthealth;
                        alert("Thanks for playing! To be continued :P Have you found the easter egg?"); //Ending condition of the game. (surviving the wave of 5 enemy units)
                    });
                    $("div5").click(function(){
                        this.remove();  //batteringram unit got destroyed
                    })
                });
            });
        });
});

//If the player would like to repair the wall.
$("#wall").click(function(){
    if (points >= 10)
    {
        currenthealth = currenthealth + 1;
        document.getElementById("ch").innerHTML = currenthealth;
        points = points - 5;    //5 points for 1 health point of the wall
        $("#mypoints").html(parseInt($("#mypoints").html()) - 5);
    }
    else
    {
        alert("You don't have enough points to repair the wall!");
    }
})