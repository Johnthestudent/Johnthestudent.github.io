//Ha a felhasználó a magyar nyelv gombra kattint
$("#magyar").on('click', function()
{
    $("title").html("Pogány János oldala");

    $("#mottotitle").html("Pogány János (John Pogany) weboldala");
    $("#motto").html("Mottó: Célom, hogy IT tudásommal és professzionális szakfordítói tudásommal (IT terület) segítsek az embereknek.");

    $("#schooltitle").html("Diplomáim");
    $(".degreefirst").html("Programtervező Informatikus");
    $(".degreesecond").html("Angol-Magyar Informatikai Szakfordító");
    $("#university01").html("Debreceni Egyetem");
    $("#university02").html("Debreceni Egyetem");

    $("#hobbi").html("Hobbiaim");
    $("#kapcsolat").html("Kapcsolat");
    
    $("#minitablename").html("Iskolai évek");
    $("#schooldate").html("Dátum");
    $("#schoolname").html("Iskola");

    $("#technologia").html("Python");
})

//Ha a felhasználó az angol nyelv gombra kattint
$("#angol").on('click', function()
{
    $("title").html("John Pogany's website");

    $("#mottotitle").html("Pogány János's (John Pogany) website");
    $("#motto").html("Motto: My motivation is to help people with my IT knowledge and my professional IT translator skills.");

    $("#schooltitle").html("Degrees");
    $(".degreefirst").html("Computer Scientist");
    $(".degreesecond").html("English-Hungarian Special Translator in Informatics");
    $("#university01").html("University of Debrecen");
    $("#university02").html("University of Debrecen");

    $("#hobbi").html("Hobbies");
    $("#kapcsolat").html("Contact me");
    
    $("#minitablename").html("School years");
    $("#schooldate").html("Dates");
    $("#schoolname").html("School");

    $("#technologia").html("Python");
})