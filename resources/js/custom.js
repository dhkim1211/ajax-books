$(document).ready(function() {
	console.log("DOM is ready");
	
	$('.thumb').click(function() {
		var clickedbook = $(this).attr("title");
		console.log("you clicked " + clickedbook);
		var ajaxdata = {
			title: clickedbook
		}
		$.get('/api', ajaxdata, function(data) {
			console.log(data);
			$('#title').text(data.name);
			$('#author').text(data.author);
			$('#description').text(data.description);
			$('#cover').attr({"src": "/images/" + data.fullsize})
		})
	})
})