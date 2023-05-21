<?php
//In this file, an example database is constructed, with a table with a few data.
$servername = "localhost";
$username = ""; //Type your username here.
$password = ""; //Type your password here.

// Create connection.
$conn = new mysqli($servername, $username, $password);
// Check if connection was successful.
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Create the example database.
$sql = "CREATE DATABASE example";
if ($conn->query($sql) === TRUE) {
  echo "Database created successfully";
} else {
  echo "Error creating database: " . $conn->error;
}

// Create table for the example database.
$sql = "CREATE TABLE apidata (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
secretname VARCHAR(30) NOT NULL
)";

// Insert data into the table of the example database.
$sql = "INSERT INTO apidata (id, secretname)
VALUES ('1', 'Secret01')";

// Select the forementioned data from the table.
$sql = "SELECT id, secretname FROM apidata";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - Name: " . $row["secretname"]. "<br>";
  }
} else {
  echo "0 results";
}

$conn->close();

//Reconnect (testing purposes).
$conn = new mysqli($servername, $username, $password, "example");
// Check if connection was successful.
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// Create table for the example database.
$sql = "CREATE TABLE apidata (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
secretname VARCHAR(30) NOT NULL
)";

// Insert data into the table of the example database.
$sql = "INSERT INTO apidata (id, secretname)
VALUES ('1', 'Secret01')";
// Select the forementioned data from the table.
$sql = "SELECT id, secretname FROM apidata";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - Name: " . $row["secretname"]. "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>