//Ha a felhasználó az angol nyelv gombra kattint
$("#angol").on('click', function()
{
    $("title").html("Zsolt Schneider");
    $("#szoveghez p").html("Young, energetic, always reforming trained nurse. Strongly believes that choir singing adds healing energy on top of medication for respiratory patients.");
    $("#keszito b").html("Created by: ");
    $("#keszito p").html("János Pogány");
})

//Ha a felhasználó a magyar nyelv gombra kattint
$("#magyar").on('click', function()
{
    $("title").html("Schneider Zsolt");
    $("#szoveghez p").html("Fiatal, energikus egészségügyi dolgozó, sok újító gondolattal, aki hiszi, hogy az éneklés jótékony energiája gyógyító hatással van a tüdőbetegségekre.");
    $("#keszito b").html("Készítette: ");
    $("#keszito p").html("Pogány János");
})