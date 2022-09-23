<?php


header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
$done=false;

include("connection.php");

if (
  isset($_POST["name"]) && isset($_POST["user_name"])
  && isset($_POST["email"]) )
 {
  $name = $_POST["name"];
  $user_name = $_POST["user_name"];
  $email = $_POST["email"];
  $password=rand(100000,999999);
  $voucher=0;
  $banned=0;
  $profile='';
  $type=2;
  $gender=1;
  
  $query = $mysqli->prepare("INSERT INTO users (name,username,email,password,vouchers,is_banned,profile_picture,types_id,genders_id) 
        VALUES(?,?,?,?,?,?,?,?,?)");
  $query->bind_param("sssiiisis", $name, $user_name, $email, $password, $voucher, $banned,$profile,$type,$gender);

  if ($query->execute()) {
    $done = true;
  }
}

$result = [
  "done" => $done
];
echo json_encode($result);
?>