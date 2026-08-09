const fs = require('fs');
let content = fs.readFileSync('public/Mvc/Scripts/forms/sf-generic-form-egyptd88c.js', 'utf8');
let lines = content.split('\n');

let replacementLines = [
	'\t$(\'#00NHp00000rkes6\').val($.urlParam(\'utm_source\').replace(/%20/g, " "));',
	'\t$(\'#00NHp00000rkeyC\').val($.urlParam(\'utm_campaign\').replace(/%20/g, " "));',
	'\t$(\'#00NVH000004mXYr\').val($.urlParam(\'utm_medium\').replace(/%20/g, " "));',
	'\t$(\'#00NVH000005PrKn\').val(window.location.href); // utm Url',
	'\t',
	'\t$("#first_name,#last_name").on(\'input\', function () {',
	'\t\t$(this).val($(this).val().replace(/[^A-Za-z+\\s]/g, \'\'))',
	'\t});',
	'\t',
	'\t$(\'#generic-project-form\').off(\'submit\').on(\'submit\', function () {',
	'\t\ttry {',
	'\t\t\tvar phoneInput = $(this).find("#PhoneNumber")[0];',
	'\t\t\tvar iti = (window.intlTelInputGlobals && phoneInput) ? window.intlTelInputGlobals.getInstance(phoneInput) : null;',
	'\t\t\tif (iti) {',
	'\t\t\t\tvar countryData = iti.getSelectedCountryData();',
	'\t\t\t\tvar dialCode = "+" + (countryData.dialCode || "20");',
	'\t\t\t\tvar rawMobile = $(this).find("#PhoneNumber").val();',
	'\t\t\t\tvar countryName = countryData.name || "Unknown";',
	'\t\t\t\t',
	'\t\t\t\t$(this).find("#00NVH000003TdQr").val(dialCode);',
	'\t\t\t\t$(this).find("#mobile").val(rawMobile);',
	'\t\t\t\t',
	'\t\t\t\tif ($(this).find("input[name=\'CountryName\']").length === 0) {',
	'\t\t\t\t\t$("<input>").attr({ type: "hidden", name: "CountryName", value: countryName }).appendTo(this);',
	'\t\t\t\t} else {',
	'\t\t\t\t\t$(this).find("input[name=\'CountryName\']").val(countryName);',
	'\t\t\t\t}',
	'\t\t\t} else {',
	'\t\t\t\tvar phoneCode = $(this).find(\'.iti__selected-dial-code\').text() || "+20";',
	'\t\t\t\tvar phoneNumberValue = $(this).find("#PhoneNumber").val();',
	'\t\t\t\t$(this).find("#00NVH000003TdQr").val(phoneCode);',
	'\t\t\t\t$(this).find("#mobile").val(phoneNumberValue);',
	'\t\t\t}',
	'\t\t\t',
	'\t\t\t$("#consentCheck").removeAttr(\'name\');',
	'\t\t} catch (e) {',
	'\t\t\tconsole.error("Error extracting phone data before submit:", e);',
	'\t\t}',
	'\t});',
	'\t',
	'\tonSFFormload();',
	'};'
];

// Lines 0 to 60 (exclusive) is up to the end of $form.validate()
let part1 = lines.slice(0, 60);

// Lines 83 to 213 (exclusive) is the external functions like validate(), loqatephone, loqateemail, and setDefaults
let part2 = lines.slice(83, 213);

// Lines 265 to end is anything after the duplicate block, but actually 265 is the syntax error `};`. So we want 266 onwards.
let part3 = lines.slice(265);

let newLines = [...part1, ...replacementLines, ...part2, ...part3];

fs.writeFileSync('public/Mvc/Scripts/forms/sf-generic-form-egyptd88c.js', newLines.join('\n'));
console.log("Rewrite complete.");
