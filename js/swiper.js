let mobile = window.matchMedia('(min-width: 768px)');
let swiper;

function breakpointCheck() {
  if (mobile.matches) {
    if (swiper !== undefined) {
      swiper.destroy(true, true);
    }
  return;
  } else {
      return enableSwiper();
    }
};

function enableSwiper() {
  swiper = new Swiper('.swiper', {
    spaceBetween: 16,
    slidesPerView: 'auto',
    watchOverflow: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });
};

mobile.addEventListener('change', breakpointCheck);

breakpointCheck();

