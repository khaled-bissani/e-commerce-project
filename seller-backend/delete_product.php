<?php

include("connection.php");

$id = $_POST["id"];

$query = $mysqli->prepare("DELETE FROM products WHERE id=?");
$query->bind_param("i", $id);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>