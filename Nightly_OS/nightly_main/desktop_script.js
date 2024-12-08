//values for the datetime shower
//this is the Hungarian based mask
var today = new Date();
today = new Intl.DateTimeFormat('hu-HU').format(today);

//helper variable for toggle the window size
let window_size = 0;

//helper variable for toggle the window size
let other_window = 0;

//helper variable for toggle the window size
let game_window = 0;

//helper variable for toggle the start button's dropdown list
let start_switch = 0;

//this function updates the actual date after every passed minute
function updateHour()
{
    var today2 = new Date();

    my_hour = today2.getHours();

    my_minute = today2.getUTCMinutes();

    //without this, there will be only one number, but with it, it will be like 01 - 09
    if(my_minute < 10)
    {
        my_minute = "0" + my_minute;
    }
    
    final_full_hour = my_hour + ":" + my_minute;

    //this will do the overwrite of the actual date
    document.getElementById("actual_hour_and_minute").innerHTML = final_full_hour;

    //overwrite will be done after a second
    setTimeout(updateHour, 1000);
}

//the actual date will always be overwritten
document.getElementById("actual_date").innerHTML = today;

//if the user double clicks on the Computer icon
$("#icon1").dblclick(function(){
    $("#base_file_system").css("display", "block");
    $("#file_manager_taskbar").css("display", "block");
    $(".error_message").css("display", "none");
    $(".folder_content").css("display", "none");
    $(".folder_content_2").css("display", "none");
});

//if the user double clicks on the File Manager's Documents icon
$("#documents_icon").dblclick(function(){
    $(".error_message").css("display", "none");
    $(".folder_content").css("display", "block");
    $(".folder_content_2").css("display", "none");
});

//if the user double clicks on the File Manager's Images icon
$("#images_icon").dblclick(function(){
    $(".error_message").css("display", "none");
    $(".folder_content").css("display", "none");
    $(".folder_content_2").css("display", "block");
});

//if the user dobule clicks on the File Manager's Downloads icon
$("#downloads_icon").dblclick(function(){
    $(".error_message").css("display", "block");
    $(".folder_content").css("display", "none");
    $(".folder_content_2").css("display", "none");
});

//if the user double clicks on the File Manager's Videos icon
$("#videos_icon").dblclick(function(){
    $(".error_message").css("display", "block");
    $(".folder_content").css("display", "none");
    $(".folder_content_2").css("display", "none");
});

//if the user clicks on the File Manager's Window Minimize button
$("#header_button1").on("click", function(){
    $("#base_file_system").css("display", "none");
    $("#file_manager_taskbar").css("display", "block");
});

//if the user clicks on the File Manager's taskbar element
$("#file_manager_taskbar").on("click", function(){
    $("#base_file_system").css("display", "block");
    if($("#base_settings").css("display") == "block")
    {
        $("#base_settings").css("z-index", -1);
        $("#base_file_system").css("z-index", 1);
        $("#aveomachine_games").css("z-index", -1);
    }
    if($("#aveomachine_games").css("display") == "block")
    {
        $("#base_settings").css("z-index", -1);
        $("#base_file_system").css("z-index", 1);
        $("#aveomachine_games").css("z-index", -1);
    }
});

//if the user clicks on the File Manager's Window Size button
$("#header_button2").on("click", function(){
    $("#base_file_system").css("width", "100%");
    $("#base_file_system").css("left", "0%");
    $("#base_file_system").css("top", "0%");
    $("#base_file_system").css("height", "94%");
    window_size += 1;
    if(window_size % 2 == 0)
    {
        $("#base_file_system").css("width", "50%");
        $("#base_file_system").css("left", "20%");
        $("#base_file_system").css("top", "10%");
        $("#base_file_system").css("height", "80%");
    }
});

//If the user closes the File Manager Window, then the z-index values will be reset
$("#header_button3").on("click", function(){
    $("#base_file_system").css("display", "none");
    $("#file_manager_taskbar").css("display", "none");
    $("#base_file_system").css("z-index", 0);
    $("#base_settings").css("z-index", 0);
    $("#aveomachine_games").css("z-index", 0);
});

//Similar to Window Minimize of File Manager, but this goes for the Settings window
$("#header_button4").on("click", function(){
    $("#base_settings").css("display", "none");
    $("#settings_taskbar").css("display", "block");
    $("#base_file_system").css("z-index", 0);
    $("#aveomachine_games").css("z-index", 0);
    $("#base_settings").css("z-index", 0);
});

//If the user clicks on the taskbar element of the Settings window
$("#settings_taskbar").on("click", function(){
    $("#base_settings").css("display", "block");
    if($("#base_file_system").css("display") == "block")
    {
        $("#base_file_system").css("z-index", -1);
        $("#aveomachine_games").css("z-index", -1);
        $("#base_settings").css("z-index", 1);
    }
    if($("#aveomachine_games").css("display") == "block")
    {
        $("#base_settings").css("z-index", 1);
        $("#base_file_system").css("z-index", -1);
        $("#aveomachine_games").css("z-index", -1);
    }
});

//Similar to Window Size of File Manager, but this goes for the Settings window
$("#header_button5").on("click", function(){
    $("#base_settings").css("width", "100%");
    $("#base_settings").css("left", "0%");
    $("#base_settings").css("top", "0%");
    $("#base_settings").css("height", "94%");
    other_window += 1;
    if(other_window % 2 == 0)
    {
        $("#base_settings").css("width", "50%");
        $("#base_settings").css("left", "40%");
        $("#base_settings").css("top", "10%");
        $("#base_settings").css("height", "80%");
    }
});

//If the user closes the Settings Window, then the z-index values will be reset
$("#header_button6").on("click", function(){
    $("#base_settings").css("display", "none");
    $("#settings_taskbar").css("display", "none");
    $("#base_file_system").css("z-index", 0);
    $("#aveomachine_games").css("z-index", 0);
    $("#base_settings").css("z-index", 0);
});

//If the user clicks on the taskbar element of the Aveomachine games window
$("#aveomachine_taskbar").on("click", function(){
    $("#aveomachine_games").css("display", "block");
    if($("#base_settings").css("display") == "block")
    {
        $("#base_settings").css("z-index", -1);
        $("#base_file_system").css("z-index", -1);
        $("#aveomachine_games").css("z-index", 1);
    }
    if($("#base_file_system").css("display") == "block")
    {
        $("#base_settings").css("z-index", -1);
        $("#base_file_system").css("z-index", -1);
        $("#aveomachine_games").css("z-index", 1);
    }
});

//Similar to Window Minimize of File Manager, but this goes for the Aveomachine games window
$("#header_button7").on("click", function(){
    $("#aveomachine_games").css("display", "none");
    $("#aveomachine_taskbar").css("display", "block");
});

//Similar to Window Size of File Manager, but this goes for the Aveomachine games window
$("#header_button8").on("click", function(){
    $("#aveomachine_games").css("width", "100%");
    $("#aveomachine_games").css("left", "0%");
    $("#aveomachine_games").css("top", "0%");
    $("#aveomachine_games").css("height", "94%");
    game_window += 1;
    if(game_window % 2 == 0)
    {
        $("#aveomachine_games").css("width", "60%");
        $("#aveomachine_games").css("left", "15%");
        $("#aveomachine_games").css("top", "10%");
        $("#aveomachine_games").css("height", "40%");
    }
});

//If the user closes the Aveomachine games Window, then the z-index values will be reset
$("#header_button9").on("click", function(){
    $("#aveomachine_games").css("display", "none");
    $("#aveomachine_taskbar").css("display", "none");
        $("#base_settings").css("z-index", 0);
        $("#base_file_system").css("z-index", 0);
        $("#aveomachine_games").css("z-index", 0);
});

//if the user double clicks on the Text Editor icon
$("#icon2").dblclick(function(){
    window.location.href = "../nightly_text_editor/text_editor.html";
});

//if the user double clicks on the Table Editor icon
$("#icon3").dblclick(function(){
    window.location.href = "../nightly_table_editor/table_editor.html";
});

//if the user double clicks on the Presentation Editor icon
$("#icon4").dblclick(function(){
    window.location.href = "../nightly_presentation_editor/presentation_editor.html";
});

//if the user clicks on the Start button of the taskbar
$(".start").on("click", function()
{
    $(".start_button_options").css("display", "flex");
    start_switch += 1;
    if(start_switch % 2 == 0)
    {
        $(".start_button_options").css("display", "none");
    }
});

//if the user clicks on the desktop with the right mouse button
//mouse numbers: 1 - left, 2 - middle, 3 - right
$("body").mousedown(function(ev){
    if(ev.which == 3)
    {
        console.log("Right mouse button clicked on element with id myId");
        var x = ev.screenX;
        var y = ev.screenY;
        var coords = "X coords: " + x + ", Y coords: " + y;
        console.log(coords);
        $(".desktop_settings").css("display", "block");
        $(".desktop_settings").css("position", "fixed");
        $(".desktop_settings").css("bottom", y);
        $(".desktop_settings").css("right", x);
    }
});

//if the user clicks on the dropdown list closer button, then the list disappears
$(".desktop_settings button").on("click", function(){
    $(".desktop_settings").css("display", "none");
});

//the Settings window shows some browser and system parameters
$("#desktop_option_settings").on("click", function(){
    $("#base_settings").css("display", "block");
    document.getElementById("base_language").innerHTML = navigator.language;
    document.getElementById("base_core_numbers").innerHTML = navigator.hardwareConcurrency;
    document.getElementById("base_user_agent").innerHTML = navigator.userAgent;
    $("#settings_taskbar").css("display", "block");
});

//if the user clicks on the 1st background option
$("#background1").on("click", function()
{
    $("body").css("background-image", 'url(Images/img/Night_sky.jpg)');
});

//if the user clicks on the 2nd background option
$("#background2").on("click", function()
{
    $("body").css("background-image", 'url(Images/img/Night_forest.jpg)');
});

//if the user clicks on the 3rd background option
$("#background3").on("click", function()
{
    $("body").css("background-image", 'url(Images/img/Dawn_forest.jpg)');
});

//if the user clicks on the 4th (default) background option
$("#background4").on("click", function()
{
    $("body").css("background-image", 'url(Images/img/main_background.png)');
});

//if the user clicks on the 1st game option
$("#game1").on("click", function()
{
    location.href = "https://johnthestudent.github.io/aveomachine_1/";
});

//if the user clicks on the 2nd game option
$("#game2").on("click", function()
{
    location.href = "https://johnthestudent.github.io/aveomachine_2/";
});

//if the user clicks on the 3rd game option
$("#game3").on("click", function()
{
    location.href = "https://johnthestudent.github.io/aveomachine_3/";
});

//if the user clicks on the 4th game option
$("#game4").on("click", function()
{
    location.href = "https://johnthestudent.github.io/aveomachine_4/";
});

//if the user double clicks on the Aveomachine Collection icon
$("#icon5").on("dblclick", function()
{
    $("#aveomachine_games").css("display", "block");
    $("#aveomachine_taskbar").css("display", "block");
})

//if the user reaches the File Manager from the Start button's dropdown list
$("#start_option_file_manager").on("click", function(){
    $("#base_file_system").css("display", "block");
    $("#file_manager_taskbar").css("display", "block");
});

//if the user reaches the Settings from the Start button's dropdown list
$("#start_option_settings").on("click", function(){
    $("#base_settings").css("display", "block");
    $("#settings_taskbar").css("display", "block");
});

//if the user clicks on the Shutdown option, then redirection to the index.html file occurs
$("#start_option_shut_down").on("click", function(){
    window.location.href = "../index.html";
});