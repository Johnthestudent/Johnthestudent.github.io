document.getElementById("researchpoints").innerHTML = localStorage.getItem("points_to_level_up");

console.log(localStorage.getItem("mommy_enabled"));
console.log(localStorage.getItem("helper_enabled"));

//Level 1 of medic skill
function level01medic()
{
  document.getElementById("researchpoints").innerHTML = parseInt(localStorage.getItem("points_to_level_up"))
  if((document.getElementById("researchpoints").innerHTML)> 0 && localStorage.getItem("mediclevel01") != 0)
  {
      localStorage.setItem("points_to_level_up", --(document.getElementById("researchpoints").innerHTML));
      document.getElementById("researchpoints").innerHTML = localStorage.getItem("points_to_level_up");
      $(".medic01").css('opacity', '1');
      alert("Medic level 1 unlocked.");
      localStorage.setItem("mediclevel01", 0);
  }
  else if((document.getElementById("researchpoints").innerHTML) == 0 && localStorage.getItem("mediclevel01") != 0)
  {
      alert("You are out of points! Gather experience and level up to gain more points!");
  }
  if($(".medic01").css('opacity') == '1')
  {
    alert("Medic level 1 is already unlocked!");
    //localStorage.setItem("points_to_level_up", document.getElementById("researchpoints").innerHTML);
  }
}
  
if(localStorage.getItem("mediclevel01") == 0)
{
  $(".medic01").css('opacity', '1');
}

//Level 2 of medic skill
function level02medic()
{
  if($(".medic01").css('opacity') != '1')
  {
    alert("Unlock level 1 first!");
  }
  else
  {
    document.getElementById("researchpoints").innerHTML = parseInt(localStorage.getItem("points_to_level_up"))
    if((document.getElementById("researchpoints").innerHTML)>= 2 && localStorage.getItem("mediclevel02") != 0)
    {
        localStorage.setItem("points_to_level_up", (document.getElementById("researchpoints").innerHTML) - 2);
        document.getElementById("researchpoints").innerHTML = localStorage.getItem("points_to_level_up");
        $(".medic02").css('opacity', '1');
        alert("Medic level 2 unlocked.");
        localStorage.setItem("mediclevel02", 0);
    }
    else if((document.getElementById("researchpoints").innerHTML) < 2 && localStorage.getItem("mediclevel01") != 0)
    {
        alert("You are out of points! Gather experience and level up to gain more points!");
    }
    if($(".medic02").css('opacity') == '1')
    {
      alert("Medic level 2 is already unlocked!");
    }
  }
}

if(localStorage.getItem("mediclevel02") == 0)
{
  $(".medic02").css('opacity', '1');
}

//Level 3 of medic skill
function level03medic()
{
  if($(".medic02").css('opacity') != '1')
  {
    alert("Unlock level 2 first!");
  }
  else
  {
    document.getElementById("researchpoints").innerHTML = parseInt(localStorage.getItem("points_to_level_up"))
    if((document.getElementById("researchpoints").innerHTML)>= 4 && localStorage.getItem("mediclevel03") != 0)
    {
        localStorage.setItem("points_to_level_up", (document.getElementById("researchpoints").innerHTML) - 4);
        document.getElementById("researchpoints").innerHTML = localStorage.getItem("points_to_level_up");
        $(".medic03").css('opacity', '1');
        alert("Medic level 3 unlocked.");
        localStorage.setItem("mediclevel03", 0);
    }
    else if((document.getElementById("researchpoints").innerHTML) < 4 && localStorage.getItem("mediclevel03") != 0)
    {
        alert("You are out of points! Gather experience and level up to gain more points!");
    }
    if($(".medic03").css('opacity') == '1')
    {
      alert("Medic level 3 is already unlocked!");
    }
  }
}

if(localStorage.getItem("mediclevel03") == 0)
{
  $(".medic03").css('opacity', '1');
}

//Level 4 of medic skill
function level04medic()
{
  if($(".medic03").css('opacity') != '1')
  {
    alert("Unlock level 3 first!");
  }
  else
  {
    document.getElementById("researchpoints").innerHTML = parseInt(localStorage.getItem("points_to_level_up"))
    if((document.getElementById("researchpoints").innerHTML)>= 8 && localStorage.getItem("mediclevel04") != 0)
    {
        localStorage.setItem("points_to_level_up", (document.getElementById("researchpoints").innerHTML) - 8);
        document.getElementById("researchpoints").innerHTML = localStorage.getItem("points_to_level_up");
        $(".medic04").css('opacity', '1');
        alert("Medic level 4 unlocked.");
        localStorage.setItem("mediclevel04", 0);
    }
    else if((document.getElementById("researchpoints").innerHTML) < 8 && localStorage.getItem("mediclevel04") != 0)
    {
        alert("You are out of points! Gather experience and level up to gain more points!");
    }
    if($(".medic04").css('opacity') == '1')
    {
      alert("Medic level 4 is already unlocked!");
    }
  }
}

if(localStorage.getItem("mediclevel04") == 0)
{
  $(".medic04").css('opacity', '1');
}

//Level 1 of miner skill
function level01miner()
{
  document.getElementById("researchpoints").innerHTML = parseInt(localStorage.getItem("points_to_level_up"))
  if((document.getElementById("researchpoints").innerHTML)> 0 && localStorage.getItem("minerlevel01") != 0)
  {
    localStorage.setItem("points_to_level_up", --(document.getElementById("researchpoints").innerHTML));
    document.getElementById("researchpoints").innerHTML = localStorage.getItem("points_to_level_up");
    $(".miner01").css('opacity', '1');
    alert("Miner level 1 unlocked.");
    localStorage.setItem("minerlevel01", 0);
  }
  else if((document.getElementById("researchpoints").innerHTML) == 0 && localStorage.getItem("minerlevel01") != 0)
  {
    alert("You are out of points! Gather experience and level up to gain more points!");
  }
  if($(".miner01").css('opacity') == '1')
  {
    alert("Miner level 1 is already unlocked!");
  }
}

if(localStorage.getItem("minerlevel01") == 0)
{
  $(".miner01").css('opacity', '1');
}

//Level 2 of miner skill
function level02miner()
{
  if($(".miner01").css('opacity') != '1')
  {
    alert("Unlock level 1 first!");
  }
  else
  {
    document.getElementById("researchpoints").innerHTML = parseInt(localStorage.getItem("points_to_level_up"))
    if((document.getElementById("researchpoints").innerHTML)>= 2 && localStorage.getItem("minerlevel02") != 0)
    {
        localStorage.setItem("points_to_level_up", (document.getElementById("researchpoints").innerHTML) - 2);
        document.getElementById("researchpoints").innerHTML = localStorage.getItem("points_to_level_up");
        $(".miner02").css('opacity', '1');
        alert("Miner level 2 unlocked.");
        localStorage.setItem("minerlevel02", 0);
    }
    else if((document.getElementById("researchpoints").innerHTML) < 2 && localStorage.getItem("minerlevel02") != 0)
    {
        alert("You are out of points! Gather experience and level up to gain more points!");
    }
    if($(".miner02").css('opacity') == '1')
    {
      alert("Miner level 2 is already unlocked!");
    }
  }
}

if(localStorage.getItem("minerlevel02") == 0)
{
  $(".miner02").css('opacity', '1');
}

//Level 3 of miner skill
function level03miner()
{
  if($(".miner02").css('opacity') != '1')
  {
    alert("Unlock level 2 first!");
  }
  else
  {
    document.getElementById("researchpoints").innerHTML = parseInt(localStorage.getItem("points_to_level_up"))
    if((document.getElementById("researchpoints").innerHTML)>= 4 && localStorage.getItem("minerlevel03") != 0)
    {
        localStorage.setItem("points_to_level_up", (document.getElementById("researchpoints").innerHTML) - 4);
        document.getElementById("researchpoints").innerHTML = localStorage.getItem("points_to_level_up");
        $(".miner03").css('opacity', '1');
        alert("Miner level 3 unlocked.");
        localStorage.setItem("minerlevel03", 0);
    }
    else if((document.getElementById("researchpoints").innerHTML) < 4 && localStorage.getItem("minerlevel03") != 0)
    {
        alert("You are out of points! Gather experience and level up to gain more points!");
    }
    if($(".miner03").css('opacity') == '1')
    {
      alert("Miner level 3 is already unlocked!");
    }
  }
}

if(localStorage.getItem("minerlevel03") == 0)
{
  $(".miner03").css('opacity', '1');
}

//Level 4 of miner skill
function level04miner()
{
  if($(".miner03").css('opacity') != '1')
  {
    alert("Unlock level 3 first!");
  }
  else
  {
    document.getElementById("researchpoints").innerHTML = parseInt(localStorage.getItem("points_to_level_up"))
    if((document.getElementById("researchpoints").innerHTML)>= 8 && localStorage.getItem("minerlevel04") != 0)
    {
        localStorage.setItem("points_to_level_up", (document.getElementById("researchpoints").innerHTML) - 8);
        document.getElementById("researchpoints").innerHTML = localStorage.getItem("points_to_level_up");
        $(".miner04 ").css('opacity', '1');
        alert("Miner level 4 unlocked.");
        localStorage.setItem("minerlevel04", 0);
    }
    else if((document.getElementById("researchpoints").innerHTML) < 8 && localStorage.getItem("minerlevel04") != 0)
    {
        alert("You are out of points! Gather experience and level up to gain more points!");
    }
    if($(".miner04").css('opacity') == '1')
    {
      alert("Miner level 4 is already unlocked!");
    }
  }
}

if(localStorage.getItem("minerlevel04") == 0)
{
  $(".miner04").css('opacity', '1');
}

//Level 1 of builder skill
function level01builder()
{
  document.getElementById("researchpoints").innerHTML = parseInt(localStorage.getItem("points_to_level_up"))
  if((document.getElementById("researchpoints").innerHTML)> 0 && localStorage.getItem("builderlevel01") != 0)
  {
    localStorage.setItem("points_to_level_up", --(document.getElementById("researchpoints").innerHTML));
    document.getElementById("researchpoints").innerHTML = localStorage.getItem("points_to_level_up");
    $(".builder01").css('opacity', '1');
    alert("Builder 1 unlocked.");
    localStorage.setItem("builderlevel01", 0);
  }
  else if((document.getElementById("researchpoints").innerHTML) == 0 && localStorage.getItem("builderlevel01") != 0)
  {
    alert("You are out of points! Gather experience and level up to gain more points!");
  }
  if($(".builder01").css('opacity') == '1')
  {
    alert("Builder level 1 is already unlocked!");
  }
}

if(localStorage.getItem("builderlevel01") == 0)
{
  $(".builder01").css('opacity', '1');
}

//Level 2 of builder skill
function level02builder()
{
  if($(".builder01").css('opacity') != '1')
  {
    alert("Unlock level 1 first!");
  }
  else
  {
    document.getElementById("researchpoints").innerHTML = parseInt(localStorage.getItem("points_to_level_up"))
    if((document.getElementById("researchpoints").innerHTML)>= 2 && localStorage.getItem("builderlevel02") != 0)
    {
        localStorage.setItem("points_to_level_up", (document.getElementById("researchpoints").innerHTML) - 2);
        document.getElementById("researchpoints").innerHTML = localStorage.getItem("points_to_level_up");
        $(".builder02").css('opacity', '1');
        alert("Builder level 2 unlocked.");
        localStorage.setItem("builderlevel02", 0);
    }
    else if((document.getElementById("researchpoints").innerHTML) < 2 && localStorage.getItem("builderlevel02") != 0)
    {
        alert("You are out of points! Gather experience and level up to gain more points!");
    }
    if($(".builder02").css('opacity') == '1')
    {
      alert("Builder level 2 is already unlocked!");
    }
  }
}

if(localStorage.getItem("builderlevel02") == 0)
{
  $(".builder02").css('opacity', '1');
}

//Level 3 of builder skill
function level03builder()
{
  if($(".builder02").css('opacity') != '1')
  {
    alert("Unlock level 2 first!");
  }
  else
  {
    document.getElementById("researchpoints").innerHTML = parseInt(localStorage.getItem("points_to_level_up"))
    if((document.getElementById("researchpoints").innerHTML)>= 4 && localStorage.getItem("builderlevel03") != 0)
    {
        localStorage.setItem("points_to_level_up", (document.getElementById("researchpoints").innerHTML) - 4);
        document.getElementById("researchpoints").innerHTML = localStorage.getItem("points_to_level_up");
        $(".builder03").css('opacity', '1');
        alert("Builder level 3 unlocked.");
        localStorage.setItem("builderlevel03", 0);
    }
    else if((document.getElementById("researchpoints").innerHTML) < 4 && localStorage.getItem("builderlevel03") != 0)
    {
        alert("You are out of points! Gather experience and level up to gain more points!");
    }
    if($(".builder03").css('opacity') == '1')
    {
      alert("Builder level 3 is already unlocked!");
    }
  }
}

if(localStorage.getItem("builderlevel03") == 0)
{
  $(".builder03").css('opacity', '1');
}

//Level 4 of builder skill
function level04builder()
{
  if($(".builder03").css('opacity') != '1')
  {
    alert("Unlock level 3 first!");
  }
  else
  {
    document.getElementById("researchpoints").innerHTML = parseInt(localStorage.getItem("points_to_level_up"))
    if((document.getElementById("researchpoints").innerHTML)>= 8 && localStorage.getItem("builderlevel04") != 0)
    {
        localStorage.setItem("points_to_level_up", (document.getElementById("researchpoints").innerHTML) - 8);
        document.getElementById("researchpoints").innerHTML = localStorage.getItem("points_to_level_up");
        $(".builder04").css('opacity', '1');
        alert("Builder level 4 unlocked.");
        localStorage.setItem("builderlevel04", 0);
    }
    else if((document.getElementById("researchpoints").innerHTML) < 8 && localStorage.getItem("builderlevel04") != 0)
    {
        alert("You are out of points! Gather experience and level up to gain more points!");
    }
    if($(".builder04").css('opacity') == '1')
    {
      alert("Builder level 4 is already unlocked!");
    }
  }
}

if(localStorage.getItem("builderlevel04") == 0)
{
  $(".builder04").css('opacity', '1');
}