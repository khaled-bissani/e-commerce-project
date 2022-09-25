<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

include("connection.php");

$name=$_POST['name'];
$query = $mysqli->prepare("SELECT id FROM users WHERE name=? and types_id=3");
$query->bind_param("s", $name);
$query->execute();
$array = $query->get_result();
$response = [];
while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;
?>