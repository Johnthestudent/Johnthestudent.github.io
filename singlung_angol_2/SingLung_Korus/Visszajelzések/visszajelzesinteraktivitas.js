//Ha a felhasználó az angol nyelv gombra kattint
$("#angol").on('click', function()
{
    $("h1").html("Feedback");
})

//Ha a felhasználó a magyar nyelv gombra kattint
$("#magyar").on('click', function()
{
    $("h1").html("Visszajelzések");
})