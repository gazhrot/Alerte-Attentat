<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

require_once "config.php";
require_once "class.bdd.php";

$bdd = new Bdd();
$post = $bdd->escape($_POST);

extract($post);
if (isset($latitude) && isset($longitude) && isset($status))
{
	$req = $bdd->query("INSERT INTO flag VALUES (DEFAULT, '$latitude', '$longitude', '$status')");
	if ($req === false)
	{
		die(json_encode(array("status" => "ERR", "error" => "Il manque des variables")));
	}
	die(json_encode(array("status" => "OK")));
}
else
{
	die(json_encode(array("status" => "ERR", "error" => "Il manque des variables")));
}
?>
