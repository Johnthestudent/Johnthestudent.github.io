<html>
    <body>
        <?php
        //The case xml file is about to be downloaded.
        if(isset($_GET['xmlfile']))
        {
            //Headers must be place above the code for creating output.
            header('Content-Type: application/xml');
            header('Content-Disposition: attachment; filename="downloadable.xml"');

            //Helper variable for getting the data typed in in the form.
            $content = $_GET["name"];
            $xml = new DOMDocument("1.0");

            //Formatting is essential, in order to prevent parse error.
            $xml->formatOutput=true;
            $value= $xml->createElement("secrets");
            $xml->appendChild($value);
            for($i = 1; $i <= 3; ++$i)
            {
                $secret=$xml->createElement("secret");
                $value->appendChild($secret);

                $secret_id=$xml->createElement("id", "$i");
                $secret->appendChild($secret_id);

                $secret_name=$xml->createElement("name", "$content$i");
                $secret->appendChild($secret_name);
            }

            //The xml values will get saved into an example.xml file.
            //Then the downloadable.xml file will get filled with the content of the example.xml file.
            echo "<xml>".$xml->saveXML()."</xml>";
            $xml->save("example.xml");
        }
        //The case json file is about to be downloaded.
        else if(isset($_GET['jsonfile']))
        {
            //Helper variable for getting the data typed in in the form.
            $content = $_GET["name"];
            $json_content = array(
                $content
            );
            $result = json_encode($json_content);

            //Construction of a json file, which can be downloaded.
            file_put_contents("example.json", $result);
            header('Content-Type: application/json');  
            header("Content-Transfer-Encoding: utf-8");   
            header("Content-disposition: attachment; filename=\"" . basename("example.json") . "\"");   
            readfile("example.json");  
        }

        //The case when just the typed in value has to be turned into JSON.
        else if(isset($_GET["printjson"]))
        {
            $valueforthis = $_GET["name"];
                
            echo json_encode($valueforthis);
        }
        ?>
    </body>
</html>