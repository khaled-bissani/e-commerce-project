<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");

include("connection.php");
$done=false;

$query = $mysqli->prepare("SELECT count(id) as client FROM users where types_id='3'");
if ($query->execute()) {
        
    $array = $query->get_result();
    $row = $array->fetch_assoc();
    $done = true;
} else {
  echo  $mysqli->error;
}


$result = [
"done" => $done,
'number_of_client' => $row['client']
];

echo json_encode($result);