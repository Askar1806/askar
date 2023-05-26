// burger
document.querySelector(".header__burger-btn").addEventListener("click", function() {
  document.querySelector(".header__nav-burger").classList.add("active");
})
document.querySelector(".header__burger-close").addEventListener("click", function() {
  document.querySelector(".header__nav-burger").classList.remove("active");
})


// search
document.querySelector(".header__btn").addEventListener("click", function() {
  document.querySelector(".header__form").classList.add("form__active");
  this.classList.add("active");
})
document.querySelector(".header__btn-close").addEventListener("click", function() {
   let form = document.querySelector(".header__form");
  form.classList.remove("form__active");
    form.querySelector(".header__form-input").value = "";
    document.querySelector(".header__btn").classList.remove("active");
});

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".header__form");
  if (!target.closest(".form-container")) {
  form.classList.remove("form__active");
    form.querySelector("header__form-input").value = "";
    document.querySelector(".header__btn").classList.remove(".active");
  }
})

// swiper
document.addEventListener("DOMContentLoaded", function() {
const container = document.querySelector(".container-order")
const swiper = new Swiper('.order-block__swiper', {
  slidesperView: 1,
  slidesperGroup: 1,
  direction: 'horizontal',
  loop: true,
  speed: 300,
  pagination: {
    el: '.order-block__pagination',
    type: 'bullets',
    clickable: true,
  },
  a11y: {
    paginationBulletMessage: 'Следующий слайд'
  },
})
})

// accordion
new Accordion('.faqblock__list', {
  elementClass: 'accordion',
  triggerClass: 'faq__top',
  panelClass: 'faq__accordion',
  activeClass: 'accordion--active',
  icons: false,
  heightStyle: "content",
  collapsible: true,
  active: false,
  duration: 400,
  showMultiple: false,
  onOpen: function(currentElement) {
    console.log(currentElement);
  }
});

// tabs-steps
document.addEventListener("DOMContentLoaded", function() {
  let tabsBtn = document.querySelectorAll('.step-btn');
	let tabsItem = document.querySelectorAll('.step');

  tabsBtn.forEach(function(element){
    element.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function(btn){ btn.classList.remove('step-btn--active')});
      e.currentTarget.classList.add('step-btn--active');

      tabsItem.forEach(function(element){ element.classList.remove('step--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('step--active');
    });
  });
})
