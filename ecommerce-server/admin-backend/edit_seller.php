<?php


header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
$done=false;

include("connection.php");

if (
  isset($_POST["id"]) && isset($_POST["name"])
  && isset($_POST["email"]) )
 {

  $id = $_POST["id"];  
  $name = $_POST["name"];
  $email = $_POST["email"];
  
  $query = $mysqli->prepare("UPDATE users SET name = ?,email = ? WHERE id = ?;");
  $query->bind_param("ssi", $name, $email,$id);

  if ($query->execute()) {
    $done = true;
  }
}

$result = [
  "done" => $done
];
echo json_encode($result);
?>