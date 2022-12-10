//Ha a felhasználó az angol nyelv gombra kattint
$("#angol").on('click', function()
{
    $("title").html("Gallery");

    $("#keszito b").html("Created by: ");
    $("#keszito p").html("János Pogány");
})

//Ha a felhasználó a magyar nyelv gombra kattint
$("#magyar").on('click', function()
{
    $("title").html("Galéria");

    $("#keszito b").html("Készítette: ");
    $("#keszito p").html("Pogány János");
})