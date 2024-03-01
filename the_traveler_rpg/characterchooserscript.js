//Localstorage experiment
var hero_name = "";
var hero_health = "";
var hero_attack = "";
var hero_defense = "";
var hero_speed = "";
var hero_intelligence = "";

//Stats of the heroes
//Mary
if ($("#thehero").attr("src") == "Character sources/Hero_Mary.png") 
{
  valami = document.getElementById("aboutthecharacter");
  txt = document.createTextNode(
    "Mary is a jungle girl, who was raised by a wolf pack and a black panther living on a jungle island. She is a swift and energetic jungle girl, with tenderness and goofiness."
  );
  valami.appendChild(txt);

  hero_name = "Mary";
  hero_health = 100;
  hero_attack = 80;
  hero_defense = 70;
  hero_speed = 100;
  hero_intelligence = 40;
  $("#namevalue").html(hero_name);
  $("#healthvalue").html(hero_health);
  $("#attackvalue").html(hero_attack);
  $("#defensevalue").html(hero_defense);
  $("#speedvalue").html(hero_speed);
  $("#intelligencevalue").html(hero_intelligence);

  localStorage.setItem("hero_name", "Mary");
  localStorage.setItem("hero_health", 100);
  localStorage.setItem("hero_attack", 80);
  localStorage.setItem("hero_defense", 70);
  localStorage.setItem("hero_speed", 100);
  localStorage.setItem("hero_intelligence", 40);
}
//Nate 
else if ($("#thehero").attr("src") == "Character sources/Hero_Nate.png") 
{
  valami = document.getElementById("aboutthecharacter");
  txt = document.createTextNode(
    "Nate is a professional swordsman from Paradisia. He has high experience in taking down dark creatures."
  );
  valami.appendChild(txt);
  hero_name = "Nate";
  hero_health = 100;
  hero_attack = 90;
  hero_defense = 70;
  hero_speed = 70;
  hero_intelligence = 80;
  $("#namevalue").html(hero_name);
  $("#healthvalue").html(hero_health);
  $("#attackvalue").html(hero_attack);
  $("#defensevalue").html(hero_defense);
  $("#speedvalue").html(hero_speed);
  $("#intelligencevalue").html(hero_intelligence);

  localStorage.setItem("hero_name", "Nate");
  localStorage.setItem("hero_health", 100);
  localStorage.setItem("hero_attack", 90);
  localStorage.setItem("hero_defense", 70);
  localStorage.setItem("hero_speed", 70);
  localStorage.setItem("hero_intelligence", 80);
}
//Ian
else if ($("#thehero").attr("src") == "Character sources/Hero_Ian.png") 
{
  valami = document.getElementById("aboutthecharacter");
  txt = document.createTextNode(
    "Ian is the leader of the Adventurer Guild of London. While not so skilled in combat like his subordinates, his intelligence may come handy in difficult situations."
  );
  valami.appendChild(txt);
  hero_name = "Ian";
  hero_health = 70;
  hero_attack = 40;
  hero_defense = 40;
  hero_speed = 70;
  hero_intelligence = 100;
  $("#namevalue").html(hero_name);
  $("#healthvalue").html(hero_health);
  $("#attackvalue").html(hero_attack);
  $("#defensevalue").html(hero_defense);
  $("#speedvalue").html(hero_speed);
  $("#intelligencevalue").html(hero_intelligence);

  localStorage.setItem("hero_name", "Ian");
  localStorage.setItem("hero_health", 70);
  localStorage.setItem("hero_attack", 40);
  localStorage.setItem("hero_defense", 40);
  localStorage.setItem("hero_speed", 70);
  localStorage.setItem("hero_intelligence", 100);
}
//Emilia
else if ($("#thehero").attr("src") == "Character sources/Hero_Emilia.png") 
{
  valami = document.getElementById("aboutthecharacter");
  txt = document.createTextNode(
    "Emilia came from the jungle of the Amazon. Having been raised by a jaguar and being a rouge jungle warrior until the moment she joined the Adventurer Guild of London, she is a hard case."
  );
  valami.appendChild(txt);
  hero_name = "Emilia";
  hero_health = 80;
  hero_attack = 70;
  hero_defense = 50;
  hero_speed = 100;
  hero_intelligence = 50;
  $("#namevalue").html(hero_name);
  $("#healthvalue").html(hero_health);
  $("#attackvalue").html(hero_attack);
  $("#defensevalue").html(hero_defense);
  $("#speedvalue").html(hero_speed);
  $("#intelligencevalue").html(hero_intelligence);

  localStorage.setItem("hero_name", "Emilia");
  localStorage.setItem("hero_health", 80);
  localStorage.setItem("hero_attack", 70);
  localStorage.setItem("hero_defense", 50);
  localStorage.setItem("hero_speed", 100);
  localStorage.setItem("hero_intelligence", 50);
}
//Olav
else if ($("#thehero").attr("src") == "Character sources/Hero_Olav.png") 
{
  valami = document.getElementById("aboutthecharacter");
  txt = document.createTextNode(
    "Olav is a warrior from Norway. Equipped with axe, having great physical strength, he is a courageous adventurer."
  );
  valami.appendChild(txt);
  hero_name = "Olav";
  hero_health = 90;
  hero_attack = 100;
  hero_defense = 60;
  hero_speed = 60;
  hero_intelligence = 40;
  $("#namevalue").html(hero_name);
  $("#healthvalue").html(hero_health);
  $("#attackvalue").html(hero_attack);
  $("#defensevalue").html(hero_defense);
  $("#speedvalue").html(hero_speed);
  $("#intelligencevalue").html(hero_intelligence);

  localStorage.setItem("hero_name", "Olav");
  localStorage.setItem("hero_health", 90);
  localStorage.setItem("hero_attack", 100);
  localStorage.setItem("hero_defense", 60);
  localStorage.setItem("hero_speed", 60);
  localStorage.setItem("hero_intelligence", 40);
}
//Bo
else if ($("#thehero").attr("src") == "Character sources/Hero_Bo.png") 
{
  valami = document.getElementById("aboutthecharacter");
  txt = document.createTextNode(
    "Bo is a Chinese doctor and an owner of a flower shop. Mastered martial arts and learns really fast."
  );
  valami.appendChild(txt);
  hero_name = "Bo";
  hero_health = 100;
  hero_attack = 50;
  hero_defense = 70;
  hero_speed = 80;
  hero_intelligence = 100;
  $("#namevalue").html(hero_name);
  $("#healthvalue").html(hero_health);
  $("#attackvalue").html(hero_attack);
  $("#defensevalue").html(hero_defense);
  $("#speedvalue").html(hero_speed);
  $("#intelligencevalue").html(hero_intelligence);

  localStorage.setItem("hero_name", "Bo");
  localStorage.setItem("hero_health", 100);
  localStorage.setItem("hero_attack", 50);
  localStorage.setItem("hero_defense", 70);
  localStorage.setItem("hero_speed", 80);
  localStorage.setItem("hero_intelligence", 100);
}
//Ryuzen
else if($("#thehero").attr("src") == "Character sources/Hero_Ryuzen.png")
{
  valami = document.getElementById("aboutthecharacter");
  txt = document.createTextNode(
    "Ryuzen is a loner mercenary. He was reluctant at first before joining the Adventurer Guild of London, but now he is a full-time adventurer."
  );
  valami.appendChild(txt);
  hero_name = "Ryuzen";
  hero_health = 60;
  hero_attack = 90;
  hero_defense = 80;
  hero_speed = 80;
  hero_intelligence = 70;
  $("#namevalue").html(hero_name);
  $("#healthvalue").html(hero_health);
  $("#attackvalue").html(hero_attack);
  $("#defensevalue").html(hero_defense);
  $("#speedvalue").html(hero_speed);
  $("#intelligencevalue").html(hero_intelligence);

  localStorage.setItem("hero_name", "Ryuzen");
  localStorage.setItem("hero_health", 60);
  localStorage.setItem("hero_attack", 90);
  localStorage.setItem("hero_defense", 80);
  localStorage.setItem("hero_speed", 80);
  localStorage.setItem("hero_intelligence", 70);
}
//Daisuke
else if($("#thehero").attr("src") == "Character sources/Hero_Daisuke.png")
{
  valami = document.getElementById("aboutthecharacter");
  txt = document.createTextNode(
    "Daisuke is a samurai adventurer. Excellent swordmaster, and even if he got blind in an accident, he moves around with confidence."
  );
  valami.appendChild(txt);
  hero_name = "Daisuke";
  hero_health = 50;
  hero_attack = 80;
  hero_defense = 80;
  hero_speed = 80;
  hero_intelligence = 100;
  $("#namevalue").html(hero_name);
  $("#healthvalue").html(hero_health);
  $("#attackvalue").html(hero_attack);
  $("#defensevalue").html(hero_defense);
  $("#speedvalue").html(hero_speed);
  $("#intelligencevalue").html(hero_intelligence);

  localStorage.setItem("hero_name", "Daisuke");
  localStorage.setItem("hero_health", 50);
  localStorage.setItem("hero_attack", 80);
  localStorage.setItem("hero_defense", 80);
  localStorage.setItem("hero_speed", 80);
  localStorage.setItem("hero_intelligence", 100);
}
//Erin
else if($("#thehero").attr("src") == "Character sources/Hero_Erin.png")
{
  valami = document.getElementById("aboutthecharacter");
  txt = document.createTextNode(
    "Erin is a gamer girl, with excellent analyzing skills. Being adventurous, she is handy on open field.");
  valami.appendChild(txt);
  hero_name = "Erin";
  hero_health = 70;
  hero_attack = 50;
  hero_defense = 50;
  hero_speed = 70;
  hero_intelligence = 100;
  $("#namevalue").html(hero_name);
  $("#healthvalue").html(hero_health);
  $("#attackvalue").html(hero_attack);
  $("#defensevalue").html(hero_defense);
  $("#speedvalue").html(hero_speed);
  $("#intelligencevalue").html(hero_intelligence);

  localStorage.setItem("hero_name", "Erin");
  localStorage.setItem("hero_health", 70);
  localStorage.setItem("hero_attack", 50);
  localStorage.setItem("hero_defense", 50);
  localStorage.setItem("hero_speed", 70);
  localStorage.setItem("hero_intelligence", 100);     
}
//Midna
else if($("#thehero").attr("src") == "Character sources/Hero_Midna.png")
{
  valami = document.getElementById("aboutthecharacter");
  txt = document.createTextNode(
    "Midna is an adventurer and treasure seeker girl with vividness and curiosity. Have been great assistant to the members of the Adventurer Guild of London for a pretty while.");
  valami.appendChild(txt);
  hero_name = "Midna";
  hero_health = 80;
  hero_attack = 50;
  hero_defense = 60;
  hero_speed = 80;
  hero_intelligence = 90;
  $("#namevalue").html(hero_name);
  $("#healthvalue").html(hero_health);
  $("#attackvalue").html(hero_attack);
  $("#defensevalue").html(hero_defense);
  $("#speedvalue").html(hero_speed);
  $("#intelligencevalue").html(hero_intelligence);

  localStorage.setItem("hero_name", "Midna");
  localStorage.setItem("hero_health", 80);
  localStorage.setItem("hero_attack", 50);
  localStorage.setItem("hero_defense", 60);
  localStorage.setItem("hero_speed", 80);
  localStorage.setItem("hero_intelligence", 90);       
}

//Choose a hero
//Clicking on the right button during hero selection
$("#rightway").on("click", function () {
  //chosing Nate
  if ($("#thehero").attr("src") == "Character sources/Hero_Mary.png") 
  {
    $("#thehero").attr("src", "Character sources/Hero_Nate.png");
    valami = document.getElementById("aboutthecharacter");
    valami.innerHTML = "";
    txt = document.createTextNode(
      "Nate is a professional swordsman from Paradisia. He has high experience in taking down dark creatures."
    );
    valami.appendChild(txt);
    hero_name = "Nate";
    hero_health = 100;
    hero_attack = 90;
    hero_defense = 70;
    hero_speed = 70;
    hero_intelligence = 80;
    $("#namevalue").html(hero_name);
    $("#healthvalue").html(hero_health);
    $("#attackvalue").html(hero_attack);
    $("#defensevalue").html(hero_defense);
    $("#speedvalue").html(hero_speed);
    $("#intelligencevalue").html(hero_intelligence);

    localStorage.setItem("hero_name", "Nate");
    localStorage.setItem("hero_health", 100);
    localStorage.setItem("hero_attack", 90);
    localStorage.setItem("hero_defense", 70);
    localStorage.setItem("hero_speed", 70);
    localStorage.setItem("hero_intelligence", 80);
  }
  //chosing Ian
  else if($("#thehero").attr("src") == "Character sources/Hero_Nate.png")
  {
    $("#thehero").attr("src", "Character sources/Hero_Ian.png");
    valami = document.getElementById("aboutthecharacter");
    valami.innerHTML = "";
    txt = document.createTextNode(
    "Ian is the leader of the Adventurer Guild of London. While not so skilled in combat like his subordinates, his intelligence may come handy in difficult situations.");
    valami.appendChild(txt);
    hero_name = "Ian";
    hero_health = 70;
    hero_attack = 40;
    hero_defense = 40;
    hero_speed = 70;
    hero_intelligence = 100;
    $("#namevalue").html(hero_name);
    $("#healthvalue").html(hero_health);
    $("#attackvalue").html(hero_attack);
    $("#defensevalue").html(hero_defense);
    $("#speedvalue").html(hero_speed);
    $("#intelligencevalue").html(hero_intelligence);

    localStorage.setItem("hero_name", "Ian");
    localStorage.setItem("hero_health", 70);
    localStorage.setItem("hero_attack", 40);
    localStorage.setItem("hero_defense", 40);
    localStorage.setItem("hero_speed", 70);
    localStorage.setItem("hero_intelligence", 100);
  }
  //chosing Emilia
  else if($("#thehero").attr("src") == "Character sources/Hero_Ian.png")
  {
    $("#thehero").attr("src", "Character sources/Hero_Emilia.png");
    valami = document.getElementById("aboutthecharacter");
    valami.innerHTML = "";
    txt = document.createTextNode(
    "Emilia came from the jungle of the Amazon. Having been raised by a jaguar and being a rouge jungle warrior until the moment she joined the Adventurer Guild of London, she is a hard case.");
    valami.appendChild(txt);
    hero_name = "Emilia";
    hero_health = 80;
    hero_attack = 70;
    hero_defense = 50;
    hero_speed = 100;
    hero_intelligence = 50;
    $("#namevalue").html(hero_name);
    $("#healthvalue").html(hero_health);
    $("#attackvalue").html(hero_attack);
    $("#defensevalue").html(hero_defense);
    $("#speedvalue").html(hero_speed);
    $("#intelligencevalue").html(hero_intelligence);

    localStorage.setItem("hero_name", "Emilia");
    localStorage.setItem("hero_health", 80);
    localStorage.setItem("hero_attack", 70);
    localStorage.setItem("hero_defense", 50);
    localStorage.setItem("hero_speed", 100);
    localStorage.setItem("hero_intelligence", 50);
  }
  //Chosing Olav
  else if($("#thehero").attr("src") == "Character sources/Hero_Emilia.png")
  {
    $("#thehero").attr("src", "Character sources/Hero_Olav.png");
    valami = document.getElementById("aboutthecharacter");
    valami.innerHTML = "";
    txt = document.createTextNode(
    "Olav is a warrior from Norway. Equipped with axe, having great physical strength, he is a courageous adventurer.");
    valami.appendChild(txt);
    hero_name = "Olav";
    hero_health = 90;
    hero_attack = 100;
    hero_defense = 60;
    hero_speed = 60;
    hero_intelligence = 40;
    $("#namevalue").html(hero_name);
    $("#healthvalue").html(hero_health);
    $("#attackvalue").html(hero_attack);
    $("#defensevalue").html(hero_defense);
    $("#speedvalue").html(hero_speed);
    $("#intelligencevalue").html(hero_intelligence);

    localStorage.setItem("hero_name", "Olav");
    localStorage.setItem("hero_health", 90);
    localStorage.setItem("hero_attack", 100);
    localStorage.setItem("hero_defense", 60);
    localStorage.setItem("hero_speed", 60);
    localStorage.setItem("hero_intelligence", 40);
  }
  //Chosing Bo
  else if($("#thehero").attr("src") == "Character sources/Hero_Olav.png")
  {
    $("#thehero").attr("src", "Character sources/Hero_Bo.png");
    valami = document.getElementById("aboutthecharacter");
    valami.innerHTML = "";
    txt = document.createTextNode(
    "Bo is a Chinese doctor and an owner of a flower shop. Mastered martial arts and learns really fast.");
    valami.appendChild(txt);
    hero_name = "Bo";
    hero_health = 100;
    hero_attack = 50;
    hero_defense = 70;
    hero_speed = 80;
    hero_intelligence = 100;
    $("#namevalue").html(hero_name);
    $("#healthvalue").html(hero_health);
    $("#attackvalue").html(hero_attack);
    $("#defensevalue").html(hero_defense);
    $("#speedvalue").html(hero_speed);
    $("#intelligencevalue").html(hero_intelligence);

    localStorage.setItem("hero_name", "Bo");
    localStorage.setItem("hero_health", 100);
    localStorage.setItem("hero_attack", 50);
    localStorage.setItem("hero_defense", 70);
    localStorage.setItem("hero_speed", 80);
    localStorage.setItem("hero_intelligence", 100);
  }
  //Chosing Ryuzen
  else if($("#thehero").attr("src") == "Character sources/Hero_Bo.png")
  {
    $("#thehero").attr("src", "Character sources/Hero_Ryuzen.png");
    valami = document.getElementById("aboutthecharacter");
    valami.innerHTML = "";
    txt = document.createTextNode(
    "Ryuzen is a loner mercenary. He was reluctant at first before joining the Adventurer Guild of London, but now he is a full-time adventurer.");
    valami.appendChild(txt);
    hero_name = "Ryuzen";
    hero_health = 60;
    hero_attack = 90;
    hero_defense = 80;
    hero_speed = 80;
    hero_intelligence = 70;
    $("#namevalue").html(hero_name);
    $("#healthvalue").html(hero_health);
    $("#attackvalue").html(hero_attack);
    $("#defensevalue").html(hero_defense);
    $("#speedvalue").html(hero_speed);
    $("#intelligencevalue").html(hero_intelligence);

    localStorage.setItem("hero_name", "Ryuzen");
    localStorage.setItem("hero_health", 60);
    localStorage.setItem("hero_attack", 90);
    localStorage.setItem("hero_defense", 80);
    localStorage.setItem("hero_speed", 80);
    localStorage.setItem("hero_intelligence", 70);
  }
  //Chosing Daisuke
  else if($("#thehero").attr("src") == "Character sources/Hero_Ryuzen.png")
  {
    $("#thehero").attr("src", "Character sources/Hero_Daisuke.png");
    valami = document.getElementById("aboutthecharacter");
    valami.innerHTML = "";
    valami = document.getElementById("aboutthecharacter");
    txt = document.createTextNode(
      "Daisuke is a samurai adventurer. Excellent swordmaster, and even if he got blind in an accident, he moves around with confidence."
    );
    valami.appendChild(txt);
    hero_name = "Daisuke";
    hero_health = 50;
    hero_attack = 80;
    hero_defense = 80;
    hero_speed = 80;
    hero_intelligence = 100;
    $("#namevalue").html(hero_name);
    $("#healthvalue").html(hero_health);
    $("#attackvalue").html(hero_attack);
    $("#defensevalue").html(hero_defense);
    $("#speedvalue").html(hero_speed);
    $("#intelligencevalue").html(hero_intelligence);

    localStorage.setItem("hero_name", "Daisuke");
    localStorage.setItem("hero_health", 50);
    localStorage.setItem("hero_attack", 80);
    localStorage.setItem("hero_defense", 80);
    localStorage.setItem("hero_speed", 80);
    localStorage.setItem("hero_intelligence", 100);
  }
  //Chosing Erin
  else if($("#thehero").attr("src") == "Character sources/Hero_Daisuke.png")
  {
    $("#thehero").attr("src", "Character sources/Hero_Erin.png");
    valami = document.getElementById("aboutthecharacter");
    valami.innerHTML = "";
    valami = document.getElementById("aboutthecharacter");
    txt = document.createTextNode(
      "Erin is a gamer girl, with excellent analyzing skills. Being adventurous, she is handy on open field.");
    valami.appendChild(txt);
    hero_name = "Erin";
    hero_health = 70;
    hero_attack = 50;
    hero_defense = 50;
    hero_speed = 70;
    hero_intelligence = 100;
    $("#namevalue").html(hero_name);
    $("#healthvalue").html(hero_health);
    $("#attackvalue").html(hero_attack);
    $("#defensevalue").html(hero_defense);
    $("#speedvalue").html(hero_speed);
    $("#intelligencevalue").html(hero_intelligence);

    localStorage.setItem("hero_name", "Erin");
    localStorage.setItem("hero_health", 70);
    localStorage.setItem("hero_attack", 50);
    localStorage.setItem("hero_defense", 50);
    localStorage.setItem("hero_speed", 70);
    localStorage.setItem("hero_intelligence", 100);         
  }
  //Chosing Midna
  else if($("#thehero").attr("src") == "Character sources/Hero_Erin.png")
  {
    $("#thehero").attr("src", "Character sources/Hero_Midna.png");
    valami = document.getElementById("aboutthecharacter");
    valami.innerHTML = "";
    valami = document.getElementById("aboutthecharacter");
    txt = document.createTextNode(
      "Midna is an adventurer and treasure seeker girl with vividness and curiosity. Have been great assistant to the members of the Adventurer Guild of London for a pretty while.");
    valami.appendChild(txt);
    hero_name = "Midna";
    hero_health = 80;
    hero_attack = 50;
    hero_defense = 60;
    hero_speed = 80;
    hero_intelligence = 90;
    $("#namevalue").html(hero_name);
    $("#healthvalue").html(hero_health);
    $("#attackvalue").html(hero_attack);
    $("#defensevalue").html(hero_defense);
    $("#speedvalue").html(hero_speed);
    $("#intelligencevalue").html(hero_intelligence);

    localStorage.setItem("hero_name", "Midna");
    localStorage.setItem("hero_health", 80);
    localStorage.setItem("hero_attack", 50);
    localStorage.setItem("hero_defense", 60);
    localStorage.setItem("hero_speed", 80);
    localStorage.setItem("hero_intelligence", 90);   
  }
});

//Choose a hero
//Clicking on the left button during hero selection
$("#leftway").on("click", function () {
  //Chosing Mary
  if ($("#thehero").attr("src") == "Character sources/Hero_Nate.png") 
  {
    $("#thehero").attr("src", "Character sources/Hero_Mary.png");
    valami = document.getElementById("aboutthecharacter");
    valami.innerHTML = "";
    txt = document.createTextNode(
      "Mary is a jungle girl, who was raised by a wolf pack and a black panther living on a jungle island. She is a swift and energetic jungle girl, with tenderness and goofiness."
    );
    valami.appendChild(txt);
    hero_name = "Mary";
    hero_health = 100;
    hero_attack = 80;
    hero_defense = 70;
    hero_speed = 100;
    hero_intelligence = 40;
    $("#namevalue").html(hero_name);
    $("#healthvalue").html(hero_health);
    $("#attackvalue").html(hero_attack);
    $("#defensevalue").html(hero_defense);
    $("#speedvalue").html(hero_speed);
    $("#intelligencevalue").html(hero_intelligence);

    localStorage.setItem("hero_name", "Mary");
    localStorage.setItem("hero_health", 100);
    localStorage.setItem("hero_attack", 80);
    localStorage.setItem("hero_defense", 70);
    localStorage.setItem("hero_speed", 100);
    localStorage.setItem("hero_intelligence", 40);
  }
  //Chosing Nate
  else if($("#thehero").attr("src") == "Character sources/Hero_Ian.png")
  {
    $("#thehero").attr("src", "Character sources/Hero_Nate.png");
    valami = document.getElementById("aboutthecharacter");
    valami.innerHTML = "";
    txt = document.createTextNode(
    "Nate is a professional swordsman from Paradisia. He has high experience in taking down dark creatures.");
    valami.appendChild(txt);
    hero_name = "Nate";
    hero_health = 100;
    hero_attack = 90;
    hero_defense = 70;
    hero_speed = 70;
    hero_intelligence = 80;
    $("#namevalue").html(hero_name);
    $("#healthvalue").html(hero_health);
    $("#attackvalue").html(hero_attack);
    $("#defensevalue").html(hero_defense);
    $("#speedvalue").html(hero_speed);
    $("#intelligencevalue").html(hero_intelligence);

    localStorage.setItem("hero_name", "Nate");
    localStorage.setItem("hero_health", 100);
    localStorage.setItem("hero_attack", 90);
    localStorage.setItem("hero_defense", 70);
    localStorage.setItem("hero_speed", 70);
    localStorage.setItem("hero_intelligence", 80);
  }
  //Chosing Ian
  else if($("#thehero").attr("src") == "Character sources/Hero_Emilia.png")
  {
    $("#thehero").attr("src", "Character sources/Hero_Ian.png");
    valami = document.getElementById("aboutthecharacter");
    valami.innerHTML = "";
    txt = document.createTextNode(
    "Ian is the leader of the Adventurer Guild of London. While not so skilled in combat like his subordinates, his intelligence may come handy in difficult situations.");
    valami.appendChild(txt);
    hero_name = "Ian";
    hero_health = 70;
    hero_attack = 40;
    hero_defense = 40;
    hero_speed = 70;
    hero_intelligence = 100;
    $("#namevalue").html(hero_name);
    $("#healthvalue").html(hero_health);
    $("#attackvalue").html(hero_attack);
    $("#defensevalue").html(hero_defense);
    $("#speedvalue").html(hero_speed);
    $("#intelligencevalue").html(hero_intelligence);

    localStorage.setItem("hero_name", "Ian");
    localStorage.setItem("hero_health", 70);
    localStorage.setItem("hero_attack", 40);
    localStorage.setItem("hero_defense", 40);
    localStorage.setItem("hero_speed", 70);
    localStorage.setItem("hero_intelligence", 100);
  }
  //Chosing Emilia
  else if($("#thehero").attr("src") == "Character sources/Hero_Olav.png")
  {
    $("#thehero").attr("src", "Character sources/Hero_Emilia.png");
    valami = document.getElementById("aboutthecharacter");
    valami.innerHTML = "";
    txt = document.createTextNode(
    "Emilia came from the jungle of the Amazon. Having been raised by a jaguar and being a rouge jungle warrior until the moment she joined the Adventurer Guild of London, she is a hard case.");
    valami.appendChild(txt);
    hero_name = "Emilia";
    hero_health = 80;
    hero_attack = 70;
    hero_defense = 50;
    hero_speed = 100;
    hero_intelligence = 50;
    $("#namevalue").html(hero_name);
    $("#healthvalue").html(hero_health);
    $("#attackvalue").html(hero_attack);
    $("#defensevalue").html(hero_defense);
    $("#speedvalue").html(hero_speed);
    $("#intelligencevalue").html(hero_intelligence);

    localStorage.setItem("hero_name", "Emilia");
    localStorage.setItem("hero_health", 80);
    localStorage.setItem("hero_attack", 70);
    localStorage.setItem("hero_defense", 50);
    localStorage.setItem("hero_speed", 100);
    localStorage.setItem("hero_intelligence", 50);    
  }
  //Chosing Olav
  else if($("#thehero").attr("src") == "Character sources/Hero_Bo.png")
  {
    $("#thehero").attr("src", "Character sources/Hero_Olav.png");
    valami = document.getElementById("aboutthecharacter");
    valami.innerHTML = "";
    txt = document.createTextNode(
    "Olav is a warrior from Norway. Equipped with axe, having great physical strength, he is a courageous adventurer.");
    valami.appendChild(txt);
    hero_name = "Olav";
    hero_health = 90;
    hero_attack = 100;
    hero_defense = 60;
    hero_speed = 60;
    hero_intelligence = 40;
    $("#namevalue").html(hero_name);
    $("#healthvalue").html(hero_health);
    $("#attackvalue").html(hero_attack);
    $("#defensevalue").html(hero_defense);
    $("#speedvalue").html(hero_speed);
    $("#intelligencevalue").html(hero_intelligence);

    localStorage.setItem("hero_name", "Olav");
    localStorage.setItem("hero_health", 90);
    localStorage.setItem("hero_attack", 100);
    localStorage.setItem("hero_defense", 60);
    localStorage.setItem("hero_speed", 60);
    localStorage.setItem("hero_intelligence", 40);    
  }
  //Chosing Bo
  else if($("#thehero").attr("src") == "Character sources/Hero_Ryuzen.png")
  {
    $("#thehero").attr("src", "Character sources/Hero_Bo.png");
    valami = document.getElementById("aboutthecharacter");
    valami.innerHTML = "";
    txt = document.createTextNode(
    "Bo is a Chinese doctor and an owner of a flower shop. Mastered martial arts and learns really fast.");
    valami.appendChild(txt);
    hero_name = "Bo";
    hero_health = 100;
    hero_attack = 50;
    hero_defense = 70;
    hero_speed = 80;
    hero_intelligence = 100;
    $("#namevalue").html(hero_name);
    $("#healthvalue").html(hero_health);
    $("#attackvalue").html(hero_attack);
    $("#defensevalue").html(hero_defense);
    $("#speedvalue").html(hero_speed);
    $("#intelligencevalue").html(hero_intelligence);

    localStorage.setItem("hero_name", "Bo");
    localStorage.setItem("hero_health", 100);
    localStorage.setItem("hero_attack", 50);
    localStorage.setItem("hero_defense", 70);
    localStorage.setItem("hero_speed", 80);
    localStorage.setItem("hero_intelligence", 100);    
  }
  //Chosing Ryuzen
  else if($("#thehero").attr("src") == "Character sources/Hero_Daisuke.png")
  {
    $("#thehero").attr("src", "Character sources/Hero_Ryuzen.png");
    valami = document.getElementById("aboutthecharacter");
    valami.innerHTML = "";
    txt = document.createTextNode(
    "Ryuzen is a loner mercenary. He was reluctant at first before joining the Adventurer Guild of London, but now he is a full-time adventurer.");
    valami.appendChild(txt);
    hero_name = "Ryuzen";
    hero_health = 60;
    hero_attack = 90;
    hero_defense = 80;
    hero_speed = 80;
    hero_intelligence = 70;
    $("#namevalue").html(hero_name);
    $("#healthvalue").html(hero_health);
    $("#attackvalue").html(hero_attack);
    $("#defensevalue").html(hero_defense);
    $("#speedvalue").html(hero_speed);
    $("#intelligencevalue").html(hero_intelligence);

    localStorage.setItem("hero_name", "Ryuzen");
    localStorage.setItem("hero_health", 60);
    localStorage.setItem("hero_attack", 90);
    localStorage.setItem("hero_defense", 80);
    localStorage.setItem("hero_speed", 80);
    localStorage.setItem("hero_intelligence", 70);    
  }
  //Chosing Daisuke
  else if($("#thehero").attr("src") == "Character sources/Hero_Erin.png")
  {
    $("#thehero").attr("src", "Character sources/Hero_Daisuke.png");
    valami = document.getElementById("aboutthecharacter");
    valami.innerHTML = "";
    valami = document.getElementById("aboutthecharacter");
    txt = document.createTextNode(
      "Daisuke is a samurai adventurer. Excellent swordmaster, and even if he got blind in an accident, he moves around with confidence."
    );
    valami.appendChild(txt);
    hero_name = "Daisuke";
    hero_health = 50;
    hero_attack = 80;
    hero_defense = 80;
    hero_speed = 80;
    hero_intelligence = 100;
    $("#namevalue").html(hero_name);
    $("#healthvalue").html(hero_health);
    $("#attackvalue").html(hero_attack);
    $("#defensevalue").html(hero_defense);
    $("#speedvalue").html(hero_speed);
    $("#intelligencevalue").html(hero_intelligence);

    localStorage.setItem("hero_name", "Daisuke");
    localStorage.setItem("hero_health", 50);
    localStorage.setItem("hero_attack", 80);
    localStorage.setItem("hero_defense", 80);
    localStorage.setItem("hero_speed", 80);
    localStorage.setItem("hero_intelligence", 100);    
  }
  //Chosing Erin
  else if($("#thehero").attr("src") == "Character sources/Hero_Midna.png")
  {
    $("#thehero").attr("src", "Character sources/Hero_Erin.png");
    valami = document.getElementById("aboutthecharacter");
    valami.innerHTML = "";
    valami = document.getElementById("aboutthecharacter");
    txt = document.createTextNode(
      "Erin is a gamer girl, with excellent analyzing skills. Being adventurous, she is handy on open field.");
    valami.appendChild(txt);
    hero_name = "Erin";
    hero_health = 70;
    hero_attack = 50;
    hero_defense = 50;
    hero_speed = 70;
    hero_intelligence = 100;
    $("#namevalue").html(hero_name);
    $("#healthvalue").html(hero_health);
    $("#attackvalue").html(hero_attack);
    $("#defensevalue").html(hero_defense);
    $("#speedvalue").html(hero_speed);
    $("#intelligencevalue").html(hero_intelligence);

    localStorage.setItem("hero_name", "Erin");
    localStorage.setItem("hero_health", 70);
    localStorage.setItem("hero_attack", 50);
    localStorage.setItem("hero_defense", 50);
    localStorage.setItem("hero_speed", 70);
    localStorage.setItem("hero_intelligence", 100);   
  }
});

/*load game is for loading data from a json file */
$("#loadsave").on("click", function()
{
    alert("Will come in a later version of this game! 1 up 1,5 hours of gameplay is not too surprising, right?");
})