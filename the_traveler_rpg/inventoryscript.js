document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");

//helper variables
var buyAxe = false;
var sellAxe = false;
var buyBagofArrows = false;
var sellBagofArrows = false;
var buyBow = false;
var sellBow = false;
var buyBread = false;
var sellBread = false;
var buyCoal = false;
var sellCoal = false;
var buyCopperingot = false;
var sellCopperingot = false;
var buyCrossbow = false;
var sellCrossbow = false;
var buyFruitbasket = false;
var sellFruitbasket = false;
var buyGlass = false;
var sellGlass = false;
var buyGoldingot = false;
var sellGoldingot = false;
var buyHerbalflower = false;
var sellHerbalflower = false;
var buyHerbs = false;
var sellHerbs = false;
var buyIcecube = false;
var sellIcecube = false;
var buyIronbucketwithoil = false;
var sellIronbucketwithoil = false;
var buyIronbucket = false;
var sellIronbucket = false;
var buyIroningot = false;
var sellIroningot = false;
var buyMace = false;
var sellMace = false;
var buyMaul = false;
var sellMaul = false;
var buyMedicalliquid = false;
var sellMedicalliquid = false;
var buyMoonstone = false;
var sellMoonstone = false;
var buyMoonballista = false;
var sellMoonballista = false;
var buyRawmeat = false;
var sellRawmeat = false;
var buySail = false;
var sellSail = false;
var buySand = false;
var sellSand = false;
var buyShield = false;
var sellShield = false;
var buySilveringot = false;
var sellSilveringot = false;
var buySpear = false;
var sellSpear = false;
var buyStone = false;
var sellStone = false;
var buySword = false;
var sellSword = false;
var buyWoodenlogs = false;
var sellWoodenlogs = false;

//Coin convertion
//Convert copper to silver
$("#coppertosilver").on("click", function()
{
    document.getElementById("copperdenar").innerHTML = parseInt(localStorage.getItem("copper_coins"));
    document.getElementById("silverdenar").innerHTML = parseInt(localStorage.getItem("silver_coins"));
    if((document.getElementById("copperdenar").innerHTML) >= 10)
    {
        localStorage.setItem("copper_coins", (document.getElementById("copperdenar").innerHTML) - 10);
        localStorage.setItem("silver_coins", ++(document.getElementById("silverdenar").innerHTML));
        document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
        document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
    }
    else
    {
        alert("You are out of copper denars! Do quests and sell items to get denars!");
        document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
        document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
    }
});

//Convert back to copper from silver
$("#silvertocopper").on("click", function()
{
    document.getElementById("copperdenar").innerHTML = parseInt(localStorage.getItem("copper_coins"));
    document.getElementById("silverdenar").innerHTML = parseInt(localStorage.getItem("silver_coins"));
    if((document.getElementById("silverdenar").innerHTML) >= 1)
    {
        localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) + 10);
        localStorage.setItem("silver_coins", --(document.getElementById("silverdenar").innerHTML));
        document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
        document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
    }
    else
    {
        alert("You are out of silver denars! Do quests and sell items to get denars!");
        document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
        document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
    }
});

//Convert silver to gold
$("#silvertogold").on("click", function()
{
    document.getElementById("silverdenar").innerHTML = parseInt(localStorage.getItem("silver_coins"));
    document.getElementById("golddenar").innerHTML = parseInt(localStorage.getItem("golden_coins"));
    if((document.getElementById("silverdenar").innerHTML) >= 2)
    {
        localStorage.setItem("silver_coins", (document.getElementById("silverdenar").innerHTML) - 2);
        localStorage.setItem("golden_coins", ++(document.getElementById("golddenar").innerHTML));
        document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
        document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
    }
    else
    {
        alert("You are out of silver denars! Do quests and sell items to get denars!");
        document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
        document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
    }
});

//Convert back to silver from gold
$("#goldtosilver").on("click", function()
{
    document.getElementById("silverdenar").innerHTML = parseInt(localStorage.getItem("silver_coins"));
    document.getElementById("golddenar").innerHTML = parseInt(localStorage.getItem("golden_coins"));
    if((document.getElementById("golddenar").innerHTML) >= 1)
    {
        localStorage.setItem("silver_coins", parseInt(document.getElementById("silverdenar").innerHTML) + 2);
        localStorage.setItem("golden_coins", --(document.getElementById("golddenar").innerHTML));
        document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
        document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
    }
    else
    {
        alert("You are out of gold denars! Do quests and sell items to get denars!");
        document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
        document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
    }
});

//Create glass item
$("#glasscreater").on("click", function()
{
    document.getElementById("amount24").innerHTML = parseInt(localStorage.getItem("item_sand"));
    document.getElementById("amount09").innerHTML = parseInt(localStorage.getItem("item_glass"));
    if(parseInt(localStorage.getItem("item_sand")) >= 1)
    {
        localStorage.setItem("item_sand", (document.getElementById("amount24").innerHTML) - 1);
        localStorage.setItem("item_glass", ++(document.getElementById("amount09").innerHTML));
        document.getElementById("amount24").innerHTML = localStorage.getItem("item_sand");
        document.getElementById("amount09").innerHTML = localStorage.getItem("item_glass");
    }
    else
    {
        alert("You don't have enough sand to create glass! Gather sand from locations related to quests or buy!");
        document.getElementById("amount24").innerHTML = localStorage.getItem("item_sand");
        document.getElementById("amount09").innerHTML = localStorage.getItem("item_glass");
    }
});

//Create medical liquid
$("#medicalcreater").on("click", function()
{
    document.getElementById("amount09").innerHTML = parseInt(localStorage.getItem("item_glass"));
    document.getElementById("amount11").innerHTML = parseInt(localStorage.getItem("item_herbal_flower"));
    document.getElementById("amount12").innerHTML = parseInt(localStorage.getItem("item_herbs"));
    document.getElementById("amount19").innerHTML = parseInt(localStorage.getItem("item_medical_liquid"));
    if(parseInt(localStorage.getItem("item_glass")) >= 1 && parseInt(localStorage.getItem("item_herbal_flower")) >= 1 && parseInt(localStorage.getItem("item_herbs")) >= 1)
    {
        localStorage.setItem("item_glass", (document.getElementById("amount09").innerHTML) - 1);
        localStorage.setItem("item_herbs", (document.getElementById("amount11").innerHTML) - 1);
        localStorage.setItem("item_herbal_flower", (document.getElementById("amount12").innerHTML) - 1);
        localStorage.setItem("item_medical_liquid", ++(document.getElementById("amount19").innerHTML));
        document.getElementById("amount09").innerHTML = localStorage.getItem("item_glass");
        document.getElementById("amount11").innerHTML = localStorage.getItem("item_herbal_flower");
        document.getElementById("amount12").innerHTML = localStorage.getItem("item_herbs");
        document.getElementById("amount19").innerHTML = localStorage.getItem("item_medical_liquid");
    }
    else
    {
        alert("You don't have enough resources to create medical liquid! Gather glass, herbal flower and herbs from locations related to quests or buy!");
        document.getElementById("amount09").innerHTML = localStorage.getItem("item_glass");
        document.getElementById("amount11").innerHTML = localStorage.getItem("item_herbal_flower");
        document.getElementById("amount12").innerHTML = localStorage.getItem("item_herbs");
        document.getElementById("amount19").innerHTML = localStorage.getItem("item_medical_liquid");
    }
});

//Create iron bucket
$("#bucketcreater").on("click", function()
{
    document.getElementById("amount16").innerHTML = parseInt(localStorage.getItem("item_iron_ingot"));
    document.getElementById("amount15").innerHTML = parseInt(localStorage.getItem("item_iron_bucket"));
    if(parseInt(localStorage.getItem("item_iron_ingot")) >= 1)
    {
        localStorage.setItem("item_iron_ingot", (document.getElementById("amount16").innerHTML) - 1);
        localStorage.setItem("item_iron_bucket", parseInt(document.getElementById("amount15").innerHTML) + 10);
        document.getElementById("amount16").innerHTML = localStorage.getItem("item_iron_ingot");
        document.getElementById("amount15").innerHTML = localStorage.getItem("item_iron_bucket");
    }
    else
    {
        alert("You don't have enough iron to create iron bucket! Gather iron from locations related to quests or buy!");
        document.getElementById("amount16").innerHTML = localStorage.getItem("item_iron_ingot");
        document.getElementById("amount15").innerHTML = localStorage.getItem("item_iron_bucket");
    }
});

//Create moonballista
$("#ballistacreater").on("click", function()
{
    document.getElementById("amount20").innerHTML = parseInt(localStorage.getItem("item_moon_stone"));
    document.getElementById("amount14").innerHTML = parseInt(localStorage.getItem("item_iron_bucket_with_oil"));
    document.getElementById("amount15").innerHTML = parseInt(localStorage.getItem("item_iron_bucket"));
    document.getElementById("amount30").innerHTML = parseInt(localStorage.getItem("item_wooden_logs"));
    document.getElementById("amount21").innerHTML = parseInt(localStorage.getItem("item_moonballista"));
    if(parseInt(localStorage.getItem("item_moon_stone")) >= 1 && parseInt(localStorage.getItem("item_iron_bucket_with_oil")) >= 1 && parseInt(localStorage.getItem("item_wooden_logs")) >= 1)
    {
        localStorage.setItem("item_moon_stone", (document.getElementById("amount20").innerHTML) - 1);
        localStorage.setItem("item_iron_bucket_with_oil", (document.getElementById("amount14").innerHTML) - 1);
        localStorage.setItem("item_iron_bucket", ++(document.getElementById("amount15").innerHTML));
        localStorage.setItem("item_wooden_logs", (document.getElementById("amount30").innerHTML) - 1);
        localStorage.setItem("item_moonballista", ++(document.getElementById("amount21").innerHTML));
        document.getElementById("amount20").innerHTML = localStorage.getItem("item_moon_stone");
        document.getElementById("amount14").innerHTML = localStorage.getItem("item_iron_bucket_with_oil");
        document.getElementById("amount15").innerHTML = localStorage.getItem("item_iron_bucket");
        document.getElementById("amount30").innerHTML = localStorage.getItem("item_wooden_logs");
        document.getElementById("amount21").innerHTML = localStorage.getItem("item_moonballista");
    }
    else
    {
        alert("You don't have enough resources to create moonballista! Gather moonstone, oil and wooden logs from locations related to quests or buy!");
        document.getElementById("amount20").innerHTML = localStorage.getItem("item_moon_stone");
        document.getElementById("amount14").innerHTML = localStorage.getItem("item_iron_bucket_with_oil");
        document.getElementById("amount15").innerHTML = localStorage.getItem("item_iron_bucket");
        document.getElementById("amount30").innerHTML = localStorage.getItem("item_wooden_logs");
        document.getElementById("amount21").innerHTML = localStorage.getItem("item_moonballista");
    }
});

//Item01 mouse events
$("#inventoryitem01").mouseenter(function()
{
    $("#inventoryitem01").css("border-color", "red");
    $("#inventoryitem01").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Axe";
});

$("#inventoryitem01").mouseleave(function()
{
    $("#inventoryitem01").css("border-color", "black");
    $("#inventoryitem01").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem01").click(function()
{
    document.getElementById("buyprice").innerHTML = "10 copper dn-s";
    document.getElementById("sellprice").innerHTML = "10 copper dn-s";
    buyAxe = true;
    sellAxe = true;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item02 mouse events
$("#inventoryitem02").mouseenter(function()
{
    $("#inventoryitem02").css("border-color", "red");
    $("#inventoryitem02").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Bag of arrows";
});

$("#inventoryitem02").mouseleave(function()
{
    $("#inventoryitem02").css("border-color", "black");
    $("#inventoryitem02").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem02").click(function()
{
    document.getElementById("buyprice").innerHTML = "10 silver dn-s";
    document.getElementById("sellprice").innerHTML = "10 silver dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = true;
    sellBagofArrows = true;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item03 mouse events
$("#inventoryitem03").mouseenter(function()
{
    $("#inventoryitem03").css("border-color", "red");
    $("#inventoryitem03").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Bow";
});

$("#inventoryitem03").mouseleave(function()
{
    $("#inventoryitem03").css("border-color", "black");
    $("#inventoryitem03").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem03").click(function()
{
    document.getElementById("buyprice").innerHTML = "10 gold dn-s";
    document.getElementById("sellprice").innerHTML = "10 gold dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = true;
    sellBow = true;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item04 mouse events
$("#inventoryitem04").mouseenter(function()
{
    $("#inventoryitem04").css("border-color", "red");
    $("#inventoryitem04").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Bread";
});

$("#inventoryitem04").mouseleave(function()
{
    $("#inventoryitem04").css("border-color", "black");
    $("#inventoryitem04").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem04").click(function()
{
    document.getElementById("buyprice").innerHTML = "30 copper dn-s";
    document.getElementById("sellprice").innerHTML = "30 copper dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = true;
    sellBread = true;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item05 mouse events
$("#inventoryitem05").mouseenter(function()
{
    $("#inventoryitem05").css("border-color", "red");
    $("#inventoryitem05").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Coal";
});

$("#inventoryitem05").mouseleave(function()
{
    $("#inventoryitem05").css("border-color", "black");
    $("#inventoryitem05").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem05").click(function()
{
    document.getElementById("buyprice").innerHTML = "75 silver dn-s";
    document.getElementById("sellprice").innerHTML = "75 silver dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = true;
    sellCoal = true;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item06 mouse events
$("#inventoryitem06").mouseenter(function()
{
    $("#inventoryitem06").css("border-color", "red");
    $("#inventoryitem06").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Copper ingot";
});

$("#inventoryitem06").mouseleave(function()
{
    $("#inventoryitem06").css("border-color", "black");
    $("#inventoryitem06").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem06").click(function()
{
    document.getElementById("buyprice").innerHTML = "100 copper dn-s";
    document.getElementById("sellprice").innerHTML = "100 copper dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = true;
    sellCopperingot = true;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item07 mouse events
$("#inventoryitem07").mouseenter(function()
{
    $("#inventoryitem07").css("border-color", "red");
    $("#inventoryitem07").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Crossbow";
});

$("#inventoryitem07").mouseleave(function()
{
    $("#inventoryitem07").css("border-color", "black");
    $("#inventoryitem07").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem07").click(function()
{
    document.getElementById("buyprice").innerHTML = "5 silver dn-s";
    document.getElementById("sellprice").innerHTML = "5 silver dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = true;
    sellCrossbow = true;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item08 mouse events
$("#inventoryitem08").mouseenter(function()
{
    $("#inventoryitem08").css("border-color", "red");
    $("#inventoryitem08").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Fruit basket";
});

$("#inventoryitem08").mouseleave(function()
{
    $("#inventoryitem08").css("border-color", "black");
    $("#inventoryitem08").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem08").click(function()
{
    document.getElementById("buyprice").innerHTML = "100 copper dn-s";
    document.getElementById("sellprice").innerHTML = "100 copper dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = true;
    sellFruitbasket = true;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item09 mouse events
$("#inventoryitem09").mouseenter(function()
{
    $("#inventoryitem09").css("border-color", "red");
    $("#inventoryitem09").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Glass";
});

$("#inventoryitem09").mouseleave(function()
{
    $("#inventoryitem09").css("border-color", "black");
    $("#inventoryitem09").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem09").click(function()
{
    document.getElementById("buyprice").innerHTML = "40 copper dn-s";
    document.getElementById("sellprice").innerHTML = "40 copper dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = true;
    sellGlass = true;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item10 mouse events
$("#inventoryitem10").mouseenter(function()
{
    $("#inventoryitem10").css("border-color", "red");
    $("#inventoryitem10").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Gold ingot";
});

$("#inventoryitem10").mouseleave(function()
{
    $("#inventoryitem10").css("border-color", "black");
    $("#inventoryitem10").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem10").click(function()
{
    document.getElementById("buyprice").innerHTML = "50 gold dn-s";
    document.getElementById("sellprice").innerHTML = "50 gold dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = true;
    sellGoldingot = true;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item11 mouse events
$("#inventoryitem11").mouseenter(function()
{
    $("#inventoryitem11").css("border-color", "red");
    $("#inventoryitem11").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Herbal flower";
});

$("#inventoryitem11").mouseleave(function()
{
    $("#inventoryitem11").css("border-color", "black");
    $("#inventoryitem11").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem11").click(function()
{
    document.getElementById("buyprice").innerHTML = "8 gold dn-s";
    document.getElementById("sellprice").innerHTML = "8 gold dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = true;
    sellHerbalflower = true;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item12 mouse events
$("#inventoryitem12").mouseenter(function()
{
    $("#inventoryitem12").css("border-color", "red");
    $("#inventoryitem12").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Herbs";
});

$("#inventoryitem12").mouseleave(function()
{
    $("#inventoryitem12").css("border-color", "black");
    $("#inventoryitem12").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem12").click(function()
{
    document.getElementById("buyprice").innerHTML = "4 gold dn-s";
    document.getElementById("sellprice").innerHTML = "4 gold dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = true;
    sellHerbs = true;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item13 mouse events
$("#inventoryitem13").mouseenter(function()
{
    $("#inventoryitem13").css("border-color", "red");
    $("#inventoryitem13").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Ice cube";
});

$("#inventoryitem13").mouseleave(function()
{
    $("#inventoryitem13").css("border-color", "black");
    $("#inventoryitem13").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem13").click(function()
{
    document.getElementById("buyprice").innerHTML = "100 copper dn-s";
    document.getElementById("sellprice").innerHTML = "100 copper dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = true;
    sellIcecube = true;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item14 mouse events
$("#inventoryitem14").mouseenter(function()
{
    $("#inventoryitem14").css("border-color", "red");
    $("#inventoryitem14").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Iron bucket with oil";
});

$("#inventoryitem14").mouseleave(function()
{
    $("#inventoryitem14").css("border-color", "black");
    $("#inventoryitem14").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem14").click(function()
{
    document.getElementById("buyprice").innerHTML = "1000 gold dn-s";
    document.getElementById("sellprice").innerHTML = "1000 gold dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = true;
    sellIronbucketwithoil = true;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item15 mouse events
$("#inventoryitem15").mouseenter(function()
{
    $("#inventoryitem15").css("border-color", "red");
    $("#inventoryitem15").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Iron bucket";
});

$("#inventoryitem15").mouseleave(function()
{
    $("#inventoryitem15").css("border-color", "black");
    $("#inventoryitem15").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem15").click(function()
{
    document.getElementById("buyprice").innerHTML = "50 silver dn-s";
    document.getElementById("sellprice").innerHTML = "50 silver dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = true;
    sellIronbucket = true;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item16 mouse events
$("#inventoryitem16").mouseenter(function()
{
    $("#inventoryitem16").css("border-color", "red");
    $("#inventoryitem16").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Iron ingot";
});

$("#inventoryitem16").mouseleave(function()
{
    $("#inventoryitem16").css("border-color", "black");
    $("#inventoryitem16").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem16").click(function()
{
    document.getElementById("buyprice").innerHTML = "200 silver dn-s";
    document.getElementById("sellprice").innerHTML = "200 silver dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = true;
    sellIroningot = true;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item17 mouse events
$("#inventoryitem17").mouseenter(function()
{
    $("#inventoryitem17").css("border-color", "red");
    $("#inventoryitem17").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Mace";
});

$("#inventoryitem17").mouseleave(function()
{
    $("#inventoryitem17").css("border-color", "black");
    $("#inventoryitem17").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem17").click(function()
{
    document.getElementById("buyprice").innerHTML = "25 silver dn-s";
    document.getElementById("sellprice").innerHTML = "25 silver dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = true;
    sellMace = true;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item18 mouse events
$("#inventoryitem18").mouseenter(function()
{
    $("#inventoryitem18").css("border-color", "red");
    $("#inventoryitem18").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Maul";
});

$("#inventoryitem18").mouseleave(function()
{
    $("#inventoryitem18").css("border-color", "black");
    $("#inventoryitem18").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem18").click(function()
{
    document.getElementById("buyprice").innerHTML = "10 silver dn-s";
    document.getElementById("sellprice").innerHTML = "10 silver dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = true;
    sellMaul = true;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item19 mouse events
$("#inventoryitem19").mouseenter(function()
{
    $("#inventoryitem19").css("border-color", "red");
    $("#inventoryitem19").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Medical liquid";
});

$("#inventoryitem19").mouseleave(function()
{
    $("#inventoryitem19").css("border-color", "black");
    $("#inventoryitem19").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem19").click(function()
{
    document.getElementById("buyprice").innerHTML = "1 gold dn";
    document.getElementById("sellprice").innerHTML = "1 gold dn";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = true;
    sellMedicalliquid = true;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item20 mouse events
$("#inventoryitem20").mouseenter(function()
{
    $("#inventoryitem20").css("border-color", "red");
    $("#inventoryitem20").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Moon stone";
});

$("#inventoryitem20").mouseleave(function()
{
    $("#inventoryitem20").css("border-color", "black");
    $("#inventoryitem20").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem20").click(function()
{
    document.getElementById("buyprice").innerHTML = "2000 gold dn-s";
    document.getElementById("sellprice").innerHTML = "2000 gold dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = true;
    sellMoonstone = true;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item21 mouse events
$("#inventoryitem21").mouseenter(function()
{
    $("#inventoryitem21").css("border-color", "red");
    $("#inventoryitem21").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Moonballista";
});

$("#inventoryitem21").mouseleave(function()
{
    $("#inventoryitem21").css("border-color", "black");
    $("#inventoryitem21").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem21").click(function()
{
    document.getElementById("buyprice").innerHTML = "10000 gold dn-s";
    document.getElementById("sellprice").innerHTML = "10000 gold dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = true;
    sellMoonballista = true;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item22 mouse events
$("#inventoryitem22").mouseenter(function()
{
    $("#inventoryitem22").css("border-color", "red");
    $("#inventoryitem22").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Raw meat";
});

$("#inventoryitem22").mouseleave(function()
{
    $("#inventoryitem22").css("border-color", "black");
    $("#inventoryitem22").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem22").click(function()
{
    document.getElementById("buyprice").innerHTML = "10 copper dn-s";
    document.getElementById("sellprice").innerHTML = "10 copper dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = true;
    sellRawmeat = true;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item23 mouse events
$("#inventoryitem23").mouseenter(function()
{
    $("#inventoryitem23").css("border-color", "red");
    $("#inventoryitem23").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Sail";
});

$("#inventoryitem23").mouseleave(function()
{
    $("#inventoryitem23").css("border-color", "black");
    $("#inventoryitem23").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem23").click(function()
{
    document.getElementById("buyprice").innerHTML = "10 gold dn-s";
    document.getElementById("sellprice").innerHTML = "10 gold dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = true;
    sellSail = true;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item24 mouse events
$("#inventoryitem24").mouseenter(function()
{
    $("#inventoryitem24").css("border-color", "red");
    $("#inventoryitem24").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Sand";
});

$("#inventoryitem24").mouseleave(function()
{
    $("#inventoryitem24").css("border-color", "black");
    $("#inventoryitem24").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem24").click(function()
{
    document.getElementById("buyprice").innerHTML = "2 silver dn-s";
    document.getElementById("sellprice").innerHTML = "2 silver dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = true;
    sellSand = true;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item25 mouse events
$("#inventoryitem25").mouseenter(function()
{
    $("#inventoryitem25").css("border-color", "red");
    $("#inventoryitem25").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Shield";
});

$("#inventoryitem25").mouseleave(function()
{
    $("#inventoryitem25").css("border-color", "black");
    $("#inventoryitem25").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem25").click(function()
{
    document.getElementById("buyprice").innerHTML = "50 copper dn-s";
    document.getElementById("sellprice").innerHTML = "50 copper dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = true;
    sellShield = true;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});


//Item26 mouse events
$("#inventoryitem26").mouseenter(function()
{
    $("#inventoryitem26").css("border-color", "red");
    $("#inventoryitem26").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Silver ingot";
});

$("#inventoryitem26").mouseleave(function()
{
    $("#inventoryitem26").css("border-color", "black");
    $("#inventoryitem26").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem26").click(function()
{
    document.getElementById("buyprice").innerHTML = "200 silver dn-s";
    document.getElementById("sellprice").innerHTML = "200 silver dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = true;
    sellSilveringot = true;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item27 mouse events
$("#inventoryitem27").mouseenter(function()
{
    $("#inventoryitem27").css("border-color", "red");
    $("#inventoryitem27").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Spear";
});

$("#inventoryitem27").mouseleave(function()
{
    $("#inventoryitem27").css("border-color", "black");
    $("#inventoryitem27").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem27").click(function()
{
    document.getElementById("buyprice").innerHTML = "75 copper dn-s";
    document.getElementById("sellprice").innerHTML = "75 copper dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = true;
    sellSpear = true;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item28 mouse events
$("#inventoryitem28").mouseenter(function()
{
    $("#inventoryitem28").css("border-color", "red");
    $("#inventoryitem28").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Stone";
});

$("#inventoryitem28").mouseleave(function()
{
    $("#inventoryitem28").css("border-color", "black");
    $("#inventoryitem28").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem28").click(function()
{
    document.getElementById("buyprice").innerHTML = "150 copper dn-s";
    document.getElementById("sellprice").innerHTML = "150 copper dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = true;
    sellStone = true;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});


//Item29 mouse events
$("#inventoryitem29").mouseenter(function()
{
    $("#inventoryitem29").css("border-color", "red");
    $("#inventoryitem29").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Sword";
});

$("#inventoryitem29").mouseleave(function()
{
    $("#inventoryitem29").css("border-color", "black");
    $("#inventoryitem29").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem29").click(function()
{
    document.getElementById("buyprice").innerHTML = "50 copper dn-s";
    document.getElementById("sellprice").innerHTML = "50 copper dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = true;
    sellSword = true;
    buyWoodenlogs = false;
    sellWoodenlogs = false;
});

//Item30 mouse events
$("#inventoryitem30").mouseenter(function()
{
    $("#inventoryitem30").css("border-color", "red");
    $("#inventoryitem30").css("border-width", "3px");
    document.getElementById("item-name").innerHTML = "Wooden logs";
});

$("#inventoryitem30").mouseleave(function()
{
    $("#inventoryitem30").css("border-color", "black");
    $("#inventoryitem30").css("border-width", "1px");
    document.getElementById("item-name").innerHTML = "Item name";
});

$("#inventoryitem30").click(function()
{
    document.getElementById("buyprice").innerHTML = "100 copper dn-s";
    document.getElementById("sellprice").innerHTML = "100 copper dn-s";
    buyAxe = false;
    sellAxe = false;
    buyBagofArrows = false;
    sellBagofArrows = false;
    buyBow = false;
    sellBow = false;
    buyBread = false;
    sellBread = false;
    buyCoal = false;
    sellCoal = false;
    buyCopperingot = false;
    sellCopperingot = false;
    buyCrossbow = false;
    sellCrossbow = false;
    buyFruitbasket = false;
    sellFruitbasket = false;
    buyGlass = false;
    sellGlass = false;
    buyGoldingot = false;
    sellGoldingot = false;
    buyHerbalflower = false;
    sellHerbalflower = false;
    buyHerbs = false;
    sellHerbs = false;
    buyIcecube = false;
    sellIcecube = false;
    buyIronbucketwithoil = false;
    sellIronbucketwithoil = false;
    buyIronbucket = false;
    sellIronbucket = false;
    buyIroningot = false;
    sellIroningot = false;
    buyMace = false;
    sellMace = false;
    buyMaul = false;
    sellMaul = false;
    buyMedicalliquid = false;
    sellMedicalliquid = false;
    buyMoonstone = false;
    sellMoonstone = false;
    buyMoonballista = false;
    sellMoonballista = false;
    buyRawmeat = false;
    sellRawmeat = false;
    buySail = false;
    sellSail = false;
    buySand = false;
    sellSand = false;
    buyShield = false;
    sellShield = false;
    buySilveringot = false;
    sellSilveringot = false;
    buySpear = false;
    sellSpear = false;
    buyStone = false;
    sellStone = false;
    buySword = false;
    sellSword = false;
    buyWoodenlogs = true;
    sellWoodenlogs = true;
});

//Writing out the amount value next to the images of the items.
document.getElementById("amount01").innerHTML = localStorage.getItem("item_axe");
document.getElementById("amount02").innerHTML = localStorage.getItem("item_bag_of_arrows");
document.getElementById("amount03").innerHTML = localStorage.getItem("item_bow");
document.getElementById("amount04").innerHTML = localStorage.getItem("item_bread");
document.getElementById("amount05").innerHTML = localStorage.getItem("item_coal");
document.getElementById("amount06").innerHTML = localStorage.getItem("item_copper_ingot");
document.getElementById("amount07").innerHTML = localStorage.getItem("item_crossbow");
document.getElementById("amount08").innerHTML = localStorage.getItem("item_fruit_basket");
document.getElementById("amount09").innerHTML = localStorage.getItem("item_glass");
document.getElementById("amount10").innerHTML = localStorage.getItem("item_gold_ingot");
document.getElementById("amount11").innerHTML = localStorage.getItem("item_herbal_flower");
document.getElementById("amount12").innerHTML = localStorage.getItem("item_herbs");
document.getElementById("amount13").innerHTML = localStorage.getItem("item_ice_cube");
document.getElementById("amount14").innerHTML = localStorage.getItem("item_iron_bucket_with_oil");
document.getElementById("amount15").innerHTML = localStorage.getItem("item_iron_bucket");
document.getElementById("amount16").innerHTML = localStorage.getItem("item_iron_ingot");
document.getElementById("amount17").innerHTML = localStorage.getItem("item_mace");
document.getElementById("amount18").innerHTML = localStorage.getItem("item_maul");
document.getElementById("amount19").innerHTML = localStorage.getItem("item_medical_liquid");
document.getElementById("amount20").innerHTML = localStorage.getItem("item_moon_stone");
document.getElementById("amount21").innerHTML = localStorage.getItem("item_moonballista");
document.getElementById("amount22").innerHTML = localStorage.getItem("item_raw_meat");
document.getElementById("amount23").innerHTML = localStorage.getItem("item_sail");
document.getElementById("amount24").innerHTML = localStorage.getItem("item_sand");
document.getElementById("amount25").innerHTML = localStorage.getItem("item_shield");
document.getElementById("amount26").innerHTML = localStorage.getItem("item_silver_ingot");
document.getElementById("amount27").innerHTML = localStorage.getItem("item_spear");
document.getElementById("amount28").innerHTML = localStorage.getItem("item_stone");
document.getElementById("amount29").innerHTML = localStorage.getItem("item_sword");
document.getElementById("amount30").innerHTML = localStorage.getItem("item_wooden_logs");

//Selling items
$("#sell-price").on("click", function()
{
    document.getElementById("copperdenar").innerHTML = parseInt(localStorage.getItem("copper_coins"));
    document.getElementById("silverdenar").innerHTML = parseInt(localStorage.getItem("silver_coins"));
    document.getElementById("golddenar").innerHTML = parseInt(localStorage.getItem("golden_coins"));
    document.getElementById("amount01").innerHTML = parseInt(localStorage.getItem("item_axe"));
    document.getElementById("amount02").innerHTML = parseInt(localStorage.getItem("item_bag_of_arrows"));
    document.getElementById("amount03").innerHTML = parseInt(localStorage.getItem("item_bow"));
    document.getElementById("amount04").innerHTML = parseInt(localStorage.getItem("item_bread"));
    document.getElementById("amount05").innerHTML = parseInt(localStorage.getItem("item_coal"));
    document.getElementById("amount06").innerHTML = parseInt(localStorage.getItem("item_copper_ingot"));
    document.getElementById("amount07").innerHTML = parseInt(localStorage.getItem("item_crossbow"));
    document.getElementById("amount08").innerHTML = parseInt(localStorage.getItem("item_fruit_basket"));
    document.getElementById("amount09").innerHTML = parseInt(localStorage.getItem("item_glass"));
    document.getElementById("amount10").innerHTML = parseInt(localStorage.getItem("item_gold_ingot"));
    document.getElementById("amount11").innerHTML = parseInt(localStorage.getItem("item_herbal_flower"));
    document.getElementById("amount12").innerHTML = parseInt(localStorage.getItem("item_herbs"));
    document.getElementById("amount13").innerHTML = parseInt(localStorage.getItem("item_ice_cube"));
    document.getElementById("amount14").innerHTML = parseInt(localStorage.getItem("item_iron_bucket_with_oil"));
    document.getElementById("amount15").innerHTML = parseInt(localStorage.getItem("item_iron_bucket"));
    document.getElementById("amount16").innerHTML = parseInt(localStorage.getItem("item_iron_ingot"));
    document.getElementById("amount17").innerHTML = parseInt(localStorage.getItem("item_mace"));
    document.getElementById("amount18").innerHTML = parseInt(localStorage.getItem("item_maul"));
    document.getElementById("amount19").innerHTML = parseInt(localStorage.getItem("item_medical_liquid"));
    document.getElementById("amount20").innerHTML = parseInt(localStorage.getItem("item_moon_stone"));
    document.getElementById("amount21").innerHTML = parseInt(localStorage.getItem("item_moonballista"));
    document.getElementById("amount22").innerHTML = parseInt(localStorage.getItem("item_raw_meat"));
    document.getElementById("amount23").innerHTML = parseInt(localStorage.getItem("item_sail"));
    document.getElementById("amount24").innerHTML = parseInt(localStorage.getItem("item_sand"));
    document.getElementById("amount25").innerHTML = parseInt(localStorage.getItem("item_shield"));
    document.getElementById("amount26").innerHTML = parseInt(localStorage.getItem("item_silver_ingot"));
    document.getElementById("amount27").innerHTML = parseInt(localStorage.getItem("item_spear"));
    document.getElementById("amount28").innerHTML = parseInt(localStorage.getItem("item_stone"));
    document.getElementById("amount29").innerHTML = parseInt(localStorage.getItem("item_sword"));
    document.getElementById("amount30").innerHTML = parseInt(localStorage.getItem("item_wooden_logs"));
    //Sell item01
    if(sellAxe == true)
    {
        if(parseInt(localStorage.getItem("item_axe")) >=1)
        {
            localStorage.setItem("item_axe", --(document.getElementById("amount01").innerHTML));
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) + 10);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount01").innerHTML = localStorage.getItem("item_axe");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount01").innerHTML = localStorage.getItem("item_axe");
        }
    }
    //Sell item02
    if(sellBagofArrows == true)
    {
        if(parseInt(localStorage.getItem("item_bag_of_arrows")) >=1)
        {
            localStorage.setItem("item_bag_of_arrows", --(document.getElementById("amount02").innerHTML));
            localStorage.setItem("silver_coins", parseInt(document.getElementById("silverdenar").innerHTML) + 10);
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount02").innerHTML = localStorage.getItem("item_bag_of_arrows");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount02").innerHTML = localStorage.getItem("item_bag_of_arrows");
        }
    }
    //Sell item03
    if(sellBow == true)
    {
        if(parseInt(localStorage.getItem("item_bow")) >=1)
        {
            localStorage.setItem("item_bow", --(document.getElementById("amount03").innerHTML));
            localStorage.setItem("golden_coins", parseInt(document.getElementById("golddenar").innerHTML) + 10);
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount03").innerHTML = localStorage.getItem("item_bow");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount03").innerHTML = localStorage.getItem("item_bow");
        }
    }
    //Sell item04
    if(sellBread == true)
    {
        if(parseInt(localStorage.getItem("item_bread")) >=1)
        {
            localStorage.setItem("item_bread", --(document.getElementById("amount04").innerHTML));
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) + 30);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount04").innerHTML = localStorage.getItem("item_bread");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount04").innerHTML = localStorage.getItem("item_bread");
        }
    }
    //Sell item05
    if(sellCoal == true)
    {
        if(parseInt(localStorage.getItem("item_coal")) >=1)
        {
            localStorage.setItem("item_coal", --(document.getElementById("amount05").innerHTML));
            localStorage.setItem("silver_coins", parseInt(document.getElementById("silverdenar").innerHTML) + 75);
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount05").innerHTML = localStorage.getItem("item_coal");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount05").innerHTML = localStorage.getItem("item_coal");
        }
    }
    //Sell item06
    if(sellCopperingot == true)
    {
        if(parseInt(localStorage.getItem("item_copper_ingot")) >=1)
        {
            localStorage.setItem("item_copper_ingot", --(document.getElementById("amount06").innerHTML));
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) + 100);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount06").innerHTML = localStorage.getItem("item_copper_ingot");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount06").innerHTML = localStorage.getItem("item_copper_ingot");
        }
    }
    //Sell item07
    if(sellCrossbow == true)
    {
        if(parseInt(localStorage.getItem("item_crossbow")) >=1)
        {
            localStorage.setItem("item_crossbow", --(document.getElementById("amount07").innerHTML));
            localStorage.setItem("silver_coins", parseInt(document.getElementById("silverdenar").innerHTML) + 5);
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount07").innerHTML = localStorage.getItem("item_crossbow");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount07").innerHTML = localStorage.getItem("item_crossbow");
        }
    }
    //Sell item08
    if(sellFruitbasket == true)
    {
        if(parseInt(localStorage.getItem("item_fruit_basket")) >=1)
        {
            localStorage.setItem("item_fruit_basket", --(document.getElementById("amount08").innerHTML));
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) + 100);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount08").innerHTML = localStorage.getItem("item_fruit_basket");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount08").innerHTML = localStorage.getItem("item_fruit_basket");
        }
    }
    //Sell item09
    if(sellGlass == true)
    {
        if(parseInt(localStorage.getItem("item_glass")) >=1)
        {
            localStorage.setItem("item_glass", --(document.getElementById("amount09").innerHTML));
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) + 40);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount09").innerHTML = localStorage.getItem("item_glass");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount09").innerHTML = localStorage.getItem("item_glass");
        }
    }
    //Sell item10
    if(sellGoldingot == true)
    {
        if(parseInt(localStorage.getItem("item_gold_ingot")) >=1)
        {
            localStorage.setItem("item_gold_ingot", --(document.getElementById("amount10").innerHTML));
            localStorage.setItem("golden_coins", parseInt(document.getElementById("golddenar").innerHTML) + 50);
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount10").innerHTML = localStorage.getItem("item_gold_ingot");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount10").innerHTML = localStorage.getItem("item_gold_ingot");
        }
    }
    //Sell item11
    if(sellHerbalflower == true)
    {
        if(parseInt(localStorage.getItem("item_herbal_flower")) >=1)
        {
            localStorage.setItem("item_herbal_flower", --(document.getElementById("amount11").innerHTML));
            localStorage.setItem("golden_coins", parseInt(document.getElementById("golddenar").innerHTML) + 8);
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount11").innerHTML = localStorage.getItem("item_herbal_flower");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount11").innerHTML = localStorage.getItem("item_herbal_flower");
        }
    }
    //Sell item12
    if(sellHerbs == true)
    {
        if(parseInt(localStorage.getItem("item_herbs")) >=1)
        {
            localStorage.setItem("item_herbs", --(document.getElementById("amount12").innerHTML));
            localStorage.setItem("golden_coins", parseInt(document.getElementById("golddenar").innerHTML) + 4);
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount12").innerHTML = localStorage.getItem("item_herbs");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount12").innerHTML = localStorage.getItem("item_herbs");
        }
    }
    //Sell item13
    if(sellIcecube == true)
    {
        if(parseInt(localStorage.getItem("item_ice_cube")) >=1)
        {
            localStorage.setItem("item_ice_cube", --(document.getElementById("amount13").innerHTML));
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) + 100);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount13").innerHTML = localStorage.getItem("item_ice_cube");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount13").innerHTML = localStorage.getItem("item_ice_cube");
        }
    }
    //Sell item14
    if(sellIronbucketwithoil == true)
    {
        if(parseInt(localStorage.getItem("item_iron_bucket_with_oil")) >=1)
        {
            localStorage.setItem("item_iron_bucket_with_oil", --(document.getElementById("amount14").innerHTML));
            localStorage.setItem("golden_coins", parseInt(document.getElementById("golddenar").innerHTML) + 1000);
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount14").innerHTML = localStorage.getItem("item_iron_bucket_with_oil");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount14").innerHTML = localStorage.getItem("item_iron_bucket_with_oil");
        }
    }
    //Sell item15
    if(sellIronbucket == true)
    {
        if(parseInt(localStorage.getItem("item_iron_bucket")) >=1)
        {
            localStorage.setItem("item_iron_bucket", --(document.getElementById("amount15").innerHTML));
            localStorage.setItem("silver_coins", parseInt(document.getElementById("silverdenar").innerHTML) + 50);
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount15").innerHTML = localStorage.getItem("item_iron_bucket");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount15").innerHTML = localStorage.getItem("item_iron_bucket");
        }
    }
    //Sell item16
    if(sellIroningot == true)
    {
        if(parseInt(localStorage.getItem("item_iron_ingot")) >=1)
        {
            localStorage.setItem("item_iron_ingot", --(document.getElementById("amount16").innerHTML));
            localStorage.setItem("silver_coins", parseInt(document.getElementById("silverdenar").innerHTML) + 200);
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount16").innerHTML = localStorage.getItem("item_iron_ingot");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount16").innerHTML = localStorage.getItem("item_iron_ingot");
        }
    }
    //Sell item17
    if(sellMace == true)
    {
        if(parseInt(localStorage.getItem("item_mace")) >=1)
        {
            localStorage.setItem("item_mace", --(document.getElementById("amount17").innerHTML));
            localStorage.setItem("silver_coins", parseInt(document.getElementById("silverdenar").innerHTML) + 25);
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount17").innerHTML = localStorage.getItem("item_mace");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount17").innerHTML = localStorage.getItem("item_mace");
        }
    }
    //Sell item18
    if(sellMaul == true)
    {
        if(parseInt(localStorage.getItem("item_maul")) >=1)
        {
            localStorage.setItem("item_maul", --(document.getElementById("amount18").innerHTML));
            localStorage.setItem("silver_coins", parseInt(document.getElementById("silverdenar").innerHTML) + 10);
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount18").innerHTML = localStorage.getItem("item_maul");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount18").innerHTML = localStorage.getItem("item_maul");
        }
    }
    //Sell item19
    if(sellMedicalliquid == true)
    {
        if(parseInt(localStorage.getItem("item_medical_liquid")) >=1)
        {
            localStorage.setItem("item_medical_liquid", --(document.getElementById("amount19").innerHTML));
            localStorage.setItem("golden_coins", parseInt(document.getElementById("golddenar").innerHTML) + 1);
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount19").innerHTML = localStorage.getItem("item_medical_liquid");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount19").innerHTML = localStorage.getItem("item_medical_liquid");
        }
    }
    //Sell item20
    if(sellMoonstone == true)
    {
        if(parseInt(localStorage.getItem("item_moon_stone")) >=1)
        {
            localStorage.setItem("item_moon_stone", --(document.getElementById("amount20").innerHTML));
            localStorage.setItem("golden_coins", parseInt(document.getElementById("golddenar").innerHTML) + 2000);
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount20").innerHTML = localStorage.getItem("item_moon_stone");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount20").innerHTML = localStorage.getItem("item_moon_stone");
        }
    }
    //Sell item21
    if(sellMoonballista == true)
    {
        if(parseInt(localStorage.getItem("item_moonballista")) >=1)
        {
            localStorage.setItem("item_moonballista", --(document.getElementById("amount21").innerHTML));
            localStorage.setItem("golden_coins", parseInt(document.getElementById("golddenar").innerHTML) + 10000);
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount21").innerHTML = localStorage.getItem("item_moonballista");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount21").innerHTML = localStorage.getItem("item_moonballista");
        }
    }
    //Sell item22
    if(sellRawmeat == true)
    {
        if(parseInt(localStorage.getItem("item_raw_meat")) >=1)
        {
            localStorage.setItem("item_raw_meat", --(document.getElementById("amount22").innerHTML));
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) + 10);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount22").innerHTML = localStorage.getItem("item_raw_meat");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount22").innerHTML = localStorage.getItem("item_raw_meat");
        }
    }
    //Sell item23
    if(sellSail == true)
    {
        if(parseInt(localStorage.getItem("item_sail")) >=1)
        {
            localStorage.setItem("item_sail", --(document.getElementById("amount23").innerHTML));
            localStorage.setItem("golden_coins", parseInt(document.getElementById("golddenar").innerHTML) + 10);
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount23").innerHTML = localStorage.getItem("item_sail");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount23").innerHTML = localStorage.getItem("item_sail");
        }
    }
    //Sell item24
    if(sellSand == true)
    {
        if(parseInt(localStorage.getItem("item_sand")) >=1)
        {
            localStorage.setItem("item_sand", --(document.getElementById("amount24").innerHTML));
            localStorage.setItem("silver_coins", parseInt(document.getElementById("silverdenar").innerHTML) + 2);
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount24").innerHTML = localStorage.getItem("item_sand");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount24").innerHTML = localStorage.getItem("item_sand");
        }
    }
    //Sell item25
    if(sellShield == true)
    {
        if(parseInt(localStorage.getItem("item_shield")) >=1)
        {
            localStorage.setItem("item_shield", --(document.getElementById("amount25").innerHTML));
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) + 50);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount25").innerHTML = localStorage.getItem("item_shield");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount25").innerHTML = localStorage.getItem("item_shield");
        }
    }
    //Sell item26
    if(sellSilveringot == true)
    {
        if(parseInt(localStorage.getItem("item_silver_ingot")) >=1)
        {
            localStorage.setItem("item_silver_ingot", --(document.getElementById("amount26").innerHTML));
            localStorage.setItem("silver_coins", parseInt(document.getElementById("silverdenar").innerHTML) + 200);
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount26").innerHTML = localStorage.getItem("item_silver_ingot");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount26").innerHTML = localStorage.getItem("item_silver_ingot");
        }
    }
    //Sell item27
    if(sellSpear == true)
    {
        if(parseInt(localStorage.getItem("item_spear")) >=1)
        {
            localStorage.setItem("item_spear", --(document.getElementById("amount27").innerHTML));
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) + 75);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount27").innerHTML = localStorage.getItem("item_spear");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount27").innerHTML = localStorage.getItem("item_spear");
        }
    }
    //Sell item28
    if(sellStone == true)
    {
        if(parseInt(localStorage.getItem("item_stone")) >=1)
        {
            localStorage.setItem("item_stone", --(document.getElementById("amount28").innerHTML));
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) + 150);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount28").innerHTML = localStorage.getItem("item_stone");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount28").innerHTML = localStorage.getItem("item_stone");
        }
    }
    //Sell item29
    if(sellSword == true)
    {
        if(parseInt(localStorage.getItem("item_sword")) >=1)
        {
            localStorage.setItem("item_sword", --(document.getElementById("amount29").innerHTML));
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) + 50);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount29").innerHTML = localStorage.getItem("item_sword");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount29").innerHTML = localStorage.getItem("item_sword");
        }
    }
    //Sell item30
    if(sellWoodenlogs == true)
    {
        if(parseInt(localStorage.getItem("item_wooden_logs")) >=1)
        {
            localStorage.setItem("item_wooden_logs", --(document.getElementById("amount30").innerHTML));
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) + 100);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount30").innerHTML = localStorage.getItem("item_wooden_logs");
        }
        else
        {
            alert("Not enough goods!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount30").innerHTML = localStorage.getItem("item_wooden_logs");
        }
    }
});

//Buying items
$("#buy-price").on("click", function()
{
    document.getElementById("copperdenar").innerHTML = parseInt(localStorage.getItem("copper_coins"));
    document.getElementById("silverdenar").innerHTML = parseInt(localStorage.getItem("silver_coins"));
    document.getElementById("golddenar").innerHTML = parseInt(localStorage.getItem("golden_coins"));
    document.getElementById("amount01").innerHTML = parseInt(localStorage.getItem("item_axe"));
    document.getElementById("amount02").innerHTML = parseInt(localStorage.getItem("item_bag_of_arrows"));
    document.getElementById("amount03").innerHTML = parseInt(localStorage.getItem("item_bow"));
    document.getElementById("amount04").innerHTML = parseInt(localStorage.getItem("item_bread"));
    document.getElementById("amount05").innerHTML = parseInt(localStorage.getItem("item_coal"));
    document.getElementById("amount06").innerHTML = parseInt(localStorage.getItem("item_copper_ingot"));
    document.getElementById("amount07").innerHTML = parseInt(localStorage.getItem("item_crossbow"));
    document.getElementById("amount08").innerHTML = parseInt(localStorage.getItem("item_fruit_basket"));
    document.getElementById("amount09").innerHTML = parseInt(localStorage.getItem("item_glass"));
    document.getElementById("amount10").innerHTML = parseInt(localStorage.getItem("item_gold_ingot"));
    document.getElementById("amount11").innerHTML = parseInt(localStorage.getItem("item_herbal_flower"));
    document.getElementById("amount12").innerHTML = parseInt(localStorage.getItem("item_herbs"));
    document.getElementById("amount13").innerHTML = parseInt(localStorage.getItem("item_ice_cube"));
    document.getElementById("amount14").innerHTML = parseInt(localStorage.getItem("item_iron_bucket_with_oil"));
    document.getElementById("amount15").innerHTML = parseInt(localStorage.getItem("item_iron_bucket"));
    document.getElementById("amount16").innerHTML = parseInt(localStorage.getItem("item_iron_ingot"));
    document.getElementById("amount17").innerHTML = parseInt(localStorage.getItem("item_mace"));
    document.getElementById("amount18").innerHTML = parseInt(localStorage.getItem("item_maul"));
    document.getElementById("amount19").innerHTML = parseInt(localStorage.getItem("item_medical_liquid"));
    document.getElementById("amount20").innerHTML = parseInt(localStorage.getItem("item_moon_stone"));
    document.getElementById("amount21").innerHTML = parseInt(localStorage.getItem("item_moonballista"));
    document.getElementById("amount22").innerHTML = parseInt(localStorage.getItem("item_raw_meat"));
    document.getElementById("amount23").innerHTML = parseInt(localStorage.getItem("item_sail"));
    document.getElementById("amount24").innerHTML = parseInt(localStorage.getItem("item_sand"));
    document.getElementById("amount25").innerHTML = parseInt(localStorage.getItem("item_shield"));
    document.getElementById("amount26").innerHTML = parseInt(localStorage.getItem("item_silver_ingot"));
    document.getElementById("amount27").innerHTML = parseInt(localStorage.getItem("item_spear"));
    document.getElementById("amount28").innerHTML = parseInt(localStorage.getItem("item_stone"));
    document.getElementById("amount29").innerHTML = parseInt(localStorage.getItem("item_sword"));
    document.getElementById("amount30").innerHTML = parseInt(localStorage.getItem("item_wooden_logs"));
    //Buy item01
    if(buyAxe == true)
    {
        if(parseInt(localStorage.getItem("copper_coins")) >=10)
        {
            localStorage.setItem("item_axe", ++(document.getElementById("amount01").innerHTML) );
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) - 10);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount01").innerHTML = localStorage.getItem("item_axe");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount01").innerHTML = localStorage.getItem("item_axe");
        }
    }
    //Buy item02
    if(buyBagofArrows == true)
    {
        if(parseInt(localStorage.getItem("silver_coins")) >=10)
        {
            localStorage.setItem("item_bag_of_arrows", ++(document.getElementById("amount02").innerHTML) );
            localStorage.setItem("silver_coins", parseInt(document.getElementById("silverdenar").innerHTML) - 10);
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount02").innerHTML = localStorage.getItem("item_bag_of_arrows");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount02").innerHTML = localStorage.getItem("item_bag_of_arrows");
        }
    }
    //Buy item03
    if(buyBow == true)
    {
        if(parseInt(localStorage.getItem("golden_coins")) >=10)
        {
            localStorage.setItem("item_bow", ++(document.getElementById("amount03").innerHTML) );
            localStorage.setItem("golden_coins", parseInt(document.getElementById("golddenar").innerHTML) - 10);
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount03").innerHTML = localStorage.getItem("item_bow");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount03").innerHTML = localStorage.getItem("item_bow");
        }
    }
    //Buy item04
    if(buyBread == true)
    {
        if(parseInt(localStorage.getItem("copper_coins")) >=30)
        {
            localStorage.setItem("item_bread", ++(document.getElementById("amount04").innerHTML) );
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) - 30);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount04").innerHTML = localStorage.getItem("item_bread");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount04").innerHTML = localStorage.getItem("item_bread");
        }
    }
    //Buy item05
    if(buyCoal == true)
    {
        if(parseInt(localStorage.getItem("silver_coins")) >=75)
        {
            localStorage.setItem("item_coal", ++(document.getElementById("amount05").innerHTML) );
            localStorage.setItem("silver_coins", parseInt(document.getElementById("silverdenar").innerHTML) - 75);
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount05").innerHTML = localStorage.getItem("item_coal");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount05").innerHTML = localStorage.getItem("item_coal");
        }
    }
    //Buy item06
    if(buyCopperingot == true)
    {
        if(parseInt(localStorage.getItem("copper_coins")) >=100)
        {
            localStorage.setItem("item_copper_ingot", ++(document.getElementById("amount06").innerHTML) );
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) - 100);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount06").innerHTML = localStorage.getItem("item_copper_ingot");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount06").innerHTML = localStorage.getItem("item_copper_ingot");
        }
    }
    //Buy item07
    if(buyCrossbow == true)
    {
        if(parseInt(localStorage.getItem("silver_coins")) >=5)
        {
            localStorage.setItem("item_crossbow", ++(document.getElementById("amount07").innerHTML) );
            localStorage.setItem("silver_coins", parseInt(document.getElementById("silverdenar").innerHTML) - 5);
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount07").innerHTML = localStorage.getItem("item_crossbow");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount07").innerHTML = localStorage.getItem("item_crossbow");
        }
    }
    //Buy item08
    if(buyFruitbasket == true)
    {
        if(parseInt(localStorage.getItem("copper_coins")) >=100)
        {
            localStorage.setItem("item_fruit_basket", ++(document.getElementById("amount08").innerHTML) );
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) - 100);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount08").innerHTML = localStorage.getItem("item_fruit_basket");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount08").innerHTML = localStorage.getItem("item_fruit_basket");
        }
    }
    //Buy item09
    if(buyGlass == true)
    {
        if(parseInt(localStorage.getItem("copper_coins")) >=40)
        {
            localStorage.setItem("item_glass", ++(document.getElementById("amount09").innerHTML) );
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) - 40);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount09").innerHTML = localStorage.getItem("item_glass");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount09").innerHTML = localStorage.getItem("item_glass");
        }
    }
    //Buy item10
    if(buyGoldingot == true)
    {
        if(parseInt(localStorage.getItem("golden_coins")) >=50)
        {
            localStorage.setItem("item_gold_ingot", ++(document.getElementById("amount10").innerHTML) );
            localStorage.setItem("golden_coins", parseInt(document.getElementById("golddenar").innerHTML) - 50);
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount10").innerHTML = localStorage.getItem("item_gold_ingot");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount10").innerHTML = localStorage.getItem("item_gold_ingot");
        }
    }
    //Buy item11
    if(buyHerbalflower == true)
    {
        if(parseInt(localStorage.getItem("golden_coins")) >=8)
        {
            localStorage.setItem("item_herbal_flower", ++(document.getElementById("amount11").innerHTML) );
            localStorage.setItem("golden_coins", parseInt(document.getElementById("golddenar").innerHTML) - 8);
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount11").innerHTML = localStorage.getItem("item_herbal_flower");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount11").innerHTML = localStorage.getItem("item_herbal_flower");
        }
    }
    //Buy item12
    if(buyHerbs == true)
    {
        if(parseInt(localStorage.getItem("golden_coins")) >=4)
        {
            localStorage.setItem("item_herbs", ++(document.getElementById("amount12").innerHTML) );
            localStorage.setItem("golden_coins", parseInt(document.getElementById("golddenar").innerHTML) - 4);
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount12").innerHTML = localStorage.getItem("item_herbs");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount12").innerHTML = localStorage.getItem("item_herbs");
        }
    }
    //Buy item13
    if(buyIcecube == true)
    {
        if(parseInt(localStorage.getItem("copper_coins")) >=100)
        {
            localStorage.setItem("item_ice_cube", ++(document.getElementById("amount13").innerHTML) );
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) - 100);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount13").innerHTML = localStorage.getItem("item_ice_cube");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount13").innerHTML = localStorage.getItem("item_ice_cube");
        }
    }
    //Buy item14
    if(buyIronbucketwithoil == true)
    {
        if(parseInt(localStorage.getItem("golden_coins")) >=1000)
        {
            localStorage.setItem("item_iron_bucket_with_oil", ++(document.getElementById("amount14").innerHTML) );
            localStorage.setItem("golden_coins", parseInt(document.getElementById("golddenar").innerHTML) - 1000);
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount14").innerHTML = localStorage.getItem("item_iron_bucket_with_oil");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount14").innerHTML = localStorage.getItem("item_iron_bucket_with_oil");
        }
    }
    //Buy item15
    if(buyIronbucket == true)
    {
        if(parseInt(localStorage.getItem("silver_coins")) >=50)
        {
            localStorage.setItem("item_iron_bucket", ++(document.getElementById("amount15").innerHTML) );
            localStorage.setItem("silver_coins", parseInt(document.getElementById("silverdenar").innerHTML) - 50);
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount15").innerHTML = localStorage.getItem("item_iron_bucket");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount15").innerHTML = localStorage.getItem("item_iron_bucket");
        }
    }
    //Buy item16
    if(buyIroningot == true)
    {
        if(parseInt(localStorage.getItem("silver_coins")) >=200)
        {
            localStorage.setItem("item_iron_ingot", ++(document.getElementById("amount16").innerHTML) );
            localStorage.setItem("silver_coins", parseInt(document.getElementById("silverdenar").innerHTML) - 200);
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount16").innerHTML = localStorage.getItem("item_iron_ingot");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount16").innerHTML = localStorage.getItem("item_iron_ingot");
        }
    }
    //Buy item17
    if(buyMace == true)
    {
        if(parseInt(localStorage.getItem("silver_coins")) >=25)
        {
            localStorage.setItem("item_mace", ++(document.getElementById("amount17").innerHTML) );
            localStorage.setItem("silver_coins", parseInt(document.getElementById("silverdenar").innerHTML) - 25);
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount17").innerHTML = localStorage.getItem("item_mace");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount17").innerHTML = localStorage.getItem("item_mace");
        }
    }
    //Buy item18
    if(buyMaul == true)
    {
        if(parseInt(localStorage.getItem("silver_coins")) >=10)
        {
            localStorage.setItem("item_maul", ++(document.getElementById("amount18").innerHTML) );
            localStorage.setItem("silver_coins", parseInt(document.getElementById("silverdenar").innerHTML) - 10);
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount18").innerHTML = localStorage.getItem("item_maul");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount18").innerHTML = localStorage.getItem("item_maul");
        }
    }
    //Buy item19
    if(buyMedicalliquid == true)
    {
        if(parseInt(localStorage.getItem("golden_coins")) >=1)
        {
            localStorage.setItem("item_medical_liquid", ++(document.getElementById("amount19").innerHTML) );
            localStorage.setItem("golden_coins", parseInt(document.getElementById("golddenar").innerHTML) - 1);
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount19").innerHTML = localStorage.getItem("item_medical_liquid");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount19").innerHTML = localStorage.getItem("item_medical_liquid");
        }
    }
    //Buy item20
    if(buyMoonstone == true)
    {
        if(parseInt(localStorage.getItem("golden_coins")) >=2000)
        {
            localStorage.setItem("item_moon_stone", ++(document.getElementById("amount20").innerHTML) );
            localStorage.setItem("golden_coins", parseInt(document.getElementById("golddenar").innerHTML) - 2000);
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount20").innerHTML = localStorage.getItem("item_moon_stone");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount20").innerHTML = localStorage.getItem("item_moon_stone");
        }
    }
    //Buy item21
    if(buyMoonballista == true)
    {
        if(parseInt(localStorage.getItem("golden_coins")) >=10000)
        {
            localStorage.setItem("item_moonballista", ++(document.getElementById("amount21").innerHTML) );
            localStorage.setItem("golden_coins", parseInt(document.getElementById("golddenar").innerHTML) - 10000);
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount21").innerHTML = localStorage.getItem("item_moonballista");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount21").innerHTML = localStorage.getItem("item_moonballista");
        }
    }
    //Buy item22
    if(buyRawmeat == true)
    {
        if(parseInt(localStorage.getItem("copper_coins")) >=10)
        {
            localStorage.setItem("item_raw_meat", ++(document.getElementById("amount22").innerHTML) );
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) - 10);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount22").innerHTML = localStorage.getItem("item_raw_meat");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount22").innerHTML = localStorage.getItem("item_raw_meat");
        }
    }
    //Buy item23
    if(buySail == true)
    {
        if(parseInt(localStorage.getItem("golden_coins")) >=10)
        {
            localStorage.setItem("item_sail", ++(document.getElementById("amount23").innerHTML) );
            localStorage.setItem("golden_coins", parseInt(document.getElementById("golddenar").innerHTML) - 10);
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount23").innerHTML = localStorage.getItem("item_sail");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("golddenar").innerHTML = localStorage.getItem("golden_coins");
            document.getElementById("amount23").innerHTML = localStorage.getItem("item_sail");
        }
    }
    //Buy item24
    if(buySand == true)
    {
        if(parseInt(localStorage.getItem("silver_coins")) >=2)
        {
            localStorage.setItem("item_sand", ++(document.getElementById("amount24").innerHTML) );
            localStorage.setItem("silver_coins", parseInt(document.getElementById("silverdenar").innerHTML) - 2);
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount24").innerHTML = localStorage.getItem("item_sand");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount24").innerHTML = localStorage.getItem("item_sand");
        }
    }
    //Buy item25
    if(buyShield == true)
    {
        if(parseInt(localStorage.getItem("copper_coins")) >=50)
        {
            localStorage.setItem("item_shield", ++(document.getElementById("amount25").innerHTML) );
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) - 50);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount25").innerHTML = localStorage.getItem("item_shield");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount25").innerHTML = localStorage.getItem("item_shield");
        }
    }
    //Buy item26
    if(buySilveringot == true)
    {
        if(parseInt(localStorage.getItem("silver_coins")) >=200)
        {
            localStorage.setItem("item_silver_ingot", ++(document.getElementById("amount26").innerHTML) );
            localStorage.setItem("silver_coins", parseInt(document.getElementById("silverdenar").innerHTML) - 200);
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount26").innerHTML = localStorage.getItem("item_silver_ingot");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("silverdenar").innerHTML = localStorage.getItem("silver_coins");
            document.getElementById("amount26").innerHTML = localStorage.getItem("item_silver_ingot");
        }
    }
    //Buy item27
    if(buySpear == true)
    {
        if(parseInt(localStorage.getItem("copper_coins")) >=75)
        {
            localStorage.setItem("item_spear", ++(document.getElementById("amount27").innerHTML) );
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) - 75);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount27").innerHTML = localStorage.getItem("item_spear");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount27").innerHTML = localStorage.getItem("item_spear");
        }
    }
    //Buy item28
    if(buyStone == true)
    {
        if(parseInt(localStorage.getItem("copper_coins")) >=150)
        {
            localStorage.setItem("item_stone", ++(document.getElementById("amount28").innerHTML) );
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) - 150);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount28").innerHTML = localStorage.getItem("item_stone");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount28").innerHTML = localStorage.getItem("item_stone");
        }
    }
    //Buy item29
    if(buySword == true)
    {
        if(parseInt(localStorage.getItem("copper_coins")) >=50)
        {
            localStorage.setItem("item_sword", ++(document.getElementById("amount29").innerHTML) );
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) - 50);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount29").innerHTML = localStorage.getItem("item_sword");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount29").innerHTML = localStorage.getItem("item_sword");
        }
    }
    //Buy item30
    if(buyWoodenlogs == true)
    {
        if(parseInt(localStorage.getItem("copper_coins")) >=50)
        {
            localStorage.setItem("item_wooden_logs", ++(document.getElementById("amount30").innerHTML) );
            localStorage.setItem("copper_coins", parseInt(document.getElementById("copperdenar").innerHTML) - 100);
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount30").innerHTML = localStorage.getItem("item_wooden_logs");
        }
        else
        {
            alert("Not enough denar!");
            document.getElementById("copperdenar").innerHTML = localStorage.getItem("copper_coins");
            document.getElementById("amount30").innerHTML = localStorage.getItem("item_wooden_logs");
        }
    }
});