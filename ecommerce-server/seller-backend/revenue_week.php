<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");

include("connection.php");
$done=false;

$id=$_POST['id'];

$query = $mysqli->prepare("SELECT SUM(sellers.revenue) AS revenue
 FROM sellers, products
where sellers.products_id=products.id and products.seller_id=? and sellers.date > DATE_ADD(NOW(), INTERVAL - 7 DAY);");
$query->bind_param("i", $id);

if ($query->execute()) {
        
    $array = $query->get_result();
    $row = $array->fetch_assoc();
    $done = true;
} else {
  echo  $mysqli->error;
}


$result = [
"done" => $done,
'revenue' => $row['revenue']
];

echo json_encode($result);