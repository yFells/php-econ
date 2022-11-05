<?php
$dt = json_decode(file_get_contents('php://input'), true);
$id = $dt['carrinho'];
var_dump($_POST);
echo json_encode(['carrinho' => $id]);