$("#tomainmenu").on("click", function()
{
    window.location = "../index.html";
});

$("#helpaboutcontrols").on("click", function()
{
    window.location = "helper.html";
});

$("#trophiesallowed").on("click", function()
{
    localStorage.setItem("trophies_allowed", "0");
    if(localStorage.getItem("trophies_allowed") == "0")
    {
        $("#trophiesindicator").css("display", "block");
    }
});

$("#additionalhelp").on("click", function()
{
    localStorage.setItem("additional_helper_allowed", "0");
    if(localStorage.getItem("additional_helper_allowed") == "0")
    {
        $("#optionsindicator").css("display", "block");
    }
});

$("#healthbar").on("click", function()
{
    localStorage.setItem("healthbar_allowed", "0");
    if(localStorage.getItem("healthbar_allowed") == "0")
    {
        $("#healthbarindicator").css("display", "block");
    }
});