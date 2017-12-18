$(document).ready(function () {
    
    // select 2nd section
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
    
    // hamburger
    $('.jsNavIcon').click(function(){
        var nav = $('.jsMainNav');
        var icon = $('.jsNavIcon i');
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round')
            icon.removeClass('ion-close-round')
        }
        
    })
    
    // Smooth Scrolling
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

        
    // Animate Objects
    $('.jsWayPoint001').waypoint(function(direction){
        $('.jsWayPoint001').addClass('animated fadeIn');
    }, {
        offset: "50%"
    });
    $('.jsWayPoint002').waypoint(function(direction){
        $('.jsWayPoint002').addClass('animated fadeInUp');
    }, {
        offset: "50%"
    });
    $('.jsWayPoint003').waypoint(function(direction){
        $('.jsWayPoint003').addClass('animated fadeIn');
    }, {
        offset: "50%"
    });
    $('.jsWayPoint004').waypoint(function(direction){
        $('.jsWayPoint004').addClass('animated pulse');
    }, {
        offset: "50%"
    });
});