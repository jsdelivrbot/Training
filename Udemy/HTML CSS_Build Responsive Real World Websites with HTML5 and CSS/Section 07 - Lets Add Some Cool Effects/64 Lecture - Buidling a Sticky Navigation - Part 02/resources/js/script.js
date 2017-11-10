$(document).ready(function () {
    // select 2nd sectin
    $('.jsSectionFeatures').waypoint(function(direction){
        if(direction == "down"){
            // appear
            $('nav').addClass("fixedNav");
        }
        else {
            // disappear
            $('nav').removeClass("fixedNav");
        }
    }, {
        offset: '65px;'
    })
});