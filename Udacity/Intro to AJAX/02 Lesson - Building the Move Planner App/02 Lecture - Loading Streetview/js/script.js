
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;
    
    street = street.replace(/ /g, "%20");
    city = city.replace(/ /g, "%20");
    
    console.log(street);
    console.log(city);
    
    var streetMapString = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + street + "," + city;
    
    console.log(streetMapString);
    
    $body.append(`<img class="bgimg" src=${streetMapString}>`)
    // YOUR CODE GOES HERE!
    
    
    
    return false;
};

$('#form-container').submit(loadData);
