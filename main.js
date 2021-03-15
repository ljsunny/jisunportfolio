"use strict";

/*/////////////////////////////////////////////////////////////
Navbar transparent when home screen
///////////////////////////////////////////////////////////////*/
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

/*/////////////////////////////////////////////////////////////
Go to Section
///////////////////////////////////////////////////////////////*/
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

/*/////////////////////////////////////////////////////////////
NavbarMenu Open when click toggle button
///////////////////////////////////////////////////////////////*/
const navbarToggle = document.querySelector(".navbar__toggle-btn");
console.log(navbarToggle);
navbarToggle.addEventListener("click", () => {
  console.log("click");
  navbarMenu.classList.toggle("open");
});

/*/////////////////////////////////////////////////////////////
Go to Contact Section when click 'Contact Me' 
///////////////////////////////////////////////////////////////*/
const contactBtn = document.querySelector(".home__contact");
console.log(contactBtn);
contactBtn.addEventListener("click", () => {
  console.log(contactBtn.dataset.link);

  scrollIntoView("#contact");
});

/*/////////////////////////////////////////////////////////////
Home transparent when Scrolling
///////////////////////////////////////////////////////////////*/
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  //console.log(1 - window.scrollY / homeHeight);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

/*/////////////////////////////////////////////////////////////
Blur to Clear when page loaded
///////////////////////////////////////////////////////////////*/
const fullHome = document.querySelector("#home");
window.addEventListener("load", () => {
  console.log("page is fully loaded");
  fullHome.classList.add("clear");
});

/*/////////////////////////////////////////////////////////////
Arrow-Up Button Visible when Scrolling
///////////////////////////////////////////////////////////////*/
const upBtn = document.querySelector(".up__toggle-btn");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    upBtn.classList.add("visible");
  } else {
    upBtn.classList.remove("visible");
  }
});
/*/////////////////////////////////////////////////////////////
Go to Home when Arrow-Up button Click
///////////////////////////////////////////////////////////////*/
upBtn.addEventListener("click", () => {
  scrollIntoView("#home");
});

/*/////////////////////////////////////////////////////////////
Filtering works when 'works category button' click
///////////////////////////////////////////////////////////////*/
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
    // notice) 코드가 한번에 읽어서 실행되는 것을 방지하기 위해 setTimeout 안에 후속 작업 코딩
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
/*/////////////////////////////////////////////////////////////
Nav underbar move when scrolling (clientRect or IntersectionObserver need modify)
///////////////////////////////////////////////////////////////*/
window.addEventListener("scroll", () => {
  const scrollh = window.scrollY;
  const active = document.querySelector(".navbar__menu__item.active");
  const navElement = navbarMenu.getElementsByTagName("li");
  console.log(scrollh);
  if (scrollh < 500) {
    active.classList.remove("active");
    navElement[0].classList.add("active");
  } else if (scrollh < 1400) {
    active.classList.remove("active");
    navElement[1].classList.add("active");
  } else if (scrollh < 2200) {
    active.classList.remove("active");
    navElement[2].classList.add("active");
  } else if (scrollh < 3700) {
    active.classList.remove("active");
    navElement[3].classList.add("active");
  } else if (scrollh < 4040) {
    active.classList.remove("active");
    navElement[4].classList.add("active");
  } else {
    active.classList.remove("active");
    navElement[5].classList.add("active");
  }
});

function scrollIntoView(selector) {
  const clickItem = document.querySelector(selector);
  clickItem.scrollIntoView({ behavior: "smooth" });
}
