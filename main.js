"use strict";
// navbar를 투명하게
const nav = document.querySelector("#navbar");
const navHeight = nav.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  //console.log(navHeight);
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
  scrollIntoView(link);
});

// home의 contact me click 시 contact section으로 이동
const contactBtn = document.querySelector(".home__contact");
console.log(contactBtn);
contactBtn.addEventListener("click", () => {
  console.log(contactBtn.dataset.link);
  scrollIntoView("#contact");
});

function scrollIntoView(selector) {
  const clickItem = document.querySelector(selector);
  clickItem.scrollIntoView({ behavior: "smooth" });
}

// scrolling 시 home 투명하게
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  console.log(1 - window.scrollY / homeHeight);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 스크롤 시 arrow up 버튼 visible
const upBtn = document.querySelector(".up__toggle-btn");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    upBtn.classList.add("visible");
  } else {
    upBtn.classList.remove("visible");
  }
});

// arrow up 버튼 클릭 시 go to home
upBtn.addEventListener("click", () => {
  scrollIntoView("#home");
});
