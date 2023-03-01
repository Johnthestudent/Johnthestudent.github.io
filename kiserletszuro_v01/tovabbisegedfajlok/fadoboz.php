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
                    $sql1 = "SELECT Noveny, Tipus, Evelo FROM plantak WHERE Tipus='Fa'";
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