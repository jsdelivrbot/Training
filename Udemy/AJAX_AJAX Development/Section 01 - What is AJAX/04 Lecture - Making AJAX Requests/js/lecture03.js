var xmlhttp;
function getNum(){
    xmlhttp = new XMLHttpRequest();
    // setup callback - listener
    xmlhttp.onreadystatechange = callback;
    // open (method - where - async(true) or sync (false))
    xmlhttp.open("GET", "./php/random.php", true);
    xmlhttp.send();
}
// information comes back from the serve
function callback(){
    // ready state
    // then status
    // then information
    console.log("Ready State: " + xmlhttp.readyState + "\nStatus" + xmlhttp.status);
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        // 4 means the request is finished and response is ready
        // 200 - status is ok
        document.getElementById('result').innerHTML = xmlhttp.responseText;
    }
}