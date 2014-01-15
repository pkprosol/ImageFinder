$(document).ready(function() {
	$("#searchButton").click(function() {
		var userInput = $("#userTag").val();
		console.log(userInput);
		window.open("https://api.instagram.com/oauth/authorize/?client_id=e4bd275464ca4eaeb2eefa4bd253f2b2&redirect_uri=http://pkprosol.github.io/ImageFinder/&response_type=code");
	});
});



