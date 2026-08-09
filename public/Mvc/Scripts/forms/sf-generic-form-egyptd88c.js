function pushSafeFormEvent(eventName, formId) {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({ event: eventName, form_name: formId });
	if (typeof window.gtag === 'function') {
		window.gtag('event', eventName, { form_name: formId });
	}
}

window.initModonFormValidation = function () {
	// Contact Us SalesForce Form
	var $form = $("#generic-project-form");
	var formStarted = false;
	$form.on('input focus', 'input, select, textarea', function() {
		if (!formStarted) {
			formStarted = true;
			pushSafeFormEvent('form_start', $form.attr('id'));
		}
	});
	if ($form.length && !$form.data('validator')) {
		$form.validate({
			errorElement: "span",
			rules: {
				first_name: { required: true },
				last_name: { required: true },
				email: { loqateemail: true },
				PhoneNumber: { loqatephone: true },
				'00NVH000002y6iv': { required: true },
				'00NVH00000303CJ': { required: true },
				'00NHp00000lQiTk': { required: true },
				'00NHp00000lQiTv': { required: true },
				consentCheck: {
					required: function (elem) {
						if (!$('#consentCheck').is(':checked')) {
							$('#lblConsentCheck').addClass('text-danger');
						} else {
							$('#lblConsentCheck').removeClass('text-danger');
						}
						return true;
					}
				}
			},
			messages: {
				first_name: $("#FirstNameErrorMessage").val(),
				last_name: $("#LastNameErrorMessage").val(),
				PhoneNumber: $("#PhoneErrorMessage").val(),
				email: $("#EmailErrorMessage").val(),
				'00NVH000002y6iv': $("#CountryErrorMessage").val(),
				'00NVH00000303CJ': $("#PreferedContactTimeErrorMessage").val(),
				'00NHp00000lQiTk': $("#NationalityErrorMessage").val(),
				'00NHp00000lQiTv': $("#PurposeOfUseErrorMessage").val(),
				consentCheck: ''
			}
		});
	}

	var getSafeUtm = function(key) {
		var val = sessionStorage.getItem(key);
		if (val) return val;
		var urlVal = $.urlParam ? $.urlParam(key) : "";
		return urlVal ? urlVal.replace(/%20/g, " ") : "";
	};
	$('#00NHp00000rkes6').val(getSafeUtm('utm_source'));
	$('#00NHp00000rkeyC').val(getSafeUtm('utm_campaign'));
	$('#00NVH000004mXYr').val(getSafeUtm('utm_medium'));
	$('#00NVH000005PrKn').val(window.location.href); // utm Url

	$("#first_name,#last_name").on('input', function () {
		$(this).val($(this).val().replace(/[^A-Za-z+\s]/g, ''))
	});

	$('#generic-project-form').off('submit').on('submit', function () {
		try {
			var phoneInput = $(this).find("#PhoneNumber")[0];
			var iti = (window.intlTelInputGlobals && phoneInput) ? window.intlTelInputGlobals.getInstance(phoneInput) : null;
			if (iti) {
				var countryData = iti.getSelectedCountryData();
				var dialCode = "+" + (countryData.dialCode || "20");
				var rawMobile = $(this).find("#PhoneNumber").val(); // The national number user typed
				var countryName = countryData.name || "Unknown";

				$(this).find("#00NVH000003TdQr").val(dialCode);
				$(this).find("#mobile").val(rawMobile);

				if ($(this).find("input[name='CountryName']").length === 0) {
					$("<input>").attr({ type: "hidden", name: "CountryName", value: countryName }).appendTo(this);
				} else {
					$(this).find("input[name='CountryName']").val(countryName);
				}
			} else {
				var phoneCode = $(this).find('.iti__selected-dial-code').text() || "+20";
				var phoneNumberValue = $(this).find("#PhoneNumber").val();
				$(this).find("#00NVH000003TdQr").val(phoneCode);
				$(this).find("#mobile").val(phoneNumberValue);
			}

			$("#consentCheck").removeAttr('name');
		} catch (e) {
			console.error("Error extracting phone data before submit:", e);
		}
	});

	onSFFormload();
};

function validate(event) {
	var form = $("#generic-project-form");
	if (!form.valid()) {
		event.preventDefault();
		pushSafeFormEvent('form_validation_error', 'generic-project-form');
	} else {
		pushSafeFormEvent('form_submit_attempt', 'generic-project-form');
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

function onSFFormload() {
	var element = $('#generic-project-form');
	if (element.length) {
		element[0].onclick = validate;
	}
}

var onSubmit = function (token) {
	console.log('Submitted');
};
