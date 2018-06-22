<?php
 header("Access-Control-Allow-Origin: *");

echo json_encode(array("SERVER"=>$_SERVER['SERVER_ADDR'], "truc"=>array("foo"=>"bar")));
