<html>
    <body>
        <?php
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
        ?>
    </body>
</html>