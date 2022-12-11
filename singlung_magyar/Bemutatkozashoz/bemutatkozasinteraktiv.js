//Ha a felhasználó az angol nyelv gombra kattint
$("#angol").on('click', function()
{
    $("title").html("About us");

    $("#alapitvanycel h1").html("About the Breathing for the Soul Foundation ");
    $("#alapitvanycel p:first-child").html("The main aim of the foundation is to improve the quality of life of patients with respiratory and other chronic diseases affecting the quality of life through cultural, artistic and other recreational activities and to promote their recovery by these activities. The aim of the foundation is also to enable patients to be cared for at a higher level, as well as to improve the working conditions of healers.");
    $("#alapitvanycel p:last-child").html("Additional aims of the foundation: ");
    $("#alapito h1").html("Founder, Board of Trustees");
    $("#alapito b:first-child").html("Founder:");
    $("#alapito p:first-child").html("Kármen Szabó psychologist");
    $("#alapíto b:last-child").html("Board of Trustees:");
    $("#alapito p:last-child").html("Bálint Csaba, screenwriter – president<br> Szilvia Artner, culture organizer, journalist<br> Mónika Tóth, graduate master nurse, head nurse");
    $("#alapitvanyadat h1").html("Data");
})

//Ha a felhasználó a magyar nyelv gombra kattint
$("#magyar").on('click', function()
{
    $("title").html("Az Alapítványról");

    ("#alapitvanycel h1").html("A Légzéssel a Lélekért Alapítványról");
    $("#alapitvanycel p:first-child").html("Az alapítvány legfőbb célja, hogy kulturális, művészeti és egyéb rekreációs tevékenységeken keresztül javítsa a légzési betegségben és egyéb, az életminőséget befolyásoló krónikus betegségben szenvedő páciensek életminőségét, és ezen tevékenységekkel lehetőség szerint elősegítse gyógyulásukat. Az alapítvány célja továbbá a betegek magasabb színvonalon történő ellátásának lehetővé tétele, valamint a gyógyítók munkakörülményeinek javítása.");
    $("#alapitvanycel p:last-child").html("Az alapítvány további céljai: ");
    $("#alapito h1").html("Alapító, Kuratórium");
    $("#alapito b:first-child").html("Alapító:");
    $("#alapito p:first-child").html("Szabó Kármen pszichológus");
    $("#alapito b:last-child").html("Kuratórium:");
    $("#alapito p:last-child").html("Csaba Bálint, forgatókönyv író – elnök<br> Artner Szilvia, kultúra szervező, újságíró<br> Tóth Mónika, diplomás mester ápoló, intézetvezető ápoló");
    $("#alapitvanyadat h1").html("Adatok");
})