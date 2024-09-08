import { sentData } from "./module/communication.js";
import { icon__Library } from "./module/icons.js";
import "https://unpkg.com/lenis@1.1.13/dist/lenis.min.js";
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper();

//Header login here
const siteLogo = document.querySelector(".site-logo");
siteLogo.innerHTML = icon__Library.site__logo;
siteLogo.addEventListener("click", home);

var insertDummyIcon = document.querySelectorAll(".dummy_icon");
insertDummyIcon.forEach((currElement) => {
  currElement.innerHTML = icon__Library.a_dummy_icon;
});

var quoteIcon = document.querySelectorAll('.qoute');
quoteIcon.forEach((currentElement) => {
   currentElement.innerHTML = icon__Library.qoute_icon;
})

function home() {
  let hostname = location.hostname;
  location.href = hostname;
}

//Lenis Initiate Here for Webpage Smooth Scroll
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  //console.log(e)
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
