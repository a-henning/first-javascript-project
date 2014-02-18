//base.js
//Dropdown plugin data in JSON format
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

//Function executed when document is ready - loaded
$(document).ready(function() {
	console.log("DOM is ready");
	//Slide animation
	$('.slides').slidesjs({
		width: 940,
		height: 528,
		navigation: {
			effect: "slide"
		}
	});

	//DropDown animation
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

//Function executed when windows is resized
$(window).resize(function() {
	var timeout = window.setTimeout(resizeDivs, 1000);
});

//Function for resizing dropdown div's
function resizeDivs() {
	//large screen
	var w = 399;
	//smartphones
	if ($(this).innerWidth() < 480) {
		w = 90;	
	//iPads
	} else if ($(this).innerWidth() < 900) {
		w = 150;
	//laptop
	} else if ($(this).innerWidth() < 1400) {
		w = 300;
	}
	var parentWidth = $(".loginForm").width();
	$(".dd-select").css({"width" : w, "margin-left" : (parentWidth - w) / 2});
	$(".dd-options").css({"width" : w, "margin-left" : (parentWidth - w) / 2});
	$("h1").html("InnerWidth: " + $(this).innerWidth());
}