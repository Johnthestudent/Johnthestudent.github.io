//Ha a felhasználó az angol nyelv gombra kattint
$("#angol").on('click', function()
{
    $("#szoveghez p:first-child").html("Works as trained nurse on different specialized wards.");
    $("#szoveghez p:last-child").html("I believe that singing is remedy for the body and for the soul too. Singing makes magic for the respiratory ill patients.");
    $("#keszito b").html("Created by: ");
    $("#keszito p").html("János Pogány");
})

//Ha a felhasználó a magyar nyelv gombra kattint
$("#magyar").on('click', function()
{
    $("#szoveghez p:first-child").html("Több szakterületen szakápoló. ");
    $("#szoveghez p:last-child").html("Hiszem, hogy az éneklés gyógyítja a lelket,a testet és minden más betegséget. Az éneklés csodát tesz a légzőszervi betegekkel.");
    $("#keszito b").html("Készítette: ");
    $("#keszito p").html("Pogány János");
})