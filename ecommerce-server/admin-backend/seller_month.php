<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");

include("connection.php");


$query = $mysqli->prepare("select users.name, sum(sellers.revenue) as revenue 
from users,sellers,products 
where sellers.products_id=products.id and products.seller_id=users.id and sellers.date>DATE_ADD(NOW(),INTERVAL - 30 DAY) Group By users.name ORDER BY sum(sellers.revenue) DESC LIMIT 5;");

if ($query->execute()){
    $array = $query->get_result();

    $response=[];
    while($row=$array->fetch_array()){
        $response[]=$row;
    }  
      echo json_encode($response);
}

