const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  speed: 4000,
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 4000,
  },

});

document.querySelector('.menu-button').addEventListener('click', function () {
  console.log('clicked!');
  document.querySelector('body').classList.add('js-menu-open');
  document.querySelector('.close-menu').classList.remove('js-hidden');
  document.querySelector('header .main-menu').classList.add('js-show');
});

document.querySelector('.close-menu').addEventListener('click', function () {
  document.querySelector('body').classList.remove('js-menu-open');
  document.querySelector('.close-menu').classList.add('js-hidden');
  document.querySelector('header .main-menu').classList.remove('js-show');
});

window.addEventListener('resize', function () {
  if (document.querySelector('body').classList.contains('js-menu-open')) {
    if (window.innerWidth >= 650) {
      document.querySelector('.close-menu').click();
    }
  }
});