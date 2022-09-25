<?php


header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
$done=false;

include("connection.php");

if (
  isset($_POST["id"]) && isset($_POST["name"])
  && isset($_POST["price"]) )
 {

  $id = $_POST["id"];  
  $name = $_POST["name"];
  $price = $_POST["price"];
  
  $query = $mysqli->prepare("UPDATE products SET name = ?, price = ? WHERE id = ?;");
  $query->bind_param("ssi", $name, $price,$id);

  if ($query->execute()) {
    $done = true;
  }
}

$result = [
  "done" => $done
];
echo json_encode($result);
?>