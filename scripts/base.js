//base.js
$(document).ready(function() {
	console.log("DOM is ready");
	$('.slides').slidesjs({
		width: 940,
		height: 528,
		navigation: {
			effect: "fade"
		}
	});
});