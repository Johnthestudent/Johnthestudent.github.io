//Ha a felhasználó az angol nyelv gombra kattint
$("#angol").on('click', function()
{
    $("title").html("News");
})

//Ha a felhasználó a magyar nyelv gombra kattint
$("#magyar").on('click', function()
{
    $("title").html("Híreink");
})

$("#konferenciagomb").on('click', function()
{
    $("#konferenciaszoveg").toggle();
})