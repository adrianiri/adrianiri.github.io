<?php
     header('Access-Control-Allow-Origin: *');
     $file_content = file_get_contents('..\data\traduccionesJSON.json');
     echo $file_content;
?>