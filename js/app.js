$(document).ready(function() {
	$('.nav-link').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 800);

	    return false;
	});
});




