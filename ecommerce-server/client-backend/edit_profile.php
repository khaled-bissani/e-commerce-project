<?php 

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

include('connection.php');

$currentuser = $_POST["currentuser"];
$fname = $_POST["fname"];
$username = $_POST["username"];
$email = $_POST["email"];
$phone = $_POST["phone"];

$query = $mysqli->prepare("UPDATE users SET name=?, username=?, email=?, phone_number= ? WHERE id= ?");
$query->bind_param("ssssi", $fname, $username, $email, $phone, $currentuser);
$query->execute();
$response = [];
$response["success"] = true;
echo json_encode($response);



?>