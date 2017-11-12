var xmlhttp;

function callJSONObj(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = returnedJSONObj;
    xmlhttp.open("GET", "./php/json.php", true);
    xmlhttp.send();
}

function returnedJSONObj(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        // console.log(xmlhttp.responseText);
        var jsonResponse = xmlhttp.responseText;
        // jsonResponse = eval("(" + jsonResponse + ")");
        jsonResponse = JSON.parse(jsonResponse);
        console.log(jsonResponse);
        var output = "";
        output += "First Name: " + jsonResponse.firstName;
        output += "<br/>Last Name: " + jsonResponse.lastName;
        output += "<br/>Company: " + jsonResponse.company;
        output += "<br/>Age: " + jsonResponse.age;
        console.log(output);
        document.getElementById("results").innerHTML = output; 
    }
}