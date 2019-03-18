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
