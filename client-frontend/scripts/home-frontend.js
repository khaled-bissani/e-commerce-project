// Execute the function on scroll
window.onscroll = function() {onScroll()};

let subNavbar = document.getElementById("sub-nav");
let fixed = subNavbar.offsetTop;

function onScroll() {
  if (window.pageYOffset >= fixed) {
    subNavbar.classList.add("fixed")
  } else {
    subNavbar.classList.remove("fixed");
  }
}