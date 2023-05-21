<html>
    <body>
        <!--In this file, for the given number in the form, a JSON object is printed.-->
        <?php 
            $person_json = file_get_contents("object.json");

            //If the second parameter is false, then an object is returned.
            $decoded_json = json_decode($person_json, false);

            echo $decoded_json->name . '<br>';

            echo $decoded_json->id . '<br>';

            echo $decoded_json->age . '<br>';
        ?>
    </body>
</html>