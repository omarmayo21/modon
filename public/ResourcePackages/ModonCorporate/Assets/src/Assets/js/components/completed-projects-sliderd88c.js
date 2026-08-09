(function ($) { //an IIFE so safely alias jQuery to $
    $.CompletedProjectsSlider = function (element) {

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
    $.CompletedProjectsSlider.prototype = {
        Init: function () {
            if (this.element.length == 0) { return; }
            var swiper = new Swiper(this.elementSelector, $.CompletedProjectsSlider.defaultOptions);

            $(`#comp-projectNext`).on('click', function () {
                $(`.comp-project-next`).trigger('click');
            })
            $(`#comp-projectPrev`).on('click', function () {
                $(`.comp-project-prev`).trigger('click');
            })
        }
    };

    $.CompletedProjectsSlider.defaultOptions = {
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: false,
        autoplay: false,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".comp-project-pagination",
            clickable: true
        }
    };

}(jQuery));

var completedProjectsSlider = new $.CompletedProjectsSlider(".swiper-comp-project");
completedProjectsSlider.Init();

//var swiperCompletedProject = new Swiper(".swiper-comp-project", {
//    slidesPerView: "auto",
//    spaceBetween: 0,
//    loop: false,
//    autoplay: false,
//    navigation: {
//        nextEl: ".swiper-button-next",
//        prevEl: ".swiper-button-prev"
//    },
//    pagination: {
//        el: ".comp-project-pagination",
//        clickable: true
//    },
//});
//$(`#comp-projectNext`).on('click', function () {
//    $(`.comp-project-next`).trigger('click');
//})
//$(`#comp-projectPrev`).on('click', function () {
//    $(`.comp-project-prev`).trigger('click');
//})


