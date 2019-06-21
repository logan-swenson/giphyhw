let topics = ["Led Zepplin", "Issac Hayes", "Frank Zappa", "Metallica", "The Beatles"]
console.log(topics)


//Led Zepplin//

function getLz () {

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=led+Zepplin&api_key=nEaYVPgIP6KUCOXz7AzUMh4OGt0UHv6d&limit=20");
xhr.done(function(response) { 
    
    console.log("success got data", response); 

    var jiffs = response.data

    for (i in jiffs)
    {
    $('#inner').append("<img src='"+jiffs[i].images.original.url+"' style = 'height:350px; width:350px;' />")
    }

});

}

//Issac Hayes//

function getIh () {

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=Issac+Hayes&api_key=nEaYVPgIP6KUCOXz7AzUMh4OGt0UHv6d&limit=20");
xhr.done(function(response) { 
    console.log("success got data", response); 
    var jiffs = response.data
    for (i in jiffs)
    {
    $('#inner').append("<img src='"+jiffs[i].images.original.url+"' style = 'height:350px; width:350px;' />")
    }

});

}

//Bob Marley//

function getBm () {

    
    
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=Bob+Marley&api_key=nEaYVPgIP6KUCOXz7AzUMh4OGt0UHv6d&limit=20");
xhr.done(function(response) { 
    
    console.log("success got data", response); 

    var jiffs = response.data

    for (i in jiffs)
    {
    $('#inner').append("<img src='"+jiffs[i].images.original.url+"' style = 'height:350px; width:350px;' />")
    }

});

}

//Metallica//

function getM () {

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=Metallica&api_key=nEaYVPgIP6KUCOXz7AzUMh4OGt0UHv6d&limit=20");
xhr.done(function(response) { 
    
    console.log("success got data", response); 

    var jiffs = response.data

    for (i in jiffs)
    {
    $('#inner').append("<img src='"+jiffs[i].images.original.url+"' style = 'height:350px; width:350px;' />")
    }

});

}

//The Beatles//

function getTb () {

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=The+Beatles&api_key=nEaYVPgIP6KUCOXz7AzUMh4OGt0UHv6d&limit=20");
xhr.done(function(response) { 
    
    console.log("success got data", response); 

    var jiffs = response.data

    for (i in jiffs)
    {
    $('#inner').append("<img src='"+jiffs[i].images.original.url+"' style = 'height:350px; width:350px;' />")
    }

});

}