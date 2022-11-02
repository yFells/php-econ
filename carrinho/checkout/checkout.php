<?php

$dt = json_decode(file_get_contents('php://input'), true);

// insert in the db this data and clear current cart
// get userId from headers

echo json_encode($dt);