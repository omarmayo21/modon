////(function ($) { //an IIFE so safely alias jQuery to $
////    $.NewLaunchesThumbSlider = function (element) {
////        //stores the passed element as a property of the created instance.
////        if (element instanceof $) {
////            this.element = element
////        } else {
////            this.element = $(element);
////            this.elementSelector = element;
////        }
////    };

////    $.NewLaunchesSlider = function (element) {
////        //stores the passed element as a property of the created instance.
////        if (element instanceof $) {
////            this.element = element
////        } else {
////            this.element = $(element);
////            this.elementSelector = element;
////        }
////    };

////    //assigning an object literal to the prototype is a shorter syntax
////    //than assigning one property at a time
////    $.NewLaunchesThumbSlider.prototype = {
////        Init: function () {
////            if (this.element.length == 0) { return; }
////            var swiperthumb = new Swiper(this.elementSelector, $.NewLaunchesThumbSlider.defaultOptions);
////        }
////    };

////    $.NewLaunchesSlider.prototype = {
////        Init: function () {
////            if (this.element.length == 0) { return; }
////            var swipernewlaunch = new Swiper(this.elementSelector, $.NewLaunchesSlider.defaultOptions);
////        }
////    };

////    $.NewLaunchesThumbSlider.defaultOptions = {
////        spaceBetween: 0,
////        slidesPerView: "auto",
////        freeMode: true,
////        watchSlidesProgress: true,
////    };

////    $.NewLaunchesSlider.defaultOptions = {
////        spaceBetween: 0,
////        fadeEffect: { crossFade: true },
////        effect: "fade",
////        speed: 1000,
////        navigation: {
////            nextEl: ".swiper-button-next",
////            prevEl: ".swiper-button-prev",
////        },
////        thumbs: {
////            swiper: swiperthumb,
////        },
////    };

////}(jQuery));

////var newLaunchesThumbSlider = new $.NewLaunchesThumbSlider(".swiper-newlaunches-thumb");
////newLaunchesThumbSlider.Init();

////var newLaunchesSlider = new $.NewLaunchesSlider(".swiper-newlaunches");
////newLaunchesSlider.Init();


// newlaunches section slider starts here
//var swiperNewThumb = new Swiper(".swiper-newlaunches-thumb", {
//    spaceBetween: 0,
//    slidesPerView: "auto",
//    freeMode: true,
//    watchSlidesProgress: true,
//});

//var swiperNew = new Swiper(".swiper-newlaunches", {
//    spaceBetween: 0,
//    fadeEffect: { crossFade: true },
//    effect: "fade",
//    speed: 1000,
//    navigation: {
//        nextEl: ".swiper-button-next",
//        prevEl: ".swiper-button-prev",
//    },
//    thumbs: {
//        swiper: swiperNewThumb,
//    },
//});


var swiperGallery = new Swiper(".swiper-gallery", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    freeMode: true,
    autoplay: false,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        768: {
            loop: false,
            centeredSlides: false,
        },
    },
});
$(`#galleryNext`).on('click', function () {
    $(`.gallery-next`).trigger('click');
})
$(`#galleryPrev`).on('click', function () {
    $(`.gallery-prev`).trigger('click');
})



