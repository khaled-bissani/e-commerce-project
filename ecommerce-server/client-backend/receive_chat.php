<?php

header('Access-Control-Allow-Origin: *');

include("connection.php");

$sender = $_POST["sender"];
$receiver = $_POST["receiver"];
$query = $mysqli->prepare("SELECT message, users_id, users_id1 FROM interacts WHERE users_id=".$sender." AND users_id1=".$receiver." ");
$query->execute();
$array = $query->get_result();
$response = [];
while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;
?>