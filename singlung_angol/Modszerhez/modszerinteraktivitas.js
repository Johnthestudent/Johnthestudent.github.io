//Ha a felhasználó az angol nyelv gombra kattint
$("#angol").on('click', function()
{
    $("#technika p:first-child").html("<b>First day:</b> getting to know each other <br> <i>in the morning:</i> breathing exercises, vocal warm up, parts <br> <i>in the afternoon:</i> singing together <br> <b>2nd-4th days:</b> <br> <i>in the morning:</i> vocal warm up, gymnastics and movements, breathing technique - yoga <br> <i>in the afternoon:</i> practicing together <br> <b>5th day:</b> <br> <i>in the morning:</i> practicing movement and sound techniques <br> <i>in the afternoon:</i> main rehearsal <br> <b>6th day:</b> <br> performance");
    $("#technika p:last-child").html("The program includes common breakfast and lunch and optional group activities in the afternoon and after the performance a dinner shared with the audience.");
})

//Ha a felhasználó a magyar nyelv gombra kattint
$("#magyar").on('click', function()
{
    $("#technika p:first-child").html("<b>Első nap:</b> ismerkedés <br> <i>délelelőtt:</i> légzőtorna, beéneklés, szólamok <br> <i>délután:</i> közös éneklés <br> <b>2-4. nap:</b> <br> <i>délelőtt:</i> beéneklés, torna és mozdulatok, légzéstechnika-jóga <br> <i>délután:</i> közös gyakolások <br> <b>5. nap:</b> <br> <i>délelőtt:</i> mozgás és nahgtechnikai gyakorlás <br> <i>délután:</i> főpróba <br> <b>6. nap:</b> <br> Fellépés");
    $("#technika p:last-child").html("A program része a közös reggeli és ebéd és délutáni fakultatív csoportos aktivitások és a fellépés után közös vacsora a közönséggel.");
})