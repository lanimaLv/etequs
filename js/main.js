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
    $(".navbar")
      .addClass("navbar-bg")
      .removeClass("navbar-padding");
  } else {
    $(".navbar")
      .addClass("navbar-padding")
      .removeClass("navbar-bg");
  }
}

function getScreenMode() {
  var width = $(window).width() + 17;
  return width < 576
    ? "xs"
    : width < 768
    ? "mobile"
    : width < 992
    ? "tablet"
    : "desktop";
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
        spaceBetween: 50
      };
    case "desktop":
      return {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 100
      };
  }
}

window.currentScreenMode = null;
window.swiper = null;

function initSwiper() {
  swiper = new Swiper(
    ".swiper-container",
    getSwiperSettings(currentScreenMode)
  );
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
  };

  $(".navbar-nav>li>a").on("click", function() {
    $(".navbar-collapse").collapse("hide");
  });

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

  $(".btn-contact-us, .btn-card, .btn-open-form").click(function() {
    $("#contact2").slideDown();
  });
});
