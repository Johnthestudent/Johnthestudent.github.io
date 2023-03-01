<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../styles.css">
    <title>Alakfa</title>
</head>
<body>
<div id="mainsection">
  <div id="filteredsections">
    <div class="card">
      <div class="card-body"><a class="card-link" href="alakfaszukitett/kulterialakfa.php">
        Kültéri növény
        <?php
          require("alakfaszukitett/kulteriszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="alakfaszukitett/belterialakfa.php">
        Beltéri növény
        <?php
          require("alakfaszukitett/belteriszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="alakfaszukitett/faalakfa.php">
        Fa
        <?php
          require("alakfaszukitett/faszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="alakfaszukitett/orokzoldalakfa.php">
        Örökzöld
        <?php
          require("alakfaszukitett/orokzoldszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="alakfaszukitett/viragzoalakfa.php">
        Virágzó
        <?php
          require("alakfaszukitett/viragzoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="alakfaszukitett/cserjealakfa.php">
        Cserje
        <?php
          require("alakfaszukitett/cserjeszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="alakfaszukitett/leveldisznovenyalakfa.php">
        Levéldísznövény
        <?php
          require("alakfaszukitett/leveldisznovenyszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="alakfaszukitett/fagyturoalakfa.php">
        Fagytűrő
        <?php
          require("alakfaszukitett/fagyturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="alakfaszukitett/nemfagyturoalakfa.php">
        Nem fagytűrő
        <?php
          require("alakfaszukitett/nemfagyturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="alakfaszukitett/fenykedveloalakfa.php">
        Fénykedvelő
        <?php
          require("alakfaszukitett/fenykedveloszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="alakfaszukitett/vizigenyesalakfa.php">
        Vízigényes
        <?php
          require("alakfaszukitett/vizigenyesszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="alakfaszukitett/kozepesenvizigenyesalakfa.php">
        Közepesen vízigényes
        <?php
          require("alakfaszukitett/kozepesenvizigenyesszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="alakfaszukitett/szarazsagturoalakfa.php">
        Szárazságtűrő
        <?php
          require("alakfaszukitett/szarazsagturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="alakfaszukitett/0-15cmalakfa.php">
        0-15 cm-ig növő
        <?php
          require("alakfaszukitett/0-15cmszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="alakfaszukitett/50-100cmalakfa.php">
        50-100 cm-ig növő
        <?php
          require("alakfaszukitett/50-100cmszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="alakfaszukitett/100-150cmalakfa.php">
        100-150 cm-ig növő
        <?php
          require("alakfaszukitett/100-150cmszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="alakfaszukitett/1,5-5malakfa.php">
        1,5-5 m-ig növő
        <?php
          require("alakfaszukitett/1,5-5mszam.php");
        ?>
      </a></div>
    </div>
  </div>
        <hr>
        <!--way we are in the page-->
        <div id="utvonal">
          <a href="../index.php">Főoldal </a> ->
          <a href="alakfa.php">Alakfa</a>
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
$sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kategoria like '%alakfa'";
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