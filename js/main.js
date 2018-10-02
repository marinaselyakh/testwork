$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
    });
    $('.go_to').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 1000);
        }
        return false;
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav:true,
        dots:false,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:2

            }
        }
    });

});
