"use strict";

// navbar를 투명하게
const nav = document.querySelector("#navbar");
const navHeight = nav.getBoundingClientRect().height;
const navText = nav.querySelector(".nav__text");

document.addEventListener("scroll", () => {
  //console.log(navHeight);
  if (window.scrollY > navHeight) {
    nav.classList.add("navbar--dark");
    navText.classList.add("dark");
  } else {
    nav.classList.remove("navbar--dark");
    navText.classList.remove("dark");
  }
});

//section으로 이동
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
  console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  const active = document.querySelector(".navbar__menu__item.active");
  console.log(active);
  active.classList.remove("active");
  target.classList.add("active");
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
});

//toggle 클릭시 버튼 활성화
const navbarToggle = document.querySelector(".navbar__toggle-btn");
console.log(navbarToggle);
navbarToggle.addEventListener("click", () => {
  console.log("click");
  navbarMenu.classList.toggle("open");
});

// home의 contact me click 시 contact section으로 이동
const contactBtn = document.querySelector(".home__contact");
console.log(contactBtn);
contactBtn.addEventListener("click", () => {
  console.log(contactBtn.dataset.link);

  scrollIntoView("#contact");
});

// scrolling 시 home 투명하게
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  //console.log(1 - window.scrollY / homeHeight);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

const fullHome = document.querySelector("#home");
//로드될때 블러에서 선명하게
window.addEventListener("load", () => {
  console.log("page is fully loaded");
  fullHome.classList.add("clear");
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

//works 카테고리 클릭시 filtering
const workCategories = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workCategories.addEventListener("click", (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;

  projectContainer.classList.add("fade-out");

  const target =
    event.target.nodeName === "BUTTON" ? event.target : event.target.parentNode;
  const active = document.querySelector(".category__btn.active");
  active.classList.remove("active");
  setTimeout(() => {
    //주의) 코드가 한번에 읽어서 실행되는 것을 방지하기 위해 setTimeout 안에 후속 작업 코딩
    target.classList.add("active");
    projects.forEach((project) => {
      //console.log(project.dataset.category); arry형 foreach로
      if (filter === "all" || filter === project.dataset.category) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });

    projectContainer.classList.remove("fade-out");
  }, 300);
});

function scrollIntoView(selector) {
  const clickItem = document.querySelector(selector);
  clickItem.scrollIntoView({ behavior: "smooth" });
}
