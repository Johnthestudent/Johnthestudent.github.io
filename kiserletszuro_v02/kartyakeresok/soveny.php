<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../styles.css">
    <title>Sövénynek való</title>
</head>
<body>
<div id="mainsection">
    <div id="filteredsections">
      <div class="card">
        <div class="card-body"><a class="card-link" href="sovenyszukitett/kulterisoveny.php">
          Kültéri növény
          <?php
            require("sovenyszukitett/kulteriszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="sovenyszukitett/orokzoldsoveny.php">
          Örökzöld
          <?php
            require("sovenyszukitett/orokzoldszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="sovenyszukitett/fasoveny.php">
          Fa
          <?php
            require("sovenyszukitett/faszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="sovenyszukitett/cserjesoveny.php">
          Cserje
          <?php
            require("sovenyszukitett/cserjeszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="sovenyszukitett/viragzosoveny.php">
          Virágzó
          <?php
            require("sovenyszukitett/viragzoszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="sovenyszukitett/leveldisznovenysoveny.php">
          Levéldísznövény
          <?php
            require("sovenyszukitett/leveldisznovenyszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="sovenyszukitett/fagyturosoveny.php">
          Fagytűrő
          <?php
            require("sovenyszukitett/fagyturoszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="sovenyszukitett/mersekeltenfagyturosoveny.php">
          Mérsékelten fagytűrő
          <?php
            require("sovenyszukitett/mersekeltenfagyturoszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="sovenyszukitett/fenykedvelosoveny.php">
          Fénykedvelő
          <?php
            require("sovenyszukitett/fenykedveloszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="sovenyszukitett/felarnyekkedvelosoveny.php">
          Félárnyék kedvelő
          <?php
            require("sovenyszukitett/felarnyekkedveloszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="sovenyszukitett/kozepesenvizigenyessoveny.php">
          Közepesen vízigényes
          <?php
            require("sovenyszukitett/kozepesenvizigenyesszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="sovenyszukitett/50-100cmsoveny.php">
          50-100 cm-ig növő
          <?php
            require("sovenyszukitett/50-100cmszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="sovenyszukitett/100-150cmsoveny.php">
          100-150 cm-ig növő
          <?php
            require("sovenyszukitett/100-150cmszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="sovenyszukitett/1,5-5msoveny.php">
          1,5-5 m-ig növő
          <?php
            require("sovenyszukitett/1,5-5mszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="sovenyszukitett/5-10msoveny.php">
          5-10 m-ig növő
          <?php
            require("sovenyszukitett/5-10mszam.php");
          ?>
        </a></div>
      </div>
    </div>
        <hr>
        <!--way we are in the page-->
        <div id="utvonal">
          <a href="../index.php">Főoldal </a> ->
          <a href="soveny.php">Sövénynek való</a>
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
$sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kategoria like '%sövénynek való'";
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