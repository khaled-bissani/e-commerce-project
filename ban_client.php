<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");

include("connection.php");
$done = false;

if (
  isset($_POST["user_id"])
) {
  $user_id = $_POST["user_id"];
  $query = $mysqli->prepare("UPDATE users SET is_banned ='1' WHERE id = ?;");
  $query->bind_param("i", $user_id);

  if ($query->execute()) {
    $done = true;
  }
}


$result = [
  "done" => $done,
];

echo json_encode($result);