<?php
    $jsonReceived = $_REQUEST['json'];
    echo(var_dump(json_decode(stripcslashes($jsonReceived))));
?>