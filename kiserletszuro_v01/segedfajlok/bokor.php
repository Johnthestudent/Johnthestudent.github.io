<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../styles.css">
    <title>Bokrok</title>
</head>
<body>
<div id="mainsection">
        <form action="?" method="post">
          <label for name="subfilter1">Gyümölcstermő bokrok</label>
          <input type="radio" name="subfilter1" id="01" onchange="this.form.submit();" value="Gyümölcstermő bokrok"><br>
          <label for name="subfilter2">Díszbokrok</label>
          <input type="radio" name="subfilter2" id="02"  onchange="this.form.submit();" value="Díszbokrok"><br>
          <label for name="subfilter3">Minden bokor</label>
          <input type="radio" name="subfilter3" id="03" onchange="this.form.submit();" value="Minden"></input>
          <!--<input type="submit" value="Gyümölcstermő bokrok" name="gyumolcsos">
          <input type="submit" value="Díszbokrok" name="diszes">-->
        </form>
        <hr>
        <!--way we are in the page-->
        <div id="utvonal">
          <a href="../index.php">Főoldal </a> ->
          <a href="bokor.php">Bokrok</a>
        </div>
        <div id="presenteditems">
            <img src="../Cycas_platyphylla_Female_cone_1.jpg">
            <img src="../Cycas_platyphylla_Female_cone_1.jpg">
            <img src="../Cycas_platyphylla_Female_cone_1.jpg">
        </div>
        <hr>
    </div>

    <!--Necessary Javascript -->
	
    <script src="utvonalhoz.js"></script>
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

if(isset($_POST['subfilter1']) == "Gyümölcstermő bokrok")
{
  $sql = "SELECT Noveny, Tipus, Evelo FROM plantak WHERE Noveny LIKE 'Málna' OR Noveny LIKE 'Szeder'";
  //$sql = "DELETE Noveny, Tipus, Evelo FROM plantak WHERE Noveny LIKE 'Gömbös'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      echo "| " . $row["Noveny"]. " | " . $row["Tipus"]. " | ". $row["Evelo"] . "<br>";
    }
  } else {
    echo "0 results";
  }
}
else if(isset($_POST['subfilter2']) == "Díszbokrok")
{
  $sql = "SELECT Noveny, Tipus, Evelo FROM plantak WHERE Noveny LIKE 'Gömbös'";
  //$sql = "DELETE Noveny, Tipus, Evelo FROM plantak WHERE Noveny LIKE 'Málna' OR Noveny LIKE 'Szeder'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      echo "| " . $row["Noveny"]. " | " . $row["Tipus"]. " | ". $row["Evelo"] . "<br>";
    }
  } else {
    echo "0 results";
  }
}
else if(isset($_POST['subfilter3']) == "Minden")
{
  //printing out the database itself onto the web page
  $sql = "SELECT Noveny, Tipus, Evelo FROM plantak WHERE Tipus='Bokor' OR Noveny LIKE 'Gömbös'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      echo "| " . $row["Noveny"]. " | " . $row["Tipus"]. " | ". $row["Evelo"] . "<br>";
    }
  } else {
    echo "0 results";
  }
}
else
{
    //printing out the database itself onto the web page
    $sql = "SELECT Noveny, Tipus, Evelo FROM plantak WHERE Tipus='Bokor' OR Noveny LIKE 'Gömbös'";
    $result = $conn->query($sql);
  
    if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
        echo "| " . $row["Noveny"]. " | " . $row["Tipus"]. " | ". $row["Evelo"] . "<br>";
      }
    } else {
      echo "0 results";
    }
}
/*
if(isset($_POST['gyumolcsos']))
{
  $sql = "SELECT Noveny, Tipus, Evelo FROM plantak WHERE Noveny LIKE 'Málna' OR Noveny LIKE 'Szeder'";
  //$sql = "DELETE Noveny, Tipus, Evelo FROM plantak WHERE Noveny LIKE 'Gömbös'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      echo "| " . $row["Noveny"]. " | " . $row["Tipus"]. " | ". $row["Evelo"] . "<br>";
    }
  } else {
    echo "0 results";
  }
}
else if(isset($_POST['bokros']))
{
  $sql = "SELECT Noveny, Tipus, Evelo FROM plantak WHERE Noveny LIKE 'Gömbös'";
  //$sql = "DELETE Noveny, Tipus, Evelo FROM plantak WHERE Noveny LIKE 'Málna' OR Noveny LIKE 'Szeder'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      echo "| " . $row["Noveny"]. " | " . $row["Tipus"]. " | ". $row["Evelo"] . "<br>";
    }
  } else {
    echo "0 results";
  }
}*/
/*else
{*/

/*}*/
  $conn->close();
?>