<?php
// import header
require '../../../core/header.php';
//import function
require '../../../core/functions.php';
//import mysql
require '../../../models/developer/header/Header.php';


$body = file_get_contents('php://input');
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $result = require 'create.php';
        sendResponse($result);
        exit;
    }
}
checkEndpoint();
