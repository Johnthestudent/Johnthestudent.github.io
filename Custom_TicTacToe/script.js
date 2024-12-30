var toggleclick = 0; //helps toggling the menu
var gameclick = 0;  //odd clicks are player 1, even clicks are player 2

//Display of the toggle menu will change according to the value of the helper variable
$(".toggle_menu").on("click", function()
{
    $("#toggle_menu").css("display", "block");
    toggleclick += 1;
    if(toggleclick % 2 == 0)
    {
        $("#toggle_menu").css("display", "none");
    }
});

//text color check
function textColorcheck()
{
    if($("#situation_message").text() == "Player 1, it is your turn")
    {
        $("#situation_message").css("color", "blue");
    }
    if($("#situation_message").text() == "Player 2, it is your turn")
    {
        $("#situation_message").css("color", "orange");
    }
}

//player click check
function playerRound()
{
    gameclick += 1;
    if(gameclick == 0)
    {
        $("#situation_message").text("Player 1, it is your turn");
        console.log(gameclick); //testing purposes
    }
    if(gameclick % 2 == 0)
    {
        $("#situation_message").text("Player 2, it is your turn");
        console.log(gameclick); //testing purposes
    }
    if(gameclick % 2 != 0)
    {
        $("#situation_message").text("Player 1, it is your turn");
        console.log(gameclick); //testing purposes
    }
}

document.getElementById("player_1_amounts").innerHTML = parseInt(localStorage.getItem("player_1_win_nums"));
document.getElementById("player_2_amounts").innerHTML = parseInt(localStorage.getItem("player_2_win_nums"));

//victory condition checking
function victoryConditioncheck()
{
    //player 1 wins
    if(($("#square1").text() == "X" && $("#square2").text() == "X" && $("#square3").text() == "X")
    || ($("#square4").text() == "X" && $("#square5").text() == "X" && $("#square6").text() == "X")
    || ($("#square7").text() == "X" && $("#square8").text() == "X" && $("#square9").text() == "X")
    || ($("#square1").text() == "X" && $("#square5").text() == "X" && $("#square9").text() == "X")
    || ($("#square3").text() == "X" && $("#square5").text() == "X" && $("#square7").text() == "X")
    || ($("#square1").text() == "X" && $("#square4").text() == "X" && $("#square7").text() == "X")
    || ($("#square2").text() == "X" && $("#square5").text() == "X" && $("#square8").text() == "X")
    || ($("#square3").text() == "X" && $("#square6").text() == "X" && $("#square9").text() == "X"))
    {
        var winner_player_1 = parseInt(localStorage.getItem("player_1_win_nums"));
        winner_player_1 += 1;
        localStorage.setItem("player_1_win_nums", winner_player_1);
        document.getElementById("player_1_amounts").innerHTML = parseInt(localStorage.getItem("player_1_win_nums"));
    }

    //player 2 wins
    if(($("#square1").text() == "O" && $("#square2").text() == "O" && $("#square3").text() == "O")
    || ($("#square4").text() == "O" && $("#square5").text() == "O" && $("#square6").text() == "O")
    || ($("#square7").text() == "O" && $("#square8").text() == "O" && $("#square9").text() == "O")
    || ($("#square1").text() == "O" && $("#square5").text() == "O" && $("#square9").text() == "O")
    || ($("#square3").text() == "O" && $("#square5").text() == "O" && $("#square7").text() == "O")
    || ($("#square1").text() == "O" && $("#square4").text() == "O" && $("#square7").text() == "O")
    || ($("#square2").text() == "O" && $("#square5").text() == "O" && $("#square8").text() == "O")
    || ($("#square3").text() == "O" && $("#square6").text() == "O" && $("#square9").text() == "O"))
    {
        var winner_player_2 = parseInt(localStorage.getItem("player_2_win_nums"));
        winner_player_2 += 1;
        localStorage.setItem("player_2_win_nums", winner_player_2);
        document.getElementById("player_2_amounts").innerHTML = parseInt(localStorage.getItem("player_2_win_nums"));
    }

    //tie checking
    if((localStorage.getItem("cell_1_filled") == "true" && 
        localStorage.getItem("cell_2_filled") == "true" &&
        localStorage.getItem("cell_3_filled") == "true" &&
        localStorage.getItem("cell_4_filled") == "true" &&
        localStorage.getItem("cell_5_filled") == "true" &&
        localStorage.getItem("cell_6_filled") == "true" &&
        localStorage.getItem("cell_7_filled") == "true" &&
        localStorage.getItem("cell_8_filled") == "true" &&
        localStorage.getItem("cell_9_filled") == "true")
    && !(($("#square1").text() == "O" && $("#square2").text() == "O" && $("#square3").text() == "O")
    || ($("#square4").text() == "O" && $("#square5").text() == "O" && $("#square6").text() == "O")
    || ($("#square7").text() == "O" && $("#square8").text() == "O" && $("#square9").text() == "O")
    || ($("#square1").text() == "O" && $("#square5").text() == "O" && $("#square9").text() == "O")
    || ($("#square3").text() == "O" && $("#square5").text() == "O" && $("#square7").text() == "O")
    || ($("#square1").text() == "O" && $("#square4").text() == "O" && $("#square7").text() == "O")
    || ($("#square2").text() == "O" && $("#square5").text() == "O" && $("#square8").text() == "O")
    || ($("#square3").text() == "O" && $("#square6").text() == "O" && $("#square9").text() == "O"))
    && !(($("#square1").text() == "X" && $("#square2").text() == "X" && $("#square3").text() == "X")
    || ($("#square4").text() == "X" && $("#square5").text() == "X" && $("#square6").text() == "X")
    || ($("#square7").text() == "X" && $("#square8").text() == "X" && $("#square9").text() == "X")
    || ($("#square1").text() == "X" && $("#square5").text() == "X" && $("#square9").text() == "X")
    || ($("#square3").text() == "X" && $("#square5").text() == "X" && $("#square7").text() == "X")
    || ($("#square1").text() == "X" && $("#square4").text() == "X" && $("#square7").text() == "X")
    || ($("#square2").text() == "X" && $("#square5").text() == "X" && $("#square8").text() == "X")
    || ($("#square3").text() == "X" && $("#square6").text() == "X" && $("#square9").text() == "X")))
    {
        var tie_situation = parseInt(localStorage.getItem("ties_nums"));
        tie_situation += 1;
        localStorage.setItem("ties_nums", tie_situation);
        document.getElementById("ties_amounts").innerHTML = parseInt(localStorage.getItem("ties_nums"));
    }
}

//Options section
//Reset game option resets the number of wins and ties to zero and clears the gameboard
$("#reset_game").on("click", function()
{
    localStorage.setItem("player_1_win_nums", 0);
    localStorage.setItem("player_2_win_nums", 0);
    localStorage.setItem("ties_nums", 0);
    document.getElementById("player_1_amounts").innerHTML = parseInt(localStorage.getItem("player_1_win_nums"));
    document.getElementById("player_2_amounts").innerHTML = parseInt(localStorage.getItem("player_2_win_nums"));
    document.getElementById("ties_amounts").innerHTML = parseInt(localStorage.getItem("ties_nums"));
    localStorage.setItem("cell_1_filled", "false");
    localStorage.setItem("cell_2_filled", "false");
    localStorage.setItem("cell_3_filled", "false");
    localStorage.setItem("cell_4_filled", "false");
    localStorage.setItem("cell_5_filled", "false");
    localStorage.setItem("cell_6_filled", "false");
    localStorage.setItem("cell_7_filled", "false");
    localStorage.setItem("cell_8_filled", "false");
    localStorage.setItem("cell_9_filled", "false");
    $("#square1").text("");
    $("#square2").text("");
    $("#square3").text("");
    $("#square4").text("");
    $("#square5").text("");
    $("#square6").text("");
    $("#square7").text("");
    $("#square8").text("");
    $("#square9").text("");
    $("#situation_message").text("Player 1, it is your turn");
    textColorcheck();
});

//New round option clears the gameboard
$("#new_round").on("click", function()
{
    localStorage.setItem("cell_1_filled", "false");
    localStorage.setItem("cell_2_filled", "false");
    localStorage.setItem("cell_3_filled", "false");
    localStorage.setItem("cell_4_filled", "false");
    localStorage.setItem("cell_5_filled", "false");
    localStorage.setItem("cell_6_filled", "false");
    localStorage.setItem("cell_7_filled", "false");
    localStorage.setItem("cell_8_filled", "false");
    localStorage.setItem("cell_9_filled", "false");
    $("#square1").text("");
    $("#square2").text("");
    $("#square3").text("");
    $("#square4").text("");
    $("#square5").text("");
    $("#square6").text("");
    $("#square7").text("");
    $("#square8").text("");
    $("#square9").text("");
    $("#situation_message").text("Player 1, it is your turn");
    textColorcheck();
});

//events of square_1
$("#square1").on("click", function()
{
    playerRound();
    if($("#square1").text() == "" && $("#situation_message").text() == "Player 1, it is your turn")
    {
        $("#square1").text("X"); 
        $("#square1").css("font-size", "50px");
        $("#square1").css("display", "flex");
        $("#square1").css("justify-content", "center");
        $("#square1").css("align-items", "center");
        $("#square1").css("color", "blue");
        $("#situation_message").text("Player 2, it is your turn");
        localStorage.setItem("cell_1_filled", "true");
    }
    if($("#square1").text() == "" && $("#situation_message").text() == "Player 2, it is your turn")
    {
        $("#square1").text("O"); 
        $("#square1").css("font-size", "50px");
        $("#square1").css("display", "flex");
        $("#square1").css("justify-content", "center");
        $("#square1").css("align-items", "center");
        $("#square1").css("color", "orange");
        $("#situation_message").text("Player 1, it is your turn");
        localStorage.setItem("cell_1_filled", "true");
    }
    textColorcheck();
    victoryConditioncheck();
});

//events of square_2
$("#square2").on("click", function()
{
    playerRound();
    if($("#square2").text() == "" && $("#situation_message").text() == "Player 1, it is your turn")
    {
        $("#square2").text("X"); 
        $("#square2").css("font-size", "50px");
        $("#square2").css("display", "flex");
        $("#square2").css("justify-content", "center");
        $("#square2").css("align-items", "center");
        $("#square2").css("color", "blue");
        $("#situation_message").text("Player 2, it is your turn");
        localStorage.setItem("cell_2_filled", "true");
    }
    if($("#square2").text() == "" && $("#situation_message").text() == "Player 2, it is your turn")
    {
        $("#square2").text("O"); 
        $("#square2").css("font-size", "50px");
        $("#square2").css("display", "flex");
        $("#square2").css("justify-content", "center");
        $("#square2").css("align-items", "center");
        $("#square2").css("color", "orange");
        $("#situation_message").text("Player 1, it is your turn");
        localStorage.setItem("cell_2_filled", "true");
    }
    textColorcheck();
    victoryConditioncheck();
});

//events of square_3
$("#square3").on("click", function()
{
    playerRound();
    if($("#square3").text() == "" && $("#situation_message").text() == "Player 1, it is your turn")
    {
        $("#square3").text("X"); 
        $("#square3").css("font-size", "50px");
        $("#square3").css("display", "flex");
        $("#square3").css("justify-content", "center");
        $("#square3").css("align-items", "center");
        $("#square3").css("color", "blue");
        $("#situation_message").text("Player 2, it is your turn");
        localStorage.setItem("cell_3_filled", "true");
    }
    if($("#square3").text() == "" && $("#situation_message").text() == "Player 2, it is your turn")
    {
        $("#square3").text("O"); 
        $("#square3").css("font-size", "50px");
        $("#square3").css("display", "flex");
        $("#square3").css("justify-content", "center");
        $("#square3").css("align-items", "center");
        $("#square3").css("color", "orange");
        $("#situation_message").text("Player 1, it is your turn");
        localStorage.setItem("cell_3_filled", "true");
    }
    textColorcheck();
    victoryConditioncheck();
});

//events of square_4
$("#square4").on("click", function()
{
    playerRound();
    if($("#square4").text() == "" && $("#situation_message").text() == "Player 1, it is your turn")
    {
        $("#square4").text("X"); 
        $("#square4").css("font-size", "50px");
        $("#square4").css("display", "flex");
        $("#square4").css("justify-content", "center");
        $("#square4").css("align-items", "center");
        $("#square4").css("color", "blue");
        $("#situation_message").text("Player 2, it is your turn");
        localStorage.setItem("cell_4_filled", "true");
    }
    if($("#square4").text() == "" && $("#situation_message").text() == "Player 2, it is your turn")
    {
        $("#square4").text("O"); 
        $("#square4").css("font-size", "50px");
        $("#square4").css("display", "flex");
        $("#square4").css("justify-content", "center");
        $("#square4").css("align-items", "center");
        $("#square4").css("color", "orange");
        $("#situation_message").text("Player 1, it is your turn");
        localStorage.setItem("cell_4_filled", "true");
    }
    textColorcheck();
    victoryConditioncheck();
});

//events of square_5
$("#square5").on("click", function()
{
    playerRound();
    if($("#square5").text() == "" && $("#situation_message").text() == "Player 1, it is your turn")
    {
        $("#square5").text("X"); 
        $("#square5").css("font-size", "50px");
        $("#square5").css("display", "flex");
        $("#square5").css("justify-content", "center");
        $("#square5").css("align-items", "center");
        $("#square5").css("color", "blue");
        $("#situation_message").text("Player 2, it is your turn");
        localStorage.setItem("cell_5_filled", "true");
    }
    if($("#square5").text() == "" && $("#situation_message").text() == "Player 2, it is your turn")
    {
        $("#square5").text("O"); 
        $("#square5").css("font-size", "50px");
        $("#square5").css("display", "flex");
        $("#square5").css("justify-content", "center");
        $("#square5").css("align-items", "center");
        $("#square5").css("color", "orange");
        $("#situation_message").text("Player 1, it is your turn");
        localStorage.setItem("cell_5_filled", "true");
    }
    textColorcheck();
    victoryConditioncheck();
});

//events of square_6
$("#square6").on("click", function()
{
    playerRound();
    if($("#square6").text() == "" && $("#situation_message").text() == "Player 1, it is your turn")
    {
        $("#square6").text("X"); 
        $("#square6").css("font-size", "50px");
        $("#square6").css("display", "flex");
        $("#square6").css("justify-content", "center");
        $("#square6").css("align-items", "center");
        $("#square6").css("color", "blue");
        $("#situation_message").text("Player 2, it is your turn");
        localStorage.setItem("cell_6_filled", "true");
    }
    if($("#square6").text() == "" && $("#situation_message").text() == "Player 2, it is your turn")
    {
        $("#square6").text("O"); 
        $("#square6").css("font-size", "50px");
        $("#square6").css("display", "flex");
        $("#square6").css("justify-content", "center");
        $("#square6").css("align-items", "center");
        $("#square6").css("color", "orange");
        $("#situation_message").text("Player 1, it is your turn");
        localStorage.setItem("cell_6_filled", "true");
    }
    textColorcheck();
    victoryConditioncheck();
});

//events of square_7
$("#square7").on("click", function()
{
    playerRound();
    if($("#square7").text() == "" && $("#situation_message").text() == "Player 1, it is your turn")
    {
        $("#square7").text("X"); 
        $("#square7").css("font-size", "50px");
        $("#square7").css("display", "flex");
        $("#square7").css("justify-content", "center");
        $("#square7").css("align-items", "center");
        $("#square7").css("color", "blue");
        $("#situation_message").text("Player 2, it is your turn");
        localStorage.setItem("cell_7_filled", "true");
    }
    if($("#square7").text() == "" && $("#situation_message").text() == "Player 2, it is your turn")
    {
        $("#square7").text("O"); 
        $("#square7").css("font-size", "50px");
        $("#square7").css("display", "flex");
        $("#square7").css("justify-content", "center");
        $("#square7").css("align-items", "center");
        $("#square7").css("color", "orange");
        $("#situation_message").text("Player 1, it is your turn");
        localStorage.setItem("cell_7_filled", "true");
    }
    textColorcheck();
    victoryConditioncheck();
});

//events of square_8
$("#square8").on("click", function()
{
    playerRound();
    if($("#square8").text() == "" && $("#situation_message").text() == "Player 1, it is your turn")
    {
        $("#square8").text("X"); 
        $("#square8").css("font-size", "50px");
        $("#square8").css("display", "flex");
        $("#square8").css("justify-content", "center");
        $("#square8").css("align-items", "center");
        $("#square8").css("color", "blue");
        $("#situation_message").text("Player 2, it is your turn");
        localStorage.setItem("cell_8_filled", "true");
    }
    if($("#square8").text() == "" && $("#situation_message").text() == "Player 2, it is your turn")
    {
        $("#square8").text("O"); 
        $("#square8").css("font-size", "50px");
        $("#square8").css("display", "flex");
        $("#square8").css("justify-content", "center");
        $("#square8").css("align-items", "center");
        $("#square8").css("color", "orange");
        $("#situation_message").text("Player 1, it is your turn");
        localStorage.setItem("cell_8_filled", "true");
    }
    textColorcheck();
    victoryConditioncheck();
});

//events of square_9
$("#square9").on("click", function()
{
    playerRound();
    if($("#square9").text() == "" && $("#situation_message").text() == "Player 1, it is your turn")
    {

        $("#square9").text("X"); 
        $("#square9").css("font-size", "50px");
        $("#square9").css("display", "flex");
        $("#square9").css("justify-content", "center");
        $("#square9").css("align-items", "center");
        $("#square9").css("color", "blue");
        $("#situation_message").text("Player 2, it is your turn");
        localStorage.setItem("cell_9_filled", "true");
    }
    if($("#square9").text() == "" && $("#situation_message").text() == "Player 2, it is your turn")
    {
        $("#square9").text("O"); 
        $("#square9").css("font-size", "50px");
        $("#square9").css("display", "flex");
        $("#square9").css("justify-content", "center");
        $("#square9").css("align-items", "center");
        $("#square9").css("color", "orange");
        $("#situation_message").text("Player 1, it is your turn");
        localStorage.setItem("cell_9_filled", "true");
    }        
    textColorcheck();
    victoryConditioncheck();
});