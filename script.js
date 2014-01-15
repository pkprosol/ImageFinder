$(document).ready(function() {
	$("#searchButton").onclick(function() {
		var userInput = $("#userTag").val();
		console.log(userInput);
	});
});


/* $(document).ready(function() {
	$.ajax({
		type: "GET",
		dataType: "jsonp",
		cache: false,
		url: "https://api.instagram.com/v1/tags/winter/media/recent",
		success: function(response) {
  			for (var i=0; i<25; i++)  
  				{
    				$("#photos").html(response.data[i].comments.from.username);
  				}		
  			}
		});
	});
});
