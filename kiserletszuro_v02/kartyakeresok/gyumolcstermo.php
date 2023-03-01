<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../styles.css">
    <title>Gyümölcstermő</title>
</head>
<body>
<div id="mainsection">
  <div id="filteredsections">
    <div class="card">
      <div class="card-body"><a class="card-link" href="gyumolcstermoszukitett/kulterigyumolcstermo.php">
        Kültéri növény
        <?php
          require("gyumolcstermoszukitett/kulteriszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="gyumolcstermoszukitett/fagyumolcstermo.php">
        Fa
        <?php
          require("gyumolcstermoszukitett/faszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="gyumolcstermoszukitett/viragzogyumolcstermo.php">
        Virágzó
        <?php
          require("gyumolcstermoszukitett/viragzoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="gyumolcstermoszukitett/cserjegyumolcstermo.php">
        Cserje
        <?php
          require("gyumolcstermoszukitett/cserjeszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="gyumolcstermoszukitett/orokzoldgyumolcstermo.php">
        Örökzöld
        <?php
          require("gyumolcstermoszukitett/orokzoldszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="gyumolcstermoszukitett/futonovenygyumolcstermo.php">
        Futónövény
        <?php
          require("gyumolcstermoszukitett/futonovenyszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="gyumolcstermoszukitett/fagyturogyumolcstermo.php">
        Fagytűrő
        <?php
          require("gyumolcstermoszukitett/fagyturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="gyumolcstermoszukitett/mersekeltenfagyturogyumolcstermo.php">
        Mérsékelten fagytűrő
        <?php
          require("gyumolcstermoszukitett/mersekeltenfagyturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="gyumolcstermoszukitett/nemfagyturogyumolcstermo.php">
        Nem fagytűrő
        <?php
          require("gyumolcstermoszukitett/nemfagyturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="gyumolcstermoszukitett/fenykedvelogyumolcstermo.php">
        Fénykedvelő
        <?php
          require("gyumolcstermoszukitett/fenykedveloszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="gyumolcstermoszukitett/felarnyekkedvelogyumolcstermo.php">
        Félárnyék kedvelő
        <?php
          require("gyumolcstermoszukitett/felarnyekkedveloszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="gyumolcstermoszukitett/vizigenyesgyumolcstermo.php">
        Vízigényes
        <?php
          require("gyumolcstermoszukitett/vizigenyesszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="gyumolcstermoszukitett/kozepesenvizigenyesgyumolcstermo.php">
        Közepesen vízigényes
        <?php
          require("gyumolcstermoszukitett/kozepesenvizigenyesszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="gyumolcstermoszukitett/szarazsagturogyumolcstermo.php">
        Szárazságtűrő
        <?php
          require("gyumolcstermoszukitett/szarazsagturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="gyumolcstermoszukitett/15-50cmgyumolcstermo.php">
        15-50 cm-ig növő
        <?php
          require("gyumolcstermoszukitett/15-50cmszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="gyumolcstermoszukitett/50-100cmgyumolcstermo.php">
        50-100 cm-ig növő
        <?php
          require("gyumolcstermoszukitett/50-100cmszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="gyumolcstermoszukitett/100-150cmgyumolcstermo.php">
        100-150 cm-ig növő
        <?php
          require("gyumolcstermoszukitett/100-150cmszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="gyumolcstermoszukitett/1,5-5mgyumolcstermo.php">
        1,5-5 m-ig növő
        <?php
          require("gyumolcstermoszukitett/1,5-5mszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="gyumolcstermoszukitett/5-10mgyumolcstermo.php">
        5-10 m-ig növő
        <?php
          require("gyumolcstermoszukitett/5-10mszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="gyumolcstermoszukitett/10mnagyobbgyumolcstermo.php">
        10 m-től nagyobbra növő
        <?php
          require("gyumolcstermoszukitett/10mnagyobbszam.php");
        ?>
      </a></div>
    </div>
  </div>
        <hr>
        <!--way we are in the page-->
        <div id="utvonal">
          <a href="../index.php">Főoldal </a> ->
          <a href="gyumolcstermo.php">Gyümölcstermő</a>
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
$sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kategoria like '%gyümölcstermő'";
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