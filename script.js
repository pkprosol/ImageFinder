$(document).ready(function() {
	var currentURL = document.URL;
	var pathArray = currentURL.split('access_token=');
	var accessToken = pathArray[1];
	console.log("Access Token" + accessToken);

	var getURL = "https://api.instagram.com/v1/tags/snow/media/recent?access_token=" + accessToken;

	$.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: getURL,
        success: function(data) {
        	console.log(data);
    	})
	});
});



