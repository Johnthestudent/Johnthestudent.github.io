//Ha a felhasználó az angol nyelv gombra kattint
$("#angol").on('click', function()
{
    $("title").html("SingLung");
    
    $("#bemutatkozo").html("About us");
    $("#kepek").html("Choir");
    $("#hir").html("News, Novelty");
    $("#methodsing").html("The SingLung Method");
    $("#kapcsolattartas").html("Contact");
    $("#keszito b").html("Created by: ");
    $("#keszito p").html("János Pogány");
})

//Ha a felhasználó a magyar nyelv gombra kattint
$("#magyar").on('click', function()
{
    $("title").html("SingLung");
    
    $("#bemutatkozo").html("Az Alapítványról");
    $("#kepek").html("Kórus");
    $("#hir").html("Hírek, Újdonság");
    $("#methodsing").html("A SingLung Módszer");
    $("#kapcsolattartas").html("Kapcsolat");
    $("#keszito b").html("Készítette: ");
    $("#keszito p").html("Pogány János");
})