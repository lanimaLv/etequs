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
//Scroll BackgroundChanges
$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 700) {
      $(".navbar")
        .css("transition", "3s")
        .css("background", "black");
      $(".navbar").css("opacity", "0.6");
    } else {
      $(".navbar").css("background", "none");
      $(".navbar").css("opacity", "1");
    }
  });

  $(".navbar-nav>li>a").on("click", function() {
    $(".navbar-collapse").collapse("hide");
  });
});
