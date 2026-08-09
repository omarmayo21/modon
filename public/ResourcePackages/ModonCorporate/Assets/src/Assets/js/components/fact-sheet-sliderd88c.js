(function ($) { //an IIFE so safely alias jQuery to $
    $.FactSheetSlider = function (element) {

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
    $.FactSheetSlider.prototype = {
        Init: function () {
            if (this.element.length == 0) { return; }
            var swiper = new Swiper(this.elementSelector, $.FactSheetSlider.defaultOptions);

            $(`#parkviewNext`).on('click', function () {
                $(`.parkview-next`).trigger('click');
            })
            $(`#parkviewPrev`).on('click', function () {
                $(`.parkview-prev`).trigger('click');
            })
        }
    };

    $.FactSheetSlider.defaultOptions = {
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: true,
        freeMode: true,
        autoplay: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            1024: {
                slidesPerView: "3",
                loop: false,
                centeredSlides: false,
            },
        },
    };

}(jQuery));

var factsheetSlider = new $.FactSheetSlider(".swiper-parkview");
factsheetSlider.Init();




