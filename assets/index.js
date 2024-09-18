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


//FAQ Logics
var faqArrow = document.querySelectorAll('.faq span');
faqArrow.forEach((currentElement) => {
   currentElement.innerHTML = icon__Library.faq_Arrow;
})

function Expand() {}
const faq = document.querySelectorAll(".faq");
faq.forEach((element, index) => {
  let faqTrack = element.querySelector(".faq-ask");
  let faqAnswer = element.querySelector(".faq-answer");

  faqTrack.addEventListener("click", () => {
    let openFaq = faqAnswer.scrollHeight;
    element.classList.toggle("active");

    if (element.classList.contains("active")) {
      faqAnswer.style.height = `${openFaq}px`;
    } else {
      faqAnswer.style.height = 0;
    }
    collapse(index);
  });
});

const collapse = (index) => {
  faq.forEach((collapseElement, collapseIndex) => {
    let collapseFaqAnswer = collapseElement.querySelector(".faq-answer");
    if (collapseIndex != index) {
      collapseElement.classList.remove("active");
      collapseFaqAnswer.style.height = 0;
    }
  });
};

//For Client Testimonial
const clientFeedback = document.querySelector('.client-feedbacks .swiper');

let nextButton = document.querySelector('.navigation-next span');
let previousButton = document.querySelector('.navigation-previous span');
nextButton.innerHTML = icon__Library.next_arrow;
previousButton.innerHTML = icon__Library.next_arrow;

if(clientFeedback){
  new Swiper(clientFeedback, {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 80,
    loop: true,
    autoplay: true,
    speed: 1000,
    navigation: {
      nextEl: ".navigation-next",
      prevEl: ".navigation-previous",
    },
  });
}