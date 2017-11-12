var xmlhttp;
var jsonResponse;

function callJson(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = receiveResponse;
    
    xmlhttp.open("GET", "./php/songsJson.php", true);
    xmlhttp.send();
}

function receiveResponse(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        // console.log(xmlhttp.responseText);
        jsonResponse = xmlhttp.responseText;
        // jsonResponse = eval("(" + jsonResponse + ")");
        jsonResponse = JSON.parse(jsonResponse);
        console.log(jsonResponse);
        displayResults(jsonResponse);
    }
}
    
function displayResults(jsonResponse){
    var output = "";
    output += "<table><thead><tr><th>Title</th><th>Artist</th><th>Rating</th></tr></thead><tbody>";
    
    for(let i = 0; i < jsonResponse.catalog.song.length; i += 1){
        // document.write("<br/>Title: " + jsonResponse.catalog.song[i].title);
        // document.write("<br/>Artist: " + jsonResponse.catalog.song[i].artist);
        // document.write("<br/>Rating: " + jsonResponse.catalog.song[i].rating);
        var line = "<tr>"
        line += "<td>" + jsonResponse.catalog.song[i].title + "</td>";
        line += "<td>" + jsonResponse.catalog.song[i].artist + "</td>";
        line += "<td>" + jsonResponse.catalog.song[i].rating + "</td>";
        line += "</tr>"
        output += line;
    }
    output += "<tr>"
    output += "<td><input type='text' id='title'></td>";
    output += "<td><input type='text' id='artist'></td>";
    output += "<td><input type='text' id='rating'></td>";
    output += "</tr>"
    output += "</tbody></table>"
    console.log(output);
    
    document.getElementById("response").innerHTML = output;
}

function addToJSON(){
    var title = document.getElementById("title").value;
    var artist = document.getElementById("artist").value;
    var rating = document.getElementById("rating").value;
    
    console.log(`title: ${title} | artist: ${artist} | rating: ${rating}`);
    
    var tempObject = {};
    tempObject.title = title;
    tempObject.artist = artist;
    tempObject.rating = rating;
    
    console.log(tempObject);
    this.jsonResponse.catalog.song.push(tempObject)
    console.log(this.jsonResponse);
    displayResults(this.jsonResponse);
}

// <table>
// <thead>
//     <tr>
//         <th>Title</th>
//         <th>Artist</th>
//         <th>Rating</th>
//     </tr>
// </thead>
// <tbody>
//     <tr>
//         <td>t</td>
//         <td>a</td>
//         <td>r</td>
//     </tr>
// </tbody>
// </table>