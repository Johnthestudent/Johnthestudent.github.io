$("#gameinfo").on("click", function()
{
    alert("This game is just made for educational and entertainment purposes! \n The game itself is a parody of Defend your castle. \n Defend your castle belongs to XGen Studios. \n Feel free to fork it and modify it!(Defend the Wall - Definitive Edition)");
})

//localstorage values for the game
localStorage.setItem("points", 0);
localStorage.setItem("health", 100);
localStorage.setItem("hastemple", 1);
localStorage.setItem("hasworkshop", 1);
localStorage.setItem("hasbarrack", 1);
localStorage.setItem("hasunits", 0);
localStorage.setItem("regularmode", 0);
localStorage.setItem("templemode", 1);
localStorage.setItem("workshopmode", 1);
localStorage.setItem("barrackmode", 1);