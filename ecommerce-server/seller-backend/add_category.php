<?php

include("connection.php");

$name = $_POST["name"];

$query = $mysqli->prepare("INSERT INTO categories(name) VALUE (?)");
$query->bind_param("s", $name);
$query->execute();
echo "query";
$response = [];
$response["success"] = true;

echo json_encode($response);

?>