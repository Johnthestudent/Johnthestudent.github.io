<!DOCTYPE html>
<html>
<body>

<?php
//In this file, a JSON code is transformed into PHP code with decoding.
$jsonobj = '{"Secret01":1,"Secret02":2,"Secret03":3}';

$object = json_decode($jsonobj);

foreach($object as $key => $value) {
  echo $key . " => " . $value . "<br>";
}
?>

</body>
</html>
