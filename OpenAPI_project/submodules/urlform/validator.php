<html>
    <body>
        <!--The url is generated as a response for submitting the form.-->
        The generated url is: <?php echo $_GET["url"]; ?>
    </body>

    <?php
  if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i", $_GET["url"])) {
    echo "Invalid URL format";
  } else {
    echo "Valid URL format";
  }
    ?>
</html>

