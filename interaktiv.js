//Ha a felhasználó a magyar nyelv gombra kattint
$("#magyar").on('click', function()
{
    $("title").html("Pogány János oldala");

    $("#mottotitle").html("Pogány János (John Pogany) weboldala");
    $("#motto").html("<strong>Bármit</strong> meg tudok tanulni.");

    $("#schooltitle").html("Iskoláim");
    $(".highschool").html("Vegyipari Szakközépiskola");
    $("#university01").html("Debreceni Egyetem - Programtervező Informatikus");
    $("#university02").html("Debreceni Egyetem - Angol-Magyar Informatikai Szakfordító");

    $("#hobbi").html("Hobbiaim");
    $("#kapcsolat").html("Kapcsolat");
    
    $("#minitablename").html("Iskolai évek");
    $("#schooldate").html("Dátum");
    $("#schoolname").html("Iskola");

    $("#technologia").html("Webfejlesztés");
})

//Ha a felhasználó az angol nyelv gombra kattint
$("#angol").on('click', function()
{
    $("title").html("John Pogany's website");

    $("#mottotitle").html("Pogány János's (John Pogany) website");
    $("#motto").html("I can learn <strong>anything</strong>.");

    $("#schooltitle").html("Schools that I have attended");
    $(".highschool").html("Vegyipari Technical High School");
    $("#university01").html("University of Debrecen - Computer Scientist");
    $("#university02").html("University of Debrecen - English-Hungarian Special Translator in Informatics");

    $("#hobbi").html("Hobbies");
    $("#kapcsolat").html("Contact me");
    
    $("#minitablename").html("School years");
    $("#schooldate").html("Dates");
    $("#schoolname").html("School");

    $("#technologia").html("Web Development");
})