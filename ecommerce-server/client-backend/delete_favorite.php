<?php 

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

include('connection.php');

$clients_id = $_POST["clients_id"];
$products_id = $_POST["products_id"];

$query = $mysqli->prepare("DELETE FROM likes WHERE  clients_id=? AND products_id=?");
$query->bind_param("ss", $clients_id, $products_id);
$query->execute();
$response = [];
$response["success"] = true;
echo json_encode($response);



?>