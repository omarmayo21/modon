(function ($) { //an IIFE so safely alias jQuery to $
    $.SwiperSpotlight = function (element) {
        //stores the passed element as a property of the created instance.
        if (element instanceof $) {
            this.element = element
        } else {
            this.element = $(element);
            this.elementSelector = element;
        }
    };

    //assigning an object literal to the prototype is a shorter syntax
    //than assigning one property at a time
    $.SwiperSpotlight.prototype = {
        Init: function () {
            if (this.element.length == 0) { return; }

            let num_of_slides_before_init = this.element.find('.swiper-slide')
            if (num_of_slides_before_init < 2) {
                loop_slider = false;
            }

            var swiper = new Swiper(this.elementSelector, $.SwiperSpotlight.defaultOptions);
        }
    };

    $.SwiperSpotlight.defaultOptions = {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true, // loop_slider, //true,
        autoplay: true,
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".activities-pagination",
            clickable: true
        },
    };

}(jQuery));

var loop_slider = true;
var swiperSpotlight = new $.SwiperSpotlight(".swiper-spotlight");
swiperSpotlight.Init();


