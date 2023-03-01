<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../styles.css">
    <title>Fa</title>
</head>
<body>
<div id="mainsection">
    <div id="filteredsections">
      <div class="card">
        <div class="card-body"><a class="card-link" href="faszukitett/kulterifa.php">
          Kültéri növény
          <?php
            require("faszukitett/kulteriszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="faszukitett/belterifa.php">
          Beltéri növény
          <?php
            require("faszukitett/belteriszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="faszukitett/lombhullatofa.php">
          Lombhullató fa
          <?php
            require("faszukitett/lombhullatoszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="faszukitett/orokzoldfa.php">
          Örökzöld fa
          <?php
            require("faszukitett/orokzoldszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="faszukitett/viragzofa.php">
          Virágzó
          <?php
            require("faszukitett/viragzoszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="faszukitett/gyumolcstermofa.php">
          Gyümölcstermő
          <?php
            require("faszukitett/gyumolcstermoszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="faszukitett/alakfa.php">
          Alakfa
          <?php
            require("faszukitett/alakfaszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="faszukitett/fagyturofa.php">
          Fagytűrő
          <?php
            require("faszukitett/fagyturoszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="faszukitett/nemfagyturofa.php">
          Nem fagytűrő
          <?php
            require("faszukitett/nemfagyturoszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="faszukitett/fenykedvelofa.php">
          Fénykedvelő
          <?php
            require("faszukitett/fenykedveloszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="faszukitett/vizigenyesfa.php">
          Vízigényes
          <?php
            require("faszukitett/vizigenyesszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="faszukitett/kozepesenvizigenyesfa.php">
          Közepesen vízigényes
          <?php
            require("faszukitett/kozepesenvizigenyesszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="faszukitett/szarazsagturofa.php">
          Szárazságtűrő
          <?php
            require("faszukitett/szarazsagturoszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="faszukitett/0-15cmfa.php">
          0-15 cm-ig növő
          <?php
            require("faszukitett/0-15cmszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="faszukitett/15-50cmfa.php">
          15-50 cm-ig növő
          <?php
            require("faszukitett/15-50cmszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="faszukitett/50-100cmfa.php">
          50-100 cm-ig növő
          <?php
            require("faszukitett/50-100cmszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="faszukitett/100-150cmfa.php">
          100-150 cm-ig növő
          <?php
            require("faszukitett/100-150cmszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="faszukitett/1,5-5mfa.php">
          1,5-5 m-ig növő
          <?php
            require("faszukitett/1,5-5mszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="faszukitett/5-10mfa.php">
          5-10 m-ig növő
          <?php
            require("faszukitett/5-10mszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="faszukitett/10mnagyobbfa.php">
          10 m-től nagyobbra növő
          <?php
            require("faszukitett/10mnagyobbszam.php");
          ?>
        </a></div>
      </div>
    </div>
        <hr>
        <!--way we are in the page-->
        <div id="utvonal">
          <a href="../index.php">Főoldal </a> ->
          <a href="fa.php">Fa</a>
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
$sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa = 'fa'";
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