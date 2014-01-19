$(document).ready(function() {
    var currentURL = document.URL;
    var pathArray = currentURL.split('access_token=');
    var accessToken = pathArray[1];
    var getURL = "https://api.instagram.com/v1/tags/snow/media/recent?access_token=" + accessToken;
    var access = {access_token:accessToken};
    var counter = 0;
    var tag = []; 
    var urlArray = [];

    console.log("Access Token: " + accessToken);
    if(accessToken !== undefined) {
        $('#login').hide();
    }

// wrap getjson in function; run recursion
// indexof
// pagination

    function getImages(accessInput, tagInput) {

        var apiURL = 'https://api.instagram.com/v1/tags/' + tagInput + '/media/recent?callback=?'; // can say JSON request done; may populate
       
        if (urlArray.length === 20) {
            $('.notices').html("Sorry, please pick a new key word");
        } else {
            $.getJSON(apiURL, accessInput, function(data) { // I can name this response/ response.data; return is encapsulated; generic function

                if (jQuery.isEmptyObject(data.data)) {
                    $('.notices').html('Sorry, not an active tag, try again.');

                } else {
                    var result = data.data[clickcount].images.standard_resolution.url;  // callback function; PHP success function would be involved; jQuery has success callback built in
                    console.log("Result URL: " + result); 
                           
                    showNewPhoto(result);
                }  
            });
        }
    }   

    function showNewPhoto(resultURL) {
        
        console.log("URL Array length: " + urlArray.length);
        console.log("URL Array: " + urlArray);

        var duplicateScore = 0;
        
        for (i=0; i<(urlArray.length); i++) {
            if (urlArray[i] === resultURL) {
                duplicateScore = ++duplicateScore;
            }
        }

        console.log("Duplicate Score: " + duplicateScore);

        urlArray.push(resultURL);
        
        if (duplicateScore > 0) {
            getImages(access, tag);
        } else {
            $('.photos').html("<img id='currentImage' src='" + resultURL + "' height='400' width='400'>");
        }
    }

    $('#searchButton').click(function() {
        console.log("searchButton was clicked");
        $('.notices').html("");
        tag = $('#userTag').val();

        urlArray = [];

        if (accessToken === undefined) {
            $('.notices').html("You must log in first.");
        } else if (tag === "") {
            $('.notices').html("You must search a tag to get photos.");
        } else {
            getImages(access, tag);     
        }
    });

    $('.photos').click(function() {
        getImages(access, tag);
    });     

});



