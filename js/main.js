const search = document.querySelector('.search');

const textInput = search.querySelector('input');

search.addEventListener('click', function () {
  textInput.focus();
});

textInput.addEventListener('focus', function () {
  search.classList.add('focused');
  textInput.setAttribute('placeholder', '통합검색');
});

textInput.addEventListener('blur', function () {
  search.classList.remove('focused');
  textInput.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
window.addEventListener(
  'scroll',
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 1500) {
      //badge숨기기
      badgeEl.style.display = 'none';
      // gsap.to(요소,지속시간,옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: 'none',
      });
    } else {
      //badge 보이기
      badgeEl.style.display = 'block';
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block',
      });
    }
  }, 300)
);

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
  speed: 1000,
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-button-prev',
    nextEl: '.promotion .swiper-button-next',
  },
});
