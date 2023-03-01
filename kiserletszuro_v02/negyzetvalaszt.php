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
  echo mysqli_connect_error();
}

if(isset($_POST['checkbox']))
{
    foreach($_POST['checkbox'] as $checkbox)
    {
        if($checkbox ==  "Kültéri növény")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where tipus = 'Kültéri növény'";;
            $result = $conn->query($sql);

            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) {
                    echo $row['product_name'] . "<br>";
                }
            } else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Beltéri növény")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where tipus = 'Beltéri növény'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Örökzöld")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kategoria = 'örökzöld'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Félörökzöld")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kategoria like '%félörökzöld'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Lombhullató fa-, cserje")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kategoria like '%cserje'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Virágzó")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kategoria like '%virágzó'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Alakfa")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kategoria like '%alakfa'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Díszfű, sziklakerti-, talajtakaró-, és egyéb évelő növény")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%díszfű'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Egynyári virágzó-, balkonnövény")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%balkonnövény'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Vízi-, vízparti növény")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kategoria like '%vízparti növény'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Gyümölcstermő")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kategoria like '%gyümölcstermő'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Sövénynek való")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kategoria like '%sövénynek való'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Mediterrán-, dézsás növény")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kategoria like '%dézsás növény'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Fa")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa = 'fa'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Cserje")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%cserje'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Törpe örökzöld")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%törpe örökzöd'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Futónövény")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%futónövény'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Balkonnövény")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kategoria like '%balkonnövény'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Egyéb kerti virág")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%egyéb kerti virág'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Örökzöld2")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%örökzöld'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Hagymás növény")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%hagymás növény'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Díszfű")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%díszfű'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Vízi növény")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%vizi növény'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Vízparti növény")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%vízparti növény'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Levéldísznövény")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where novenytipusa like '%levéldísznövény'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Fehér virágú")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where viragszine like '%fehér'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Sárga virágú")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where viragszine like '%sárga'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Narancs virágú")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where viragszine like '%narancs'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Vörös virágú")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where viragszine like '%vörös'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Rózsaszín virágú")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where viragszine like '%rózsaszín'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Lila virágú")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where viragszine like '%lila'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Kék virágú")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where viragszine like '%kék'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Zöld virágú")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where viragszine like '%zöld'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Januárban virágzik")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where viragzasideje !='' and viragzasideje like '%Január'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Februárban virágzik")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where viragzasideje !='' and viragzasideje like '%Február'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Márciusban virágzik")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where viragzasideje !='' and viragzasideje like '%Március'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Áprilisban virágzik")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where viragzasideje !='' and viragzasideje like '%Április'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Májusban virágzik")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where viragzasideje !='' and viragzasideje like '%Május'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Júniusban virágzik")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where viragzasideje !='' and viragzasideje like '%Június'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Júliusban virágzik")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where viragzasideje !='' and viragzasideje like '%Július'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Augusztusban virágzik")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where viragzasideje !='' and viragzasideje like '%Augusztus'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Szeptemberben virágzik")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where viragzasideje !='' and viragzasideje like '%Szeptember'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Októberben virágzik")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where viragzasideje !='' and viragzasideje like '%Október'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Novemberben virágzik")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where viragzasideje !='' and viragzasideje like '%November'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Decemberben virágzik")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where viragzasideje !='' and viragzasideje like '%December'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Vízigényes")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where vizigenye = 'vízigényes'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Közepesen vízigényes")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where vizigenye = 'közepesen vízigényes'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Szárazságtűrő")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where vizigenye = 'szárazságtűrő'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Fagytűrő")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where idojarasitenyezo='fagytűrő'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Mérsékelten fagytűrő")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where idojarasitenyezo like '%mérsékelten fagytűrő'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Nem fagytűrő")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where idojarasitenyezo = 'nem fagytűrő'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Fénykedvelő")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where fenyigenye = 'fénykedvelő'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Félárnyék kedvelő")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where fenyigenye = 'félárnyék kedvelő'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "Árnyéktűrő")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where fenyigenye = 'árnyéktűrő'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "0-15 cm-ig növő")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kifejlettnovenymagassaga = '0-15 cm-ig növő'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "15-50 cm-ig növő")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kifejlettnovenymagassaga = '15-50 cm-ig növő'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "50-100 cm-ig növő")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kifejlettnovenymagassaga = '50-100 cm-ig növő'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "100-150 cm-ig növő")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kifejlettnovenymagassaga = '100-150 cm-ig növő'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "1,5-5 m-ig növő")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kifejlettnovenymagassaga = '1,5-5 m-ig növő'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "5-10 m-ig növő")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kifejlettnovenymagassaga = '5-10 m-ig növő'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
                }
            } 
            else 
            {
                echo "0 results";
            }
        }
        else if($checkbox == "10 m-től nagyobbra növő")
        {
            $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id where kifejlettnovenymagassaga = '10 m-től nagyobbra növő'";
            $result = $conn->query($sql);
            $talalat = 0; 
            if ($result->num_rows > 0) 
            {
                // output data of each row
                while($row = $result->fetch_assoc()) 
                {
                    echo $row['product_name'] . "<br>";
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
            $sql = "SELECT product_name from kertcentdb_vm_product limit 50";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) 
            {
                // output data of each row
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
        }
    }
}
else
{
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
            $sql = "SELECT product_name from kertcentdb_vm_product limit 50";
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
}

?>