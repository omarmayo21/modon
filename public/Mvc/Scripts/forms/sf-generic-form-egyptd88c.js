window.initModonFormValidation = function () {
	// Contact Us SalesForce Form
	var $form = $("#generic-project-form");
	if ($form.length && !$form.data('validator')) {
		$form.validate({
		errorElement: "span",
		rules: {
			first_name: {
				required: true
			},
			last_name: {
				required: true
			},
			email: {
				//required: true,
				//email: true,
				loqateemail: true
			},
			PhoneNumber: {
				//required: true,
				loqatephone: true
			},
			'00NVH000002y6iv': {
				required: true,
			},
			'00NVH00000303CJ': {
				required: true,
			},
			'00NHp00000lQiTk': {
				required: true,
			},
			'00NHp00000lQiTv': {
				required: true,
			},
			consentCheck: {
				required: function (elem) {
					if (!$('#consentCheck').is(':checked')) {
						$('#lblConsentCheck').addClass('text-danger');
					}
					else {
						$('#lblConsentCheck').removeClass('text-danger');
					}
					return true;
				}
			}
		},
		messages: {
			first_name: $("#FirstNameErrorMessage").val(),
			last_name: $("#LastNameErrorMessage").val(), //"Please enter your last name.",
			PhoneNumber: $("#PhoneErrorMessage").val(), //"Please enter valid phone number.",
			email: $("#EmailErrorMessage").val(), //"Please enter valid email.",
			'00NVH000002y6iv': $("#CountryErrorMessage").val(),
			'00NVH00000303CJ': $("#PreferedContactTimeErrorMessage").val(),
			'00NHp00000lQiTk': $("#NationalityErrorMessage").val(),
			'00NHp00000lQiTv': $("#PurposeOfUseErrorMessage").val(),
			consentCheck: ''
		}
	});
	}

	$('#00NHp00000rkes6').val($.urlParam('utm_source').replace(/%20/g, " "));
	$('#00NHp00000rkeyC').val($.urlParam('utm_campaign').replace(/%20/g, " "));
	$('#00NVH000004mXYr').val($.urlParam('utm_medium').replace(/%20/g, " "));
	$('#00NVH000005PrKn').val(window.location.href); // utm Url


	//if ($.urlParam('utm_source')) {
	//	var theVal = $.urlParam('utm_source').replace(/%20/g, " ");
	//	$("#lead_source option").each(function () {
	//		if ($(this).val() == theVal) {
	//			$(this).attr('selected', 'selected');
	//		}
	//	});
	//}



	$("#first_name,#last_name").on('input', function () {
		$(this).val($(this).val().replace(/[^A-Za-z+\s]/g, ''))
	});

	onSFFormload();
};
function validate(event) {
	var form = $("#generic-project-form");
	if (!form.valid()) {
		event.preventDefault();
	}
}
jQuery.validator.addMethod("loqatephone", function (value, element) {
	if (value.length < 7) {
		return false; // Fail validation for short numbers
	}

	let isValid = false;
	if (!$(element).hasClass('loqateValid') || $(element).hasClass('error')) {
		var currForm = '#' + element.closest('.form').id;
		var countryCode = $(currForm).find('.iti__selected-dial-code').text();

		console.log('API CALL');
		$(element).closest('.form-group').find('.spinner-border').removeClass('d-none');
		// Perform synchronous AJAX request
		$.ajax({
			url: 'https://api.addressy.com/PhoneNumberValidation/Interactive/Validate/v2.20/json3.ws',
			type: 'POST',
			data: {
				Key: $("#LoqateAPIKey").val(), // Replace with your API key
				Phone: countryCode + value
			},
			async: false, // Synchronous request
			success: function (response) {
				if (response.Items && response.Items[0].Error) {
					// Fallback if API fails
					var existingInst = window.intlTelInputGlobals ? window.intlTelInputGlobals.getInstance(element) : null;
					var fallbackRegex = /^[0-9\s\-]{7,15}$/;
					if (existingInst && typeof window.intlTelInputUtils !== 'undefined') {
						isValid = existingInst.isValidNumber();
						// If intlTelInput rejects due to strict formatting (like leading zeros), fallback to regex
						if (!isValid) isValid = fallbackRegex.test(value);
					} else {
						isValid = fallbackRegex.test(value);
					}
					if (isValid) $(element).addClass('loqateValid');
					else $(element).removeClass('loqateValid');
				} else if (response.Items && response.Items[0].IsValid === "Yes") {
					//if (response.Items && response.Items[0].Error === "13") {
					isValid = true;
					$(element).addClass('loqateValid');
				} else {
					isValid = false;
					$(element).removeClass('loqateValid');
				}
			},
			error: function () {
				var existingInst = window.intlTelInputGlobals ? window.intlTelInputGlobals.getInstance(element) : null;
				var fallbackRegex = /^[0-9\s\-]{7,15}$/;
				if (existingInst && typeof window.intlTelInputUtils !== 'undefined') {
					isValid = existingInst.isValidNumber();
					if (!isValid) isValid = fallbackRegex.test(value);
				} else {
					isValid = fallbackRegex.test(value);
				}
				if (isValid) $(element).addClass('loqateValid');
				else $(element).removeClass('loqateValid');
			}
		});
		$(element).closest('.form-group').find('.spinner-border').addClass('d-none');
	}
	else {
		isValid = true;
	}

	return isValid;
}, "wrong phone number");

jQuery.validator.addMethod("loqateemail", function (value, element) {

	let isValid = false;
	if (!$(element).hasClass('loqateValid') || $(element).hasClass('error')) {
		// Perform synchronous AJAX request
		$.ajax({
			url: 'https://api.addressy.com/EmailValidation/Interactive/Validate/v2.00/json3.ws',
			type: 'POST',
			data: {
				Key: $("#LoqateAPIKey").val(), // Replace with your API key
				Email: value
			},
			async: false, // Synchronous request
			success: function (response) {
				if (response.Items && response.Items[0].Error) {
					// Fallback if API fails (e.g. CORS/URL not allowed)
					var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
					isValid = emailRegex.test(value);
					if (isValid) $(element).addClass('loqateValid');
					else $(element).removeClass('loqateValid');
				} else if (response.Items && response.Items[0].ResponseCode === "Valid") {
					isValid = true;
					$(element).addClass('loqateValid');
				} else {
					isValid = false;
					$(element).removeClass('loqateValid');
				}
			},
			error: function () {
				var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				isValid = emailRegex.test(value);
				if (isValid) $(element).addClass('loqateValid');
				else $(element).removeClass('loqateValid');
			}
		});
		$(element).closest('.form-group').find('.spinner-border').addClass('d-none');
	}
	else {
		return true;
	}

	return isValid;
}, "wrong email address");

$.validator.setDefaults({
	onkeyup: function () {
		var originalKeyUp = $.validator.defaults.onkeyup;
		var customKeyUp = function (element, event) {
			if ($("#PhoneNumber")[0] === element || $("#email")[0] === element) {
				$(element).removeClass('loqateValid');
				return false;
				required: true
			},
			email: {
				//required: true,
				//email: true,
				loqateemail: true
			},
			PhoneNumber: {
				//required: true,
				loqatephone: true
			},
			'00NVH000002y6iv': {
				required: true,
			},
			'00NVH00000303CJ': {
				required: true,
			},
			'00NHp00000lQiTk': {
				required: true,
			},
			'00NHp00000lQiTv': {
				required: true,
			},
			consentCheck: {
				required: function (elem) {
					if (!$('#consentCheck').is(':checked')) {
						$('#lblConsentCheck').addClass('text-danger');
					}
					else {
						$('#lblConsentCheck').removeClass('text-danger');
					}
					return true;
				}
			}
		},
		messages: {
			first_name: $("#FirstNameErrorMessage").val(),
			last_name: $("#LastNameErrorMessage").val(), //"Please enter your last name.",
			PhoneNumber: $("#PhoneErrorMessage").val(), //"Please enter valid phone number.",
			email: $("#EmailErrorMessage").val(), //"Please enter valid email.",
			'00NVH000002y6iv': $("#CountryErrorMessage").val(),
			'00NVH00000303CJ': $("#PreferedContactTimeErrorMessage").val(),
			'00NHp00000lQiTk': $("#NationalityErrorMessage").val(),
			'00NHp00000lQiTv': $("#PurposeOfUseErrorMessage").val(),
			consentCheck: ''
		}
	});
	}

	$('#00NHp00000rkes6').val($.urlParam('utm_source').replace(/%20/g, " "));
	$('#00NHp00000rkeyC').val($.urlParam('utm_campaign').replace(/%20/g, " "));
	$('#00NVH000004mXYr').val($.urlParam('utm_medium').replace(/%20/g, " "));
	$('#00NVH000005PrKn').val(window.location.href); // utm Url


	//if ($.urlParam('utm_source')) {
	//	var theVal = $.urlParam('utm_source').replace(/%20/g, " ");
	//	$("#lead_source option").each(function () {
	//		if ($(this).val() == theVal) {
	//			$(this).attr('selected', 'selected');
	//		}
	//	});
	//}



	$("#first_name,#last_name").on('input', function () {
		$(this).val($(this).val().replace(/[^A-Za-z+\s]/g, ''))
	});

	$('#generic-project-form').off('submit').on('submit', function () {
		if ($('#PhoneNumber').valid()) {
			var iti = window.intlTelInputGlobals ? window.intlTelInputGlobals.getInstance(document.querySelector("#PhoneNumber")) : null;
			if (iti) {
				var countryData = iti.getSelectedCountryData();
				var dialCode = "+" + countryData.dialCode;
				var rawMobile = $(this).find("#PhoneNumber").val(); // The national number user typed
				var countryName = countryData.name;

				$(this).find("#00NVH000003TdQr").val(dialCode);
				$(this).find("#mobile").val(rawMobile);

				if ($(this).find("input[name='CountryName']").length === 0) {
					$("<input>").attr({ type: "hidden", name: "CountryName", value: countryName }).appendTo(this);
				} else {
					$(this).find("input[name='CountryName']").val(countryName);
				}
			} else {
				var phoneCode = $(this).find('.iti__selected-dial-code').text();
				var phoneNumberValue = $(this).find("#PhoneNumber").val();
				$(this).find("#00NVH000003TdQr").val(phoneCode);
				$(this).find("#mobile").val(phoneNumberValue);
			}

			// We do NOT remove name='PhoneNumber' so the input value is also sent to backend
			$("#consentCheck").removeAttr('name');
		}
	});

	onSFFormload();
};
function validate(event) {
	var form = $("#generic-project-form");
	if (!form.valid()) {
		event.preventDefault();
	}
}
jQuery.validator.addMethod("loqatephone", function (value, element) {
	if (value.length < 7) {
		return false; // Fail validation for short numbers
	}

	let isValid = false;
	if (!$(element).hasClass('loqateValid') || $(element).hasClass('error')) {
		var currForm = '#' + element.closest('.form').id;
		var countryCode = $(currForm).find('.iti__selected-dial-code').text();

		console.log('API CALL');
		$(element).closest('.form-group').find('.spinner-border').removeClass('d-none');
		// Perform synchronous AJAX request
		$.ajax({
			url: 'https://api.addressy.com/PhoneNumberValidation/Interactive/Validate/v2.20/json3.ws',
			type: 'POST',
			data: {
				Key: $("#LoqateAPIKey").val(), // Replace with your API key
				Phone: countryCode + value
			},
			async: false, // Synchronous request
			success: function (response) {
				if (response.Items && response.Items[0].Error) {
					// Fallback if API fails
					var existingInst = window.intlTelInputGlobals ? window.intlTelInputGlobals.getInstance(element) : null;
					var fallbackRegex = /^[0-9\s\-]{7,15}$/;
					if (existingInst && typeof window.intlTelInputUtils !== 'undefined') {
						isValid = existingInst.isValidNumber();
						// If intlTelInput rejects due to strict formatting (like leading zeros), fallback to regex
						if (!isValid) isValid = fallbackRegex.test(value);
					} else {
						isValid = fallbackRegex.test(value);
					}
					if (isValid) $(element).addClass('loqateValid');
					else $(element).removeClass('loqateValid');
				} else if (response.Items && response.Items[0].IsValid === "Yes") {
					//if (response.Items && response.Items[0].Error === "13") {
					isValid = true;
					$(element).addClass('loqateValid');
				} else {
					isValid = false;
					$(element).removeClass('loqateValid');
				}
			},
			error: function () {
				var existingInst = window.intlTelInputGlobals ? window.intlTelInputGlobals.getInstance(element) : null;
				var fallbackRegex = /^[0-9\s\-]{7,15}$/;
				if (existingInst && typeof window.intlTelInputUtils !== 'undefined') {
					isValid = existingInst.isValidNumber();
					if (!isValid) isValid = fallbackRegex.test(value);
				} else {
					isValid = fallbackRegex.test(value);
				}
				if (isValid) $(element).addClass('loqateValid');
				else $(element).removeClass('loqateValid');
			}
		});
		$(element).closest('.form-group').find('.spinner-border').addClass('d-none');
	}
	else {
		isValid = true;
	}

	return isValid;
}, "wrong phone number");

jQuery.validator.addMethod("loqateemail", function (value, element) {

	let isValid = false;
	if (!$(element).hasClass('loqateValid') || $(element).hasClass('error')) {
		// Perform synchronous AJAX request
		$.ajax({
			url: 'https://api.addressy.com/EmailValidation/Interactive/Validate/v2.00/json3.ws',
			type: 'POST',
			data: {
				Key: $("#LoqateAPIKey").val(), // Replace with your API key
				Email: value
			},
			async: false, // Synchronous request
			success: function (response) {
				if (response.Items && response.Items[0].Error) {
					// Fallback if API fails (e.g. CORS/URL not allowed)
					var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
					isValid = emailRegex.test(value);
					if (isValid) $(element).addClass('loqateValid');
					else $(element).removeClass('loqateValid');
				} else if (response.Items && response.Items[0].ResponseCode === "Valid") {
					isValid = true;
					$(element).addClass('loqateValid');
				} else {
					isValid = false;
					$(element).removeClass('loqateValid');
				}
			},
			error: function () {
				var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				isValid = emailRegex.test(value);
				if (isValid) $(element).addClass('loqateValid');
				else $(element).removeClass('loqateValid');
			}
		});
		$(element).closest('.form-group').find('.spinner-border').addClass('d-none');
	}
	else {
		return true;
	}

	return isValid;
}, "wrong email address");

$.validator.setDefaults({
	onkeyup: function () {
		var originalKeyUp = $.validator.defaults.onkeyup;
		var customKeyUp = function (element, event) {
			if ($("#PhoneNumber")[0] === element || $("#email")[0] === element) {
				$(element).removeClass('loqateValid');
				return false;
			}
			else {
				return originalKeyUp.call(this, element, event);
			}
		}
		return customKeyUp;
	}()
});

$(".phone").on('input', function () {
	var inputValue = $(this).val();
	$(this).val(inputValue.replace(/[^0-9+]/g, ''));
});

function validate(event) {
	var form = $("#generic-project-form");
	if (!form.valid()) {
		event.preventDefault();
	}
}
function onSFFormload() {
	var element = $('#generic-project-form');
	if (element.length) {
		element[0].onclick = validate;
	}
}
var onSubmit = function (token) {
	console.log('Submitted');
};
