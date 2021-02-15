"use strict";
// navbar를 투명하게
const nav = document.querySelector("#navbar");
const navHeight = nav.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  console.log(navHeight);
  if (window.scrollY > navHeight) {
    nav.classList.add("navbar--dark");
  } else {
    nav.classList.remove("navbar--dark");
  }
});

//section으로 이동
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
  console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  const clickItem = document.querySelector(link);
  clickItem.scrollIntoView({ behavior: "smooth" });
});
