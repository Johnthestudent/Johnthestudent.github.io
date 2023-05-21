<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OpenAPI project example</title>
    <link rel="stylesheet" href="style.css?v=3"/>
</head>
<body>
    <!--This section shows the generated url and its secret.-->
    <h1>Availability of secret (1 minute)</h1>
    <h2></h2>
    <h3 id="box" style="display:none">Time is over! Please go back to the forms section!</h3>
    
    <script src="timer.js"></script>
</body>
</html>

<?php
    //Through the include, this server reaches the secret server that is handling the API.
    include("server2.php");
    echo "<h3>$letmehaveit</h3>";
?>