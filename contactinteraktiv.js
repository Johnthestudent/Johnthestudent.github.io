//Ha a felhasználó a magyar nyelv gombra kattint
$("#magyar").on('click', function()
{
    $("title").html("Kapcsolat")
    $("#kuldonev").html("Neve: ");
    $("#kuldoemail").html("Email címe: ");
    $("#kuldouzenet").html("Üzenet");
    $("#bekuldo").prop("value", "Üzenet küldése");
})

//Ha a felhasználóa az angol nyelv gombra kattint
$("#angol").on('click', function()
{
    $("title").html("Contact");
    $("#kuldonev").html("Your Name: ");
    $("#kuldoemail").html("Your Email: ");
    $("#kuldouzenet").html("Your Message: ");
    $("#bekuldo").prop("value", "Send message");
})