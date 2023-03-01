<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../../styles.css">
    <title>Virágzó gyümölcstermő növény</title>
</head>
<body>
    <div id="filteredsections">
        <div class="card">
            <div class="card-body"><a class="card-link" href="feherviraggyumolcstermo.php">
            Fehér virágú
            <?php
            require("feherviragszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="rozsaszinviraggyumolcstermo.php">
            Rózsaszín virágú
            <?php
            require("rozsaszinviragszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="narancsviraggyumolcstermo.php">
            Narancs virágú
            <?php
            require("narancsviragszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="sargaviraggyumolcstermo.php">
            Sárga virágú
            <?php
            require("sargaviragszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="kekviraggyumolcstermo.php">
            Kék virágú
            <?php
            require("kekviragszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="zoldviraggyumolcstermo.php">
            Zöld virágú
            <?php
            require("zoldviragszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="aprilisgyumolcstermo.php">
            Áprilisban virágzik
            <?php
            require("aprilisszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="majusgyumolcstermo.php">
            Májusban virágzik
            <?php
            require("majusszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="juniusgyumolcstermo.php">
            Júniusban virágzik
            <?php
            require("juniusszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="juliusgyumolcstermo.php">
            Júliusban virágzik
            <?php
            require("juliusszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="augusztusgyumolcstermo.php">
            Augusztusban virágzik
            <?php
            require("augusztusszam.php");
            ?>
            </a></div>
        </div>
        <div class="card">
            <div class="card-body"><a class="card-link" href="szeptembergyumolcstermo.php">
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
          <a href="../gyumolcstermo.php">Gyümölcstermő növény</a> ->
          <a href="viragzogyumolcstermo.php">Virágzó gyümölcstermő növény</a>
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
          where novenytipusa like '%virágzó' and kategoria like '%gyümölcstermő'";
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