<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../styles.css">
    <title>Egynyári virágzó-, balkonnövény</title>
</head>
<body>
<div id="mainsection">
  <div id="filteredsections">
    <div class="card">
      <div class="card-body"><a class="card-link" href="egynyariszukitett/kulteriegynyari.php">
        Kültéri növény
        <?php
          require("egynyariszukitett/kulteriszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="egynyariszukitett/viragzoegynyari.php">
        Virágzó
        <?php
          require("egynyariszukitett/viragzoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="egynyariszukitett/diszfuegynyari.php">
        Díszfű, sziklakerti-, talajtakaró-, és egyéb évelő növény
        <?php
          require("egynyariszukitett/diszfuszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="egynyariszukitett/fagyturoegynyari.php">
        Fagytűrő
        <?php
          require("egynyariszukitett/fagyturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="egynyariszukitett/mersekeltenfagyturoegynyari.php">
        Mérsékelten fagytűrő
        <?php
          require("egynyariszukitett/mersekeltenfagyturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="egynyariszukitett/nemfagyturoegynyari.php">
        Nem fagytűrő
        <?php
          require("egynyariszukitett/nemfagyturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="egynyariszukitett/fenykedveloegynyari.php">
        Fénykedvelő
        <?php
          require("egynyariszukitett/fenykedveloszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="egynyariszukitett/felarnyekkedveloegynyari.php">
        Félárnyék kedvelő
        <?php
          require("egynyariszukitett/felarnyekkedveloszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="egynyariszukitett/arnyekturoegynyari.php">
        Árnyéktűrő
        <?php
          require("egynyariszukitett/arnyekturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="egynyariszukitett/vizigenyesegynyari.php">
        Vízigényes
        <?php
          require("egynyariszukitett/vizigenyesszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="egynyariszukitett/kozepesenvizigenyesegynyari.php">
        Közepesen vízigényes
        <?php
          require("egynyariszukitett/kozepesenvizigenyesszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="egynyariszukitett/szarazsagturoegynyari.php">
        Szárazságtűrő
        <?php
          require("egynyariszukitett/szarazsagturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="egynyariszukitett/0-15cmegynyari.php">
        0-15 cm-ig növő
        <?php
          require("egynyariszukitett/0-15cmszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="egynyariszukitett/15-50cmegynyari.php">
        15-50 cm-ig növő
        <?php
          require("egynyariszukitett/15-50cmszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="egynyariszukitett/50-100cmegynyari.php">
        50-100 cm-ig növő
        <?php
          require("egynyariszukitett/50-100cmszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="egynyariszukitett/100-150cmegynyari.php">
        100-150 cm-ig növő
        <?php
          require("egynyariszukitett/100-150cmszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="egynyariszukitett/1,5-5megynyari.php">
        1,5-5 m-ig növő
        <?php
          require("egynyariszukitett/1,5-5mszam.php");
        ?>
      </a></div>
    </div>
  </div>
        <hr>
        <!--way we are in the page-->
        <div id="utvonal">
          <a href="../index.php">Főoldal </a> ->
          <a href="egynyari.php">Egynyári virágzó-, balkonnövény</a>
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
$sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%balkonnövény'";
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