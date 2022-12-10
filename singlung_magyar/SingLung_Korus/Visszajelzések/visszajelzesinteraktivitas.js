//Ha a felhasználó az angol nyelv gombra kattint
$("#angol").on('click', function()
{
    $("h1").html("Feedback");
    $("#keszito b").html("Created by: ");
    $("#keszito p").html("János Pogány");
})

//Ha a felhasználó a magyar nyelv gombra kattint
$("#magyar").on('click', function()
{
    $("h1").html("Visszajelzések");
    $("#keszito b").html("Készítette: ");
    $("#keszito p").html("Pogány János");
})