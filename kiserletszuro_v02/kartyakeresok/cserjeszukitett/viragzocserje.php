<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../../styles.css">
    <title>Virágzó cserje</title>
</head>
<body>
  <div id="filteredsections">
    <div class="card">
      <div class="card-body"><a class="card-link" href="feherviragcserje.php">
        Fehér virágú
        <?php
            require("feherviragszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="sargaviragcserje.php">
        Sárga virágú
        <?php
            require("sargaviragszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="zoldviragcserje.php">
        Zöld virágú
        <?php
            require("zoldviragszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="rozsaszinviragcserje.php">
        Rózsaszín virágú
        <?php
            require("rozsaszinviragszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="vorosviragcserje.php">
        Vörös virágú
        <?php
            require("vorosviragszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="lilaviragcserje.php">
        Lila virágú
        <?php
            require("lilaviragszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="marciuscserje.php">
        Márciusban virágzik
        <?php
            require("marciusszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="apriliscserje.php">
        Áprilisban virágzik
        <?php
            require("aprilisszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="majuscserje.php">
        Májusban virágzik
        <?php
            require("majusszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="juniuscserje.php">
        Júniusban virágzik
        <?php
            require("juniusszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="juliuscserje.php">
        Júliusban virágzik
        <?php
            require("juliusszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="augusztuscserje.php">
        Augusztusban virágzik
        <?php
            require("augusztusszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="szeptembercserje.php">
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
          <a href="../cserje.php">Cserje</a> ->
          <a href="viragzocserje.php">Virágzó cserje</a>
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
          $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kategoria like '%virágzó' and novenytipusa like '%cserje'";
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