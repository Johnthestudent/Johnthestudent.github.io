<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../styles.css">
    <title>Törpe örökzöld</title>
</head>
<body>
<div id="mainsection">
  <div id="filteredsections">
    <div class="card">
      <div class="card-body"><a class="card-link" href="torpeorokzoldszukitett/kulteritorpeorokzold.php">
        Kültéri növény
        <?php
          require("torpeorokzoldszukitett/kulteriszam.php");
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="torpeorokzoldszukitett/belteritorpeorokzold.php">
        Beltéri növény
        <?php
          require("torpeorokzoldszukitett/belteriszam.php");
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="torpeorokzoldszukitett/viragzotorpeorokzold.php">
        Virágzó
        <?php
          require("torpeorokzoldszukitett/viragzoszam.php");
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="torpeorokzoldszukitett/fagyturotorpeorokzold.php">
        Fagytűrő
        <?php
          require("torpeorokzoldszukitett/fagyturoszam.php");
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="torpeorokzoldszukitett/nemfagyturotorpeorokzold.php">
        Nem fagytűrő
        <?php
          require("torpeorokzoldszukitett/nemfagyturoszam.php");
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="torpeorokzoldszukitett/fenykedvelotorpeorokzold.php">
        Fénykedvelő
        <?php
          require("torpeorokzoldszukitett/fenykedveloszam.php");
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="torpeorokzoldszukitett/felarnyekkedvelotorpeorokzold.php">
        Félárnyék kedvelő
        <?php
          require("torpeorokzoldszukitett/felarnyekkedveloszam.php");
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="torpeorokzoldszukitett/kozepesenvizigenyestorpeorokzold.php">
        Közepesen vízigényes
        <?php
          require("torpeorokzoldszukitett/kozepesvizigenyszam.php");
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="torpeorokzoldszukitett/0-15cmtorpeorokzold.php">
        0-15 cm-ig növő
        <?php
          require("torpeorokzoldszukitett/0-15cmszam.php");
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="torpeorokzoldszukitett/15-50cmtorpeorokzold.php">
        15-50 cm-ig növő
        <?php
          require("torpeorokzoldszukitett/15-50cmszam.php");
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="torpeorokzoldszukitett/50-100cmtorpeorokzold.php">
        50-100 cm-ig növő
        <?php
          require("torpeorokzoldszukitett/50-100cmszam.php");
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="torpeorokzoldszukitett/100-150cmtorpeorokzold.php">
        100-150 cm-ig növő
        <?php
          require("torpeorokzoldszukitett/100-150cmszam.php");
        ?>
        </a></div>
    </div>
  </div>
        <hr>
        <!--way we are in the page-->
        <div id="utvonal">
          <a href="../index.php">Főoldal </a> ->
          <a href="torpeorokzold.php">Törpe örökzöld</a>
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
$sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%törpe örökzöd'";
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