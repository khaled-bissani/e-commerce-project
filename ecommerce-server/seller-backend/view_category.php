<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");

include("connection.php");

$query = $mysqli->prepare("SELECT * FROM categories");

if ($query->execute()){
    $array = $query->get_result();

    $response=[];
    while($row=$array->fetch_array()){
        $response[]=$row;
    }  
      echo json_encode($response);
}

