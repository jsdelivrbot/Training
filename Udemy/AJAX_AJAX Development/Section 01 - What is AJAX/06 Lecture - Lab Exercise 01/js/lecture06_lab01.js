var xmlhttp;

function randomQuote() {
    //instantiate
    xmlhttp = new XMLHttpRequest;
    xmlhttp.onreadystatechange = callback;
    
    // need a url to send
    var url = "php/label.php"
    xmlhttp.open("GET", url, true);
    xmlhttp.send()
}

function callback(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        document.getElementById("result").innerHTML = xmlhttp.responseText;
    }
}