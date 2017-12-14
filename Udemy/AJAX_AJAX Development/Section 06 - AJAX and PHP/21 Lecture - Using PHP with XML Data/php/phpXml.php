<?php
    $flightNumber = $_REQUEST['flightNumber'];
    //print("The flight number is: " . $flightNumber);
    /*
    Origination: <span id="orig"></span><br/>
        Destination: <span id="destination"></span><br/>
        Departure Time: <span id="departTime"></span><br/>
        Arrival Time: <span id="arrivalTime"></span><br/>
    */
    header("Content-type: text/xml");
    print("<?xml version=\"1.0\"?>");
    print("<flight>");
    print("<orig>New York, LGA</orig>");
    print("<destination>Boston Logan, Bos</destination>");
    print("<departTime>11:05</departTime>");
    print("<arrivalTime>12:35</arrivalTime>");
    print("</flight>");
?>