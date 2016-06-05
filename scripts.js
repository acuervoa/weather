$(document).ready(function(){
	
	var getIPInfo = function(){
		var ipInfoAPI = "http://ipinfo.io/json";

		$.getJSON(ipInfoAPI + "?callback=?", function(json){
			apiWeatherURL(json.city);	
		});
	};


	var apiWeatherURL = function(city){
		var APIKEY = "bb98943838568d5a03db08a7fc567d68";
			var units = "metric";
			var language = "es";

			var apiWeatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + 	city 
								+ "&units=" + units 
								+ "&lang=" +  language 
								+ "&APPID=" + APIKEY; 
			

			$.ajax({
				url: apiWeatherURL,
				success: function(json){
					console.log(json);
					$('#city').html(json.name + ", " + json.sys.country);
					$('#weather').html(json.weather[0].description);
					$('#temperature').html(json.main.temp);
					$('#humidity').html(json.main.humidity);
					$('#pressure').html(json.main.pressure);
					$('#wind').html(json.wind.speed);
					$(".image").attr("src","http://openweathermap.org/img/w/" + json.weather[0].icon +".png");
					//changeBackgroundImage(json.weather[0].description);
				}	
			});
	
	};

	/*var changeBackgroundImage = function(weather) {
		  var flickerAPI = "http://api.flickr.com/services/flickr.photos.search";
  			$.getJSON( flickerAPI, {
  				api_key: "9e9aefe2303bbcce7953c3fa1f4b2c68",
    			tags: weather,
    			tagmode: "any",
    			privacy_filter: 1,
    			content_type: 1,
    			media: "photos",
    			geo_context: 2,
    			extras: "url_l, url_o",
    			per_page: 1,
    			page: 1,
    			method: "jsonp"
  			})
    		.done(function( data ) {
    			console.log(data);
      			$.each( data.items, function( i, item ) {
      				console.log(item.media);
        			$("body").css( "backgroundImage", "url(" + item.media.m + ")");
       		   		return false;
        		});
      		});
    	
	};*/

	getIPInfo();

	//console.log(getIPInfo());
	//changeBackgroundImage('calm');
});







