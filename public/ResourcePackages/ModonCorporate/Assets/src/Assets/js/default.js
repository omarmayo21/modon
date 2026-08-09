window.initModonLegacyJS = function () {
	// header script starts here
	if (window.AOS) {
		AOS.init({
			once: true
		});
		AOS.refreshHard();
	}

	if (window.initModonFormValidation) {
		window.initModonFormValidation();
	}

	setTimeout(() => {
		$('.visual-anim').addClass('show')
	}, 500);

	// Re-initialize intlTelInput for forms
	if (window.intlTelInput) {
		var phoneInputs = $("#generic-project-form").find('.phone');
		phoneInputs.each(function () {
			var input = this;
			
			// Prevent duplicates by checking if it's already wrapped, or try to destroy it
			if (window.intlTelInputGlobals && window.intlTelInputGlobals.getInstance) {
				var existingInst = window.intlTelInputGlobals.getInstance(input);
				if (existingInst) {
					existingInst.destroy();
				}
			} else if ($(input).closest('.iti').length > 0) {
				// Fallback if getInstance is unavailable: skip if already initialized
				return;
			}

			window.intlTelInput(input, {
				utilsScript: "/ResourcePackages/ModonCorporate/Assets/src/Assets/js/utils.js",
				separateDialCode: true,
				initialCountry: "eg",
				preferredCountries: ["eg"],
				nationalMode: false
			});
		});
	}

	$("iframe.euro-frame").each(function () {
		var src = $(this).attr('src').replace(/\amp;/g, '');
		$(this).attr('src', src);
	});

	$('.navbar-nav .nav-link').off('click').on('click', function () {
		$('.navbar-nav .nav-link.active').not(this).removeClass('active');
		$('.menus .img-outer img:first-child').addClass('d-block');
		$(this).toggleClass('active');
	})

	$('.menus .img-outer img:first-child').addClass('d-block');
	$('.menus ul li a').off('mouseover').on('mouseover', function (e) {
		let selectedImageId = e.target.id;
		$('.menus .img-outer img').removeClass('d-block')
		$(`.${selectedImageId}`).addClass('d-block')
	});
	$('.menus ul li a').off('mouseleave').on('mouseleave', function (e) {
		$('.menus .img-outer img').removeClass('d-block')
		$('.menus .img-outer img:first-child').addClass('d-block');
	});

	$('.viewmore-btn').off('click').on('click', function () {
		$(this).toggleClass('show');
		$('.award-section .awards').toggleClass('active');
	})

	// search functionality script starts here
	$('.search').off('input').on('input', function () {
		var inputValue = $(this).val()

		if (inputValue === "") {
			$('.links-block .quick-links').removeClass('hide');
			$('.links-block .suggested-links').removeClass('show');
			$('.clear-text').removeClass('d-block')
		} else {
			$('.links-block .quick-links').addClass('hide');
			$('.links-block .suggested-links').addClass('show');
			$('.clear-text').addClass('d-block')
		}
	});

	$('.clear-text').off("click").on("click", function () {
		$('.search').val("");
		$('.links-block .quick-links').removeClass('hide');
		$('.links-block .suggested-links').removeClass('show');
		$('.clear-text').removeClass('d-block')
	})

	$('.parent-tab-outer > .nav-tabs > .nav-item > .nav-link').off('click').on('click', function () {
		$('.nav-tabs .nav-link').not(this).removeClass('showsubmenu');
		$(this).toggleClass('showsubmenu');
	})


	// header script ends here
	// mouse move transparancy script starts here
	$(document).off('mousemove').on('mousemove', function () {
		// console.log("mouse enter event")
		$('.header').removeClass('header-transparancy')
	})

	const transparentHeader = () => {
		$('.header').addClass('header-transparancy')
	}

	var timeout;
	document.onmousemove = function () {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			transparentHeader()
		}, 3000);
	}

	////Overlay Show/Hide on Homepage
	if (window.location.pathname == '/' || window.location.pathname == '/home'
		|| window.location.pathname == '/en' || window.location.pathname == '/ar'
		|| window.location.pathname == '/en/' || window.location.pathname == '../ar/index.html'
		|| window.location.pathname == '/en/home' || window.location.pathname == '/ar/home') {

		//debugger;
		var projectName = $('#iframeProjectName').val();
		var cookieValue = checkCookie('OverlayCookie');

		if (cookieValue != null && cookieValue == projectName) {
			$('body').removeClass('promotion-page');
			$('.promotion-frame').addClass('d-none');
		}
		else if ($('.promotion-frame').length > 0) {
			setCookieWithoutExpiry("OverlayCookie", projectName);
			$('body').addClass('promotion-page');
			$('.promotion-frame').removeClass('d-none');
		}
	}

	//Cookie Consent
	$(".btn-cookie-consent").off('click').on('click', function (event) {
		$('.cookie-section').addClass('d-none');
		setCookieWithoutExpiry("modon-cookie-perm", "true");
	});

	if (checkCookie('modon-cookie-perm')) {
		$('.cookie-section').addClass('d-none');
	}
	else {
		$('.cookie-section').removeClass('d-none');
	}

	// align card height same 
	var equalHeight = 0;
	$(".activity-card .title").each(function () {
		if (equalHeight < $(this).height()) {
			equalHeight = $(this).height();
		}
		$(".activity-card .title").css('min-height', equalHeight);
	});

	$(".scroll-top-btn").off('click').on('click', function () {
		$(window).scrollTop(0);
	})

	if (scroll >= 500) {
		$(".scroll-top-btn").addClass("show");
	} else {
		$(".scroll-top-btn").removeClass("show");
	}

	$('.banner-section .btn-scroll').off("click").on("click", function (e) {
		e.preventDefault();
		let topHeight = $('.form-section').offset().top;
		let hdrHeight = $('.header').height();
		let totalHeight = topHeight - hdrHeight;
		window.scrollTo({ top: totalHeight, behavior: 'smooth' });
	});

	$('.mobile-view .btn-scroll').off("click").on("click", function (e) { // additional button on the page bottom
		e.preventDefault();
		let topHeight = $('.form-section').offset().top;
		let hdrHeight = $('.header').height();
		let totalHeight = topHeight - hdrHeight;
		window.scrollTo({ top: totalHeight, behavior: 'smooth' });
	});

	// video mute script starts here

	$('.mute-btn').off('click').on('click', function () {
		const $video = $(this).siblings('video')[0];
		$video.muted = !$video.muted;
		updateMuteButtonText($(this), $video);
	});
	// video mute script ends here

	$(document).off("click", "#chat-list-btn").on("click", "#chat-list-btn", function () {
		$(this).toggleClass('active')
		$('.chat-icons-outer').toggleClass('show');
		$('body').toggleClass('chat-show')
	});

	/* Login Open */
	// toggle menu
	$(".login-menu-section .login-btn").off("click").on("click", function (e) {
		e.preventDefault();
		let $subMenu = $(this).next(".sub-links");

		// close all others
		$(".login-menu-section .sub-links").not($subMenu).slideUp();
		$(".login-menu-section .login-btn").not(this).removeClass("active");

		// toggle current one
		$subMenu.slideToggle(300);
		$(this).toggleClass("active");

		e.stopPropagation();
	});

	// close when clicking outside
	$(document).off("click.loginmenu").on("click.loginmenu", function (e) {
		if (!$(e.target).closest(".login-menu-section").length) {
			$(".login-menu-section .sub-links").slideUp();
			$(".login-menu-section .login-btn").removeClass("active");
		}
	});



	$('.EurolandTool').EurolandIFrameAutoHeight();
};

$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	if (scroll >= 500) {
		$(".scroll-top-btn").addClass("show");
		$('.navbar').addClass('sticky-primary');
	} else {
		$(".scroll-top-btn").removeClass("show");
		$('.navbar').removeClass('sticky-primary');
	}
});

String.prototype.format = function () {
	let formatted = this;
	for (let i = 0; i < arguments.length; i++) {
		let regexp = new RegExp('\\{' + i + '\\}', 'gi');
		formatted = formatted.replace(regexp, arguments[i]);
	}
	return formatted;
};

function getPageName(url) {
	var index = url.lastIndexOf("../index-2.html") + 1;
	var filenameWithExtension = url.substr(index);
	var filename = filenameWithExtension.split(".")[0];
	return filename;
}

// Function to set a cookie with no expiration date
function setCookieWithoutExpiry(cookieName, cookieValue) {
	var farFutureDate = new Date("9999-12-31T23:59:59");
	var expires = "expires=" + farFutureDate.toUTCString();
	document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// Function to check if a cookie exists
function checkCookie(cookieName) {
	let cookies = document.cookie;
	let cookieArray = cookies.split("; ");

	for (let i = 0; i < cookieArray.length; i++) {
		let cookie = cookieArray[i];
		let [name, value] = cookie.split("=");

		if (name === cookieName) {
			return decodeURIComponent(value);
		}
	}
	return null;
}

function updateMuteButtonText($button, video) {
	if (video.muted) {
		$button.addClass('mute');
	} else {
		$button.removeClass('mute');
	}
}

$.urlParam = function (name) {
	var results = new RegExp('[\\?&]' + name + '=([^&#]*)', 'i')
		.exec(window.location.search);

	return (results !== null) ? results[1] || 0 : "";
}

// banner image swap functionality script starts here
function swapImageSrc() {
	var screenWidth = $(window).width();

	$(".bannerimage").each(function () {
		var $this = $(this);
		$this.attr("src", (screenWidth < 1025 && $this.data("msrc") != "") ? $this.data("msrc") : $this.data("dsrc"));
	});

	$(".video").each(function () {
		var $this = $(this);
		$this.attr("src", (screenWidth < 769 && $this.data("msrc") != "") ? $this.data("msrc") : $this.data("dsrc"));
	});
}

// Initial check
swapImageSrc();

// Update on window resize
$(window).resize(function () {
	swapImageSrc();
});

// banner image swap functionality script ends here

// swiper tab section starts here
var swiperImpactThumb = new Swiper(".swiper-impact-thumb", {
	spaceBetween: 0,
	slidesPerView: "auto",
	freeMode: true,
	watchSlidesProgress: true,
});
var swiperImpact = new Swiper(".swiper-impact", {
	spaceBetween: 0,
	fadeEffect: { crossFade: true },
	effect: "fade",
	speed: 1000,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: swiperImpactThumb,
	},
});
// swiper tab section ends here

// tab ttile script starts here
$(document).on('click', '.nav-link', function () {
	$('.tab-title').removeClass('title-active');   // clear active
	$(this).prevAll('.tab-title').first().addClass('title-active'); // activate previous title
});
    // tab title script ends here


// Register Button show Hide
$(document).ready(function () {
	function hasScrolledPastBannerBy400px(element) {
		var bannerTop = $(element).offset().top;
		var scrollTop = $(window).scrollTop();
		return scrollTop > (bannerTop + 200);
	}

	function isFullyOutOfViewport(element) {
		var elementTop = $(element).offset().top;
		var elementBottom = elementTop + $(element).outerHeight();

		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();

		return elementBottom <= viewportTop || elementTop >= viewportBottom;
	}

	function checkSectionsVisibility() {
		if ($(window).width() <= 1024) {
            // Always show first
            $('.mobile-view').addClass('show');
    
            var footerVisible = !isFullyOutOfViewport($('.footer'));
    
            if (footerVisible) {
                // Hide only when footer is visible
                $('.mobile-view').removeClass('show');
            }
        }
	}

	function isMobile() {
		return window.innerWidth <= 567; // only for <= 567px
	}

	if (isMobile()) {
		$(window).on("scroll", function () {
			if ($(this).scrollTop() > 300) {
				$(".cookie-section").fadeIn(); // show with fade
			} else {
				$(".cookie-section").fadeOut(); // hide again
			}
		});
	}

	$(window).on('scroll resize', function () {
		checkSectionsVisibility();
	});

	checkSectionsVisibility();
});
