<html>
<body>

<h2>The input Element</h2>

<form action="#">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br><br>
  <input type="submit" value="Submit">
</form>

</body>
</html>

<?php
class Person
{
	public $name;
	
	public function getName()
	{
		return $this->name;
	}
	
	public function setName($name)
	{
		$this->name = $name;
	}
}
	//$value = $_GET["fname"];
	//echo $value;
	$value2 = new Person();
	$value2->setName($_GET["fname"]);
	echo $value2->getName();
?>