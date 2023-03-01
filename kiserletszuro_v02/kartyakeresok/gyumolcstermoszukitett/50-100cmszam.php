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
          $sql = "SELECT product_name from kertcentdb_vm_product inner join kertcentdb_vm_product_type_1 on kertcentdb_vm_product.product_id = kertcentdb_vm_product_type_1.product_id 
          where kifejlettnovenymagassaga = '50-100 cm-ig növő' and kategoria like '%gyümölcstermő'";
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