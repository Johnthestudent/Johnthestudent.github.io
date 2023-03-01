<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../styles.css">
    <title>Vízi-, vízparti növény</title>
</head>
<body>
<div id="mainsection">
  <div id="filteredsections">
    <div class="card">
      <div class="card-body"><a class="card-link" href="vizinovenyszukitett/kulterivizinoveny.php">
        Kültéri növény
        <?php
          require("vizinovenyszukitett/kulteriszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="vizinovenyszukitett/belterivizinoveny.php">
        Beltéri növény
        <?php
          require("vizinovenyszukitett/belteriszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="vizinovenyszukitett/viragzovizinoveny.php">
        Virágzó
        <?php
          require("vizinovenyszukitett/viragzoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="vizinovenyszukitett/leveldisznovenyvizinoveny.php">
        Levéldísznövény
        <?php
          require("vizinovenyszukitett/leveldisznovenyszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="vizinovenyszukitett/orokzoldvizinoveny.php">
        Örökzöld
        <?php
          require("vizinovenyszukitett/orokzoldszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="vizinovenyszukitett/fagyturovizinoveny.php">
        Fagytűrő
        <?php
          require("vizinovenyszukitett/fagyturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="vizinovenyszukitett/nemfagyturovizinoveny.php">
        Nem fagytűrő
        <?php
          require("vizinovenyszukitett/nemfagyturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="vizinovenyszukitett/fenykedvelovizinoveny.php">
        Fénykedvelő
        <?php
          require("vizinovenyszukitett/fenykedveloszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="vizinovenyszukitett/felarnyekkedvelovizinoveny.php">
        Félárnyék kedvelő
        <?php
          require("vizinovenyszukitett/felarnyekkedveloszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="vizinovenyszukitett/arnyekturovizinoveny.php">
        Árnyéktűrő
        <?php
          require("vizinovenyszukitett/arnyekturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="vizinovenyszukitett/vizigenyesvizinoveny.php">
        Vízigényes
        <?php
          require("vizinovenyszukitett/vizigenyesszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="vizinovenyszukitett/kozepesenvizigenyesvizinoveny.php">
        Közepesen vízigényes
        <?php
          require("vizinovenyszukitett/kozepesenvizigenyesszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="vizinovenyszukitett/15-50cmvizinoveny.php">
        15-50 cm-ig növő
        <?php
          require("vizinovenyszukitett/15-50cmszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="vizinovenyszukitett/50-100cmvizinoveny.php">
        50-100 cm-ig növő
        <?php
          require("vizinovenyszukitett/50-100cmszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="vizinovenyszukitett/100-150cmvizinoveny.php">
        100-150 cm-ig növő
        <?php
          require("vizinovenyszukitett/100-150cmszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="vizinovenyszukitett/1,5-5mvizinoveny.php">
        1,5-5 m-ig növő
        <?php
          require("vizinovenyszukitett/1,5-5mszam.php");
        ?>
      </a></div>
    </div>
  </div>
        <hr>
        <!--way we are in the page-->
        <div id="utvonal">
          <a href="../index.php">Főoldal </a> ->
          <a href="vizinoveny.php">Vízi-, vízparti növény</a>
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
$sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kategoria like '%vízparti növény'";
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