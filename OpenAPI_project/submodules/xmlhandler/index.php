<?php
    //In this file, an example xml can be read.
    $xml_data = simplexml_load_file("example.xml") or die("Error: Cannot read the file");
   // echo $xml_data;
    print_r($xml_data)

    //Different way of getting values out of the example xml file.
    //Comment out this section and comment the above section for trying it out.
    
    /*
    $xml=simplexml_load_file("example.xml") or die("Error: Cannot create object");
    foreach($xml->children() as $value) {
    echo $value->id . ", ";
    echo $value->name . "<br>";
    } 
    */
?>