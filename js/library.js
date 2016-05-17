$(document).ready(function(){
	var weatherIcon={"clear-day": "wi wi-day-sunny",
"clear-night": "wi wi-night-clear",
"rain": "wi wi-rain",
"snow": "wi wi-snow",
"sleet": "wi wi-sleet",
"wind": "wi wi-strong-wind",
"fog": "wi wi-fog",
"cloudy": "wi wi-cloudy",
"partly-cloudy-day": "wi wi-day-cloudy",
"partly-cloudy-night": "wi wi-night-cloudy",
"hail": "wi wi-hail",
"thunderstorm": "wi wi-thunderstorm",
"tornado": "wi wi-tornado"}
	setInterval(updateWeather(), 1800000);
	
	$('.image-slide').slick({
		autoplay:true,
		autoplaySpeed:2000,
		arrows:true
	});
	$('#searchBar').submit(function(event){
		event.preventDefault();
		var searchArgu = $('input[name="search"]').val();
		// searchArgu.replace(" ","+");
		var url = "https://metcat.amkit.fi/vwebv/search?searchArg="+searchArgu+"&searchCode=GKEY%5E*&limitTo=none&recCount=10&searchType=1&page.search.search.button=Hae"
		console.log("submitted");
		window.location.href = url;
	});

	function updateWeather(){
		$.getJSON('http://cors.io/?u=https://api.forecast.io/forecast/efee78b06d5f1909579f00d6105b2956/60.2207375,24.8050341',function(data){
		var weather = data.currently;
		console.log(weather);
		$('#weatherIcon').attr("class",weatherIcon[weather.icon]);
		$('#temperature').text(weather.apparentTemperature);
		$('#weatherSummary').text(weather.summary)

	});
	}
})
