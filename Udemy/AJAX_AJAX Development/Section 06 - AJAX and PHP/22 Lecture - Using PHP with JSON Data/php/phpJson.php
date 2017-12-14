<?php
    $random1 = rand(1,100);
    $random2 = rand(1,100);
    $random3 = rand(1,100);
    $random4 = rand(1,100);
    
    $jsonResponse = "{";
    $jsonResponse .= "\"random1\": " . $random1 . ",";
    $jsonResponse .= "\"random2\": " . $random2 . ",";
    $jsonResponse .= "\"random3\": " . $random3 . ",";
    $jsonResponse .= "\"random4\": " . $random4;
    $jsonResponse .= "}";
    
    print($jsonResponse);
?>