(function ($) { //an IIFE so safely alias jQuery to $
    $.CoreValuesSlider = function (element) {

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
    $.CoreValuesSlider.prototype = {
        Init: function () {
            if (this.element.length == 0) { return; }
            var swiper = new Swiper(this.elementSelector, $.CoreValuesSlider.defaultOptions);

            $(`#core-valuesNext`).on('click', function () {
                $(`.core-values-next`).trigger('click');
            })
            $(`#core-valuesPrev`).on('click', function () {
                $(`.core-values-prev`).trigger('click');
            })
        }
    };

    $.CoreValuesSlider.defaultOptions = {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: false,
        autoplay: false,
        freeMode: false,
        breakpoints: {
            1024: {
                slidesPerView: '5',
            },
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".core-values-pagination",
            clickable: true
        },
    };

}(jQuery));

var coreValuesSlider = new $.CoreValuesSlider(".swiper-core-values");
coreValuesSlider.Init();


