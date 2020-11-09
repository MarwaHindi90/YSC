$(document).ready(function() {
    // navbar background color change on scroll

    $(document).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('scroll');
        } else {
            $('nav').removeClass('scroll');
        }

    });





    // Partner Carousel
    $('.slider-carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        dots: false,
        autoplay: true,
        navText: ["<span class='carousel-nav-right'><i class='fas fa-angle-left '></i></span>",

            "<span class='carousel-nav-left'><i class='fas fa-angle-right '></i></span>"
        ],
        items: 1,
    });


    // testimonial Carousel
    $('.servies-carousel').owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });



    // scroll top element

    var scrollButton = $("#scroll-top");

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }

    });

    // Click On Button Top     

    scrollButton.on('click', function() {
        $('html,body').animate({ scrollTop: 0 }, 300);
    });


    // Loading Screen 

    // $(document).ready(function() {

    //     $('#loading').fadeOut(3000);

    // })
});

$(document).ready(function() {
    "use strict";

    $('ul.navbar-nav > li').click(function(e) {
        e.preventDefault();
        $('ul.navbar-nav > li').removeClass('active');
        $(this).addClass('active');
    });
});