<?php

include("connection.php");

$id = $_POST["id"];
$name = $_POST["name"];
$price = $_POST["price"];
$image = $_POST["image"];
$viewed = $_POST["viewed"];
$description = $_POST["description"];
$categories_id = $_POST["categories_id"];

$query = $mysqli->prepare("UPDATE products SET name=?, price=?, image=?, viewed=?, description=?, categories_id=? WHERE id=?");
$query->bind_param("sisisii", $name, $price, $image, $viewed, $description, $categories_id, $id);
$query->execute();
echo "query";
$response = [];
$response["success"] = true;

echo json_encode($response);

?>
