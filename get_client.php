<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");

include("connection.php");
$done = false;

$query = $mysqli->prepare("SELECT * FROM users where types_id = '3'");

if ($query->execute()){
    $array = $query->get_result();

    $response=[];
    while($row=$array->fetch_array()){
        $response[]=$row;
    }  
      echo json_encode($response);
}

