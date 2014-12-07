/* custom js for what's up korea */

$(document).on('pagecreate', function(evt) {
	$('#survey').on("swipeleft", function(e) {
		$.mobile.changePage('#home');
	}); //end swipeleft
}); // end pagecreate