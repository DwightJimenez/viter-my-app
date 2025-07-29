<?php
// import header
require '../../../core/header.php';
//import function
require '../../../core/functions.php';
//import mysql
require '../../../models/developer/contact/Contact.php';


$body = file_get_contents('php://input');
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
     if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        $result = require 'read.php';
        sendResponse($result);
        exit;
    }
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $result = require 'create.php';
        sendResponse($result);
        exit;
    }
    if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
        $result = require 'update.php';
        sendResponse($result);
        exit;
    }
    if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
        $result = require 'delete.php';
        sendResponse($result);
        exit;
    }
}
checkEndpoint();
