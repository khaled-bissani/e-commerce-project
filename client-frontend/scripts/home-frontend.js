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
// Display the voucher popup on click
const voucherPopup = document.getElementById('voucher-popup');
const voucherBtn = document.getElementById('voucher-btn');
const closeVoucher = document.getElementById('close-voucher');

voucherBtn.onclick = function() {
    voucherPopup.style.display = "block";
}
closeVoucher.onclick = function() {
    voucherPopup.style.display = "none";
}
// Display the voucher popup on click
const cartPopup = document.getElementById('cart-popup');
const cartBtn = document.getElementById('cart-btn');
const closeCart = document.getElementById('close-cart');

cartBtn.onclick = function() {
    cartPopup.style.display = "block";
}
closeCart.onclick = function() {
    cartPopup.style.display = "none";
}