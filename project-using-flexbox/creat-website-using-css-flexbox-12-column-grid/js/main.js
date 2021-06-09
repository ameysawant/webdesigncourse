$(".dvSlider .owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  responsiveClass: true,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});

const faBars = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".closeBtn");
const nav = document.querySelector(".nav");

faBars.addEventListener("click", () => (nav.style.left = "0"));
closeBtn.addEventListener("click", () => (nav.style.left = "-100%"));
