const toTopEl = document.getElementById('to-top');
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
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      //badge 보이기
      badgeEl.style.display = 'block';
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block',
      });
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);

toTopEl.addEventListener('click', () => {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

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

new Swiper('.awards .swiper', {
  autoplay: true,
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  navigation: {
    prevEl: '.awards .swiper-button-prev',
    nextEl: '.awards .swiper-button-next',
  },
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const promotionIcon = promotionToggleBtn.querySelector(
  '.material-symbols-outlined'
);

let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
    promotionEl.style.display = 'none';
    promotionIcon.innerHTML = 'expand_circle_down';
  } else {
    promotionEl.classList.remove('hide');
    promotionEl.style.display = 'block';
    promotionIcon.innerHTML = 'expand_circle_up';
  }
});
function random(min, max) {
  return parseFloat(Math.random() * (max - min) + min);
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
    delay: random(0, delay),
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
