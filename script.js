$(document).ready(function() {
    var currentURL = document.URL;
    var pathArray = currentURL.split('access_token=');
    var accessToken = pathArray[1];
    console.log("Access Token: " + accessToken);
    if(accessToken.length > 0) {
        $('#login').hide();
    }
    var getURL = "https://api.instagram.com/v1/tags/snow/media/recent?access_token=" + accessToken;
    var access = {access_token:accessToken};
    
    function getImages(accessInput, tagInput, clickcount) {
        console.log(accessInput);
        console.log(tagInput);
        var apiURL = 'https://api.instagram.com/v1/tags/' + tagInput + '/media/recent?callback=?';
        $.getJSON(apiURL, accessInput, function(data) {
            if (result === undefined) {
                $('.notices').html("Sorry, not an active tag, try again.");
            } else {
                var result = data.data[clickcount].images.standard_resolution.url; 
                console.log(result);
                $('.photos').html("<img src='" + result + "' height='400' width='400'>");
            }
        });
    }

    $('#searchButton').click(function() {
        $('.notices').html("");
        var tag = $('#userTag').val();
        console.log("Tag: " + tag);
        var counter = 0;
        getImages(access, tag, counter);

        $('.photos').click(function() {
            counter = counter + 1;
            if (counter > 19) {
                $('.notices').html("Sorry, please pick a new key word");
            } else {
                console.log(counter);
                getImages(access, tag, counter);
            }
        });    
    });

});



