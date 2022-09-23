<?php

include("connection.php");

$name = $_POST["name"];
$price = $_POST["price"];
$image = $_POST["image"];
$viewed = $_POST["viewed"];
$description = $_POST["description"];
$categories_id = $_POST["categories_id"];

$query = $mysqli->prepare("INSERT INTO products(name, price, image, viewed, description, categories_id) VALUE (?, ?, ?, ?, ?, ?)");
$query->bind_param("sisisi", $name, $price, $image, $viewed, $description, $categories_id);
$query->execute();
echo "query";
$response = [];
$response["success"] = true;

echo json_encode($response);

?>