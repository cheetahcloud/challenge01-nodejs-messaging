<?php
//$app_url = $_GET["url"];
//$url = "http://".$app_url."/noform";
$url = "http://localhost:3030/noform";
$output = file_get_contents($url);
$output = str_replace("+", " ", $output);
echo $output;
?>