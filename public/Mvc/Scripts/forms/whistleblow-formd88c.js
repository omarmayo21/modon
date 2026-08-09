(function ($) { //an IIFE so safely alias jQuery to $

    if (typeof window.FormData === 'undefined')
        return;

    $.AjaxForm = function (element) {
        if (element instanceof $) {
            this.element = element
        } else {
            this.element = $(element);
            this.elementSelector = element;
        }
    };

    //assigning an object literal to the prototype is a shorter syntax
    //than assigning one property at a time
    $.AjaxForm.prototype = {
        Init: function () {
            if (this.element.length == 0) { return; }
            var that = this;
            this.element.each(function () {
                var form = $(this).find("form");
                that.InitForm(form);
            });
        },

        InitForm: function (form) {
            $("#whistleblow_Name,[id^=firstname_],[id^=lastname_]").on('input', function () {
                $(this).val($(this).val().replace(/[^A-Za-z+\s]/g, ''))
            });

            //$("#whistleblow_Phone").on('input', function () {
            //    $(this).inputmask({ "mask": "(999) 999-999999" });
            //});

            $('[type="date"]').prop('max', function () {
                return new Date().toJSON().split('T')[0];
            });

            $('.datepicker').on('change', function () {
                $(this).removeClass("placeholdertext")
            })

            var successMessage = form.find('.success-message');
            var errorMessage = form.find('.general-error-message');
            var submitUrl = form.attr('action');

            var formValidation = function () {
                form.validate({
                    errorElement: "span",
                    rules: {
                        Name: {
                            required: true
                        },
                        Email: {
                            required: true,
                            email: true
                        },
                        VoilationType: {
                            required: true
                        },
                        PhoneNumber: {
                            required: true
                        },
                        Message: {
                            required: true
                        },
                        Date: {
                            required: true
                        },
                    },
                    messages: {
                        //Name: "Please enter your full name",
                        //Email: "Please enter a valid email address.",
                        //PhoneNumber: "Please enter your phone number.",
                        //Message: "Please enter your message.",
                        //VoilationType: "Please select voilation type.",
                        //Date: "Please enter voilation date.",

                        Name: $("#FullNameErrorMessage").val(),
                        Email: $("#EmailErrorMessage").val(),
                        PhoneNumber: $("#PhoneErrorMessage").val(),
                        Message: $("#MessageErrorMessage").val(),
                        VoilationType: $("#VoilationTypeErrorMessage").val(),
                        Date: $("#DateErrorMessage").val(),
                    }
                });
            };

            var validationRules = {
                required: true,
                // Add other validation rules as needed
            };

            var validationMessages = {
                required: $("#FieldRequiredErrorMessage").val(),
                // Add other error messages as needed
            };
            //$.validator.messages = validationMessages;
            var submitClickHandler = function () {

                form.find('.dynamic-id').each(function () {
                    $(this).rules("add", validationRules);
                });

                

                var whistleblowformIsValid = true;
                whistleblowformIsValid = form.valid() && whistleblowformIsValid;

                var formData = new FormData(form[0]);
                //File Upload Validation
                var fileInput = $("#selectFile");
                var validFiles = true;
                if (fileInput.length > 0 && form.attr('id') == "WhistleBlowFormId") {
                    var fileVal = fileInput.get(0).files;

                    var maxFileSize = 10 * 1024 * 1024; // 10 MB in bytes
                    var allowedFormats = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png', 'text/plain'];
                    var files = fileVal;
                    var errorMessageFile = '';

                    for (var i = 0; i < files.length; i++) {
                        var file = files[i];
                        var fileSize = file.size;
                        var fileType = file.type;

                        if (fileSize > maxFileSize) {
                            errorMessageFile += 'File ' + file.name + ' exceeds 10 MB limit.\n';
                        }

                        if (!allowedFormats.includes(fileType)) {
                            errorMessageFile += 'File ' + file.name + ' is not a valid format. \n';
                        }
                    }

                    if (errorMessageFile !== '') {
                        $('#Message-error-file').show();
                        $('#Message-error-file').text(errorMessageFile);
                        //  $("#selectFile").val("");
                        $("#selectFileButton").addClass("error");

                        validFiles = false;
                    } else {
                        $('#Message-error-file').hide();
                        $('#Message-error-file').text('');
                        $("#selectFileButton").removeClass("error");
                        formData.append('IncidentFiles', fileVal);
                        validFiles = true;
                    }

                }

                whistleblowformIsValid = validFiles && whistleblowformIsValid;
                if (!whistleblowformIsValid) {
                    return false;
                }

                /*var formData = new FormData(form[0]);     */        
                /*                $("#registerYourIntrestFormLoader").removeClass('d-none');*/
                var formData = new FormData(form[0]);
                var phoneValue = $("#whistle-blow").find('.iti__selected-dial-code').text() + formData.get('PhoneNumber');
                formData.set('PhoneNumber', phoneValue);
                var request = new XMLHttpRequest();
                request.open('https://www.modon.com/about-modon/POST', submitUrl);
                request.onload = function () {
                    if (request.status === 200) {
                        var responseJson = JSON.parse(request.response);
                        if (responseJson.success) {
                            if (responseJson.message && responseJson.message !== '') {
                                successMessage.text(responseJson.message);
                                successMessage.show();
                                $('#' + form.attr('id'))[0].reset();
                                $('#' + form.attr('id')).hide();
                                showMessage('success', responseJson.message)
                                //setTimeout(function () { $("#registerYourIntrestFormLoader").addClass('d-none'); }, 250);
                            }
                        }
                        else {
                            errorMessage.text(responseJson.message);
                            errorMessage.show();
                            showMessage('fail', responseJson.message)
                            //setTimeout(function () { $("#registerYourIntrestFormLoader").addClass('d-none'); }, 250);
                        }
                    }
                };

                request.send(formData);
                $("#form-loader").hide();                        
                return false;
            };

            form.find('#form-btn').on('click', function (e) {
                e.preventDefault();
                formValidation();
                submitClickHandler();                     
                console.log('submit clicked' + form.attr('id'));
            });

            $("#FirstName,#LastName").bind('keyup', function () {
                $(this).val($(this).val().replace(/[^A-Za-z]/g, ''))
            });

            //  fileupload script
            $('.inputbtn').on('click', function () {
                $('.fileinput').trigger('click')
            })
            $('.fileinput').change(function () {
                var fileName = this.files[0]?.name;
                $('.filename p').text(fileName)
            });
        },
    };

    $.AjaxForm.defaultOptions = {};

}(jQuery));

var ajaxForm = new $.AjaxForm(".whistleblow-form-selector");
ajaxForm.Init();
$(".phone").on('input', function () {
    var inputValue = $(this).val();
    $(this).val(inputValue.replace(/[^0-9+]/g, ''));
});
var phoneInputs = $("#whistle-blow").find('.phone');

phoneInputs.each(function () {
    var input = this; // Get the current input element
    window.intlTelInput(input, {
        utilsScript: "/ResourcePackages/ModonCorporate/Assets/src/Assets/js/utils.js",
        separateDialCode: true,
        initialCountry: "ae",
        preferredCountries: ["ae"],
        nationalMode: false
    });
});

function showMessage(flag, message) {
    if (flag == "success") {
        $('.submit-info').find('.message').text(message);
        $('.submit-info').find('.message').addClass('text-success');
    }
    else {
        $('.submit-info').find('.message').text(message);
        $('.submit-info').find('.message').addClass('text-danger');
    }
}