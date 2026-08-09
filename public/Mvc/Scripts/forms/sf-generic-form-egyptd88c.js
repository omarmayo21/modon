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
					if (existingInst) {
						isValid = existingInst.isValidNumber();
					} else {
						isValid = /^[0-9\s\-]{7,15}$/.test(value);
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
				if (existingInst) {
					isValid = existingInst.isValidNumber();
				} else {
					isValid = /^[0-9\s\-]{7,15}$/.test(value);
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
$('#SFFormSubmit').on('click', function () {
	if ($('#PhoneNumber').valid()) {
		$("#PhoneNumber").removeAttr('name');
		$("#consentCheck").removeAttr('name');
		var phoneCode = $("#generic-project-form").find('.iti__selected-dial-code').text().replace("+", "");
		var phoneNumberValue = $("#generic-project-form").find("#PhoneNumber").val();

		$("#generic-project-form").find("#00NVH000003TdQr").val(phoneCode);
		$("#generic-project-form").find("#mobile").val(phoneNumberValue);
	}
});
function onSFFormload() {
	var element = $('#generic-project-form');
	element.onclick = validate;
}
var onSubmit = function (token) {
	console.log('Submitted');
};

