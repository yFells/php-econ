<?php

$dt = json_decode(file_get_contents('php://input'), true);
$formData = $dt['formData'];
$userId = $dt['userId'];
// insert in the db this data and clear current cart
// formData inclueds the data of the form and als


echo json_encode($dt);