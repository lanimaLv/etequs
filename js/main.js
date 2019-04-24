function deferVideo() {
  //defer html5 video loading
  $("video source").each(function() {
    var sourceFile = $(this).attr("data-src");
    $(this).attr("src", sourceFile);
    var video = this.parentElement;
    video.load();
    // uncomment if video is not autoplay
    //video.play();
  });
}
window.onload = deferVideo;

function checkScroll() {
	var scroll = $(window).scrollTop();
	if (scroll > 50) {
		$(".navbar").addClass("navbar-bg").removeClass("navbar-padding");
	} else {
		$(".navbar").addClass("navbar-padding").removeClass("navbar-bg");
	}
}

function getScreenMode() {
	var width = $(window).width() + 17;
	return width < 576 ? "xs" : (width < 768 ? "mobile" : (width < 992 ? "tablet" : "desktop"));
}

function getSwiperSettings(mode) {
	switch (mode) {
		case "xs":
			return {
				slidesPerView: 1.3,
				spaceBetween: 15,
				centeredSlides: true,
				loop: true,
				pagination: {
					el: ".swiper-pagination",
					clickable: true
				}
			};
		case "mobile":
			return {
				slidesPerView: 1.4,
				spaceBetween: 15,
				centeredSlides: true,
				loop: true,
				pagination: {
					el: ".swiper-pagination",
					clickable: true
				}
			};
		case "tablet":
			return {
				slidesPerView: 2,
				slidesPerColumn: 2,
				spaceBetween: 50,
			};
		case "desktop":
			return {
				slidesPerView: 2,
				slidesPerColumn: 2,
				spaceBetween: 100,
			};
	}
}

window.currentScreenMode = null;
window.swiper = null;

function initSwiper() {
	swiper = new Swiper(".swiper-container", getSwiperSettings(currentScreenMode));
}

$(document).ready(function() {
	checkScroll();
  $(window).scroll(checkScroll);	
	
	currentScreenMode = getScreenMode();
	initSwiper();	
	window.onresize = function() {
		var newScreenMode = getScreenMode();
		if (currentScreenMode != newScreenMode) {
			currentScreenMode = newScreenMode;
			swiper.destroy();
			initSwiper();
		}
	}

  $(".navbar-nav>li>a").on("click", function() {
    $(".navbar-collapse").collapse("hide");
  });

	$(".process-step-trigger").hover(function() {
		var step = $(this).data("step");
		$("[data-step=" + step + "]").css("opacity", "1").css("filter", "alpha(opacity=100)");
		if (step == 5) {
			$(".process-step-indicator:not(.process-arrow)").css("opacity", "1").css("filter", "alpha(opacity=100)");
		}
	}, function() {
		var step = $(this).data("step");
		$("[data-step=" + step + "]").css("opacity", "0").css("filter", "alpha(opacity=0)");
		if (step == 5) {
			$(".process-step-indicator:not(.process-arrow)").css("opacity", "0").css("filter", "alpha(opacity=0)");
		}
	});

  $(".btn-contact-us, .btn-card, .btn-open-form").click(function() {
    $("#contact2").slideDown();
  });
});
