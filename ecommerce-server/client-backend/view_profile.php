<?php

header('Access-Control-Allow-Origin: *');

include("connection.php");
$id=$_POST['id'];
$query = $mysqli->prepare("SELECT name, username, email, phone_number FROM users WHERE types_id=3 AND id=".$id." ");
$query->execute();
$array = $query->get_result();
$response = [];
while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;
?>