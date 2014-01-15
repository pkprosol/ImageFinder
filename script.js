$(document).ready(function() {
	$("#searchButton").click(function() {
		var userInput = $("#userTag").val();
		console.log(userInput);
		function openAuthenticationWin()
		{
			var myWindow = window.open("https://api.instagram.com/oauth/authorize/?client_id=e4bd275464ca4eaeb2eefa4bd253f2b2
										&redirect_uri='http://pkprosol.github.io/ImageFinder/&response_type=code'");
		}
		openAuthenticationWin();
		$.getJSON("https://api.instagram.com/v1/tags/snow/media/recent?max_id=0&min_id=10", function(json) {
            console.log(json);
        });
	});
});



