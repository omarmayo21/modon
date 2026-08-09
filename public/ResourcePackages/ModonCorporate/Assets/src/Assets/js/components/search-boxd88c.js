(function ($) {

    $(document).ready(function () {
        $('input[data-search="search"]').attr('maxlength',120)
        var language = $('[data-sf-role="language"]').first().val();
        if (language == 'en') {
            $('input[data-search="search"]').on('input', function () {
                var char = this.selectionStart,
                    regex = /[^a-zA-Z ]/gi,
                    value = $(this).val();
                if (regex.test(value)) {
                    $(this).val(value.replace(regex, ''));
                    char--;
                }
                this.setSelectionRange(char, char);

            });
        } else {
            $('.search-box').on('input', function () {
                var char = this.selectionStart,
                    regex = /[^\u0600-\u06FF ]/gi,
                    value = $(this).val();
                if (regex.test(value)) {
                    $(this).val(value.replace(regex, ''));
                    char--;
                }
                this.setSelectionRange(char, char);

            });
        }
        var searchBoxIdFields = $('[data-sf-role="searchTextBoxId"]');
        var search = $('[data-search="search"]');
        for (var i = 0; i < searchBoxIdFields.length; i++) {
            var searchBoxIdField = $(searchBoxIdFields[i]);
            var controlServerData = {

                resultsUrl: searchBoxIdField.siblings('[data-sf-role="resultsUrl"]').first().val(),
                indexCatalogue: searchBoxIdField.siblings('[data-sf-role="indexCatalogue"]').first().val(),
                wordsMode: searchBoxIdField.siblings('[data-sf-role="wordsMode"]').first().val(),
                disableSuggestions: $.parseJSON(searchBoxIdField.siblings('[data-sf-role="disableSuggestions"]').first().val()),
                minSuggestionLength: searchBoxIdField.siblings('[data-sf-role="minSuggestionLength"]').first().val(),
                suggestionFields: searchBoxIdField.siblings('[data-sf-role="suggestionFields"]').first().val(),
                language: searchBoxIdField.siblings('[data-sf-role="language"]').first().val(),
                suggestionsRoute: searchBoxIdField.siblings('[data-sf-role="suggestionsRoute"]').first().val(),
                searchTextBoxSelector: searchBoxIdField.val(),
                searchButtonSelector: searchBoxIdField.siblings('[data-sf-role="searchButtonId"]').first().val()

            };
            featherSearchBoxWidget(controlServerData);
        }

        function featherSearchBoxWidget(serverData) {

            var searchTextBox = $(serverData.searchTextBoxSelector),
                searchButton = $(serverData.searchButtonSelector);

            if (!serverData.disableSuggestions) {

                searchTextBox.keyup(keyupHandler);

                try {
                    searchTextBox.autocomplete({
                        source: [],
                        messages:
                        {
                            noResults: '',
                            results: function () { }
                        },
                        select: function (event, ui) {
                            searchTextBox.val(ui.item.value);
                            navigateToResults(event);
                        },
                    }).autocomplete("widget").addClass("sf-autocomplete");
                } catch (e) {
                    // Fixes jQuery bug, causing IE7 to throw error "script3 member not found".
                    // The try/catch can be removed when the bug is fixed.
                }
            }

            function suggestionsSuccessHandler(result, args) {
                console.log(result);
                var dataSource = result.Suggestions;
                if (dataSource.length > 0) {
                    generateMarkup(dataSource);
                }

            }

            function generateMarkup(dataSource) {
                var markup = "";

                var searchResult = $("#searchResult");
                for (var i = 0; i < dataSource.length; i++) {
                    var data = dataSource[i];
                    markup += "<li><a href='javascript:void(0)'>" + data + "</a></li>";

                }
                searchResult.html(markup);
                clickResult();
            }
            $("#search-close").click(function () {
                $("#searchResult").html("");
                $(".form-group__input").val("");
                var listUrlPath = $("#listUrl").val();

                //$.ajax({
                //    type: "Get",
                //    url: listUrlPath,
                //    datatype: "html",
                //    success: successHandlerPoplularSearch,
                //    error: function (xhr, ajaxOptions, thrownError) {

                //        console.log(thrownError);

                //    }
                //});
            });
            function clickResult() {
                $("#searchResult li a").click(function () {

                    var query = $(this).text();
                    if (query && query.trim() && serverData.indexCatalogue) {
                        // sendSentence();
                        setCookieValue(query);
                        window.location = getLocation(query);
                    }
                });
            }
            $("#searchButton").click(function () {

                var query = searchTextBox.val().trim();

                if (query && query.trim() && serverData.indexCatalogue) {
                    // sendSentence();
                    setCookieValue(query);
                    window.location = getLocation(query);
                }
            });


            function keyupHandler(e) {

                if (e.keyCode != 38 &&  // up arrow
                    e.keyCode != 40 && // down arrow
                    e.keyCode != 27) { // esc
                    // When the auto complete menu is shown, only this event is detected
                    if (e.keyCode == 13) {
                        // when enter is pressed
                        navigateToResults(e);
                    }

                    var request = {};
                    var searchText = searchTextBox.val().trim();
                    if (searchText.length >= serverData.minSuggestionLength) {
                        request.IndexName = serverData.indexCatalogue;
                        request.SuggestionFields = serverData.suggestionFields;
                        request.Text = searchText;
                        request.Language = serverData.language;

                        $.ajax({
                            type: "GET",
                            url: serverData.suggestionsRoute,
                            dataType: 'json',
                            data: request,
                            success: suggestionsSuccessHandler
                        });
                    }
                }
            }

            /* Helper methods */
            function navigateToResults(e) {
                if (!e)
                    e = window.event;

                if (e.stopPropagation) {
                    e.stopPropagation();
                }
                else {
                    e.cancelBubble = true;
                }
                if (e.preventDefault) {
                    e.preventDefault();
                }
                else {
                    e.returnValue = false;
                }

                var query = searchTextBox.val();

                if (query && query.trim() && serverData.indexCatalogue) {
                    sendSentence();
                    setCookieValue(query);
                    window.location = getLocation();
                }
            }

            function getLocation(query) {
                if (query == undefined) {
                    query = searchTextBox.val().trim();
                }


                var separator = (serverData.resultsUrl.indexOf("?") == -1) ? "?" : "&";

                var catalogueParam = separator + "indexCatalogue=" + encodeURIComponent(serverData.indexCatalogue),
                    searchQueryParam = "&searchQuery=" + encodeURIComponent(query),
                    wordsModeParam = "&wordsMode=" + serverData.wordsMode;

                var url = serverData.resultsUrl + catalogueParam + searchQueryParam + wordsModeParam;

                return url;
            }

            function sendSentence() {
                if (window.DataIntelligenceSubmitScript) {
                    DataIntelligenceSubmitScript._client.sentenceClient.writeSentence({
                        predicate: "Search for",
                        object: searchTextBox.val(),
                        objectMetadata: [{
                            'K': 'PageUrl',
                            'V': location.href
                        }]
                    });
                }
            }

            function getCookieValue() {
                var cookieValue = $.cookie('searchArrayCookie');
                if (cookieValue != '' && cookieValue != undefined) {
                    // Convert the cookie value back to an array
                    var searchArray = JSON.parse(cookieValue) || [];
                    return searchArray;
                }
                return "";
            }
            function setCookieValue(searchValue) {
                var searchArray = [];
                if ($.cookie('searchArrayCookie')) {
                    // The cookie exists
                    // Retrieve the cookie value
                    var cookieValue = $.cookie('searchArrayCookie');

                    // Convert the cookie value back to an array
                    var searchArray = JSON.parse(cookieValue) || [];
                }


                // Add a new item to the array
                if (searchArray.indexOf(searchValue) < 0) {
                    searchArray.push(searchValue);

                    // Limit the array to a maximum of 3 items
                    if (searchArray.length > 3) {

                        searchArray.shift();
                    }

                    // Convert the array to a string
                    var arrayString = JSON.stringify(searchArray);

                    // Set the cookie with the updated array string
                    $.cookie('searchArrayCookie', arrayString);
                }

            }
            function setRecentSearch() {
                var cookieValueArray = getCookieValue();

                if (cookieValueArray.length != 0 && cookieValueArray != null) {
                    $("#quicklinkdiv").show();
                    var html = ' ';
                    for (var i = 0; i < cookieValueArray.length; i++) {

                        html += '<li><a href="javascript:void(0)">' + cookieValueArray[i] + '</a></li>';
                        //if (i !== cookieValueArray.length - 1) {
                        //    html += " , "
                        //}
                    }
                    $("#recentSearch").html(html);
                }
                else {
                    $("#quicklinkdiv").hide();
                    $("#recentSearch").html('');
                }
            }
            setRecentSearch();
            $("#recentSearch li a").click(function () {

                var recentSearch = $(this).text();
                searchTextBox.val(recentSearch);

                var query = searchTextBox.val().trim();

                if (query && query.trim() && serverData.indexCatalogue) {
                    // sendSentence();
                    setCookieValue(query);
                    window.location = getLocation(query);
                }
            });
        }
        $("#btnCloseSearch").click(function () {
            search.val("");
            $("#searchResult").html('');
        });
        $("#clearSearch").click(function () {
            search.val("");
            $("#searchResult").html('');
        });
   

    });
}(jQuery));
