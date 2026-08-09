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
            var swiper = new Swiper(this.elementSelector, $.SwiperSpotlight.defaultOptions);
        }
    };

    $.SwiperSpotlight.defaultOptions = {
        slidesPerView: 1,
        spaceBetween: 0,
        // loop: true,
        autoplay: true,
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

var swiperSpotlight = new $.SwiperSpotlight(".swiper-spotlight-project");
swiperSpotlight.Init();


