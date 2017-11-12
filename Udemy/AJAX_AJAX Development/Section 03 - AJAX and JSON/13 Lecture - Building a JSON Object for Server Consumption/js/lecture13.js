var xmlhttp;

function createObject() {
    var song = document.getElementById("song").value;
    var artist = document.getElementById("artist").value;
    var year = document.getElementById("year").value;
    var rating = document.getElementById("rating").value;
    
    var jsonSong = '{';
    jsonSong += '"song":' + '"' + song + '"';
    jsonSong += ',';
    jsonSong += '"artist":' + '"' + artist + '"';
    jsonSong += ',';
    jsonSong += '"year":' + '"' + year + '"';
    jsonSong += ',';
    jsonSong += '"rating":' + '"' + rating + '"';
    jsonSong += '}';
    
    // console.log(jsonSong);
    
    sendJson(jsonSong);
}

function sendJson(json){
    xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = receiveResponse;
    
    xmlhttp.open("GET", ("./php/receivesJSON.php?json=" + json), true);
    xmlhttp.send();
}

function receiveResponse(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        // console.log(xmlhttp.responseText);
        document.getElementById("response").innerHTML = xmlhttp.responseText;
    }
}