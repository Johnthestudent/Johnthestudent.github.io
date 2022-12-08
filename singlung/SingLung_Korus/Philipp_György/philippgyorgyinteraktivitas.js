//Ha a felhasználó az angol nyelv gombra kattint
$("#angol").on('click', function()
{
    $("title").html("György Philipp");
    $("#keszito b").html("Created by: ");
    $("#keszito p").html("János Pogány");
})

//Ha a felhasználó a magyar nyelv gombra kattint
$("#magyar").on('click', function()
{
    $("title").html("Philipp György");
    $("#keszito b").html("Készítette: ");
    $("#keszito p").html("Pogány János");
})