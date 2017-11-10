var xmlhttp;

function drawSquare(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = callback;
    var rows = document.getElementById("rows").value;
    var cols = document.getElementById("cols").value;
    // var url = "squareService.php?" + "rows=" + rows + "&cols=" + cols;
    var url = "squareService.php";
    console.log(url);
    
    // xmlhttp.open("GET", url, true);
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("rows="+ rows + "&cols=" + cols);
}

function callback(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        document.getElementById("results").innerHTML = xmlhttp.responseText;
    }
}