<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../styles.css">
    <title>Cserje</title>
</head>
<body>
<div id="mainsection">
    <div id="filteredsections">
      <div class="card">
        <div class="card-body"><a class="card-link" href="cserjeszukitett/kultericserje.php">
          Kültéri növény
          <?php
            require("cserjeszukitett/kulteriszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="cserjeszukitett/lombhullatocserje.php">
          Lombhullató fa
          <?php
            require("cserjeszukitett/lombhullatoszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="cserjeszukitett/orokzoldcserje.php">
          Örökzöld
          <?php
            require("cserjeszukitett/orokzoldszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="cserjeszukitett/facserje.php">
          Fa
          <?php
            require("cserjeszukitett/faszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="cserjeszukitett/viragzocserje.php">
          Virágzó
          <?php
            require("cserjeszukitett/viragzoszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="cserjeszukitett/fagyturocserje.php">
          Fagytűrő
          <?php
            require("cserjeszukitett/fagyturoszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="cserjeszukitett/mersekeltenfagyturocserje.php">
          Mérsékelten fagytűrő
          <?php
            require("cserjeszukitett/mersekeltenfagyturoszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="cserjeszukitett/nemfagyturocserje.php">
          Nem fagytűrő
          <?php
            require("cserjeszukitett/nemfagyturoszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="cserjeszukitett/fenykedvelocserje.php">
          Fénykedvelő
          <?php
            require("cserjeszukitett/fenykedveloszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="cserjeszukitett/felarnyekkedvelocserje.php">
          Félárnyék kedvelő
          <?php
            require("cserjeszukitett/felarnyekkedveloszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="cserjeszukitett/vizigenyescserje.php">
          Vízigényes
          <?php
            require("cserjeszukitett/vizigenyesszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="cserjeszukitett/kozepesenvizigenyescserje.php">
          Közepesen vízigényes
          <?php
            require("cserjeszukitett/kozepesenvizigenyesszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="cserjeszukitett/szarazsagturocserje.php">
          Szárazságtűrő
          <?php
            require("cserjeszukitett/szarazsagturoszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="cserjeszukitett/0-15cmcserje.php">
          0-15 cm-ig növő
          <?php
            require("cserjeszukitett/0-15cmszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="cserjeszukitett/100-150cmcserje.php">
          100-150 cm-ig növő
          <?php
            require("cserjeszukitett/100-150cmszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="cserjeszukitett/1,5-5mcserje.php">
          1,5-5 m-ig növő
          <?php
            require("cserjeszukitett/1,5-5mszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="cserjeszukitett/5-10mcserje.php">
          5-10 m-ig növő
          <?php
            require("cserjeszukitett/5-10mszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="cserjeszukitett/10mnagyobbcserje.php">
          10 m-től nagyobbra növő
          <?php
            require("cserjeszukitett/10mnagyobbszam.php");
          ?>
        </a></div>
      </div>
    </div>
        <hr>
        <!--way we are in the page-->
        <div id="utvonal">
          <a href="../index.php">Főoldal </a> ->
          <a href="cserje.php">Cserje</a>
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
$sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%cserje'";
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