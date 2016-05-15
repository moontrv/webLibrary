$(document).ready(function(){
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
})
