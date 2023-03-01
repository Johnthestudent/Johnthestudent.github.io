<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../../styles.css">
    <title>Virágzó mediterrán növény</title>
</head>
<body>
    <div id="filteredsections">
      <div class="card">
        <div class="card-body"><a class="card-link" href="egyebkertiviragmediterran.php">
          Egyéb kerti virág
          <?php
            require("egyebkertiviragszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="feherviragmediterran.php">
          Fehér virágú
          <?php
            require("feherviragszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="sargaviragmediterran.php">
          Sárga virágú
          <?php
            require("sargaviragszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="narancsviragmediterran.php">
          Narancs virágú
          <?php
            require("narancsviragszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="vorosviragmediterran.php">
          Vörös virágú
          <?php
            require("vorosviragszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="rozsaszinviragmediterran.php">
          Rózsaszín virágú
          <?php
            require("rozsaszinviragszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="lilaviragmediterran.php">
          Lila virágú
          <?php
            require("lilaviragszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="kekviragmediterran.php">
          Kék virágú
          <?php
            require("kekviragszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="marciusmediterran.php">
          Márciusban virágzik
          <?php
            require("marciusszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="aprilismediterran.php">
          Áprilisban virágzik
          <?php
            require("aprilisszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="majusmediterran.php">
          Májusban virágzik
          <?php
            require("majusszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="juniusmediterran.php">
          Júniusban virágzik
          <?php
            require("juniusszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="juliusmediterran.php">
          Júliusban virágzik
          <?php
            require("juliusszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="augusztusmediterran.php">
          Augusztusban virágzik
          <?php
            require("augusztusszam.php");
          ?>
        </a></div>
      </div>
      <div class="card">
        <div class="card-body"><a class="card-link" href="szeptembermediterran.php">
          Szeptemberben virágzik
          <?php
            require("szeptemberszam.php");
          ?>
        </a></div>
      </div>
    </div>
    <!--way we are in the page-->
        <div id="utvonal">
          <a href="../../index.php">Főoldal </a> ->
          <a href="../mediterran.php">Mediterrán növény</a> ->
          <a href="viragzomediterran.php">Virágzó mediterrán növény</a> 
        </div>
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
          where novenytipusa like '%virágzó' and kategoria like '%dézsás növény'";
          $result = $conn->query($sql);
          if ($result->num_rows > 0) 
          {
            // output data of each row
            while ($row = $result->fetch_assoc()) {
              echo $row["product_name"] . "<br>";
            }
          }
          else 
          {
            echo "0 results";
          }
  
          $conn->close();
          ?>
</body>
</html>