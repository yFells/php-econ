<?php

$dt = json_decode(file_get_contents('php://input'), true);
$userId = $dt['userId'];
// insert in the db this data and clear current cart
$type = $dt['type'];
// ^^ this is the type of payment can be 'pix' or 'credit' 



echo json_encode($dt);