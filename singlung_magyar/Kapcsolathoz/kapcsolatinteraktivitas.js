//Ha a felhasználó az angol nyelv gombra kattint
$("#angol").on('click', function()
{
    $("title").html("Contact");

    $("#kommunikacio h3:first-child").html("My email address:");
    $("#mobilhoz").html("Phone:");
    $("#nevkero").html("Name:");
    $("#emailkero").html("Email:");
    $("#uzenetdoboz").html("Message:");
    $("#bekuldo").prop("value", "Send message");
    $("#keszito b").html("Created by: ");
    $("#keszito p").html("János Pogány");
})

//Ha a felhasználó a magyar nyelv gombra kattint
$("#magyar").on('click', function()
{
    $("title").html("Kapcsolat");

    $("#kommunikacio h3:first-child").html("Email címem:");
    $("#mobilhoz").html("Telefon:");
    $("#nevkero").html("Név:");
    $("#emailkero").html("Email:");
    $("#uzenetdoboz").html("Üzenet:");
    $("#bekuldo").prop("value", "Üzenet küldése");
    $("#keszito b").html("Készítette: ");
    $("#keszito p").html("Pogány János");
})