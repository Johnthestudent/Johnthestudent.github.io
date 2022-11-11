//Ha a felhasználó a magyar nyelv gombra kattint
$("#magyar").on('click', function()
{
    $("title").html("Hobbik");
    $("#elsohobbi").html("Rajzolás");
    $("#masodikhobbi").html("Számítógépes játékok");
    $("#masodikhobbi").siblings("#02hobbi").html("A kedvencem");
    $("#harmadikhobbi").html("Vicces videók");
    $("#harmadikhobbi").siblings("#03hobbi").html("Mémek és vicces dolgok");
})

//Ha a felhasználó az angol nyelv gombra kattint
$("#angol").on('click', function()
{
    $("title").html("Hobbies");
    $("#elsohobbi").html("Drawing");
    $("#masodikhobbi").html("Computer games");
    $("#masodikhobbi").siblings("#02hobbi").html("My favorite");
    $("#harmadikhobbi").html("Funny videos");
    $("#harmadikhobbi").siblings("#03hobbi").html("Memes and many other funny things");
})