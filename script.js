$(document).ready(function() {
	var currentURL = document.URL;
	var pathArray = currentURL.split('access_token=');
	var accessToken = pathArray[1];
	console.log("Access Token: " + accessToken);

	var getURL = "https://api.instagram.com/v1/tags/snow/media/recent?access_token=" + accessToken;
    var access = {access_token:accessToken};

    function getImages(accessInput, tagInput) {
        var apiURL = 'https://api.instagram.com/v1/tags/' + tagInput + '/media/recent?callback=?';
        $.getJSON(apiURL, accessInput, function(data) {
            console.log(data.data[0].images.standard_resolution.url);
            $(".photos").html("<img src='" + data.data[0].images.standard_resolution.url + "' height='400' width='400'");
        });
    }

    $('#searchButton').click(function() {
        var tag = $('#userTag').val();
        console.log("Tag: " + tag);

        getImages(access, tag);
    });

    $('.photos').click(function() {
        getImages(access, tag);
    });

});



