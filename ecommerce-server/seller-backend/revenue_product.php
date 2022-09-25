<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");

include("connection.php");
$done=false;

$id=$_POST['id'];

$query = $mysqli->prepare("SELECT products.name, COUNT(sellers.products_id) AS count, SUM(sellers.revenue) AS revenue 
FROM sellers, products where sellers.products_id=products.id and products.seller_id=?
GROUP BY products.name;");
$query->bind_param("i", $id);

if ($query->execute()) {
			
	$array = $query->get_result();	
    $response=[];
    while($row=$array->fetch_array()){
        $response[]=$row;
    }  
      echo json_encode($response);
}
