
function scrollWin1() {

  window.scrollTo(0, 0);
}


function scrollToTargetAdjusted() {
  var element = document.getElementById('projects');
  var headerOffset = 180;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}


function scrollToTargetAdjusted2() {
  var element = document.getElementById('dojo');
  var headerOffset = 20;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}