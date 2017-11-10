// console.log("file connected");
// A) Get the XML from the php script using AJAX

// define our xmlhttp object
var xmlhttp;
var songsXML;

// function to request songsXML
function getSongs(){
    //xml instant
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = loadData;
    xmlhttp.open("GET", "./php/songs.php", true);
    xmlhttp.send();
}

// B) Place the XML response into an XML object

function loadData(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        songsXML = xmlhttp.responseXML.documentElement.getElementsByTagName("song");
        console.log(songsXML);
        displayDatatoHTML();
    }
}


// C) Loop through the XML object and display the XML tree in an HTML table

function displayDatatoHTML(){
    var output = "<table>";
    output += "<thead><tr><th>Title</th><th>Artist</th><th>Rating</th></tr></thead><tbody>"
    // loop for each element
    for(let i = 0; i < songsXML.length; i += 1){
        var line = "<tr>";
        // make content
        // get [x] element
        var titleElement = songsXML[i].getElementsByTagName("title");
        // get [x] name value
        var titleName = titleElement[0].firstChild.nodeValue;
        // get [x] element
        var artistElement = songsXML[i].getElementsByTagName("artist");
        // get [x] name value
        var artistName = artistElement[0].firstChild.nodeValue;
        // get [x] element
        var ratingElement = songsXML[i].getElementsByTagName("rating");
        // get [x] name value
        var ratingName = ratingElement[0].firstChild.nodeValue;
        // console.log(titleName + " - " + artistName + " - " + ratingName);
        line += "<td>" + titleName + "</td><td>" + artistName + "</td><td>" + ratingName + "</td>";
        line += "</tr>";
        output += line;
    }
    output += "</tbody></table>";
    //get output to html
    output += "<tr>";
    output += "<td><input type='text' id='title'></td>";
    output += "<td><input type='text' id='artist'></td>";
    output += "<td><input type='text' id='rating'></td>";
    output += "</tr>";
    // console.log(output);
    document.getElementById("results").innerHTML = output;
}

function addASong() {
    // console.log("This should Add a Song");
    // need title, artist and song
    // from HTML
    var title = document.getElementById("title").value;
    var artist = document.getElementById("artist").value;
    var rating = document.getElementById("rating").value;
    // construct XML tree element
    // get XML
    var fullSongXML = xmlhttp.responseXML;
    // console.log(fullSongXML);
    // new XML element
    var newSongElement = fullSongXML.createElement("song");
    var newTitleElement = fullSongXML.createElement("title");
    var newArtistElement = fullSongXML.createElement("artist");
    var newRatingElement = fullSongXML.createElement("rating");
    // create Nodes and add Values
    var titleNode = document.createTextNode(title);
    var artistNode = document.createTextNode(artist);
    var ratingNode = document.createTextNode(rating);
    // assemble the nodes into respective Elements
    newTitleElement.appendChild(titleNode);
    newArtistElement.appendChild(artistNode);
    newRatingElement.appendChild(ratingNode);
    // assemble the new Song Element
    newSongElement.appendChild(newTitleElement);
    newSongElement.appendChild(newArtistElement);
    newSongElement.appendChild(newRatingElement);
    // console.log(newSongElement);
    // add element to songXML
    var getSongXML = fullSongXML.getElementsByTagName("song");
    songXMLLength = getSongXML.length;
    //add
    songsXML[songXMLLength-1].appendChild(newSongElement);
    //redisplay
    displayDatatoHTML();
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
//         <td>Val1</td>
//         <td>Val2</td>
//         <td>Val3</td>
//     </tr>
// </tbody>
// </table>