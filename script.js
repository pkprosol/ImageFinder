$(document).ready(function() {
	var currentURL = document.URL;
	var pathArray = currentURL.split('access_token=');
	var accessToken = pathArray[1];
	console.log("Access Token: " + accessToken);

	var getURL = "https://api.instagram.com/v1/tags/snow/media/recent?access_token=" + accessToken;

    var access = {access_token:accessToken};

    var tag = "snow"; // Get user input

    function getImages(accessInput) {
        var apiURL = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?callback=?';
        $.getJSON(apiURL, accessInput, function(data) {
            console.log(data[0].images.standard_resolution.url);
        });
    }

    function displayImages(dataPulled) {
        $(".photos").append(data[0].images.standard_resolution.url);
    }

    getImages(access);

});



