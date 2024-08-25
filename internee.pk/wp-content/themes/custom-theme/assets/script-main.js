jQuery(document).ready(function($) {

    /*-------------------------------
    # Call Functions
    --------------------------------*/


    smoothScrollGF();
    pricingPopup();
    tooltipFunctions();
    matchHeightFunction();
    slickTestimonialFunction();
    demoLightboxOpen();
    dropdownFunctions();
    dynamicTyping();



    /*-------------------------------
    # All Functions
    --------------------------------*/

    function smoothScrollGF() {

        var scroll = new SmoothScroll('a[href*="#"]', {
            speed: 1000,
            updateURL: false,
            speedAsDuration: true,
            offset: function(anchor, toggle) {
                var height_of_admin = (($('#wpadminbar').length) ? $('#wpadminbar').outerHeight() : 0);
                return height_of_admin;
            },
        });

    }

    function pricingPopup() {



        if ($('#popup-booknow').length) {
            $(".popup-booknow-close").click(function(event) {
                event.preventDefault();
                $(".popup-booknow-effect").slideUp(500);
                $(".popup-booknow-effect").removeClass("booknow-monitor");
            });

            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $(".popup-booknow-effect.booknow-monitor").slideDown(800);
                }
            });
        }

    }



    function tooltipFunctions() {
        if ($('.tooltip-button').length) {
            // With the above scripts loaded, you can call `tippy()` with a CSS
            // selector and a `content` prop:
            tippy('.tooltip-button', {
                content(reference) {
                    const id = reference.getAttribute('data-template');
                    const template = document.getElementById(id);
                    return template.innerHTML;
                },
                placement: 'top',
                allowHTML: true,
                maxWidth: 250,
                // theme: 'material',
            });

        }


    }

    function slickTestimonialFunction() {

        $('.slick-featured-cards').slick({
            fade: false,
            draggable: true,
            adaptiveHeight: true,
            autoplay: true,
            arrows: false,
            cssEase: 'ease',
            prevArrow: '<button class="slick-prev" type="button" >&#10229;</button>',
            nextArrow: '<button class="slick-next" type="button">&#10230;</button>',
            dots: true,
            dotsClass: 'slick-dots',
            pauseOnHover: true,
            autoplaySpeed: 4000,
            speed: 2000,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,

            // appendArrows: $('.parent-container'),
            // appendDots: $('.parent-container'),

            // centerPadding: true,
            // centerPadding: '40px',

            // customPaging : function(slider, i) {
            //    return '<span class="flat-icon">'+(i + 1)+'</span>';
            // },

            responsive: [{
                    breakpoint: 1250,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },

                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

            // mobileFirst: true,
            // responsive: [
            //   {
            //      breakpoint: 767,
            //      settings: "unslick"
            //   }
            // ]
        });

        $('.slick-promo').slick({
            fade: false,
            draggable: true,
            adaptiveHeight: true,
            autoplay: true,
            arrows: false,
            cssEase: 'ease',
            dots: false,
            pauseOnHover: false,
            autoplaySpeed: 3000,
            speed: 500,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,

        });

        setTimeout(function() {
            $('.slick-promo').slick('setPosition');
            $(".promo-bar-wrapper").addClass("promo-text-activate");
        }, 500);



        $('.slick-testimonial').slick({
            fade: false,
            draggable: true,
            adaptiveHeight: true,
            autoplay: false,
            arrows: true,
            cssEase: 'ease',
            dots: false,
            prevArrow: '<button class="slick-prev" type="button" >←</button>',
            nextArrow: '<button class="slick-next" type="button">→</button>',
            dotsClass: 'slick-dots text-center',
            pauseOnHover: false,
            autoplaySpeed: 8000,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,


            responsive: [{
                    breakpoint: 1251,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]


        });



        $(".testimonial-nav-arrows-next").click(function(event) {
            event.preventDefault();
            $('.slick-testimonial').slick('slickNext');
        });

        $(".testimonial-nav-arrows-prev").click(function(event) {
            event.preventDefault();
            $('.slick-testimonial').slick('slickPrev');
        });


        addTemporaryGap();
        $(window).resize(function() {
            addTemporaryGap();
        });


        $('.slick-testimonial').on('afterChange', function(event, slick, currentSlide, nextSlide) {
            if ($(document).width() >= 1251) {
                if (currentSlide == 0) {
                    $(".testimonial-nav-arrows-prev").addClass("slick-custom-disabled");
                } else {
                    $(".testimonial-nav-arrows-prev").removeClass("slick-custom-disabled");
                }

                if (currentSlide == slick.slideCount - 3) {
                    $(".testimonial-nav-arrows-next").addClass("slick-custom-disabled");
                } else {
                    $(".testimonial-nav-arrows-next").removeClass("slick-custom-disabled");
                }
            } else if (($(document).width() <= 1250) && ($(document).width() >= 768)) {
                if (currentSlide == 0) {
                    $(".testimonial-nav-arrows-prev").addClass("slick-custom-disabled");
                } else {
                    $(".testimonial-nav-arrows-prev").removeClass("slick-custom-disabled");
                }

                if (currentSlide == slick.slideCount - 2) {
                    $(".testimonial-nav-arrows-next").addClass("slick-custom-disabled");
                } else {
                    $(".testimonial-nav-arrows-next").removeClass("slick-custom-disabled");
                }
            } else {
                if (currentSlide == 0) {
                    $(".testimonial-nav-arrows-prev").addClass("slick-custom-disabled");
                } else {
                    $(".testimonial-nav-arrows-prev").removeClass("slick-custom-disabled");
                }

                if (currentSlide == slick.slideCount - 1) {
                    $(".testimonial-nav-arrows-next").addClass("slick-custom-disabled");
                } else {
                    $(".testimonial-nav-arrows-next").removeClass("slick-custom-disabled");
                }
            }


        });

    }



    function addTemporaryGap() {
        $check_exist_selector = $('.slick-testimonial-ignore').length;
        if (($(document).width() <= 1250) && $check_exist_selector) { // Desktop
            $('.slick-testimonial').slick('slickRemove', $(".slick-testimonial").slick("getSlick").slideCount - 1);
        } else if (($(document).width() >= 1251) && !$check_exist_selector) {
            $('.slick-testimonial').slick('slickAdd', '<div class="slick-testimonial-ignore last-slide-gap"></div>');
        }
    }


    function matchHeightFunction() {
        $('.homepage-flow-wrapper-cards-each-content').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });

        $('.training-card-each-content').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });

        $('.testimonial-each-card').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });

        $('.pricingv2-addones-card').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });

        /*
                $(window).scroll(function(){
                      if ($(this).scrollTop() > 50) {
                         $('.general-video-play-text').addClass('open-play-text');
                      } else {
                         $('.general-video-play-text').removeClass('open-play-text');
                      }
                  });*/
    }


    function demoLightboxOpen() {


        AOS.init({
            disable: 'mobile',
            offset: 120,
            delay: 40,
            duration: 1000,
            easing: 'ease',
            once: false,
            anchorPlacement: 'center-center',
        });

        $(window).resize(function() {
            AOS.refresh();
        });



        $("a[href^=#demo]").click(function(event) {
            event.preventDefault();

            var inst = $('[data-remodal-id=remodal-demo-lightbox]').remodal();
            inst.open();
        });

        $("a[href*=#demo]").click(function(event) {
            event.preventDefault();

            var inst = $('[data-remodal-id=remodal-demo-lightbox]').remodal();
            inst.open();
        });

        // To make a section fixed on scrolled, add the 'make-me-sticky' class.
        $('.make-me-sticky').scrollToFixed({
            marginTop: $('#wpadminbar').outerHeight(),
            // minWidth: 1024,
            // limit : $('#footer-wrapper').offset().top - $(this).outerHeight(),
            // removeOffsets : true,
            // zIndex: 800,
        });



        if ($('.make-header-sticky').length) {
            $('.make-header-sticky').scrollToFixed({
                offsets: 500,
                marginTop: function() {
                    var height_of_admin_bar = (($('#wpadminbar').length) ? $('#wpadminbar').outerHeight() : 0);
                    return height_of_admin_bar;
                },
                fixed: function() {
                    var height_of_admin_bar = (($('#wpadminbar').length) ? $('#wpadminbar').outerHeight() : 0);
                    $(".make-header-sticky.scroll-to-fixed-fixed #pricingv2-price-sticy").css({
                        "top": height_of_admin_bar,
                    });
                },

                postFixed: function() {
                    var height_of_admin_bar = (($('#wpadminbar').length) ? $('#wpadminbar').outerHeight() : 0);
                    $(".make-header-sticky.scroll-to-fixed-fixed #pricingv2-price-sticy").css({
                        "top": "-200px",
                    });
                },
            });
        }


    }

    function dropdownFunctions() {
        $(".category-dropdown").click(function(event) {
            event.preventDefault();

            $(".category-dropdown-container").stop().fadeToggle(100);
        });

        $(document).mouseup(function(e) {
            // Outside this Container
            var container = $(".category-dropdown-wrapper");
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                // Action to do
                container.find(".category-dropdown-container").fadeOut(100);
            }
        });
    }


    function dynamicTyping() {

        $(".general-video-play-play, .button-play").click(function() {
            var videoURL = $(this).data('video');
            $('.youtube-iframe').prop('src', 'https://www.youtube.com/embed/' + videoURL + '?controls=1&autoplay=1');
        });


        $(document).on('closing', '.remodal-play-video', function(e) {
            var videoURL = $('.youtube-iframe').prop('src');
            videoURL = videoURL.replace("&autoplay=1", "");
            $('.youtube-iframe').prop('src', '');
        });

        var typed = new Typed('.typed', {
            stringsElement: '.typed-strings',
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 2500,
            placeholder: false,
            smartBackspace: false,
            loop: true,
            loopCount: Infinity,
            // loopCount: Infinity,
            fadeOut: true,

        });



    }




});