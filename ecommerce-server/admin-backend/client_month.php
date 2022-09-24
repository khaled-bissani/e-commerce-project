<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");

include("connection.php");


$query = $mysqli->prepare("select users.name, count(clients.products_id) as count
from users, clients
where users.types_id='3' and users.id = clients.users_id and clients.date > DATE_ADD(NOW(),INTERVAL - 30 DAY)
GROUP BY users.name 
order by count(clients.products_id) DESC LIMIT 5;");

if ($query->execute()){
    $array = $query->get_result();

    $response=[];
    while($row=$array->fetch_array()){
        $response[]=$row;
    }  
      echo json_encode($response);
}

