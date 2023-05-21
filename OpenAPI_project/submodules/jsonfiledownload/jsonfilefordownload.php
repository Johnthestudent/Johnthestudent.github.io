<html>
    <body>
        <?php

            //header('Content-Type: application/json');
            //header('Content-Disposition: attachment; filename="downloadable.json"');
            
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
        ?>
    </body>
</html>