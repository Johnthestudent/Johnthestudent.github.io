//Helper variables
var maxpoints = parseInt(localStorage.getItem("points"));   //points the player has
var maxhealth = parseInt(localStorage.getItem("health"));   //health point value of the wall
$("#maxpoints").html(parseInt(localStorage.getItem("points")));
$("#maxhealth").html(parseInt(localStorage.getItem("health")));
var playerunits = parseInt(localStorage.getItem("hasunits"));   //number of player units

//Hits required for the orange opponent squares
var bighit01 = 0;
var bighit02 = 0;
var bighit03 = 0;
var bighit04 = 0;
var bighit05 = 0;
var bighit06 = 0;
var bighit07 = 0;
var bighit08 = 0;
var bighit09 = 0;
var bighit10 = 0;

//Hits required for the blube boss opponent squares
var hitboss01 = 0;
var hitbigboss = 0;

//Functionalities of the buttons part 1
//The player can unlock buildings and click on opponent units in this mode
$("#key1").on("click", function()
{
    localStorage.setItem("regularmode", 0);
    localStorage.setItem("templemode", 1);
    localStorage.setItem("workshopmode", 1);
    localStorage.setItem("barrackmode", 1);
    $("#key1").css("background-color", "green");
    $("#key2").css("background-color", "#f0f0f0");
    $("#key3").css("background-color", "#f0f0f0");
    $("#key4").css("background-color", "#f0f0f0");
});

//Functionalities of the buttons part 2
//The player can convert opponent units into player units in this mode
$("#key2").on("click", function()
{
    localStorage.setItem("regularmode", 1);
    localStorage.setItem("templemode", 0);
    localStorage.setItem("workshopmode", 1);
    localStorage.setItem("barrackmode", 1);
    $("#key2").css("background-color", "green");
    $("#key1").css("background-color", "#f0f0f0");
    $("#key3").css("background-color", "#f0f0f0");
    $("#key4").css("background-color", "#f0f0f0");
});

//Functionalities of the buttons part 3
//The player can convert player units into work shop units in this mode
$("#key3").on("click", function()
{
    localStorage.setItem("regularmode", 1);
    localStorage.setItem("templemode", 1);
    localStorage.setItem("workshopmode", 0);
    localStorage.setItem("barrackmode", 1);
    $("#key3").css("background-color", "green");
    $("#key1").css("background-color", "#f0f0f0");
    $("#key2").css("background-color", "#f0f0f0");
    $("#key4").css("background-color", "#f0f0f0");
});

//Functionalities of the buttons part 4
//The player can convert player units into barrack units in this mode
$("#key4").on("click", function()
{
    localStorage.setItem("regularmode", 1);
    localStorage.setItem("templemode", 1);
    localStorage.setItem("workshopmode", 1);
    localStorage.setItem("barrackmode", 0);
    $("#key4").css("background-color", "green");
    $("#key1").css("background-color", "#f0f0f0");
    $("#key2").css("background-color", "#f0f0f0");
    $("#key3").css("background-color", "#f0f0f0");
});

//Funcionalities of the temple building
$("#temple").on("click", function(){
    if(maxpoints < 100 && localStorage.getItem("hastemple") == 1)
    {
        alert("Unlock temple by spending 100 points!");
        $("#temple").css("opacity", 0.5);
    }
    else if(maxpoints >= 100 && localStorage.getItem("hastemple") == 1)
    {
        localStorage.setItem("hastemple", 0);
        $("#temple").css("opacity", 1.0);
        maxpoints -= 100;
        localStorage.setItem("points", maxpoints);
        $("#maxpoints").html(parseInt(localStorage.getItem("points")));
    }
    else if(localStorage.getItem("hastemple") == 0)
    {
        alert("You have already unlocked temple!");
    }
});

//Functionalities of the work shop building
$("#workshop").on("click", function(){
    if(maxpoints < 50 && localStorage.getItem("hasworkshop") == 1)
    {
        alert("Unlock work shop by spending 50 points!");
        $("#workshop").css("opacity", 0.5);
    }
    else if(maxpoints >= 50 && localStorage.getItem("hasworkshop") == 1)
    {
        localStorage.setItem("hasworkshop", 0);
        $("#workshop").css("opacity", 1.0);
        maxpoints -= 50;
        localStorage.setItem("points", maxpoints);
        $("#maxpoints").html(parseInt(localStorage.getItem("points")));
    }
    else if(localStorage.getItem("hasworkshop") == 0)
    {
        alert("You have already unlocked work shop!");
    }
});

//Functionalities of the barrack building
$("#barrack").on("click", function(){
    if(maxpoints < 50 && localStorage.getItem("hasbarrack") == 1)
    {
        alert("Unlock barrack by spending 50 points!");
        $("#barrack").css("opacity", 0.5);
    }
    else if(maxpoints >= 50 && localStorage.getItem("hasbarrack") == 1)
    {
        localStorage.setItem("hasbarrack", 0);
        $("#barrack").css("opacity", 1.0);
        maxpoints -= 50;
        localStorage.setItem("points", maxpoints);
        $("#maxpoints").html(parseInt(localStorage.getItem("points")));
    }
    else if(localStorage.getItem("hasbarrack") == 0)
    {
        alert("You have already unlocked barrack!");
    }
});

//Clicking on regular opponent units
$(".red").on("click", function()
{
    //If the player is in regular mode
    if(localStorage.getItem("regularmode") == 0)
    {
        maxpoints += 10;
        localStorage.setItem("points", maxpoints);
        $("#maxpoints").html(parseInt(localStorage.getItem("points")));
        this.remove();
    }
    //If the player is in temple mode
    else if(localStorage.getItem("hastemple") == 0 && localStorage.getItem("templemode") == 0)
    {
        localStorage.setItem("hasunits", playerunits++);
        playerunits == localStorage.getItem("hasunits");
        $("#playersunits").html(parseInt(localStorage.getItem("hasunits")));
        maxpoints += 10;
        localStorage.setItem("points", maxpoints);
        $("#maxpoints").html(parseInt(localStorage.getItem("points")));
        this.remove();
    }
});

//TODO
$(".sallyforth").on("click", function()
{
    alert("something isn't working yet");
    //TODO
});

//Click event on each regular opponent unit for the first wave
$("#wave1-1").on("click", function()
{
    if(localStorage.getItem("regularmode") == 0)
    {
        maxpoints += 10;
        localStorage.setItem("points", maxpoints);
        $("#maxpoints").html(parseInt(localStorage.getItem("points")));
        this.remove();
        //Clicking on the barrack units
        var bigboy = $("<div></div>").attr('id', 'bigunit01');
        bigboy.attr('class', 'orange');
        //first big opponent unit
        $("#wave1").append(bigboy);
        $("#bigunit01").on("animationend", function()
        {
            $("#bigunit01").remove();
            maxhealth = maxhealth - 40;  //boss enemy unit takes 80 health points
            parseInt(localStorage.setItem("health", maxhealth));
            document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));
            if(maxhealth < 100 && $(".worker").length >= 1)
            {
                maxhealth += (($(".worker").length) * 5);
                parseInt(localStorage.setItem("health", maxhealth));
                $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
            }
            //Game over checking
            if(maxhealth <= 0)
            {
                var breach = document.getElementById("wall");
                breach.remove();
                alert("Game over! The wall is destroyed!");
            }
        })
        //Clicking on big opponent units
        $("#bigunit01").on("click", function()
        {
            bighit01++;
            if(bighit01 == 4)
            {
                maxpoints += 40;
                localStorage.setItem("points", maxpoints);
                $("#maxpoints").html(parseInt(localStorage.getItem("points")));
                this.remove();
            }
        });
        }
});

//Click event on each regular opponent unit for the first wave
$("#wave1-2").on("click", function()
{
    if(localStorage.getItem("regularmode") == 0)
    {
        maxpoints += 10;
        localStorage.setItem("points", maxpoints);
        $("#maxpoints").html(parseInt(localStorage.getItem("points")));
        this.remove();
        var bigboy2 = $("<div></div>").attr('id', 'bigunit02');
        bigboy2.attr('class', 'orange');
        //first big opponent unit
        $("#wave1").append(bigboy2);
        $("#bigunit02").on("animationend", function()
        {
            $("#bigunit02").remove();
            maxhealth = maxhealth - 40;  //boss enemy unit takes 80 health points
            parseInt(localStorage.setItem("health", maxhealth));
            document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));
            if(maxhealth < 100 && $(".worker").length >= 1)
            {
                maxhealth += (($(".worker").length) * 5);
                parseInt(localStorage.setItem("health", maxhealth));
                $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
            }
            //Game over checking
            if(maxhealth <= 0)
            {
                var breach = document.getElementById("wall");
                breach.remove();
                alert("Game over! The wall is destroyed!");
            }
        })
        //Clicking on big opponent units
        $("#bigunit02").on("click", function()
        {
            bighit02++;
            if(bighit02 == 4)
            {
                maxpoints += 40;
                localStorage.setItem("points", maxpoints);
                $("#maxpoints").html(parseInt(localStorage.getItem("points")));
                this.remove();
            }
        });
    }
});

//Click event on each regular opponent unit for the first wave
$("#wave1-3").on("click", function()
{
    if(localStorage.getItem("regularmode") == 0)
    {
        maxpoints += 10;
        localStorage.setItem("points", maxpoints);
        $("#maxpoints").html(parseInt(localStorage.getItem("points")));
        this.remove();
        var bigboy3 = $("<div></div>").attr('id', 'bigunit03');
        bigboy3.attr('class', 'orange');
        //first big opponent unit
        $("#wave1").append(bigboy3);
        $("#bigunit03").on("animationend", function()
        {
            $("#bigunit03").remove();
            maxhealth = maxhealth - 40;  //boss enemy unit takes 80 health points
            parseInt(localStorage.setItem("health", maxhealth));
            document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));
            if(maxhealth < 100 && $(".worker").length >= 1)
            {
                maxhealth += (($(".worker").length) * 5);
                parseInt(localStorage.setItem("health", maxhealth));
                $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
            }
            //Game over checking
            if(maxhealth <= 0)
            {
                var breach = document.getElementById("wall");
                breach.remove();
                alert("Game over! The wall is destroyed!");
            }
        })
        //Clicking on big opponent units
        $("#bigunit03").on("click", function()
        {
            bighit03++;
            if(bighit03 == 4)
            {
                maxpoints += 40;
                localStorage.setItem("points", maxpoints);
                $("#maxpoints").html(parseInt(localStorage.getItem("points")));
                this.remove();
            }
        });
    }
});

//Click event on each regular opponent unit for the first wave
$("#wave1-4").on("click", function()
{
    if(localStorage.getItem("regularmode") == 0)
    {
        maxpoints += 10;
        localStorage.setItem("points", maxpoints);
        $("#maxpoints").html(parseInt(localStorage.getItem("points")));
        this.remove();
        var bigboy4 = $("<div></div>").attr('id', 'bigunit04');
        bigboy4.attr('class', 'orange');
        //first big opponent unit
        $("#wave1").append(bigboy4);
        $("#bigunit04").on("animationend", function()
        {
            $("#bigunit04").remove();
            maxhealth = maxhealth - 40;  //boss enemy unit takes 80 health points
            parseInt(localStorage.setItem("health", maxhealth));
            document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));
            if(maxhealth < 100 && $(".worker").length >= 1)
            {
                maxhealth += (($(".worker").length) * 5);
                parseInt(localStorage.setItem("health", maxhealth));
                $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
            }
            //Game over checking
            if(maxhealth <= 0)
            {
                var breach = document.getElementById("wall");
                breach.remove();
                alert("Game over! The wall is destroyed!");
            }
        })
        //Clicking on big opponent units
        $("#bigunit04").on("click", function()
        {
            bighit04++;
            if(bighit04 == 4)
            {
                maxpoints += 40;
                localStorage.setItem("points", maxpoints);
                $("#maxpoints").html(parseInt(localStorage.getItem("points")));
                this.remove();
            }
        });
    }
});

//Click event on each regular opponent unit for the first wave
$("#wave1-5").on("click", function()
{
    if(localStorage.getItem("regularmode") == 0)
    {
        maxpoints += 10;
        localStorage.setItem("points", maxpoints);
        $("#maxpoints").html(parseInt(localStorage.getItem("points")));
        this.remove();
        var bigboy5 = $("<div></div>").attr('id', 'bigunit05');
        bigboy5.attr('class', 'orange');
        //first big opponent unit
        $("#wave1").append(bigboy5);
        $("#bigunit05").on("animationend", function()
        {
            $("#bigunit05").remove();
            maxhealth = maxhealth - 40;  //boss enemy unit takes 80 health points
            parseInt(localStorage.setItem("health", maxhealth));
            document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));
            if(maxhealth < 100 && $(".worker").length >= 1)
            {
                maxhealth += (($(".worker").length) * 5);
                parseInt(localStorage.setItem("health", maxhealth));
                $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
            }
            //Game over checking
            if(maxhealth <= 0)
            {
                var breach = document.getElementById("wall");
                breach.remove();
                alert("Game over! The wall is destroyed!");
            }
        })
        //Clicking on big opponent units
        $("#bigunit05").on("click", function()
        {
            bighit05++;
            if(bighit05 == 4)
            {
                maxpoints += 40;
                localStorage.setItem("points", maxpoints);
                $("#maxpoints").html(parseInt(localStorage.getItem("points")));
                this.remove();
            }
        });
    }
});

//Click event on each regular opponent unit for the first wave
$("#wave1-6").on("click", function()
{
    if(localStorage.getItem("regularmode") == 0)
    {
        maxpoints += 10;
        localStorage.setItem("points", maxpoints);
        $("#maxpoints").html(parseInt(localStorage.getItem("points")));
        this.remove();
        var bigboy6 = $("<div></div>").attr('id', 'bigunit06');
        bigboy6.attr('class', 'orange');
        //first big opponent unit
        $("#wave1").append(bigboy6);
        $("#bigunit06").on("animationend", function()
        {
            $("#bigunit06").remove();
            maxhealth = maxhealth - 40;  //boss enemy unit takes 80 health points
            parseInt(localStorage.setItem("health", maxhealth));
            document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));
            if(maxhealth < 100 && $(".worker").length >= 1)
            {
                maxhealth += (($(".worker").length) * 5);
                parseInt(localStorage.setItem("health", maxhealth));
                $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
            }
            //Game over checking
            if(maxhealth <= 0)
            {
                var breach = document.getElementById("wall");
                breach.remove();
                alert("Game over! The wall is destroyed!");
            }
        })
        //Clicking on big opponent units
        $("#bigunit06").on("click", function()
        {
            bighit06++;
            if(bighit06 == 4)
            {
                maxpoints += 40;
                localStorage.setItem("points", maxpoints);
                $("#maxpoints").html(parseInt(localStorage.getItem("points")));
                this.remove();
            }
        });
    }
});

//Click event on each regular opponent unit for the first wave
$("#wave1-7").on("click", function()
{
    if(localStorage.getItem("regularmode") == 0)
    {
        maxpoints += 10;
        localStorage.setItem("points", maxpoints);
        $("#maxpoints").html(parseInt(localStorage.getItem("points")));
        this.remove();
        var bigboy7 = $("<div></div>").attr('id', 'bigunit07');
        bigboy7.attr('class', 'orange');
        //first big opponent unit
        $("#wave1").append(bigboy7);
        $("#bigunit07").on("animationend", function()
        {
            $("#bigunit07").remove();
            maxhealth = maxhealth - 40;  //boss enemy unit takes 80 health points
            parseInt(localStorage.setItem("health", maxhealth));
            document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));
            if(maxhealth < 100 && $(".worker").length >= 1)
            {
                maxhealth += (($(".worker").length) * 5);
                parseInt(localStorage.setItem("health", maxhealth));
                $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
            }
            //Game over checking
            if(maxhealth <= 0)
            {
                var breach = document.getElementById("wall");
                breach.remove();
                alert("Game over! The wall is destroyed!");
            }
        })
        //Clicking on big opponent units
        $("#bigunit07").on("click", function()
        {
            bighit07++;
            if(bighit07 == 4)
            {
                maxpoints += 40;
                localStorage.setItem("points", maxpoints);
                $("#maxpoints").html(parseInt(localStorage.getItem("points")));
                this.remove();
            }
        });
    }
});

//Click event on each regular opponent unit for the first wave
$("#wave1-8").on("click", function()
{
    if(localStorage.getItem("regularmode") == 0)
    {
        maxpoints += 10;
        localStorage.setItem("points", maxpoints);
        $("#maxpoints").html(parseInt(localStorage.getItem("points")));
        this.remove();
        var bigboy8 = $("<div></div>").attr('id', 'bigunit08');
        bigboy8.attr('class', 'orange');
        //first big opponent unit
        $("#wave1").append(bigboy8);
        $("#bigunit08").on("animationend", function()
        {
            $("#bigunit08").remove();
            maxhealth = maxhealth - 40;  //boss enemy unit takes 80 health points
            parseInt(localStorage.setItem("health", maxhealth));
            document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));
            if(maxhealth < 100 && $(".worker").length >= 1)
            {
                maxhealth += (($(".worker").length) * 5);
                parseInt(localStorage.setItem("health", maxhealth));
                $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
            }
            //Game over checking
            if(maxhealth <= 0)
            {
                var breach = document.getElementById("wall");
                breach.remove();
                alert("Game over! The wall is destroyed!");
            }
        })
        //Clicking on big opponent units
        $("#bigunit08").on("click", function()
        {
            bighit08++;
            if(bighit08 == 4)
            {
                maxpoints += 40;
                localStorage.setItem("points", maxpoints);
                $("#maxpoints").html(parseInt(localStorage.getItem("points")));
                this.remove();
            }
        });
    }
});

//Clicking on big opponent units
$(".orange").on("click", function()
{
    maxpoints += 40;
    localStorage.setItem("points", maxpoints);
    $("#maxpoints").html(parseInt(localStorage.getItem("points")));
    this.remove();
});

//Clicking on battering ram opponent units
$(".yellow").on("click", function()
{
    maxpoints += 20;
    localStorage.setItem("points", maxpoints);
    $("#maxpoints").html(parseInt(localStorage.getItem("points")));
    this.remove();
})

//Turning player units into either work shop or barrack units
$("#wall").on("click", function()
{
    //work shop units
    if(localStorage.getItem("hasworkshop") == 0 && localStorage.getItem("workshopmode") == 0 && playerunits > 0)
    {
        localStorage.setItem("hasunits", playerunits--);
        $("#playersunits").html(parseInt(localStorage.getItem("hasunits")));
        var workerunit = $("<div></div>").attr('class', 'worker');
        $("#game").append(workerunit);
        if($(".worker").length == 9)
        {
            alert("No more work shop units can be trained for the wall!");
            localStorage.setItem("hasunits", playerunits);
            $("#playersunits").html(parseInt(localStorage.getItem("hasunits")));
        }
        if(maxhealth < 100 && $(".worker").length >= 1)
        {
            maxhealth += (($(".worker").length) * 5);
            parseInt(localStorage.setItem("health", maxhealth));
            $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
        }
    }

    //barrack units
    if(localStorage.getItem("hasbarrack") == 0 && localStorage.getItem("barrackmode") == 0 && playerunits > 0)
    {
        localStorage.setItem("hasunits", playerunits--);
        $("#playersunits").html(parseInt(localStorage.getItem("hasunits")));
        var barrackunit = $("<div></div>").attr('class', 'sallyforth');
        $("#game").append(barrackunit);
        if($(".sallyforth").length == 5)
        {
            alert("No more barrack units can be trained for the wall!");
            localStorage.setItem("hasunits", playerunits);
            $("#playersunits").html(parseInt(localStorage.getItem("hasunits")));
        }
    }
});

//Funcionality of work shop units
//One workshop unit gives +5 health points for the wall, in case the current health point value is less than the max health point value.


//Adding eventlisteners for animation endings
const listen1 = document.getElementById("wave1-1");
const listen2 = document.getElementById("wave1-2");
const listen3 = document.getElementById("wave1-3");
const listen4 = document.getElementById("wave1-4");
const listen5 = document.getElementById("wave1-5");
const listen6 = document.getElementById("wave1-6");
const listen7 = document.getElementById("wave1-7");
const listen8 = document.getElementById("wave1-8");
const listen9 = document.getElementById("wave1-9");

//If an enemy unit reaches the wall.
listen1.addEventListener("animationend", () => {
    listen1.remove();
    maxhealth = maxhealth - 10;  //regular enemy unit takes 10 health points
    parseInt(localStorage.setItem("health", maxhealth));
    $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
    var bigboy = $("<div></div>").attr('id', 'bigunit01');
    bigboy.attr('class', 'orange');
    //first big opponent unit
    $("#wave1").append(bigboy);
    $("#bigunit01").on("animationend", function()
    {
        $("#bigunit01").remove();
        maxhealth = maxhealth - 40;  //big enemy unit takes 40 health points
        parseInt(localStorage.setItem("health", maxhealth));
        document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));
        if(maxhealth < 100 && $(".worker").length >= 1)
        {
            maxhealth += (($(".worker").length) * 5);
            parseInt(localStorage.setItem("health", maxhealth));
            $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
        }
        //Game over checking
        if(maxhealth <= 0)
        {
            var breach = document.getElementById("wall");
            breach.remove();
            alert("Game over! The wall is destroyed!");
        }
    })
    //Clicking on big opponent units
    $("#bigunit01").on("click", function()
    {
        bighit01++;
        if(bighit01 == 4)
        {
            maxpoints += 40;
            localStorage.setItem("points", maxpoints);
            $("#maxpoints").html(parseInt(localStorage.getItem("points")));
            this.remove();
        }
    });
    if(maxhealth < 100 && $(".worker").length >= 1)
    {
        maxhealth += (($(".worker").length) * 5);
        parseInt(localStorage.setItem("health", maxhealth));
        $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
    }
    //Game over checking
    if(maxhealth <= 0)
    {
        var breach = document.getElementById("wall");
        breach.remove();
        alert("Game over! The wall is destroyed!");
    }
});

//If an enemy unit reaches the wall.
listen2.addEventListener("animationend", () => {
    listen2.remove();
    maxhealth = maxhealth - 10;  //regular enemy unit takes 10 health points
    parseInt(localStorage.setItem("health", maxhealth));
    document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));    //in order to have the upgraded version of the variable
    var bigboy2 = $("<div></div>").attr('id', 'bigunit02');
    bigboy2.attr('class', 'orange');
    //next big opponent unit
    $("#wave1").append(bigboy2);
    $("#bigunit02").on("animationend", function()
    {
        $("#bigunit02").remove();
        maxhealth = maxhealth - 40;  //big enemy unit takes 40 health points
        parseInt(localStorage.setItem("health", maxhealth));
        document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));
        if(maxhealth < 100 && $(".worker").length >= 1)
        {
            maxhealth += (($(".worker").length) * 5);
            parseInt(localStorage.setItem("health", maxhealth));
            $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
        }
        //Game over checking
        if(maxhealth <= 0)
        {
            var breach = document.getElementById("wall");
            breach.remove();
            alert("Game over! The wall is destroyed!");
        }
    })
    //Clicking on big opponent units
    $("#bigunit02").on("click", function()
    {
        bighit02++;
        if(bighit02 == 4)
        {
            maxpoints += 40;
            localStorage.setItem("points", maxpoints);
            $("#maxpoints").html(parseInt(localStorage.getItem("points")));
            this.remove();
        }
    });
    if(maxhealth < 100 && $(".worker").length >= 1)
    {
        maxhealth += (($(".worker").length) * 5);
        parseInt(localStorage.setItem("health", maxhealth));
        $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
    }
    //Game over checking
    if(maxhealth <= 0)
    {
        var breach = document.getElementById("wall");
        breach.remove();
        alert("Game over! The wall is destroyed!");
    }
});

//If an enemy unit reaches the wall.
listen3.addEventListener("animationend", () => {
    listen3.remove();
    maxhealth = maxhealth - 10;  //regular enemy unit takes 10 health points
    parseInt(localStorage.setItem("health", maxhealth));
    document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));    //in order to have the upgraded version of the variable
    var bigboy3 = $("<div></div>").attr('id', 'bigunit03');
    bigboy3.attr('class', 'orange');
    //next big opponent unit
    $("#wave1").append(bigboy3);
    $("#bigunit03").on("animationend", function()
    {
        $("#bigunit03").remove();
        maxhealth = maxhealth - 40;  //big enemy unit takes 40 health points
        parseInt(localStorage.setItem("health", maxhealth));
        document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));
        if(maxhealth < 100 && $(".worker").length >= 1)
        {
            maxhealth += (($(".worker").length) * 5);
            parseInt(localStorage.setItem("health", maxhealth));
            $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
        }
        //Game over checking
        if(maxhealth <= 0)
        {
            var breach = document.getElementById("wall");
            breach.remove();
            alert("Game over! The wall is destroyed!");
        }
    })
    //Clicking on big opponent units
    $("#bigunit03").on("click", function()
    {
        bighit03++;
        if(bighit03 == 4)
        {
            maxpoints += 40;
            localStorage.setItem("points", maxpoints);
            $("#maxpoints").html(parseInt(localStorage.getItem("points")));
            this.remove();
        }
    });
    if(maxhealth < 100 && $(".worker").length >= 1)
    {
        maxhealth += (($(".worker").length) * 5);
        parseInt(localStorage.setItem("health", maxhealth));
        $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
    }
    //Game over checking
    if(maxhealth <= 0)
    {
        var breach = document.getElementById("wall");
        breach.remove();
        alert("Game over! The wall is destroyed!");
    }
});

//If an enemy unit reaches the wall.
listen4.addEventListener("animationend", () => {
    listen4.remove();
    maxhealth = maxhealth - 10;  //regular enemy unit takes 10 health points
    parseInt(localStorage.setItem("health", maxhealth));
    document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));   //in order to have the upgraded version of the variable
    var bigboy4 = $("<div></div>").attr('id', 'bigunit04');
    bigboy4.attr('class', 'orange');
    //next big opponent unit
    $("#wave1").append(bigboy4);
    $("#bigunit04").on("animationend", function()
    {
        $("#bigunit04").remove();
        maxhealth = maxhealth - 40;  //big enemy unit takes 40 health points
        parseInt(localStorage.setItem("health", maxhealth));
        document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));
        if(maxhealth < 100 && $(".worker").length >= 1)
        {
            maxhealth += (($(".worker").length) * 5);
            parseInt(localStorage.setItem("health", maxhealth));
            $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
        }
        //Game over checking
        if(maxhealth <= 0)
        {
            var breach = document.getElementById("wall");
            breach.remove();
            alert("Game over! The wall is destroyed!");
        }
    })
    //Clicking on big opponent units
    $("#bigunit04").on("click", function()
    {
        bighit04++;
        if(bighit04 == 4)
        {
            maxpoints += 40;
            localStorage.setItem("points", maxpoints);
            $("#maxpoints").html(parseInt(localStorage.getItem("points")));
            this.remove();
        }
    });
    if(maxhealth < 100 && $(".worker").length >= 1)
    {
        maxhealth += (($(".worker").length) * 5);
        parseInt(localStorage.setItem("health", maxhealth));
        $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
    }
    //Game over checking
    if(maxhealth <= 0)
    {
        var breach = document.getElementById("wall");
        breach.remove();
        alert("Game over! The wall is destroyed!");
    }
});

//If an enemy unit reaches the wall.
listen5.addEventListener("animationend", () => {
    listen5.remove();
    maxhealth = maxhealth - 10;  //regular enemy unit takes 10 health points
    parseInt(localStorage.setItem("health", maxhealth));
    document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));    //in order to have the upgraded version of the variable
    var bigboy5 = $("<div></div>").attr('id', 'bigunit05');
    bigboy5.attr('class', 'orange');
    //next big opponent unit
    $("#wave1").append(bigboy5);
    $("#bigunit05").on("animationend", function()
    {
        $("#bigunit05").remove();
        maxhealth = maxhealth - 40;  //big enemy unit takes 40 health points
        parseInt(localStorage.setItem("health", maxhealth));
        document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));
        if(maxhealth < 100 && $(".worker").length >= 1)
        {
            maxhealth += (($(".worker").length) * 5);
            parseInt(localStorage.setItem("health", maxhealth));
            $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
        }
        //Game over checking
        if(maxhealth <= 0)
        {
            var breach = document.getElementById("wall");
            breach.remove();
            alert("Game over! The wall is destroyed!");
        }
    })
    //Clicking on big opponent units
    $("#bigunit05").on("click", function()
    {
        bighit05++;
        if(bighit05 == 4)
        {
            maxpoints += 40;
            localStorage.setItem("points", maxpoints);
            $("#maxpoints").html(parseInt(localStorage.getItem("points")));
            this.remove();
        }
    });
    if(maxhealth < 100 && $(".worker").length >= 1)
    {
        maxhealth += (($(".worker").length) * 5);
        parseInt(localStorage.setItem("health", maxhealth));
        $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
    }
    //Game over checking
    if(maxhealth <= 0)
    {
        var breach = document.getElementById("wall");
        breach.remove();
        alert("Game over! The wall is destroyed!");
    }
});

//If an enemy unit reaches the wall.
listen6.addEventListener("animationend", () => {
    listen6.remove();
    maxhealth = maxhealth - 10;  //regular enemy unit takes 10 health points
    parseInt(localStorage.setItem("health", maxhealth));
    document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));   //in order to have the upgraded version of the variable
    var bigboy6 = $("<div></div>").attr('id', 'bigunit06');
    bigboy6.attr('class', 'orange');
    //next big opponent unit
    $("#wave1").append(bigboy6);
    $("#bigunit06").on("animationend", function()
    {
        $("#bigunit06").remove();
        maxhealth = maxhealth - 40;  //big enemy unit takes 40 health points
        parseInt(localStorage.setItem("health", maxhealth));
        document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));
        if(maxhealth < 100 && $(".worker").length >= 1)
        {
            maxhealth += (($(".worker").length) * 5);
            parseInt(localStorage.setItem("health", maxhealth));
            $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
        }
        //Game over checking
        if(maxhealth <= 0)
        {
            var breach = document.getElementById("wall");
            breach.remove();
            alert("Game over! The wall is destroyed!");
        }
    })
    //Clicking on big opponent units
    $("#bigunit06").on("click", function()
    {
        bighit06++;
        if(bighit06 == 4)
        {
            maxpoints += 40;
            localStorage.setItem("points", maxpoints);
            $("#maxpoints").html(parseInt(localStorage.getItem("points")));
            this.remove();
        }
    });
    if(maxhealth < 100 && $(".worker").length >= 1)
    {
        maxhealth += (($(".worker").length) * 5);
        parseInt(localStorage.setItem("health", maxhealth));
        $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
    }
    //Game over checking
    if(maxhealth <= 0)
    {
        var breach = document.getElementById("wall");
        breach.remove();
        alert("Game over! The wall is destroyed!");
    }
});

//If an enemy unit reaches the wall.
listen7.addEventListener("animationend", () => {
    listen7.remove();
    maxhealth = maxhealth - 10;  //regular enemy unit takes 10 health points
    parseInt(localStorage.setItem("health", maxhealth));
    document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));    //in order to have the upgraded version of the variable
    var bigboy7 = $("<div></div>").attr('id', 'bigunit07');
    bigboy7.attr('class', 'orange');
    //next big opponent unit
    $("#wave1").append(bigboy7);
    $("#bigunit07").on("animationend", function()
    {
        $("#bigunit07").remove();
        maxhealth = maxhealth - 40;  //big enemy unit takes 40 health points
        parseInt(localStorage.setItem("health", maxhealth));
        document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));
        if(maxhealth < 100 && $(".worker").length >= 1)
        {
            maxhealth += (($(".worker").length) * 5);
            parseInt(localStorage.setItem("health", maxhealth));
            $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
        }
        //Game over checking
        if(maxhealth <= 0)
        {
            var breach = document.getElementById("wall");
            breach.remove();
            alert("Game over! The wall is destroyed!");
        }
    })
    //Clicking on big opponent units
    $("#bigunit07").on("click", function()
    {
        bighit07++;
        if(bighit07 == 4)
        {
            maxpoints += 40;
            localStorage.setItem("points", maxpoints);
            $("#maxpoints").html(parseInt(localStorage.getItem("points")));
            this.remove();
        }
    });
    if(maxhealth < 100 && $(".worker").length >= 1)
    {
        maxhealth += (($(".worker").length) * 5);
        parseInt(localStorage.setItem("health", maxhealth));
        $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
    }
    //Game over checking
    if(maxhealth <= 0)
    {
        var breach = document.getElementById("wall");
        breach.remove();
        alert("Game over! The wall is destroyed!");
    }
});

//If an enemy unit reaches the wall.
listen8.addEventListener("animationend", () => {
    listen8.remove();
    maxhealth = maxhealth - 10;  //regular enemy unit takes 10 health points
    parseInt(localStorage.setItem("health", maxhealth));
    document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));   //in order to have the upgraded version of the variable
    var bigboy8 = $("<div></div>").attr('id', 'bigunit08');
    bigboy8.attr('class', 'orange');
    //next big opponent unit
    $("#wave1").append(bigboy8);
    $("#bigunit08").on("animationend", function()
    {
        $("#bigunit08").remove();
        maxhealth = maxhealth - 40;  //big enemy unit takes 40 health points
        parseInt(localStorage.setItem("health", maxhealth));
        document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));
        if(maxhealth < 100 && $(".worker").length >= 1)
        {
            maxhealth += (($(".worker").length) * 5);
            parseInt(localStorage.setItem("health", maxhealth));
            $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
        }
        //Game over checking
        if(maxhealth <= 0)
        {
            var breach = document.getElementById("wall");
            breach.remove();
            alert("Game over! The wall is destroyed!");
        }
    })
    //Clicking on big opponent units
    $("#bigunit08").on("click", function()
    {
        bighit08++;
        if(bighit08 == 4)
        {
            maxpoints += 40;
            localStorage.setItem("points", maxpoints);
            $("#maxpoints").html(parseInt(localStorage.getItem("points")));
            this.remove();
        }
    });
    if(maxhealth < 100 && $(".worker").length >= 1)
    {
        maxhealth += (($(".worker").length) * 5);
        parseInt(localStorage.setItem("health", maxhealth));
        $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
    }
    //Game over checking
    if(maxhealth <= 0)
    {
        var breach = document.getElementById("wall");
        breach.remove();
        alert("Game over! The wall is destroyed!");
    }
});

//If an enemy unit reaches the wall.
listen9.addEventListener("animationend", () => {
    listen9.remove();
    maxhealth = maxhealth - 10;  //regular enemy unit takes 10 health points
    parseInt(localStorage.setItem("health", maxhealth));
    document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));    //in order to have the upgraded version of the variable
    var wave1boss = $("<div></div>").attr('id', 'boss1');
    $("#wave1").append(wave1boss);
    $("#bosshealth").css("opacity", 1.0);
    $("#bossmaxhealth").css("opacity", 1.0);
    $("#boss1").on("animationend", function() 
    {
        $("#boss1").remove();
        maxhealth = maxhealth - 80;  //boss enemy unit takes 80 health points
        parseInt(localStorage.setItem("health", maxhealth));
        document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));    //in order to have the upgraded version of the variable
        $("#wavenumber").html("2");
    });
    $("#boss1").on("click", function()
    {
        hitboss01 += 1;
        if(hitboss01 == 10)
        {
            $("#boss1").remove();
            $("#wavenumber").html("2");
        }
    })
    if(maxhealth < 100 && $(".worker").length >= 1)
    {
        maxhealth += (($(".worker").length) * 5);
        parseInt(localStorage.setItem("health", maxhealth));
        $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
    }
    //Game over checking
    if(maxhealth <= 0)
    {
        var breach = document.getElementById("wall");
        breach.remove();
        alert("Game over! The wall is destroyed!");
    } 
});

//Activating the end of wave 1
$("#wave1-9").on("click", function()
{
    var wave1boss = $("<div></div>").attr('id', 'boss1');
    $("#wave1").append(wave1boss);
    $("#bosshealth").css("opacity", 1.0);
    $("#bossmaxhealth").css("opacity", 1.0);
    //If the unit is not clicked in time
    $("#boss1").on("animationend", function() 
    {
        $("#boss1").remove();
        maxhealth = maxhealth - 80;  //boss enemy unit takes 80 health points
        parseInt(localStorage.setItem("health", maxhealth));
        document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));    //in order to have the upgraded version of the variable
        $("#wavenumber").html("2");
        if(maxhealth < 100 && $(".worker").length >= 1)
        {
            maxhealth += (($(".worker").length) * 5);
            parseInt(localStorage.setItem("health", maxhealth));
            $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
        }
    });
    var modifiedwidth = 300;
    var newmodification = 300;
    //Click event on the boss unit
    $("#boss1").on("click", function()
    {
        modifiedwidth -= 30;
        $("#bosshealth").width(modifiedwidth);
        hitboss01 += 1;
        if(hitboss01 == 10)
        {
            $("#boss1").remove();
            maxpoints += 100;
            localStorage.setItem("points", maxpoints);
            $("#maxpoints").html(parseInt(localStorage.getItem("points")));
            $("#wavenumber").html("2");

            var wave2regular1 = $("<div></div>").attr('id', 'wave2-1');
            wave2regular1.attr('class', 'red');
            $("#wave1").append(wave2regular1);
            //If the unit is not clicked in time
            $("#wave2-1").on("animationend", function() 
            {
                $("#wave2-1").remove();
                maxhealth = maxhealth - 10;  //regular enemy unit takes 10 health points
                parseInt(localStorage.setItem("health", maxhealth));
                document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));    //in order to have the upgraded version of the variable
                if(maxhealth < 100 && $(".worker").length >= 1)
                {
                    maxhealth += (($(".worker").length) * 5);
                    parseInt(localStorage.setItem("health", maxhealth));
                    $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
                }
                var wave2ram1 = $("<div></div>").attr('class', 'yellow');
                $("#wave1").append(wave2ram1);
            });
            //The click checking must be here, otherwise staying outside of the cope of this waveindicator checking, it won't allow the player to click on the unit.
            $("#wave2-1").on("click", function()
            {
                maxpoints += 10;
                localStorage.setItem("points", maxpoints);
                $("#maxpoints").html(parseInt(localStorage.getItem("points")));
                this.remove();
                var wave2ram1 = $("<div></div>").attr('class', 'yellow');
                $("#wave1").append(wave2ram1);
                //If the unit is not clicked in time
                $(".yellow").on("animationend", function()
                {
                    $(".yellow").remove();
                    maxhealth = maxhealth - 20;  //battering ram enemy unit takes 20 health points
                    parseInt(localStorage.setItem("health", maxhealth));
                    document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));    //in order to have the upgraded version of the variable
                    if(maxhealth < 100 && $(".worker").length >= 1)
                    {
                        maxhealth += (($(".worker").length) * 5);
                        parseInt(localStorage.setItem("health", maxhealth));
                        $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
                    }
                    alert("You thought that's it? Oh no, it is not! Here comes the surprise! :P");
                    var finalbossofthegame = $("<div></div>").attr('id', 'finalboss');
                    $("#wave1").append(finalbossofthegame);
                    $("#finalhealth").css('opacity', '1.0');
                        setInterval(function() {    
                        maxhealth = maxhealth - 5;  //regular enemy unit takes 10 health points
                        parseInt(localStorage.setItem("health", maxhealth));
                        document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));   /*in order to have the upgraded version of the variable*/}, 
                        2000);
                    //Action on clicking on the final boss of the game
                    $("#finalboss").on("click", function()
                    {
                        var bosshelper = $("<div></div>").attr('id', 'wave3-1');
                        bosshelper.attr('class', 'red');
                        $("wave1").append(bosshelper);
                        newmodification -= 6;
                        $("#finalhealth").width(newmodification);
                        hitbigboss += 1;
                        if(hitbigboss == 50)
                        {
                            $("#finalboss").remove();
                            maxhealth = maxhealth;  //regular enemy unit takes 10 health points
                            parseInt(localStorage.setItem("health", maxhealth));
                            document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));   /*in order to have the upgraded version of the variable*/
                            alert("Congratulations! You have beat / won the game!");
                            alert("More waves or fancy things? Well, I guess it was adequate enough for this game!");
                            alert("Nevertheless it was a great challange to code it into this!");
                            alert("More interesting and difficult it was compared to the previous two parts!");
                            alert("Haven't fully tried out the wall helper units? Hit F5 key on your keyboard to repeat the waves!");
                            alert("Thanks for playing!");
                        }
                    });
                });
                //Clicking on battering ram opponent units
                $(".yellow").on("click", function()
                {
                    //If the player is in regular mode
                    if(localStorage.getItem("regularmode") == 0)
                    {
                        maxpoints += 20;
                        localStorage.setItem("points", maxpoints);
                        $("#maxpoints").html(parseInt(localStorage.getItem("points")));
                        this.remove();
                        alert("You thought that's it? Oh no, it is not! Here comes the surprise! :P");
                        var finalbossofthegame = $("<div></div>").attr('id', 'finalboss');
                        $("#wave1").append(finalbossofthegame);
                        $("#finalhealth").css('opacity', '1.0');
                        setInterval(function() {    
                            maxhealth = maxhealth - 5;  //regular enemy unit takes 10 health points
                            parseInt(localStorage.setItem("health", maxhealth));
                            document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));   /*in order to have the upgraded version of the variable*/}, 
                            2000);
                        //Action on clicking on the final boss of the game
                        $("#finalboss").on("click", function()
                        {
                            var bosshelper = $("<div></div>").attr('id', 'wave3-1');
                            bosshelper.attr('class', 'red');
                            $("wave1").append(bosshelper);
                            newmodification -= 6;
                            $("#finalhealth").width(newmodification);
                            hitbigboss += 1;
                            if(hitbigboss == 50)
                            {
                                $("#finalboss").remove();
                                maxhealth = maxhealth;  //regular enemy unit takes 10 health points
                                parseInt(localStorage.setItem("health", maxhealth));
                                document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));   /*in order to have the upgraded version of the variable*/
                                alert("Congratulations! You have beat / won the game!");
                                alert("More waves or fancy things? Well, I guess it was adequate enough for this game!");
                                alert("Nevertheless it was a great challange to code it into this!");
                                alert("More interesting and difficult it was compared to the previous two parts!");
                                alert("Haven't fully tried out the wall helper units? Hit F5 key on your keyboard to repeat the waves!");
                                alert("Thanks for playing!");
                            }
                        });
                    }
                    //If the player is in temple mode
                    else if(localStorage.getItem("hastemple") == 0 && localStorage.getItem("templemode") == 0)
                    {
                        localStorage.setItem("hasunits", playerunits++);
                        playerunits == localStorage.getItem("hasunits");
                        $("#playersunits").html(parseInt(localStorage.getItem("hasunits")));
                        maxpoints += 10;
                        localStorage.setItem("points", maxpoints);
                        $("#maxpoints").html(parseInt(localStorage.getItem("points")));
                        this.remove();
                        alert("You thought that's it? Oh no, it is not! Here comes the surprise! :P");
                        var finalbossofthegame = $("<div></div>").attr('id', 'finalboss');
                        $("#wave1").append(finalbossofthegame);
                        $("#finalhealth").css('opacity', '1.0');
                        setInterval(function() {    
                            maxhealth = maxhealth - 5;  //regular enemy unit takes 10 health points
                            parseInt(localStorage.setItem("health", maxhealth));
                            document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));   /*in order to have the upgraded version of the variable*/}, 
                            2000);
                        //Action on clicking on the final boss of the game
                        $("#finalboss").on("click", function()
                        {
                            var bosshelper = $("<div></div>").attr('id', 'wave3-1');
                            bosshelper.attr('class', 'red');
                            $("wave1").append(bosshelper);
                            newmodification -= 6;
                            $("#finalhealth").width(newmodification);
                            hitbigboss += 1;
                            if(hitbigboss == 50)
                            {
                                $("#finalboss").remove();
                                maxhealth = maxhealth;  //regular enemy unit takes 10 health points
                                parseInt(localStorage.setItem("health", maxhealth));
                                document.getElementById("maxhealth").innerHTML = parseInt(localStorage.getItem("health"));   /*in order to have the upgraded version of the variable*/
                                alert("Congratulations! You have beat / won the game!");
                                alert("More waves or fancy things? Well, I guess it was adequate enough for this game!");
                                alert("Nevertheless it was a great challange to code it into this!");
                                alert("More interesting and difficult it was compared to the previous two parts!");
                                alert("Haven't fully tried out the wall helper units? Hit F5 key on your keyboard to repeat the waves!");
                                alert("Thanks for playing!");
                            }
                        });
                    }
                });
            })
        }
    })
    if(maxhealth < 100 && $(".worker").length >= 1)
    {
        maxhealth += (($(".worker").length) * 5);
        parseInt(localStorage.setItem("health", maxhealth));
        $("#maxhealth").html(parseInt(localStorage.getItem("health")));    //in order to have the upgraded version of the variable
    }
    //Game over checking
    if(maxhealth <= 0)
    {
        var breach = document.getElementById("wall");
        breach.remove();
        alert("Game over! The wall is destroyed!");
    } 
});