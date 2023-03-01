<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../../styles.css">
    <title>Virágzó díszfű, sziklakerti-, talajtakaró-, és egyéb évelő növény</title>
</head>
<body>
    <div id="filteredsections">
        <div class="card">
            <div class="card-body"><a class="card-link" href="egyebkertiviragdiszfu.php">
            Egyéb kerti virág
            <?php
            require("egyebkertiviragszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="hagymasdiszfu.php">
            Hagymás növény
            <?php
            require("hagymasszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="feherviragdiszfu.php">
            Fehér virágú
            <?php
            require("feherviragszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="sargaviragdiszfu.php">
            Sárga virágú
            <?php
            require("sargaviragszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="narancsviragdiszfu.php">
            Narancs virágú
            <?php
            require("narancsviragszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="vorosviragdiszfu.php">
            Vörös virágú
            <?php
            require("vorosviragszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="rozsaszinviragdiszfu.php">
            Rózsaszín virágú
            <?php
            require("rozsaszinviragszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="lilaviragdiszfu.php">
            Lila virágú
            <?php
            require("lilaviragszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="kekviragdiszfu.php">
            Kék virágú
            <?php
            require("kekviragszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="marciusdiszfu.php">
            Márciusban virágzik
            <?php
            require("marciusszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="aprilisdiszfu.php">
            Áprilisban virágzik
            <?php
            require("aprilisszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="majusdiszfu.php">
            Májusban virágzik
            <?php
            require("majusszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="juniusdiszfu.php">
            Júniusban virágzik
            <?php
            require("juniusszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="juliusdiszfu.php">
            Júliusban virágzik
            <?php
            require("juliusszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="augusztusdiszfu.php">
            Augusztusban virágzik
            <?php
            require("augusztusszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="szeptemberdiszfu.php">
            Szeptemberben virágzik
            <?php
            require("szeptemberszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="oktoberdiszfu.php">
            Októberben virágzik
            <?php
            require("oktoberszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="novemberdiszfu.php">
            Novemberben virágzik
            <?php
            require("novemberszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="decemberdiszfu.php">
            Decemberben virágzik
            <?php
            require("decemberszam.php");
            ?>
            </a></div>
        </div>
    </div>
    <!--way we are in the page-->
        <div id="utvonal">
          <a href="../../index.php">Főoldal </a> ->
          <a href="../diszfu.php">Díszfű, sziklakerti-, talajtakaró-, és egyéb évelő növény</a> ->
          <a href="viragzodiszfu.php">Virágzó díszfű, sziklakerti-, talajtakaró-, és egyéb évelő növény</a>
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
          where novenytipusa like '%virágzó' and kategoria like '%díszfû¸ sziklakerti-¸ talajtakaró-¸ és egyéb évelõ növény'";
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