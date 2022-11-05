<?php
$email = $_POST["email"];
$password = $_POST["password"];
$json = [
  'email' => $email,
  'id' => 12,
  'loggedIn' => true
];
echo json_encode($json);
