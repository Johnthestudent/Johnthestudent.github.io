<?php

    $person_json = file_get_contents("objects.json");

    //If the second parameter is false, then an object is returned.
    //Otherwise, an array is the return.
    $decoded_json = json_decode($person_json, true);
    
    //Helper variable for snatching data from the given object.
    $number_generated = $_GET["quantity"];
    if($number_generated == 1)
    {
        $letmehaveit = $decoded_json["secrets"][0]["name"];
    }
    else if ($number_generated == 2)
    {
        $letmehaveit = $decoded_json["secrets"][1]["name"];
    }
    else if ($number_generated == 3)
    {
        $letmehaveit = $decoded_json["secrets"][2]["name"];
    }
?>