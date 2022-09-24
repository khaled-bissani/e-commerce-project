<?php 

header('Access-Control-Allow-Origin: *');

include('connection.php');

$currentuser = $_POST["currentuser"];
$fname = $_POST["fname"];
$username = $_POST["username"];
$email = $_POST["email"];
$phone = $_POST["phone"];

$query = $mysqli->prepare("UPDATE users SET name=?, username=?, email=?, phone_number= ? WHERE username= ?");
$query->bind_param("sssss", $fname, $username, $email, $phone, $currentuser);
$query->execute();
$response = [];
$response["success"] = true;
echo json_encode($response);



?>