<?php
$types = [];
$request = $_POST["data"];

if (is_numeric($request)) {
    if (stripos($request, '.')) {
        $types[] = "Double";
    }
    $types[] = "Integer";
}


$types[] = "String";

echo json_encode($types);