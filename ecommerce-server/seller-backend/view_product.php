<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");

include("connection.php");
$done = false;

$id=$_POST['id'];

$query = $mysqli->prepare("SELECT * FROM products where seller_id=?");
$query->bind_param("i", $id);

if ($query->execute()){
    $array = $query->get_result();

    $response=[];
    while($row=$array->fetch_array()){
        $response[]=$row;
    }  
      echo json_encode($response);
}

