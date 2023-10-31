/*
  [JS Index]
  
  ---
  
  Template Name: Liex - Creative One Page Portfolio Template
  Author:  ex-nihilo
  Version: 1.0
*/


/*
  1. preloader
  2. timeout function
    2.1. fadeIn
    2.2. hero
  3. skills bar
  4. flexSlider
  5. owlCarousel
  6. menu active state
  7. forms
    7.1. contact form
  8. YouTube player
  9. slick slider
    9.1. slick fullscreen slideshow ZOOM/FADE
  10. the calls
    10.1. call home
    10.2. call page
  11. facts counter
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. timeout function
        // 2.1. fadeIn
        setTimeout(function() {
            $(".fadeIn-element").delay(1400).css({
                display: "none"
            }).fadeIn(2400);
        }, 0);
		setTimeout(function() {
            $(".fadeIn-element-half").delay(1400).css({
                display: "none"
            }).fadeIn(1200);
        }, 0);
        // 2.2. hero
        $(".hero-bg").addClass("hero-bg-show");
    });
	
    // 3. skills bar
    $(".show-skillbar").appear(function() {
        $(".skillbar").skillBars({
            from: 0,
            speed: 4000,
            interval: 100,
            decimals: 0
        });
    });
	
    // 4. flexSlider
    $(".flexslider-quotes").flexslider({
        animation: "fade",
        controlNav: false,
        directionNav: false,
        slideshowSpeed: 3800,
        animationSpeed: 1000
    });
	
    // 5. owlCarousel
    $(".services-gallery-slider").owlCarousel({
        slideSpeed: 350,
        singleItem: true,
        autoHeight: true,
        navigation: true,
        navigationText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"]
    });
	
    // 6. menu active state
    $("a.menu-state").on("click", function() {
        $("a.menu-state").removeClass("active");
        $(this).addClass("active");
    });
	
	// 7. forms
    // 7.1. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
	// 8. YouTube player
    $("#bgndVideo").YTPlayer();
	
	// 9. slick slider
    // 9.1. slick fullscreen slideshow ZOOM/FADE
    $(".slick-fullscreen-slideshow-zoom-fade").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	
    // 10. the calls
    // 10.1. call home
    $(".page-close-clicker, .page-close-clicker-mobile").on("click", function() {
        $(".hero-bg").removeClass("hero-bg-show-secondary");
    });
    // 10.2. call page
    $(".page-open-clicker, .page-open-clicker-mobile").on("click", function() {
        $(".hero-bg").addClass("hero-bg-show-secondary");
    });
	
	// 11. facts counter
    $(".facts-counter-number").appear(function() {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 1200,
            refreshInterval: 60
        });
    });


});