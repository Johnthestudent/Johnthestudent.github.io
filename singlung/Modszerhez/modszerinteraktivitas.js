//Ha a felhasználó az angol nyelv gombra kattint
$("#angol").on('click', function()
{
    $("#otlet h1:first-child").html("Idea");
    $("#technika h1:first-child").html("Technic");
    $("#keszito b").html("Created by: ");
    $("#keszito p").html("János Pogány");
    $("#otlet p").html("In 2018, our vocal physiotherapy – <strong>SINGLUNG</strong> - was launched on the initiative of pulmonologist and somnologist Dr. Katalin Várdi. Music, the life-giving force of singing is the centre of the method. The 'turning on' and conscious use of singing organs help in learning correct breathing and using it. Our therapy not only brings music closer to the participants, but it is also a self-awareness and body-awareness training, as the participants learn their physical and mental functioning and share them during the therapy week spent together. The <strong>SINGLUNG</strong> method is an organic interweaving of science and art. Recently, thanks to devoted supporters, it has moved out of the framework of the hospital and health care, and it is growing into a self-active and self-organizing therapy. Under the supervision of nurses, physiotherapists and doctors about 30-35 patients with respiratory, cardiovascular and neuromuscular diseases take part in our therapy weeks led by singing and movement artist teachers.");
    $("#technika p:first-child").html("<b>First day:</b> getting to know each other <br> <i>in the morning:</i> breathing exercises, vocal warm up, parts <br> <i>in the afternoon:</i> singing together <br> <b>2nd-4th days:</b> <br> <i>in the morning:</i> vocal warm up, gymnastics and movements, breathing technique - yoga <br> <i>in the afternoon:</i> practicing together <br> <b>5th day:</b> <br> <i>in the morning:</i> practicing movement and sound techniques <br> <i>in the afternoon:</i> main rehearsal <br> <b>6th day:</b> <br> performance");
    $("#technika p:last-child").html("The program includes common breakfast and lunch and optional group activities in the afternoon and after the performance a dinner shared with the audience.");
})

//Ha a felhasználó a magyar nyelv gombra kattint
$("#magyar").on('click', function()
{
    $("#otlet h1:first-child").html("Ötlet");
    $("#technika h1:first-child").html("Technika");
    $("#keszito b").html("Készítette: ");
    $("#keszito p").html("Pogány János");
    $("#otlet p").html("2018-ban Dr. Várdi Katalin pulmonológus, szomnológus kezdeményezésére indult útjára a vokális fizioterápiánk, a <strong>SINGLUNG</strong>. A módszer középpontjában a zene, az éneklés éltető ereje áll. Az éneklő szervek bekapcsolása, tudatos használata pedig segít a helyes légzés tanulásában és alkalmazásában. Terápiánk nem csak a zenét hozza közel a résztvevőkhöz, de önismereti, testtudati tréning is egyben, hiszen szervi és lelki működésüket tanulják, osztják meg egymással az együtt töltött terápiás héten. A <strong>SINGLUNG</strong> módszer tudomány és művészet organikus összefonódása. Az utóbbi időben immáron kimozdulva a kórház és az egészségügy keretei közül, köszönhetően odaadó támogatóknak, öntevékeny és önszervező terápiává növi ki magát. Terápiás heteinken mintegy 30-35 légzőszervi, szív- és érrendszeri, neuromuscularis beteg vesz részt ápolói, fizioterápiás és orvosi felügyelet mellett ének- és mozgás művésztanárok vezetésével.");
    $("#technika p:first-child").html("<b>Első nap:</b> ismerkedés <br> <i>délelelőtt:</i> légzőtorna, beéneklés, szólamok <br> <i>délután:</i> közös éneklés <br> <b>2-4. nap:</b> <br> <i>délelőtt:</i> beéneklés, torna és mozdulatok, légzéstechnika-jóga <br> <i>délután:</i> közös gyakolások <br> <b>5. nap:</b> <br> <i>délelőtt:</i> mozgás és nahgtechnikai gyakorlás <br> <i>délután:</i> főpróba <br> <b>6. nap:</b> <br> Fellépés");
    $("#technika p:last-child").html("A program része a közös reggeli és ebéd és délutáni fakultatív csoportos aktivitások és a fellépés után közös vacsora a közönséggel.");
})