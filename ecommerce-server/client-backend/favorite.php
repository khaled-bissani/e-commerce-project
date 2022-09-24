<?php 

header('Access-Control-Allow-Origin: *');

include('connection.php');

$clients_id = $_POST["clients_id"];
$products_id = $_POST["products_id"];

$query = $mysqli->prepare("INSERT INTO likes(clients_id, products_id) VALUE (?, ?)");
$query->bind_param("ss", $clients_id, $products_id);
$query->execute();
$response = [];
$response["success"] = true;
echo json_encode($response);



?>