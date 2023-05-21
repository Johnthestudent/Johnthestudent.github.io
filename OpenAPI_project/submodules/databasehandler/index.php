 <?php
//In this file, data is inserted into and shown from an example database.
$servername = "localhost";
$username = ""; //Type your username here.
$password = ""; //Type your password here.
$dbname = "exampleforapiwork";

// Create connection to the database.
$conn = new mysqli($servername, $username, $password, $dbname);
// Check whether connection creation was successful or not.
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

//Inserting data into the example database.
$sql = "INSERT INTO apidata (id, dataname)
VALUES ('1', 'Secret01')";

//Checking out, whether data insert operation was successful or not.
if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

//Selecting data out of the example database.
$sql = "SELECT id, dataname FROM apidata";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // Output data of each row.
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - Name: " . $row["dataname"] . "<br>";
  }
} else {
  echo "0 results";
}

//It is essential to close connection after finishing all operations.
$conn->close();
?> 