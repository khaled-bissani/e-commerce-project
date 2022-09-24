<?php

header('Access-Control-Allow-Origin: *');

include("connection.php");
$searched_item = $_POST['searched_item'];
$query = $mysqli->prepare("SELECT * FROM products WHERE name like '".$searched_item."%'  "); 
$query->execute();
$array = $query->get_result();
$response = [];
while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;
?>