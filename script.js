$(document).ready(function() {
	var currentURL = document.URL;
	var pathArray = currentURL.split('?code=');
	var authCode = pathArray[1];
	console.log(authCode);
	console.log("Hello");

	var postLink = "https://api.instagram.com/oauth/access_token" + authCode;
	console.log(postLink);

	var posting = $.post(postLink, 
		{ 
			client_id: "e4bd275464ca4eaeb2eefa4bd253f2b2",
			client_secret: "5f80c997ad7f4230968d3c44c111f7e8",
			grant_type: "authorization_code",
			redirect_uri: "http://pkprosol.github.io/ImageFinder/",
			code: authCode
		});

	console.log(posting);
		
	});

});



