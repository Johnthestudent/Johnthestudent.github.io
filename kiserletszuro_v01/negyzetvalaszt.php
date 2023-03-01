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
  echo mysqli_connect_error();
}

if(isset($_POST['checkbox']))
{
    foreach($_POST['checkbox'] as $checkbox)
    {
        if($checkbox ==  "Fa")
        {
            $sql = "SELECT Noveny, Tipus, Evelo FROM plantak WHERE Tipus='Fa'";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) {
                    echo "| " . $row["Noveny"]. " | " . $row["Tipus"]. " | ". $row["Evelo"] . "<br>";
                }
            } else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Bokor")
        {
            $sql = "SELECT Noveny, Tipus, Evelo FROM plantak WHERE Tipus='Bokor' OR Noveny LIKE 'Gömbös'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo "| " . $row["Noveny"]. " | " . $row["Tipus"]. " | ". $row["Evelo"] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Virág")
        {
            $sql = "SELECT Noveny, Tipus, Evelo FROM plantak WHERE Tipus='Virag' OR Tipus='Hagymás'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo "| " . $row["Noveny"]. " | " . $row["Tipus"]. " | ". $row["Evelo"] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Lágyszárú")
        {
            $sql = "SELECT Noveny, Tipus, Evelo FROM plantak WHERE Tipus='Lagyszaru' OR Tipus='Virag'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo "| " . $row["Noveny"]. " | " . $row["Tipus"]. " | ". $row["Evelo"] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Gyümölcstermő")
        {
            $sql = "SELECT Noveny, Tipus, Evelo FROM plantak WHERE Tipus='Fa' OR Tipus='Bokor'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo "| " . $row["Noveny"]. " | " . $row["Tipus"]. " | ". $row["Evelo"] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Évelő")
        {
            $sql = "SELECT Noveny, Tipus, Evelo FROM plantak WHERE Evelo='TRUE'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo "| " . $row["Noveny"]. " | " . $row["Tipus"]. " | ". $row["Evelo"] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Dísznövény")
        {
            $sql = "SELECT Noveny, Tipus, Evelo FROM plantak WHERE Tipus='Disz'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo "| " . $row["Noveny"]. " | " . $row["Tipus"]. " | ". $row["Evelo"] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Hagymás")
        {
            $sql = "SELECT Noveny, Tipus, Evelo FROM plantak WHERE Tipus='Hagymás'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo "| " . $row["Noveny"]. " | " . $row["Tipus"]. " | ". $row["Evelo"] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else
        {
            //printing out the database itself onto the web page
            $sql = "SELECT Noveny, Tipus, Evelo FROM plantak";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo "| " . $row["Noveny"]. " | " . $row["Tipus"]. " | ". $row["Evelo"] . "<br>";
                }
            } else 
            {
                echo "0 results";
            }
 
            $conn->close();
        }
    }
}


/*if($_SERVER["REQUEST_METHOD"] == "POST")
{
    echo "Bokrok";
}*/
/*$radio = "";
if(isset($_GET['noveny1']))
{
    $radio = $_GET['noveny1'];
}
if($radio == "Bokor")
{
        $sql = "SELECT Noveny, Tipus, Evelo FROM plantak WHERE Tipus='Bokor' OR Noveny LIKE 'Gömbös'";
    //$sql = "DELETE Noveny, Tipus, Evelo FROM plantak WHERE Noveny LIKE 'Gömbös'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) 
    {
        // output data of each row
        while($row = $result->fetch_assoc()) 
        {
            echo "| " . $row["Noveny"]. " | " . $row["Tipus"]. " | ". $row["Evelo"] . "<br>";
        }
    } 
    else 
    {
        echo "0 results";
    } 
}*/
/*if(isset($_POST['noveny1']))
{
    $sql = "SELECT Noveny, Tipus, Evelo FROM plantak WHERE Tipus='Bokor' OR Noveny LIKE 'Gömbös'";
    //$sql = "DELETE Noveny, Tipus, Evelo FROM plantak WHERE Noveny LIKE 'Gömbös'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) 
    {
        // output data of each row
        while($row = $result->fetch_assoc()) 
        {
            echo "| " . $row["Noveny"]. " | " . $row["Tipus"]. " | ". $row["Evelo"] . "<br>";
        }
    } 
    else 
    {
        echo "0 results";
    } 
} */ 
?>