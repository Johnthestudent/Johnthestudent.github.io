var currenthealth = 100;	/*Current number of health points of the wall.*/	
var points = 0;		/*Number of points achieved in the game.*/
var hitit = 0;      /*Number of hits that the boss takes from the player.*/
var hitbig1 = 0;    /*Number of hits that the big enemy unit takes from the player*/ 
var hitbig2 = 0;
var hitbig3 = 0;
var hitbig4 = 0;

/*The function is for ensuring that the starter value of the numeric values appear.*/
function numbershower()
{
    document.getElementById("mypoints").innerHTML = points;	
    document.getElementById("ch").innerHTML = currenthealth;
}

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

const listen = document.getElementById("div1");
const listen2 = document.getElementById("div2");
const listen3 = document.getElementById("div3");
const listen4 = document.getElementById("div4");

//If an enemy unit reaches the wall.
listen.addEventListener("animationend", () => {
    listen.remove();
    currenthealth = currenthealth - 10;  //regular enemy unit takes 10 health points
    document.getElementById("ch").innerHTML = currenthealth;    //in order to have the upgraded version of the variable

    var bigboy = $("<div></div>").attr('id', 'div5');
    $("#thegame").append(bigboy);

    //Game over checking
    if(currenthealth == 0)
    {
        var breach = document.getElementById("wall");
        breach.remove();
        alert("Game over! The wall is destroyed!");
    }
});

listen2.addEventListener("animationend", () => {
    listen2.remove();
    currenthealth = currenthealth - 10;  //regular enemy unit takes 10 health points
    document.getElementById("ch").innerHTML = currenthealth;    //in order to have the upgraded version of the variable

    var bigboy2 = $("<div></div>").attr('id', 'div11');
    $("#thegame").append(bigboy2);

    //Game over checking
    if(currenthealth == 0)
    {
        var breach = document.getElementById("wall");
        breach.remove();
        alert("Game over! The wall is destroyed!");
    }
});

listen3.addEventListener("animationend", () => {
    listen3.remove();
    currenthealth = currenthealth - 10;  //regular enemy unit takes 10 health points
    document.getElementById("ch").innerHTML = currenthealth;    //in order to have the upgraded version of the variable

    var bigboy3 = $("<div></div>").attr('id', 'div12');
    $("#thegame").append(bigboy3);

    //Game over checking
    if(currenthealth == 0)
    {
        var breach = document.getElementById("wall");
        breach.remove();
        alert("Game over! The wall is destroyed!");
    }
});

listen4.addEventListener("animationend", () => {
    listen4.remove();
    currenthealth = currenthealth - 10;  //regular enemy unit takes 10 health points
    document.getElementById("ch").innerHTML = currenthealth;    //in order to have the upgraded version of the variable

    var bigboy4 = $("<div></div>").attr('id', 'div13');
    $("#thegame").append(bigboy4);

    //Game over checking
    if(currenthealth == 0)
    {
        var breach = document.getElementById("wall");
        breach.remove();
        alert("Game over! The wall is destroyed!");
    }
});

//When the player clicks on the units.
$("#div1").on("click", function () {
    this.remove();
    points = points + 10;   //Player gets 10 points for taking down one regular enemy unit.
    $("#mypoints").html(parseInt($("#mypoints").html())+ 10);   //Jquery version of upgrading the variable value presented to the window

    var bigboy4 = $("<div></div>").attr('id', 'div13');
    $("#thegame").append(bigboy4);
    $("#div13").animate({left: "1292px"}, 12000, function() {
        $("#div13").remove();
        currenthealth = currenthealth - 20; //big enemy unit takes 20 health points
        document.getElementById("ch").innerHTML = currenthealth;
        });
    $("#div13").on("click", function () {
        hitbig4 += 1;   //big enemy units need 4 hits
        if(hitbig4 == 4)
        {
            this.remove();
            points = points + 10;   //Player gets 10 points for taking down one regular enemy unit.
            $("#mypoints").html(parseInt($("#mypoints").html())+ 10);   //Jquery version of upgrading the variable value presented to the window
        }  
    });
});

$("#div2").on("click", function () {
    this.remove();
    points = points + 10;   //Player gets 10 points for taking down one regular enemy unit.
    $("#mypoints").html(parseInt($("#mypoints").html())+ 10);   //Jquery version of upgrading the variable value presented to the window
    
    var bigboy3 = $("<div></div>").attr('id', 'div12');
    $("#thegame").append(bigboy3);
    $("#div12").animate({left: "1292px"}, 12000, function() {
        $("#div12").remove();
        currenthealth = currenthealth - 20; //big enemy unit takes 20 health points
        document.getElementById("ch").innerHTML = currenthealth;
        });
    $("#div12").on("click", function () {
        hitbig3 += 1;
        if(hitbig3 == 4)
        {
            this.remove();
            points = points + 10;   //Player gets 10 points for taking down one regular enemy unit.
            $("#mypoints").html(parseInt($("#mypoints").html())+ 10);   //Jquery version of upgrading the variable value presented to the window
        }  
    });    
});

$("#div3").on("click", function () {
    this.remove();
    points = points + 10;   //Player gets 10 points for taking down one regular enemy unit.
    $("#mypoints").html(parseInt($("#mypoints").html())+ 10);   //Jquery version of upgrading the variable value presented to the window

    var bigboy2 = $("<div></div>").attr('id', 'div11');
    $("#thegame").append(bigboy2);
    $("#div11").animate({left: "1292px"}, 12000, function() {
        $("#div11").remove();
        currenthealth = currenthealth - 20; //big enemy unit takes 20 health points
        document.getElementById("ch").innerHTML = currenthealth;
        });
    $("#div11").on("click", function () {
        hitbig2 += 1;
        if(hitbig2 == 4)
        {
            this.remove();
            points = points + 10;   //Player gets 10 points for taking down one regular enemy unit.
            $("#mypoints").html(parseInt($("#mypoints").html())+ 10);   //Jquery version of upgrading the variable value presented to the window
        }   
    });
});

$("#div4").on("click", function () {
    this.remove();
    points = points + 10;   //Player gets 10 points for taking down one regular enemy unit.
    $("#mypoints").html(parseInt($("#mypoints").html())+ 10);   //Jquery version of upgrading the variable value presented to the window
    var bigboy = $("<div></div>").attr('id', 'div5');
    $("#thegame").append(bigboy);
    $("#div5").on("click", function () {
    hitbig1 += 1;
    if(hitbig1 == 4)
    {
        this.remove();
        points = points + 10;   //Player gets 10 points for taking down one regular enemy unit.
        $("#mypoints").html(parseInt($("#mypoints").html())+ 10);   //Jquery version of upgrading the variable value presented to the window
        var ram = $("<div></div>").attr('id', 'div6');
        $("#thegame").append(ram);
        $("#div6").on("click", function () {
          this.remove();
          points = points + 10;
          $("#mypoints").html(parseInt($("#mypoints").html())+ 10);
          var ram2 = $("<div></div>").attr('id', 'div7');
          $("#thegame").append(ram2);
          $("#div7").on("click", function() {
            this.remove();
            points = points + 10;
            $("#mypoints").html(parseInt($("#mypoints").html())+ 10);
            var ram3 = $("<div></div>").attr('id', 'div8');
            $("#thegame").append(ram3);
            $("#div8").on("click", function() {
                this.remove();
                points = points + 10;
                $("#mypoints").html(parseInt($("#mypoints").html())+ 10);
                var refresh = $("<div></div>").attr('id', 'boss');
                $("#thegame").append(refresh);
                $("#bosshealth").css("background", "purple");
                var modifiedwidth = 400;
                $("#boss").on("click", function() {
                    hitit += 1;     //it takes more than 1 hit for this one :) 
                    modifiedwidth -= 10;
                    $("#bosshealth").width(modifiedwidth);
                    if(hitit == 40)
                    {
                        this.remove();
                        $("#mypoints").html(parseInt($("#mypoints").html())+ 100); //Player gets 100 points for taking down the boss.
                        alert("Congratulations! You won the game!");
                    }
                });
            })
          })
        })
    }    
});

$("#div5").animate({left: "1292px"}, 12000, function() {
    $("#div5").remove();
    currenthealth = currenthealth - 20; //big enemy unit takes 10 health points
    document.getElementById("ch").innerHTML = currenthealth;
    });
});

$("#bosshealth").on("click", function() {
    alert("Not me, but the blue one! :P");
})