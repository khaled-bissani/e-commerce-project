<?php


header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
$done=false;

include("connection.php");
 
  $name = $_POST["name"];
  $price = $_POST["price"];
  $image= $_POST["image"];
  $category = $_POST["category"];
  $id= $_POST["id"];
  
  $code64 = explode(',', $image);
    $img = base64_decode($code64[1]);
    $extension = explode(";", explode('/', $code64[0])[1])[0];
    $photo_path = "productphoto/" . uniqid() . "." . $extension;
    file_put_contents($photo_path, $img);  

  $query = $mysqli->prepare("INSERT INTO products (name,price,image,categories_id,seller_id)
  VALUES(?,?,?,?,?)");
  $query->bind_param("sssii", $name, $price, $photo_path, $category, $id);

  if ($query->execute()) {
    $done = true;
  }


$result = [
  "done" => $done
];
echo json_encode($result);
?>