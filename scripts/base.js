//base.js
$(document).ready(function() {
	console.log("DOM is ready");
	$('.slides').slidesjs({
		width: 940,
		height: 528,
		navigation: {
			effect: "slide"
		}
	});

	//Dropdown plugin data
	var ddData = [
	    {
	        text: "Facebook",
	        value: 1,
	        selected: false,
	        description: "Description with Facebook",
	        imageSrc: "http://dl.dropbox.com/u/40036711/Images/facebook-icon-32.png"
	    },
	    {
	        text: "Twitter",
	        value: 2,
	        selected: false,
	        description: "Description with Twitter",
	        imageSrc: "http://dl.dropbox.com/u/40036711/Images/twitter-icon-32.png"
	    },
	    {
	        text: "LinkedIn",
	        value: 3,
	        selected: false,
	        description: "Description with LinkedIn",
	        imageSrc: "http://dl.dropbox.com/u/40036711/Images/linkedin-icon-32.png"
	    },
	    {
	        text: "Foursquare",
	        value: 4,
	        selected: false,
	        description: "Description with Foursquare",
	        imageSrc: "http://dl.dropbox.com/u/40036711/Images/foursquare-icon-32.png"
	    }
	];

	$('.dropDown').ddslick({
    data: ddData,
    width: 399,
    imagePosition: "left",
    selectText: "Login with social network",
    onSelected: function (data) {
        console.log(data);
    }
});
});