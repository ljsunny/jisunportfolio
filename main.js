"use strict";
// navbar를 투명하게

var nav = document.querySelector("#navbar");
var nav_height = nav.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  console.log(nav_height);
  if (window.scrollY > nav_height) {
    nav.classList.add("navbar--dark");
  } else {
    nav.classList.remove("navbar--dark");
  }
});
