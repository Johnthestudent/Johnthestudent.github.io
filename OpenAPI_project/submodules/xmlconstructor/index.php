<?php 
    //In this file, an example xml with 3 secrets is constructed.

    //In the iteration, 3 secrets are going to be constructed.
    //Structure for this example.xml file:
    // <secret>
    //      <id></id>
    //      <name></name>
    // </secret>

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

        $secret_name=$xml->createElement("name", "Secret$i");
        $secret->appendChild($secret_name);
    }

    //The xml values will get saved into an example.xml file.
    echo "<xml>".$xml->saveXML()."</xml>";
    $xml->save("example.xml");
?>