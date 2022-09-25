<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");

include("connection.php");
$done = false;

if (
  isset($_POST["user_id"])
) {
  $id = $_POST["user_id"];
  $query = $mysqli->prepare("DELETE FROM products WHERE id = ?;");
  $query->bind_param("i", $id);

  if ($query->execute()) {
    $done = true;
  }
}

$result = [
  "done" => $done,
];

echo json_encode($result);