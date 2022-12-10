//Ha a felhasználó az angol nyelv gombra kattint
$("#angol").on('click', function()
{
    $("#szoveghez p").html("Csilla Nagy – dancer, dance teacher and Craniosacral therapist. <br> She believes in the wisdom and intelligence of the body; she supports self-healing processes during her treatments.");
    $("#keszito b").html("Created by: ");
    $("#keszito p").html("János Pogány");
})

//Ha a felhasználó a magyar nyelv gombra kattint
$("#magyar").on('click', function()
{
    $("#szoveghez p").html("Nagy Csilla – táncművész, táncpedagógus és Craniosacralis terapeuta. <br> Hisz a test bölcsességében, intelligenciájában; az öngyógyító folyamatokat támogatja kezelései során.");
    $("#keszito b").html("Készítette: ");
    $("#keszito p").html("Pogány János");
})