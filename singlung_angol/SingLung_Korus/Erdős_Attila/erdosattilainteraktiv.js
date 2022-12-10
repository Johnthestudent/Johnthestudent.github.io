//Ha a felhasználó az angol nyelv gombra kattint
$("#angol").on('click', function()
{
    $("#szoveghez p").html("Young and talented singer. His sense of humor both in music and everyday life half remedy during the long rehearsal.<br>He is unbreakable devotee of making music and play together.");
    $("#keszito b").html("Created by: ");
    $("#keszito p").html("János Pogány");
})

//Ha a felhasználó a magyar nyelv gombra kattint
$("#magyar").on('click', function()
{
    $("#szoveghez p").html("Fiatal, tehetséges operaénekes. Zenei humora és jókedves fél gyógyulás a nehéz próbák során.<br>Töretlen híve az együtt zenélésnek és játéknak legyen az színpadon vagy az élet bármely területén.");
    $("#keszito b").html("Készítette: ");
    $("#keszito p").html("Pogány János");
})