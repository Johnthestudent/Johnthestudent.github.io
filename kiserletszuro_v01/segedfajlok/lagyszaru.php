<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../styles.css">
    <title>Lágyszárú növények</title>
</head>
<body>
<div id="mainsection">
        <div id="filteredsections">
            <div class="card">
                <div class="card-body"><a class="card-link" href="virag.php">Virágok
                    <?php
                    $servername = "localhost";
                    $username = "root";
                    $password = "";
                    $dbname = "novenyek";
                
                    // Create connection
                    $conn = new mysqli($servername, $username, $password, $dbname);
                    // Check connection
                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                        echo mysqli_connect_error();
                    }
                
                    //bokor section finds
                    //printing out the database itself onto the web page
                    $sql1 = "SELECT Noveny, Tipus, Evelo FROM plantak WHERE Tipus='Virag' OR Tipus='Hagymás'";
                    $result1 = $conn->query($sql1);
                    $talalat = 0; 
                    if ($result1->num_rows > 0) 
                    {
                        // output data of each row
                        while($row = $result1->fetch_assoc()) 
                        {
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
          <a href="lagyszaru.php">Lágyszárúak</a>
        </div>
        <div id="presenteditems">
            <img src="../Cycas_platyphylla_Female_cone_1.jpg">
            <img src="../Cycas_platyphylla_Female_cone_1.jpg">
            <img src="../Cycas_platyphylla_Female_cone_1.jpg">
        </div>
        <hr>
        <!--table construction attempt-->
        <table style='border: 1px solid black'>
          <tr>
            <th>Noveny</th>
            <th>Tipus</th>
            <th>Evelo</th>
          </tr>
         <?php
            //essential parts of the connection
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "novenyek";

            // Create connection
            $conn = new mysqli($servername, $username, $password, $dbname);
              // Check connection
            if ($conn->connect_error) {
              die("Connection failed: " . $conn->connect_error);
            }
            
            $sql = "SELECT Noveny, Tipus, Evelo FROM plantak WHERE Tipus='Lagyszaru' OR Tipus='Virag'";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
              // output data of each row
              while ($row = $result->fetch_assoc()) {
                //table based outwriting attempt
                echo "<td></td>" . $row["Noveny"] . "<td></td>" . $row["Tipus"] . "<td></td>" . $row["Evelo"];
              }
              echo "</table>";
            }
            else {
            echo "0 results";
            }

           $conn->close(); 
         ?>
        </table>
    </div>
</body>
</html>

<?php
//essential parts of the connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "novenyek";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

//printing out the database itself onto the web page
$sql = "SELECT Noveny, Tipus, Evelo FROM plantak WHERE Tipus='Lagyszaru' OR Tipus='Virag'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      //basic result outwriting
      echo "| " . $row["Noveny"]. " | " . $row["Tipus"]. " | ". $row["Evelo"] . "<br>";
      
      //first element based outwriting attempt
      //echo "<div>{$row['Noveny']}</div><div>{$row['Tipus']}</div><div>{$row['Evelo']}</div>";
    
    }
  } else {
    echo "0 results";
  }
  
  $conn->close();
?>