<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");

include("connection.php");


$query = $mysqli->prepare("select users.name, sum(sellers.revenue) as revenue from users, sellers 
where users.types_id='2' and users.id = sellers.users_id and sellers.date> DATE_ADD(NOW(),INTERVAL - 30 DAY) 
GROUP BY users.name order by sum(sellers.revenue) DESC LIMIT 5;");

if ($query->execute()){
    $array = $query->get_result();

    $response=[];
    while($row=$array->fetch_array()){
        $response[]=$row;
    }  
      echo json_encode($response);
}

