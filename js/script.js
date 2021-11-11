const brandsContent = document.querySelector('.brands__content');
const aboutUsDescription = document.querySelector('.about-us__description');
const buttonsReadMore = document.querySelectorAll('.button-details');
const brandsButtonText = document.querySelector('.brands__button-details .button-details__text');
const aboutUsButtonText = document.querySelector('.about-us__button-details .button-details__text');

buttonsReadMore.forEach(button => {
  button.addEventListener('click', showMore);
})

function showMore(e) {
  const event = e.target;
  if(event.classList.contains('button-details__input')) {
    if(event.closest('.brands__button-details')) {
      if(event.checked) {
        brandsContent.classList.add('brands__content--open');
        brandsButtonText.textContent = 'Скрыть';
      } else {
        brandsContent.classList.remove('brands__content--open');
        brandsButtonText.textContent = 'Показать еще';
      }
    } else if(event.closest('.about-us__button-details')) {
      if(event.checked) {
        aboutUsDescription.classList.add('about-us__description--open');
        aboutUsButtonText.textContent = 'Скрыть';
      } else {
        aboutUsDescription.classList.remove('about-us__description--open');
        aboutUsButtonText.textContent = 'Читать далее';
      }
    }
  }
}
