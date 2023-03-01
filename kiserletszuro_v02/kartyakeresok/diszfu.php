<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../styles.css">
    <title>Díszfű, sziklakerti-, talajtakaró-, és egyéb évelő növény</title>
</head>
<body>
<div id="mainsection">
  <div id="filteredsections">
    <div class="card">
      <div class="card-body"><a class="card-link" href="diszfuszukitett/kulteridiszfu.php">
        Kültéri növény
        <?php
          require("diszfuszukitett/kulteriszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="diszfuszukitett/belteridiszfu.php">
        Beltéri növény
        <?php
          require("diszfuszukitett/belteriszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="diszfuszukitett/orokzolddiszfu.php">
        Örökzöld
        <?php
          require("diszfuszukitett/orokzoldszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="diszfuszukitett/futonovenydiszfu.php">
        Futónövény
        <?php
          require("diszfuszukitett/futonovenyszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="diszfuszukitett/balkonnovenydiszfu.php">
        Balkonnövény
        <?php
          require("diszfuszukitett/balkonnovenyszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="diszfuszukitett/viragzodiszfu.php">
        Virágzó
        <?php
          require("diszfuszukitett/viragzoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="diszfuszukitett/leveldisznovenydiszfu.php">
        Levéldísznövény
        <?php
          require("diszfuszukitett/leveldisznovenyszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="diszfuszukitett/cserjediszfu.php">
        Cserje
        <?php
          require("diszfuszukitett/cserjeszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="diszfuszukitett/fagyturodiszfu.php">
        Fagytűrő
        <?php
          require("diszfuszukitett/fagyturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="diszfuszukitett/mersekeltenfagyturodiszfu.php">
        Mérsékelten fagytűrő
        <?php
          require("diszfuszukitett/mersekeltenfagyturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="diszfuszukitett/nemfagyturodiszfu.php">
        Nem fagytűrő
        <?php
          require("diszfuszukitett/nemfagyturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="diszfuszukitett/fenykedvelodiszfu.php">
        Fénykedvelő
        <?php
          require("diszfuszukitett/fenykedveloszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="diszfuszukitett/felarnyekkedvelodiszfu.php">
        Félárnyék kedvelő
        <?php
          require("diszfuszukitett/felarnyekkedveloszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="diszfuszukitett/arnyekturodiszfu.php">
        Árnyéktűrő
        <?php
          require("diszfuszukitett/arnyekturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="diszfuszukitett/vizigenyesdiszfu.php">
        Vízigényes
        <?php
          require("diszfuszukitett/vizigenyesszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="diszfuszukitett/kozepesenvizigenyesdiszfu.php">
        Közepesen vízigényes
        <?php
          require("diszfuszukitett/kozepesenvizigenyesszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="diszfuszukitett/szarazsagturodiszfu.php">
        Szárazságtűrő
        <?php
          require("diszfuszukitett/szarazsagturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="diszfuszukitett/0-15cmdiszfu.php">
        0-15 cm-ig növő
        <?php
          require("diszfuszukitett/0-15cmszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="diszfuszukitett/15-50cmdiszfu.php">
        15-50 cm-ig növő
        <?php
          require("diszfuszukitett/15-50cmszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="diszfuszukitett/50-100cmdiszfu.php">
        50-100 cm-ig növő
        <?php
          require("diszfuszukitett/50-100cmszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="diszfuszukitett/100-150cmdiszfu.php">
        100-150 cm-ig növő
        <?php
          require("diszfuszukitett/100-150cmszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="diszfuszukitett/1,5-5mdiszfu.php">
        1,5-5 m-ig növő
        <?php
          require("diszfuszukitett/1,5-5mszam.php");
        ?>
      </a></div>
    </div>
  </div>
        <hr>
        <!--way we are in the page-->
        <div id="utvonal">
          <a href="../index.php">Főoldal </a> ->
          <a href="diszfu.php">Díszfű, sziklakerti-, talajtakaró-, és egyéb évelő növény</a>
        </div>
        <div id="presenteditems">

        </div>
        <hr>
    </div>
</body>
</html>

<?php
//essential parts of the connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "kispalanta";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

//printing out the database itself onto the web page
$sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id 
where kategoria like '%díszfû¸ sziklakerti-¸ talajtakaró-¸ és egyéb évelõ növény'";
$result = $conn->query($sql);

if ($result->num_rows > 0) 
{
    /* output data of each row*/
    while($row = $result->fetch_assoc()) 
    {
      echo $row["product_name"] . "<br>";
    }
} 
else 
{
    echo "0 results";
}
  
  $conn->close();
?>