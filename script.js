$(document).ready(function() {
    var currentURL = document.URL;
    var pathArray = currentURL.split('access_token=');
    var accessToken = pathArray[1];
    console.log("Access Token: " + accessToken);
    if(accessToken !== undefined) {
        $('#login').hide();
    }
    var getURL = "https://api.instagram.com/v1/tags/snow/media/recent?access_token=" + accessToken;
    var access = {access_token:accessToken};
    
    function getImages(accessInput, tagInput, clickcount) {
        console.log("GetImages ran");
        console.log("Round: " + clickcount);
        console.log("AccessInput: " + accessInput);
        console.log("Tag: " + tagInput);
        var apiURL = 'https://api.instagram.com/v1/tags/' + tagInput + '/media/recent?callback=?';
        $.getJSON(apiURL, accessInput, function(data) {
            console.log("Data.data: " + data.data);
            console.log("isEmptyObject(data.data): " + jQuery.isEmptyObject(data.data));
            if (jQuery.isEmptyObject(data.data)) {
                $('.notices').html("Sorry, not an active tag, try again.");
                console.log("Data undefined, should be error");
            } else {
                var result = data.data[clickcount].images.standard_resolution.url; 
                console.log("Data defined. Result is: " + result);
                $('.photos').html("<img src='" + result + "' height='400' width='400'>");
            } 
            console.log("If statement ran");
        });
    }

    var counter = 0;
    var tag = [];

    $('#searchButton').click(function() {
        console.log("searchButton was clicked");
        $('.notices').html("");
        tag = $('#userTag').val();
        console.log("Tag: " + tag);
        counter = 0;
        getImages(access, tag, counter); 
    });

    $('.photos').click(function() {
        console.log(".photos was clicked");
        counter = counter + 1;
        console.log("Counter in .photos.click(): " + counter);
        if (counter > 19) {
            $('.notices').html("Sorry, please pick a new key word/n");
        } else {
            getImages(access, tag, counter);
        }
    });       

});



