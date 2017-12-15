'use strict';
$(function() {

    // API Key iOM9JW08IZGUoafA81f21vLOld9Jrruy
    var btnContainer = $('#buttonContainer');
    var gifContainer = $('#gifContainer');
    var instrumentTheme = ['guitar', 'piano', 'bass guitar', 'drums', 'vocals', 'saxophone', 'cello', 'harp', 'violin'];
    var responseArray;

    function createButtons() {
        btnContainer.empty();
        for (var instrument of instrumentTheme) {
            var btn = $('<button>');
            btn.addClass('btnHandler');
            btn.text(instrument);
            btnContainer.append(btn);

        }
    }
    createButtons();
    $('#buttonContainer').on("click", ".btnHandler", apiCall);


    function apiCall() {

        var searchParams = {

            api_key: 'iOM9JW08IZGUoafA81f21vLOld9Jrruy',
            q: $(this).text(),
            limit: 10,
            r: 'rating'
        };

        var sp = $.param(searchParams);

        var queryURL = 'https://api.giphy.com/v1/gifs/search?' + sp;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {

            gifContainer.empty();
            responseArray = response.data;

            for (var gifData of responseArray) {

                var stillImg = gifData.images.fixed_width_still.url;
                var gifImg = gifData.images.fixed_width.url;
                var imgContainer = $('<div>');
                var imgTag = $('<img>');
                var pTag = $('<p>');
                imgContainer.addClass('boxDiv');
                imgTag.attr('src', stillImg);
                imgTag.attr('alt', searchParams.q);
                imgTag.attr('data-state', 'still');
                imgTag.attr('data-still', stillImg);
                imgTag.attr('data-gif', gifImg);
                imgTag.addClass('imgHandler');
                pTag.text("Rated: " + gifData.rating);
                imgContainer.append(imgTag);
                imgContainer.append(pTag);
                gifContainer.append(imgContainer);

            }

            $('.imgHandler').on('click', function() {

                var state = $(this).attr("data-state");
                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-gif"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            });
        });

    }

    function addButton() {
        var newSearchTerm = $('#searchGifs').val();
        instrumentTheme.push(newSearchTerm);
        createButtons();
    }
    $('#searchSubmit').on("click", function(event) {
        event.preventDefault();
        if ($('#searchGifs').val() === "") {
            return;
        }

        addButton();
        $('#searchGifs').val("");
    });
    $('#clearData').on("click", function(event) {
        event.preventDefault();
        btnContainer.empty();
        gifContainer.empty();
        $('#searchGifs').val("");
        instrumentTheme = [];
    });
});