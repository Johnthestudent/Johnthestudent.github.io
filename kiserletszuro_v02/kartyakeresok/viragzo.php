<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../styles.css">
    <title>Virágzó</title>
</head>
<body>
<div id="mainsection">
  <div id="filteredsections">
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/kulteriviragzo.php">
        Kültéri növény
        <?php
          require("viragzoszukitett/kulteriszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/belteriviragzo.php">
        Beltéri növény
        <?php
          require("viragzoszukitett/belteriszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/orokzoldviragzo.php">
        Örökzöld
        <?php
          require("viragzoszukitett/orokzoldszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/egyebkertiviragviragzo.php">
        Egyéb kerti virág
        <?php
          require("viragzoszukitett/egyebkertiviragszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/cserjeviragzo.php">
        Cserje
        <?php
          require("viragzoszukitett/cserjeszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/faviragzo.php">
        Fa
        <?php
          require("viragzoszukitett/faszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/balkonnovenyviragzo.php">
        Balkonnövény
        <?php
          require("viragzoszukitett/balkonnovenyszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/feherviragviragzo.php">
        Fehér virágú
        <?php
          require("viragzoszukitett/feherviragszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/sargaviragviragzo.php">
        Sárga virágú
        <?php
          require("viragzoszukitett/sargaviragszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/narancsviragviragzo.php">
        Narancs virágú
        <?php
          require("viragzoszukitett/narancsviragszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/vorosviragviragzo.php">
        Vörös virágú
        <?php
          require("viragzoszukitett/vorosviragszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/rozsaszinviragviragzo.php">
        Rózsaszín virágú
        <?php
          require("viragzoszukitett/rozsaszinviragszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/lilaviragviragzo.php">
        Lila virágú
        <?php
          require("viragzoszukitett/lilaviragszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/kekviragviragzo.php">
        Kék virágú
        <?php
          require("viragzoszukitett/kekviragszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/zoldviragviragzo.php">
        Zöld virágú
        <?php
          require("viragzoszukitett/zoldviragszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/marciusviragzo.php">
        Márciusban virágzik
        <?php
          require("viragzoszukitett/marciusszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/aprilisviragzo.php">
        Áprilisban virágzik
        <?php
          require("viragzoszukitett/aprilisszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/majusviragzo.php">
        Májusban virágzik
        <?php
          require("viragzoszukitett/majusszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/juniusviragzo.php">
        Júniusban virágzik
        <?php
          require("viragzoszukitett/juniusszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/juliusviragzo.php">
        Júliusban virágzik
        <?php
          require("viragzoszukitett/juliusszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/augusztusviragzo.php">
        Augusztusban virágzik
        <?php
          require("viragzoszukitett/augusztusszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/szeptemberviragzo.php">
        Szeptemberben virágzik
        <?php
          require("viragzoszukitett/szeptemberszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/oktoberviragzo.php">
        Októberben virágzik
        <?php
          require("viragzoszukitett/oktoberszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/novemberviragzo.php">
        Novemberben virágzik
        <?php
          require("viragzoszukitett/novemberszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/decemberviragzo.php">
        Decemberben virágzik
        <?php
          require("viragzoszukitett/decemberszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/fagyturoviragzo.php">
        Fagytűrő
        <?php
          require("viragzoszukitett/fagyturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/mersekeltenfagyturoviragzo.php">
        Mérsékelten fagytűrő
        <?php
          require("viragzoszukitett/mersekeltenfagyturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/nemfagyturoviragzo.php">
        Nem fagytűrő
        <?php
          require("viragzoszukitett/nemfagyturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/fenykedveloviragzo.php">
        Fénykedvelő
        <?php
          require("viragzoszukitett/fenykedveloszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/felarnyekkedveloviragzo.php">
        Félárnyék kedvelő
        <?php
          require("viragzoszukitett/felarnyekkedveloszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/arnyekturoviragzo.php">
        Árnyéktűrő
        <?php
          require("viragzoszukitett/arnyekturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/vizigenyesviragzo.php">
        Vízigényes
        <?php
          require("viragzoszukitett/vizigenyesszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/kozepesenvizigenyesviragzo.php">
        Közepesen vízigényes
        <?php
          require("viragzoszukitett/kozepesenvizigenyesszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/szarazsagturoviragzo.php">
        Szárazságtűrő
        <?php
          require("viragzoszukitett/szarazsagturoszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/0-15cmviragzo.php">
        0-15 cm-ig növő
        <?php
          require("viragzoszukitett/0-15cmszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/15-50cmviragzo.php">
        15-50 cm-ig növő
        <?php
          require("viragzoszukitett/15-50cmszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/50-100cmviragzo.php">
        50-100 cm-ig növő
        <?php
          require("viragzoszukitett/50-100cmszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/100-150cmviragzo.php">
        100-150 cm-ig növő
        <?php
          require("viragzoszukitett/100-150cmszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/1,5-5mviragzo.php">
        1,5-5 m-ig növő
        <?php
          require("viragzoszukitett/1,5-5mszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/5-10mviragzo.php">
        5-10 m-ig növő
        <?php
          require("viragzoszukitett/5-10mszam.php");
        ?>
      </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="viragzoszukitett/10mnagyobbviragzo.php">
        10 m-től nagyobbra növő
        <?php
          require("viragzoszukitett/10mnagyobbszam.php");
        ?>
      </a></div>
    </div>
  </div>
        <hr>
        <!--way we are in the page-->
        <div id="utvonal">
          <a href="../index.php">Főoldal </a> ->
          <a href="viragzo.php">Virágzó</a>
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
$sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kategoria like '%virágzó'";
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