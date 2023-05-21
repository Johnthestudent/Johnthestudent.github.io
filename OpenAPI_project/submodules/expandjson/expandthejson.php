<?php
    //Code for appending data to the json file.
    //If the file exists, then its data is saved.
    //A new array stores the new data.
    //Two arrays are merged into one file.
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
                   
    function get_data() {
        $name = $_GET['name'];
        $file_name='objects'. '.json';
   
        if(file_exists("$file_name")) { 
            $current_data=file_get_contents("$file_name");
            $array_data=json_decode($current_data, true);
            
            $extra=array(
                'name' => $_GET['name'],
                'id' => $_GET['number'],
            );
            $array_data[]=$extra;
            echo "file exist<br/>";
            return json_encode($array_data);
        }
        else {
            $datae=array();
            $datae[]=array(
                'name' => $_GET['name'],
                'id' => $_GET['number'],
            );
            echo "file not exist<br/>";
            return json_encode($datae);   
        }
    }
  
    //If it has the name like above, then the existing file will be overwritten in a way of getting expanded with the new data.
    $file_name='objects'. '.json';
      
    if(file_put_contents("$file_name", get_data())) {
        echo 'success';
    }                
    else {
        echo 'There is some error';                
    }
}
?>