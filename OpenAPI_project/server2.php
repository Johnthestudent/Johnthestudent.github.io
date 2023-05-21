<?php
    $person_json = file_get_contents("secretsAPI.json");

    //If the second parameter is false, then an object is returned.
    //Otherwise, an array is the return.
    $decoded_json = json_decode($person_json, true);
    
    //Helper variable for snatching data from the given object.
    $number_generated = $_GET["quantity"];

    //Helper variables to construct the random generated url.
    $first_tag = "https://www.";
    $middle_tag = "secret";
    $end_tag = ".com";

    //Grabbing the n-th secret, depending on the n number given in the form.
    if($number_generated == 1)
    {
        if(!isset($decoded_json["secrets"][0]["secretText"])) 
        {
            echo "<h1>404</h1>";
            echo "<h3>Secret cannot be found!</h3>";
            echo "<h4>Please go back to the forms section to create the secret!</h4>";
            header("Status: 404 Not Found");
        }
        else
        {
            echo "<h1>The secret of <i>$first_tag$middle_tag$number_generated$end_tag</i> :</h1>";
            $letmehaveit = $decoded_json["secrets"][0]["secretText"];
        }
    }
    else if ($number_generated == 2)
    {
        if(!isset($decoded_json["secrets"][1]["secretText"])) 
        {
            echo "<h1>404</h1>";
            echo "<h3>Secret cannot be found!</h3>";
            echo "<h4>Please go back to the forms section to create the secret!</h4>";
            header("Status: 404 Not Found");
        }
        else
        {
            echo "<h1>The secret of <i>$first_tag$middle_tag$number_generated$end_tag</i> :</h1>";
            $letmehaveit = $decoded_json["secrets"][1]["secretText"];
        }
    }
    else if ($number_generated == 3)
    {
        if(!isset($decoded_json["secrets"][2]["secretText"])) 
        {
            echo "<h1>404</h1>";
            echo "<h3>Secret cannot be found!</h3>";
            echo "<h4>Please go back to the forms section to create the secret!</h4>";
            header("Status: 404 Not Found");
        }
        else
        {
            echo "<h1>The secret of <i>$first_tag$middle_tag$number_generated$end_tag</i> :</h1>";
            $letmehaveit = $decoded_json["secrets"][2]["secretText"];
        }
    }
    else if ($number_generated == 4)
    {
        if(!isset($decoded_json["secrets"][3]["secretText"])) 
        {
            echo "<h1>404</h1>";
            echo "<h3>Secret cannot be found!</h3>";
            echo "<h4>Please go back to the forms section to create the secret!</h4>";
            header("Status: 404 Not Found");
        }
        else
        {
            echo "<h1>The secret of <i>$first_tag$middle_tag$number_generated$end_tag</i> :</h1>";
            $letmehaveit = $decoded_json["secrets"][3]["secretText"];
        }
    }
    else if ($number_generated == 5)
    {
        if(!isset($decoded_json["secrets"][4]["secretText"])) 
        {
            echo "<h1>404</h1>";
            echo "<h3>Secret cannot be found!</h3>";
            echo "<h4>Please go back to the forms section to create the secret!</h4>";
            header("Status: 404 Not Found");
        }
        else
        {
            echo "<h1>The secret of <i>$first_tag$middle_tag$number_generated$end_tag</i> :</h1>";
            $letmehaveit = $decoded_json["secrets"][4]["secretText"];
        }
    }
    else if($number_generated == 6)
    {
        if(!isset($decoded_json["0"]["secretText"]))
        {
            echo "<h1>404</h1>";
            echo "<h3>Secret cannot be found!</h3>";
            echo "<h4>Please go back to the forms section to create the secret!</h4>";
            header("Status: 404 Not Found");
        }
        else
        {
            echo "<h1>The secret of <i>$first_tag$middle_tag$number_generated$end_tag</i> :</h1>";
             $letmehaveit = $decoded_json["0"]["secretText"];
        }
    }   
    else if($number_generated == 7)
    {
        if(!isset($decoded_json["1"]["secretText"]))
        {
            echo "<h1>404</h1>";
            echo "<h3>Secret cannot be found!</h3>";
            echo "<h4>Please go back to the forms section to create the secret!</h4>";
            header("Status: 404 Not Found");
        }
        else
        {
            echo "<h1>The secret of <i>$first_tag$middle_tag$number_generated$end_tag</i> :</h1>";
             $letmehaveit = $decoded_json["1"]["secretText"];
        }
    }
    else if($number_generated == 8)
    {
        if(!isset($decoded_json["2"]["secretText"]))
        {
            echo "<h1>404</h1>";
            echo "<h3>Secret cannot be found!</h3>";
            echo "<h4>Please go back to the forms section to create the secret!</h4>";
            header("Status: 404 Not Found");
        }
        else
        {
            echo "<h1>The secret of <i>$first_tag$middle_tag$number_generated$end_tag</i> :</h1>";
             $letmehaveit = $decoded_json["2"]["secretText"];
        }
    }
    else if($number_generated == 9)
    {
        if(!isset($decoded_json["3"]["secretText"]))
        {
            echo "<h1>404</h1>";
            echo "<h3>Secret cannot be found!</h3>";
            echo "<h4>Please go back to the forms section to create the secret!</h4>";
            header("Status: 404 Not Found");
        }
        else
        {
            echo "<h1>The secret of <i>$first_tag$middle_tag$number_generated$end_tag</i> :</h1>";
             $letmehaveit = $decoded_json["3"]["secretText"];
        }
    }
    else if($number_generated == 10)
    {
        if(!isset($decoded_json["4"]["secretText"]))
        {
            echo "<h1>404</h1>";
            echo "<h3>Secret cannot be found!</h3>";
            echo "<h4>Please go back to the forms section to create the secret!</h4>";
            header("Status: 404 Not Found");
        }
        else
        {
            echo "<h1>The secret of <i>$first_tag$middle_tag$number_generated$end_tag</i> :</h1>";
             $letmehaveit = $decoded_json["4"]["secretText"];
        }
    }

    //If the user is about to download the generated secret as a json file.
    if(isset($_GET['jsonfile']))
    {
        //Helper variable for getting the data typed in in the form.
        $content = $_GET["quantity"];
        if($content == 1)
        {
            if(!isset($decoded_json["secrets"][0]["secretText"]))
                {
                    echo "<h1>404</h1>";
                    echo "<h3>Secret cannot be found!</h3>";
                    echo "<h4>Please go back to the forms section to create the secret!</h4>";
                    header("Status: 404 Not Found");
                }
            else
            {
                $jsonvalue = $decoded_json["secrets"][0]["secretText"];
            }
        }
        else if($content == 2)
        {
            if(!isset($decoded_json["secrets"][1]["secretText"]))
            {
                echo "<h1>404</h1>";
                echo "<h3>Secret cannot be found!</h3>";
                echo "<h4>Please go back to the forms section to create the secret!</h4>";
                header("Status: 404 Not Found");
            }
            else
            {
                $jsonvalue = $decoded_json["secrets"][1]["secretText"];
            }
        }
        else if($content == 3)
        {
            if(!isset($decoded_json["secrets"][2]["secretText"]))
            {
                echo "<h1>404</h1>";
                echo "<h3>Secret cannot be found!</h3>";
                echo "<h4>Please go back to the forms section to create the secret!</h4>";
                header("Status: 404 Not Found");
            }
            else
            {
                $jsonvalue = $decoded_json["secrets"][2]["secretText"];
            }
        }
        else if($content == 4)
        {
            if(!isset($decoded_json["secrets"][3]["secretText"]))
            {
                echo "<h1>404</h1>";
                echo "<h3>Secret cannot be found!</h3>";
                echo "<h4>Please go back to the forms section to create the secret!</h4>";
                header("Status: 404 Not Found");
            }
            else
            {
                $jsonvalue = $decoded_json["secrets"][3]["secretText"];
            }
        }
        else if($content == 5)
        {
            if(!isset($decoded_json["secrets"][4]["secretText"]))
            {
                echo "<h1>404</h1>";
                echo "<h3>Secret cannot be found!</h3>";
                echo "<h4>Please go back to the forms section to create the secret!</h4>";
                header("Status: 404 Not Found");
            }
            else
            {
                $jsonvalue = $decoded_json["secrets"][4]["secretText"];
            }
        }
        else if($content == 6)
        {
            if(!isset($decoded_json["0"]["secretText"]))
            {
                echo "<h1>404</h1>";
                echo "<h3>Secret cannot be found!</h3>";
                echo "<h4>Please go back to the forms section to create the secret!</h4>";
                header("Status: 404 Not Found");
            }
            else
            {
                $jsonvalue = $decoded_json["0"]["secretText"];
            }            
        }
        else if($content == 7)
        {
            if(!isset($decoded_json["1"]["secretText"]))
            {
                echo "<h1>404</h1>";
                echo "<h3>Secret cannot be found!</h3>";
                echo "<h4>Please go back to the forms section to create the secret!</h4>";
                header("Status: 404 Not Found");
            }
            else
            {
                $jsonvalue = $decoded_json["1"]["secretText"];
            }
        }
        else if($content == 8)
        {
            if(!isset($decoded_json["2"]["secretText"]))
            {
                echo "<h1>404</h1>";
                echo "<h3>Secret cannot be found!</h3>";
                echo "<h4>Please go back to the forms section to create the secret!</h4>";
                header("Status: 404 Not Found");
            }
            else
            {
                $jsonvalue = $decoded_json["2"]["secretText"];
            }
        }
        else if($content == 9)
        {
            if(!isset($decoded_json["3"]["secretText"]))
            {
                echo "<h1>404</h1>";
                echo "<h3>Secret cannot be found!</h3>";
                echo "<h4>Please go back to the forms section to create the secret!</h4>";
                header("Status: 404 Not Found");
            }
            else
            {
                $jsonvalue = $decoded_json["3"]["secretText"];
            }
        }
        else if($content == 10)
        {
            if(!isset($decoded_json["4"]["secretText"]))
            {
                echo "<h1>404</h1>";
                echo "<h3>Secret cannot be found!</h3>";
                echo "<h4>Please go back to the forms section to create the secret!</h4>";
                header("Status: 404 Not Found");
            }
            else
            {
                $jsonvalue = $decoded_json["4"]["secretText"];
            }
        }
        $json_content = array(
            $jsonvalue
        );
        $result = json_encode($json_content);

        //Construction of a json file, which can be downloaded.
        file_put_contents("example.json", $result);
        header('Content-Type: application/json');  
        header("Content-Transfer-Encoding: utf-8");   
        header("Content-disposition: attachment; filename=\"" . basename("downloadable.json") . "\"");   
        readfile("example.json");  
    }
    
    //If the user is about to download the generated secret via an xml file.
    if(isset($_GET['xmlfile']))
    {
        //Headers must be place above the code for creating output.
        header('Content-Type: application/xml');
        header('Content-Disposition: attachment; filename="downloadable.xml"');

        //Helper variable for getting the data typed in in the form.
        $content = $_GET["quantity"];

        if($content == 1)
        {
            if(!isset($decoded_json["secrets"][9]["secretText"]))
                {
                    echo "<h1>404</h1>";
                    echo "<h3>Secret cannot be found!</h3>";
                    echo "<h4>Please go back to the forms section to create the secret!</h4>";
                    header("Status: 404 Not Found");
                }
            else
            {
                $forxmlcontent = $decoded_json["secrets"][0]["secretText"];
            }
        }
        else if($content == 2)
        {
            if(!isset($decoded_json["secrets"][1]["secretText"]))
            {
                echo "<h1>404</h1>";
                echo "<h3>Secret cannot be found!</h3>";
                echo "<h4>Please go back to the forms section to create the secret!</h4>";
                header("Status: 404 Not Found");
            }
            else
            {
                $forxmlcontent = $decoded_json["secrets"][1]["secretText"];
            }
        }
        else if($content == 3)
        {
            if(!isset($decoded_json["secrets"][2]["secretText"]))
            {
                echo "<h1>404</h1>";
                echo "<h3>Secret cannot be found!</h3>";
                echo "<h4>Please go back to the forms section to create the secret!</h4>";
                header("Status: 404 Not Found");
            }
            else
            {
                $forxmlcontent = $decoded_json["secrets"][2]["secretText"];
            }
        }
        else if($content == 4)
        {
            if(!isset($decoded_json["secrets"][3]["secretText"]))
            {
                echo "<h1>404</h1>";
                echo "<h3>Secret cannot be found!</h3>";
                echo "<h4>Please go back to the forms section to create the secret!</h4>";
                header("Status: 404 Not Found");
            }
            else
            {
                $forxmlcontent = $decoded_json["secrets"][3]["secretText"];
            }
        }
        else if($content == 5)
        {
            if(!isset($decoded_json["secrets"][4]["secretText"]))
            {
                echo "<h1>404</h1>";
                echo "<h3>Secret cannot be found!</h3>";
                echo "<h4>Please go back to the forms section to create the secret!</h4>";
                header("Status: 404 Not Found");
            }
            else
            {
                $forxmlcontent = $decoded_json["secrets"][4]["secretText"];
            }
        }
        else if($content == 6)
        {
            if(!isset($decoded_json["0"]["secretText"]))
            {
                echo "<h1>404</h1>";
                echo "<h3>Secret cannot be found!</h3>";
                echo "<h4>Please go back to the forms section to create the secret!</h4>";
                header("Status: 404 Not Found");
            }
            else
            {
                $forxmlcontent = $decoded_json["0"]["secretText"];
            }
        }
        else if($content == 7)
        {
            if(!isset($decoded_json["1"]["secretText"]))
            {
                echo "<h1>404</h1>";
                echo "<h3>Secret cannot be found!</h3>";
                echo "<h4>Please go back to the forms section to create the secret!</h4>";
                header("Status: 404 Not Found");
            }
            else
            {
                $forxmlcontent = $decoded_json["1"]["secretText"];
            }
        }
        else if($content == 8)
        {
            if(!isset($decoded_json["2"]["secretText"]))
            {
                echo "<h1>404</h1>";
                echo "<h3>Secret cannot be found!</h3>";
                echo "<h4>Please go back to the forms section to create the secret!</h4>";
                header("Status: 404 Not Found");
            }
            else
            {
                $forxmlcontent = $decoded_json["2"]["secretText"];
            }
        }
        else if($content == 9)
        {
            if(!isset($decoded_json["3"]["secretText"]))
            {
                echo "<h1>404</h1>";
                echo "<h3>Secret cannot be found!</h3>";
                echo "<h4>Please go back to the forms section to create the secret!</h4>";
                header("Status: 404 Not Found");
            }
            else
            {
                $forxmlcontent = $decoded_json["3"]["secretText"];
            }
        }
        else if($content == 10)
        {
            if(!isset($decoded_json["4"]["secretText"]))
            {
                echo "<h1>404</h1>";
                echo "<h3>Secret cannot be found!</h3>";
                echo "<h4>Please go back to the forms section to create the secret!</h4>";
                header("Status: 404 Not Found");
            }
            else
            {
                $forxmlcontent = $decoded_json["4"]["secretText"];
            }
        }

        $xml = new DOMDocument("1.0");

        //Formatting is essential, in order to prevent parse error.
        $xml->formatOutput=true;
        $value= $xml->createElement("secrets");
        $xml->appendChild($value);

        $secret=$xml->createElement("secret");
        $value->appendChild($secret);

        $secret_name=$xml->createElement("name", "$forxmlcontent");
        $secret->appendChild($secret_name);

        //The xml values will get saved into an example.xml file.
        //Then the downloadable.xml file will get filled with the content of the example.xml file.
        echo "<xml>".$xml->saveXML()."</xml>";
        $xml->save("example.xml");
    }

    //If the user is about to add a secret to the list of secrets.
    if(isset($_GET["addsecret"]))
    {
        function get_data() {
            $name = $_GET['name'];
            $file_name='secretsAPI'. '.json';
    
            if(file_exists("$file_name")) { 
                $current_data=file_get_contents("$file_name");
                $array_data=json_decode($current_data, true);
                
                $extra=array(
                    'name' => "New Secret",
                    'secretText' => $_GET['name'],
                    'createdAt' => date("Y.m.d"),
                    'expiresAt' => date("2023.05.31"),
                    'remainingViews' => 3
                );
                $array_data[]=$extra;
                echo "file exist<br/>"; //This echo is for checking.
                return json_encode($array_data);
            }
            else {
                $datae=array();
                $datae[]=array(
                    'name' => "New Secret",
                    'secretText' => $_GET['name'],
                    'createdAt' => date("Y.m.d"),
                    'expiresAt' => date("2023.05.31"),
                    'remainingViews' => 3
                );
                echo "file not exist<br/>";
                return json_encode($datae);   
            }
        }
  
        //If it has the name like above, then the existing file will be overwritten in a way of getting expanded with the new data.
        $file_name='secretsAPI'. '.json';
        
        if(file_put_contents("$file_name", get_data())) {
            echo '<h3>Secret created successfully! Please go back to the forms section!</h3>';
        }                
        else {
            echo 'There is some error! Secret could not be created!';                
        }
    }
?>