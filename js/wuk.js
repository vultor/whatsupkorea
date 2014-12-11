/* custom js for what's up korea */

$(document).on('pagecreate', function(evt) {
	$('#survey').on("swipeleft", function(e) {
		$.mobile.changePage('#home');
	}); //end survey swipeleft
	$('rraddresses').on("swipeleft", function(e) {
		$.mobile.changePage('#rrinternet');
	});
	$('rrinternet').on("swipeleft", function(e) {
		$.mobile.changePage('#rrkoreanfood');
	});
	$('rrkoreanfood').on("swipeleft", function(e) {
		$.mobile.changePage('#rr');
	});
	$('rraddresses').on("swiperight", function(e) {
		$.mobile.changePage('#rr');
	});
	$('rrinternet').on("swiperight", function(e) {
		$.mobile.changePage('#rraddresses');
	});
	$('rrkoreanfood').on("swiperight", function(e) {
		$.mobile.changePage('#rrinternet');
	});
}); // end pagecreate