$("#stylebutton").on("click", function()
{
    $("#stilus").css('opacity', '1.0');
    $("#stab").css('opacity', '0.0');
})

$("#creditsbutton").on("click", function()
{
    $("#stilus").css('opacity', '0.0');
    $("#stab").css('opacity', '1.0');
})

//handling mommy saving option
function savedifficultymode() {	
	var checkbox = document.getElementById("difficultymode");
    localStorage.setItem("difficultymode", checkbox.checked);
    $("#mommy").css('display', 'block');
    localStorage.setItem("mommy_enabled", true);
}

//handling helper saving option
function savehelperwindow() {	
	var checkbox1 = document.getElementById("helperwindow");
    localStorage.setItem("helperwindow", checkbox1.checked);
    $("#sugo").css('display', 'block');
    localStorage.setItem("helper_enabled", true);	
}

//for loading
var checked = JSON.parse(localStorage.getItem("difficultymode"));
    document.getElementById("difficultymode").checked = checked;

var checked1 = JSON.parse(localStorage.getItem("helperwindow"));
    document.getElementById("helperwindow").checked = checked1;
