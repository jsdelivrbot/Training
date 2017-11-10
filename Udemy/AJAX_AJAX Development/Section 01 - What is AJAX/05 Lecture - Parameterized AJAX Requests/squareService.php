<?php
    $rows = $_REQUEST['rows'];
    $cols = $_REQUEST['cols'];
    for($i=0; $i<$rows; $i++)
    {
        for($x=0; $x<$cols; $x++)
        {
            print("*");
        }
        print("<br/>");
    }
?>