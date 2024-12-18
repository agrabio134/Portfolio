/* Olio Theme Scripts */

(function($){ "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

             
/*=========================================================================
	Sticky Header
=========================================================================*/ 
	$(function() {
		var header = $("#header"),
			yOffset = 0,
			triggerPoint = 80;
		$(window).on( 'scroll', function() {
			yOffset = $(window).scrollTop();

			if (yOffset >= triggerPoint) {
				header.addClass("navbar-fixed-top");
			} else {
				header.removeClass("navbar-fixed-top");
			}

		});
	});

/*=========================================================================
        textrotator
=========================================================================*/
    $(".rotate").textrotator({
      animation: "flipUp", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
      separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
      speed: 2000 // How many milliseconds until the next word show.
    }); 

/*=========================================================================
        Mobile Menu
=========================================================================*/  
    $('.menu-wrap ul.nav').slicknav({
        prependTo: '.header-section .navbar',
        label: '',
        allowParentLinks: true
    });
             
/*=========================================================================
        Active venobox
=========================================================================*/
	$('.img-popup').venobox({
		numeratio: true,
		infinigall: true
	});              
                          
             
/*=========================================================================
	Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});
	 
/*=========================================================================
	Scroll To Top
=========================================================================*/ 
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

/*=========================================================================
	WOW Active
=========================================================================*/ 
   new WOW().init(); 

/*=========================================================================
    Google Map Settings
=========================================================================*/
    google.maps.event.addDomListener(window, 'load', init);

    function init() {

        var mapOptions = {
            zoom: 11,
            center: new google.maps.LatLng(40.6700, -73.9400), 
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: false,
            styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
        };

        var mapElement = document.getElementById('google-map');

        var map = new google.maps.Map(mapElement, mapOptions);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Location!'
        });
    }     


})(jQuery);
const videoUrls = {
    videoLink1: 'https://play.vidyard.com/ePeGZTVEtpQECwA3eR9MYc?autoplay=1',
    videoLink2: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FPawsProOlongapo%2Fvideos%2F761163319554130%2F&show_text=false&width=560',
    videoLink3: './img/native.mp4',
    videoLink4: './img/seleste.mp4',
    videoLink5: './img/washup.mp4',
    videoLink6: './img/react-cal.mp4',
    videoLink7: 'https://play.vidyard.com/aG8pyFMDn346KiMpjxLLe4?autoplay=1'

    // Add more video URLs as needed
};

let currentVideoIndex = 0;
let videoKeys = Object.keys(videoUrls);

function setVideoUrl(videoId) {
    currentVideoIndex = videoKeys.indexOf(videoId);
    const videoUrl = videoUrls[videoId];

    if (videoUrl) {
        document.getElementById('videoFrame').src = videoUrl;

        var videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
        videoModal.show();
    } else {
        console.error("No video URL found for videoId:", videoId);
    }
}

function changeVideo(direction) {
    currentVideoIndex += direction;

    if (currentVideoIndex < 0) currentVideoIndex = videoKeys.length - 1;
    if (currentVideoIndex >= videoKeys.length) currentVideoIndex = 0;

    const nextVideoId = videoKeys[currentVideoIndex];
    setVideoUrl(nextVideoId);
}

document.getElementById('videoModal').addEventListener('hidden.bs.modal', function () {
    document.getElementById('videoFrame').src = '';
});

document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
