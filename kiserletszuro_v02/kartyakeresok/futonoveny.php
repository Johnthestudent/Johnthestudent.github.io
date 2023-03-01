<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../styles.css">
    <title>Futónövény</title>
</head>
<body>
<div id="mainsection">
  <div id="filteredsections">
    <div class="card">
      <div class="card-body"><a class="card-link" href="futonovenyszukitett/kulterifutonoveny.php">
        Kültéri növény
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
          $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where tipus = 'Kültéri növény' and novenytipusa like '%futónövény'";
          $result = $conn->query($sql);
          $talalat = 0; 
          if ($result->num_rows > 0) 
          {
            // output data of each row
            while ($row = $result->fetch_assoc()) {
              $talalat++;
            }
            echo "(" . $talalat . ")";
          }
          else 
          {
            echo "0 results";
          }
  
          $conn->close();
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="futonovenyszukitett/futonovenygyumolcstermo.php">
        Gyümölcstermő
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
          $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%futónövény' and kategoria like '%gyümölcstermő'";
          $result = $conn->query($sql);
          $talalat = 0; 
          if ($result->num_rows > 0) 
          {
            // output data of each row
            while ($row = $result->fetch_assoc()) {
              $talalat++;
            }
            echo "(" . $talalat . ")";
          }
          else 
          {
            echo "0 results";
          }
  
          $conn->close();
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="futonovenyszukitett/feherviragufutonoveny.php">
        Fehér virágú
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
          $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%futónövény' and viragszine like '%fehér'";
          $result = $conn->query($sql);
          $talalat = 0; 
          if ($result->num_rows > 0) 
          {
            // output data of each row
            while ($row = $result->fetch_assoc()) {
              $talalat++;
            }
            echo "(" . $talalat . ")";
          }
          else 
          {
            echo "0 results";
          }
  
          $conn->close();
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="futonovenyszukitett/aprilisifutonoveny.php">
        Áprilisban virágzik
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
          $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%futónövény' and viragzasideje !=''";
          $result = $conn->query($sql);
          $talalat = 0; 
          if ($result->num_rows > 0) 
          {
            // output data of each row
            while ($row = $result->fetch_assoc()) {
              $talalat++;
            }
            echo "(" . $talalat . ")";
          }
          else 
          {
            echo "0 results";
          }
  
          $conn->close();
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="futonovenyszukitett/majusifutonoveny.php">
        Májusban virágzik
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
          $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%futónövény' and viragzasideje !='' and viragzasideje like '%Május'";
          $result = $conn->query($sql);
          $talalat = 0; 
          if ($result->num_rows > 0) 
          {
            // output data of each row
            while ($row = $result->fetch_assoc()) {
              $talalat++;
            }
            echo "(" . $talalat . ")";
          }
          else 
          {
            echo "0 results";
          }
  
          $conn->close();
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="futonovenyszukitett/juniusifutonoveny.php">
        Júniusban virágzik
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
          $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%futónövény' and viragzasideje !='' and viragzasideje like '%Június'";
          $result = $conn->query($sql);
          $talalat = 0; 
          if ($result->num_rows > 0) 
          {
            // output data of each row
            while ($row = $result->fetch_assoc()) {
              $talalat++;
            }
            echo "(" . $talalat . ")";
          }
          else 
          {
            echo "0 results";
          }
  
          $conn->close();
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="futonovenyszukitett/fagyturofutonoveny.php">
        Fagytűrő
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
          $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%futónövény' and idojarasitenyezo='fagytűrő'";
          $result = $conn->query($sql);
          $talalat = 0; 
          if ($result->num_rows > 0) 
          {
            // output data of each row
            while ($row = $result->fetch_assoc()) {
              $talalat++;
            }
            echo "(" . $talalat . ")";
          }
          else 
          {
            echo "0 results";
          }
  
          $conn->close();
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="futonovenyszukitett/mersekeltenfagyturofutonoveny.php">
        Mérsékelten Fagytűrő
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
          $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%futónövény' and idojarasitenyezo='mérsékelten fagytűrő'";
          $result = $conn->query($sql);
          $talalat = 0; 
          if ($result->num_rows > 0) 
          {
            // output data of each row
            while ($row = $result->fetch_assoc()) {
              $talalat++;
            }
            echo "(" . $talalat . ")";
          }
          else 
          {
            echo "0 results";
          }
  
          $conn->close();
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="futonovenyszukitett/fenykedvelofutonoveny.php">
        Fénykedvelő
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
          $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%futónövény' and fenyigenye = 'fénykedvelő'";
          $result = $conn->query($sql);
          $talalat = 0; 
          if ($result->num_rows > 0) 
          {
            // output data of each row
            while ($row = $result->fetch_assoc()) {
              $talalat++;
            }
            echo "(" . $talalat . ")";
          }
          else 
          {
            echo "0 results";
          }
  
          $conn->close();
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="futonovenyszukitett/felarnyekkedvelofutonoveny.php">
        Félárnyék kedvelő
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
          $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%futónövény' and fenyigenye = 'félárnyék kedvelő'";
          $result = $conn->query($sql);
          $talalat = 0; 
          if ($result->num_rows > 0) 
          {
            // output data of each row
            while ($row = $result->fetch_assoc()) {
              $talalat++;
            }
            echo "(" . $talalat . ")";
          }
          else 
          {
            echo "0 results";
          }
  
          $conn->close();
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="futonovenyszukitett/vizigenyesfutonoveny.php">
        Vízigényes
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
          $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%futónövény' and vizigenye = 'vízigényes'";
          $result = $conn->query($sql);
          $talalat = 0; 
          if ($result->num_rows > 0) 
          {
            // output data of each row
            while ($row = $result->fetch_assoc()) {
              $talalat++;
            }
            echo "(" . $talalat . ")";
          }
          else 
          {
            echo "0 results";
          }
  
          $conn->close();
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="futonovenyszukitett/kozepesenvizigenyesfutonoveny.php">
        Közepesen vízigényes
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
          $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%futónövény' and vizigenye = 'közepesen vízigényes'";
          $result = $conn->query($sql);
          $talalat = 0; 
          if ($result->num_rows > 0) 
          {
            // output data of each row
            while ($row = $result->fetch_assoc()) {
              $talalat++;
            }
            echo "(" . $talalat . ")";
          }
          else 
          {
            echo "0 results";
          }
  
          $conn->close();
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="futonovenyszukitett/0-15cmfutonoveny.php">
        0-15 cm-ig növő
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
          $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%futónövény' and kifejlettnovenymagassaga = '0-15 cm-ig növő'";
          $result = $conn->query($sql);
          $talalat = 0; 
          if ($result->num_rows > 0) 
          {
            // output data of each row
            while ($row = $result->fetch_assoc()) {
              $talalat++;
            }
            echo "(" . $talalat . ")";
          }
          else 
          {
            echo "0 results";
          }
  
          $conn->close();
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="futonovenyszukitett/1,5-5mfutonoveny.php">
        1,5-5 m-ig növő
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
          $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%futónövény' and kifejlettnovenymagassaga = '1,5-5 m-ig növő'";
          $result = $conn->query($sql);
          $talalat = 0; 
          if ($result->num_rows > 0) 
          {
            // output data of each row
            while ($row = $result->fetch_assoc()) {
              $talalat++;
            }
            echo "(" . $talalat . ")";
          }
          else 
          {
            echo "0 results";
          }
  
          $conn->close();
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="futonovenyszukitett/5-10mfutonoveny.php">
        5-10 m-ig növő
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
          $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%futónövény' and kifejlettnovenymagassaga = '5-10 m-ig növő'";
          $result = $conn->query($sql);
          $talalat = 0; 
          if ($result->num_rows > 0) 
          {
            // output data of each row
            while ($row = $result->fetch_assoc()) {
              $talalat++;
            }
            echo "(" . $talalat . ")";
          }
          else 
          {
            echo "0 results";
          }
  
          $conn->close();
        ?>
        </a></div>
    </div>
    <div class="card">
      <div class="card-body"><a class="card-link" href="futonovenyszukitett/10mnagyobbfutonoveny.php">
        10 m-től nagyobbra növő futónövény
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
          $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%futónövény' and kifejlettnovenymagassaga = '10 m-től nagyobbra növő'";
          $result = $conn->query($sql);
          $talalat = 0; 
          if ($result->num_rows > 0) 
          {
            // output data of each row
            while ($row = $result->fetch_assoc()) {
              $talalat++;
            }
            echo "(" . $talalat . ")";
          }
          else 
          {
            echo "0 results";
          }
  
          $conn->close();
        ?>
        </a></div>
    </div>
  </div>
        <hr>
        <!--way we are in the page-->
        <div id="utvonal">
          <a href="../index.php">Főoldal </a> ->
          <a href="futonoveny.php">Futónövény</a>
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
$sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%futónövény'";
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