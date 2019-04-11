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
	if (scroll > 700) {
		$(".navbar").css("background", "rgba(0,0,0,0.6)").css("padding-top", ".5rem");
	} else {
		$(".navbar").css("background", "none").css("padding-top", "35px");
	}
}

function getScreenMode() {
	var width = $(window).width() + 17;
	console.log(width);
	return width < 768 ? "mobile" : (width < 992 ? "tablet" : "desktop");
}

function getSwiperSettings(mode) {
	switch (mode) {
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
		swiper.init(getSwiperSettings());
	}

  //Click Hide
  $(".navbar-nav>li>a").on("click", function() {
    $(".navbar-collapse").collapse("hide");
  });
/*
  $("#card-btn").hide();
  $("#card1-hover").hide();
  $("#card-btn").mouseenter(function() {
    $("#card1").hide();
    $("#card1-hover").show("2");
    $("#card-btn").show();
  });
  $("#card1-hover").mouseleave(function() {
    $("#card1-hover").hide();
    $("#card1").show();
    $("#card-btn").hide();
  });

  $("#card1").mouseenter(function() {
    $("#card1").hide();
    $("#card1-hover").show("slow");
    $("#card-btn").show();
  });
  $("#card1-hover").mouseleave(function() {
    $("#card1-hover").hide();
    $("#card1").show();
    $("#card-btn").hide();
  });

  //Card2
  $("#card2-btn").hide();
  $("#card2-hover").hide();
  $("#card2-btn").mouseenter(function() {
    $("#card2").hide();
    $("#card2-hover").show("slow");
    $("#card2-btn").show();
  });
  $("#card2-hover").mouseleave(function() {
    $("#card2-hover").hide();
    $("#card2").show();
    $("#card2-btn").hide();
  });
  $("#card2-hover").hide();
  $("#card2").mouseenter(function() {
    $("#card2").hide();
    $("#card2-hover").show("slow");
    $("#card2-btn").show();
  });
  $("#card2-hover").mouseleave(function() {
    $("#card2-hover").hide();
    $("#card2").show();
    $("#card2-btn").hide();
  });

  //Card3
  $("#card3-btn").hide();
  $("#card3-hover").hide();
  $("#card3-btn").mouseenter(function() {
    $("#card3").hide();
    $("#card3-hover").show("slow");
    $("#card3-btn").show();
  });
  $("#card3-hover").mouseleave(function() {
    $("#card3-hover").hide();
    $("#card3").show();
    $("#card3-btn").hide();
  });
  $("#card3-hover").hide();
  $("#card3").mouseenter(function() {
    $("#card3").hide();
    $("#card3-hover").show("slow");
    $("#card3-btn").show();
  });
  $("#card2-hover").mouseleave(function() {
    $("#card2-hover").hide();
    $("#card2").show();
    $("#card2-btn").hide();
  });

  //Card4
  $("#card4-btn").hide();
  $("#card4-hover").hide();
  $("#card4-btn").mouseenter(function() {
    $("#card4").hide();
    $("#card4-hover").show("slow");
    $("#card4-btn").show();
  });
  $("#card4-hover").mouseleave(function() {
    $("#card4-hover").hide();
    $("#card4").show();
    $("#card4-btn").hide();
  });
  $("#card4-hover").hide();
  $("#card4").mouseenter(function() {
    $("#card4").hide();
    $("#card4-hover").show("slow");
    $("#card4-btn").show();
  });
  $("#card2-hover").mouseleave(function() {
    $("#card2-hover").hide(2000);
    $("#card2").show();
    $("#card2-btn").hide();
  });
*/
  //Process
  //1
  $("#horse-head").hide();
  $(".first-card").mouseenter(function() {
    $("#horse-head").show();
  });
  $(".first-card").mouseleave(function() {
    $("#horse-head").hide();
  });

  //2
  $("#horse-head2").hide();
  $(".second-card").mouseenter(function() {
    $("#horse-head2").show();
  });
  $(".second-card").mouseleave(function() {
    $("#horse-head2").hide();
  });

  //3
  $("#horse-head3").hide();
  $(".third-card").mouseenter(function() {
    $("#horse-head3").show();
  });
  $(".third-card").mouseleave(function() {
    $("#horse-head3").hide();
  });

  //4
  $("#horse-head4").hide();
  $(".fourth-card").mouseenter(function() {
    $("#horse-head4").show();
  });
  $(".fourth-card").mouseleave(function() {
    $("#horse-head4").hide();
  });

  //5
  $("#horse-head5").hide();
  $(".fifth-card").mouseenter(function() {
    $("#horse-head").show();
    $("#horse-head2").show();
    $("#horse-head3").show();
    $("#horse-head4").show();
    $("#horse-head5").show();
  });
  $(".fifth-card").mouseleave(function() {
    $("#horse-head").hide();
    $("#horse-head2").hide();
    $("#horse-head3").hide();
    $("#horse-head4").hide();
    $("#horse-head5").hide();
  });


  $(".contact-btn, .btn-card").click(function() {
    $("#contact2").slideDown();
  });
  $("#cta2-btn-slide").click(function() {
    $("#contact2").slideToggle();
  });
});
