
// slick slider
$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: false,
    variableWidth: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 10,
  });
});

// menu burger button

const burgetBtn = document.querySelector(".menu__btn");
const hiddenMenu = document.querySelector(".hidden-menu");

burgetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  burgetBtn.classList.toggle("menu__btn_active");
  hiddenMenu.classList.toggle("hidden-menu__active");
});

// catalog.json
fetch("products.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    localStorage.setItem("products", JSON.stringify(data));

    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", "[]");
    }
  });

const catalogList = document.querySelector(".catalog__list");
let products = JSON.parse(localStorage.getItem("products"));
let htmlCatalog = "";


products.forEach(({id, name, image, size}) => {
  htmlCatalog += `
  <div class="catalog__card" id="${id}">
  <img src="${image}" alt="" class="catalog__img" />
  <h4 class="catalog__name">${name}</h4>
  <div class="catalog__size">
    <a href="#!">${size[0]}</a>
    <a href="#!">${size[1]}</a>
    <a href="#!">${size[2]}</a>
    <a href="#!">${size[3]}</a>
    <a href="#!">${size[4]}</a>
  </div>
  <a class="catalog__price" href="#!">Узнать оптовую цену</a>
</div>
  `;
});
catalogList.innerHTML = htmlCatalog


