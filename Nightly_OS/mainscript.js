//array of messages, which will appear during the OS loading
var messages =
[
    "Preparing the features",
    "File system ready",
    "Editor tools ready",
    "Desktop ready",
    "Nightly starts"
];

//loads each element of the messages array after every 2 seconds
function loaderMessage()
{
    let time_passed = 0;
    //it doesn't work with var
    for(let i = 0; i < messages.length; i++)
    {
        setTimeout(()=>{
            document.getElementById("situation_message_load").innerHTML = messages[i];
        }, time_passed);

        time_passed = time_passed + 2000;
    }
}

//loads the OS after 10 seconds
//while it is being loaded, the loader bar is visible
$("#os_starter_button").on("click", function()
{
    $(".os_loader").css("display", "block");
    $("#load_level").animate({
        width: "100%"
    }, 10000, function()
    {
        window.location.href = "nightly_main/desktop.html";
    })
    loaderMessage();
});