/* Visszalapozás esemény*/
$("#vissza").click(function()
{
    if($("#fokep").attr("src") == "images/Double rainbow.jpg")
    {
        $("#fokep").attr("src", "images/Storm in the desert.jpg");
        $("#kep06").css("border", "1px solid red");
        $("#kep01").css("border", "none");
        $("#nagykep > p").text("A storm is brewing.");
    }
    else if($("#fokep").attr("src") == "images/Storm in the desert.jpg")
    {
        $("#fokep").attr("src", "images/Snowy forest.jpg");
        $("#kep05").css("border", "1px solid red");
        $("#kep06").css("border", "none");
        $("#nagykep > p").text("A quiet winter moment in the forest.");
    }
    else if($("#fokep").attr("src") == "images/Snowy forest.jpg")
    {
        $("#fokep").attr("src", "images/Reaching the starts.jpg");
        $("#kep04").css("border", "1px solid red");
        $("#kep05").css("border", "none");
        $("#nagykep > p").text("Beautiful night sky of a mountain.");
    }
    else if($("#fokep").attr("src") == "images/Reaching the starts.jpg")
    {
        $("#fokep").attr("src", "images/Lake of the mountain.jpg");
        $("#kep03").css("border", "1px solid red");
        $("#kep04").css("border", "none");
        $("#nagykep > p").text("A small lake next to mountains.");
    }
    else if($("#fokep").attr("src") == "images/Lake of the mountain.jpg")
    {
        $("#fokep").attr("src", "images/Foggy taiga.jpg");
        $("#kep02").css("border", "1px solid red");
        $("#kep03").css("border", "none");
        $("#nagykep > p").text("Forest in a thick fog.");
    }
    else
    {
        $("#fokep").attr("src", "images/Double rainbow.jpg");
        $("#kep01").css("border", "1px solid red");
        $("#kep02").css("border", "none");
        $("#nagykep > p").text("Double is better.");
    }
})

/* Előre lapozás esemény */
$("#elore").click(function()
{
    if($("#fokep").attr("src") == "images/Double rainbow.jpg")
    {
        $("#fokep").attr("src", "images/Foggy taiga.jpg");
        $("#kep02").css("border", "1px solid red");
        $("#kep01").css("border", "none");
        $("#nagykep > p").text("Forest in a thick fog.");
    }
    else if($("#fokep").attr("src") == "images/Foggy taiga.jpg")
    {
        $("#fokep").attr("src", "images/Lake of the mountain.jpg");
        $("#kep03").css("border", "1px solid red");
        $("#kep02").css("border", "none");
        $("#nagykep > p").text("A small lake next to mountains.");
    }
    else if($("#fokep").attr("src") == "images/Lake of the mountain.jpg")
    {
        $("#fokep").attr("src", "images/Reaching the starts.jpg");
        $("#kep04").css("border", "1px solid red");
        $("#kep03").css("border", "none");
        $("#nagykep > p").text("Beautiful night sky of a mountain.");
    }
    else if($("#fokep").attr("src") == "images/Reaching the starts.jpg")
    {
        $("#fokep").attr("src", "images/Snowy forest.jpg");
        $("#kep05").css("border", "1px solid red");
        $("#kep04").css("border", "none");
        $("#nagykep > p").text("A quiet winter moment in the forest.");
    }
    else if($("#fokep").attr("src") == "images/Snowy forest.jpg")
    {
        $("#fokep").attr("src", "images/Storm in the desert.jpg");
        $("#kep06").css("border", "1px solid red");
        $("#kep05").css("border", "none");
        $("#nagykep > p").text("A storm is brewing.");
    }
    else
    {
        $("#fokep").attr("src", "images/Double rainbow.jpg");
        $("#kep01").css("border", "1px solid red");
        $("#kep06").css("border", "none");
        $("#nagykep > p").text("Double is better.");
    }
})

/* Thumbnailekre kattintás*/
$("#kep01").click(function()
{
    $("#fokep").attr("src", "images/Double rainbow.jpg");
    $("#kep01").css("border", "1px solid red");
    $("#kep02").css("border", "none");
    $("#kep03").css("border", "none");
    $("#kep04").css("border", "none");
    $("#kep05").css("border", "none");
    $("#kep06").css("border", "none");

    $("#nagykep > p").text("Double is better.");
})

$("#kep02").click(function()
{
    $("#fokep").attr("src", "images/Foggy taiga.jpg");
    $("#kep02").css("border", "1px solid red");
    $("#kep01").css("border", "none");
    $("#kep03").css("border", "none");
    $("#kep04").css("border", "none");
    $("#kep05").css("border", "none");
    $("#kep06").css("border", "none");

    $("#nagykep > p").text("Forest in a thick fog.");
})

$("#kep03").click(function()
{
    $("#fokep").attr("src", "images/Lake of the mountain.jpg");
    $("#kep03").css("border", "1px solid red");
    $("#kep02").css("border", "none");
    $("#kep01").css("border", "none");
    $("#kep04").css("border", "none");
    $("#kep05").css("border", "none");
    $("#kep06").css("border", "none");

    $("#nagykep > p").text("A small lake next to mountains.");
})

$("#kep04").click(function()
{
    $("#fokep").attr("src", "images/Reaching the starts.jpg");
    $("#kep04").css("border", "1px solid red");
    $("#kep02").css("border", "none");
    $("#kep03").css("border", "none");
    $("#kep01").css("border", "none");
    $("#kep05").css("border", "none");
    $("#kep06").css("border", "none");

    $("#nagykep > p").text("Beautiful night sky of a mountain.");
})

$("#kep05").click(function()
{
    $("#fokep").attr("src", "images/Snowy forest.jpg");
    $("#kep05").css("border", "1px solid red");
    $("#kep02").css("border", "none");
    $("#kep03").css("border", "none");
    $("#kep04").css("border", "none");
    $("#kep01").css("border", "none");
    $("#kep06").css("border", "none");

    $("#nagykep > p").text("A quiet winter moment in the forest.");
})

$("#kep06").click(function()
{
    $("#fokep").attr("src", "images/Storm in the desert.jpg");
    $("#kep06").css("border", "1px solid red");
    $("#kep02").css("border", "none");
    $("#kep03").css("border", "none");
    $("#kep04").css("border", "none");
    $("#kep05").css("border", "none");
    $("#kep01").css("border", "none");

    $("#nagykep > p").text("A storm is brewing.");
})