/*$(".card").on('click', function()
{
    if($(".card .card-body").html() == "Bokrok")
    {
        $("#footer").css("color", "red");
    }
})*/

function valami()
{
    document.getElementById("footer").style.color = "blue";
    const para = document.createElement("a");
    para.innerText = "Bokrok";
    var abba = document.getElementById("utvonal");
    abba.appendChild(para);
}