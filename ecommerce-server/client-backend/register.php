<?php 

header('Access-Control-Allow-Origin: *');

include('connection.php');

$fname = $_POST["fname"];
$username = $_POST["username"];
$email = $_POST["email"];
$password = $_POST["password"];
$user_type = 3;

$query = $mysqli->prepare("INSERT INTO users(name, username, email, password, types_id) VALUE (?, ?, ?, ?, ?)");
$query->bind_param("ssssi", $fname, $username, $email, $password, $user_type);
$query->execute();
$response = [];
$response["success"] = true;
echo json_encode($response);



?>