<?php 

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

include('connection.php');

$message = $_POST["message"];
$sender = $_POST["sender"];
$receiver = $_POST["receiver"];

$query = $mysqli->prepare("INSERT INTO interacts(message, users_id, users_id1) VALUE (?, ?, ?)");
$query->bind_param("sii", $message, $sender, $receiver);
$query->execute();
$response = [];
$response["success"] = true;
echo json_encode($response);

?>