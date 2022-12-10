//Ha a felhasználó az angol nyelv gombra kattint
$("#angol").on('click', function()
{
    $("#szoveghez p:first-child").html("Andrea Csereklyei is an Artisjus award-winning singer and lecturer at the University of Miskolc and the Liszt Ferenc Academy of Music.");
    $("#szoveghez p:last-child").html("She considers the encounter with the SingLung method to be a defining experience from both professional and human aspects.");
    $("#keszito b").html("Created by: ");
    $("#keszito p").html("János Pogány");
})

//Ha a felhasználó a magyar nyelv gombra kattint
$("#magyar").on('click', function()
{
    $("#szoveghez p:first-child").html("Csereklyei Andrea Artisjus-díjas énekművész, oratórium-  és dalénekes, a Miskolci Egyetem és a Liszt Ferenc Zeneművészeti Egyetem oktatója.");
    $("#szoveghez p:last-child").html("A SingLung módszerrel való találkozást meghatározónak tartja szakmai és emberi vonatkozásban egyaránt.");
    $("#keszito b").html("Készítette: ");
    $("#keszito p").html("Pogány János");
})