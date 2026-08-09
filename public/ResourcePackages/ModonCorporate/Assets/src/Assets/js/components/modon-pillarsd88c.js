(function ($) { //an IIFE so safely alias jQuery to $
    $.ModonPillarSlider = function (element) {
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
    $.ModonPillarSlider.prototype = {
        Init: function () {
            if (this.element.length == 0) { return; }
            var swiper = new Swiper(this.elementSelector, $.ModonPillarSlider.defaultOptions);

            $(`#destinationNext`).on('click', function () {
                $(`.destination-next`).trigger('click');
            })
            $(`#destinationPrev`).on('click', function () {
                $(`.destination-prev`).trigger('click');
            })

            $('.more-details').on('click', function () {
                $(this).parent().toggleClass('active')
                $(this).parent().parent().toggleClass('active')
                $('.swiper-wrapper').toggleClass('anim')
                $(this).toggleClass('less')
                setTimeout(() => {
                    $(this).next().children().find('.brand').toggleClass('show')
                    // $('.detailed-view .brand').toggleClass('show')
                    $(this).next().children().find('.category').toggleClass('show')
                    $(this).next().children().find('.desc').toggleClass('show')
                    $(this).next().find('.latest-project').toggleClass('show')
                    $(this).next().find('.theme-btn-white').toggleClass('show')
                }, 500)
            })
        }
    };

    $.ModonPillarSlider.defaultOptions = {
        slidesPerView: "auto",
        spaceBetween: 0,
        // loop: true,
        freeMode: true,
        autoplay: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".destination-pagination",
            clickable: true
        },
    };

}(jQuery));

var modonPillarSlider = new $.ModonPillarSlider(".swiper-destination");
modonPillarSlider.Init();



