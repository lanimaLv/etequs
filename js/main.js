// Nav

// Goal Hover
document.getElementById("fcb").addEventListener("mouseover", mouseOver);
document.getElementById("fcb-hover").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("card-item-id").visibility = "hidden";
}

function mouseOut() {
  document.getElementById("fcb-hover").style.color = "black";
}
// Functions
function getSections($links) {
  return $(
    $links
      .map((i, el) => $(el).attr("href"))
      .toArray()
      .filter(href => href.charAt(0) === "#")
      .join(",")
  );
}

function activateLink($sections, $links) {
  const yPosition = $window.scrollTop();

  for (let i = $sections.length - 1; i >= 0; i -= 1) {
    const $section = $sections.eq(i);

    if (yPosition >= $section.offset().top) {
      return $links
        .removeClass("active")
        .filter(`[href="#${$section.attr("id")}"]`)
        .addClass("active");
    }
  }
}

function onScrollHandler() {
  activateLink($sections, $links);
}

function onClickHandler(e) {
  const href = $.attr(e.target, "href");

  e.preventDefault();
  $root.animate(
    { scrollTop: $(href).offset().top },
    500,
    () => (window.location.hash = href)
  );

  return false;
}

// Variables
const $window = $(window);
const $links = $(".menu > li > a");
const $sections = getSections($links);
const $root = $("html, body");
const $hashLinks = $('a[href^="#"]:not([href="#"])');

// Events
$window.on("scroll", onScrollHandler);
$hashLinks.on("click", onClickHandler);

// Body
window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = Number.MAX_SAFE_INT; // For codepen
activateLink($sections, $links);

// Goal

// Process Horse Head
function show() {
  document.getElementById("horse-head-id").style.visibility = "visible";
  document.getElementById("horse-head-id").style.transition = "699ms";
  document.getElementById("arrow-id").style.visibility = "visible";
  document.getElementById("arrow-id").style.transitionDelay = "500ms";
}
function hide() {
  document.getElementById("horse-head-id").style.visibility = "hidden";
  document.getElementById("horse-head-id").style.transition = "600ms";
  document.getElementById("arrow-id").style.visibility = "hidden";
  document.getElementById("arrow-id").style.transition = "900ms";
}

// CTA slider
function myFunction() {
  var x = document.getElementById("cta2-id");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.style.position = "absolute";
    var y = document.getElementById("footer-id");
    y.style.marginTop = "20em";
  } else {
    x.style.display = "none";
    var y = document.getElementById("footer-id");
    y.style.marginTop = "0";
  }
}
