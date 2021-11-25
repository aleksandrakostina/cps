const brandsContent = document.querySelector('.brands__content');
const aboutUsDescription = document.querySelector('.about-us__description');
const repairContent = document.querySelector('.repair__content');
const buttonsReadMore = document.querySelectorAll('.button-details');
const brandsButtonText = document.querySelector(
  '.brands__button-details .button-details__text'
);
const aboutUsButtonText = document.querySelector(
  '.about-us__button-details .button-details__text'
);
const repairButtonText = document.querySelector(
  '.repair__button-details .button-details__text'
);

const checkedButtonReadMore = (
  event,
  container,
  classActive,
  text,
  buttonText
) => {
  if (event.checked) {
    container.classList.add(classActive);
  } else {
    container.classList.remove(classActive);
  }
  buttonText.textContent = event.checked ? text[0] : text[1];
};

const showMore = (e) => {
  const event = e.target;
  if (event.closest('.brands__button-details')) {
    checkedButtonReadMore(
      event,
      brandsContent,
      'brands__content--open',
      ['Скрыть', 'Показать еще'],
      brandsButtonText
    );
  } else if (event.closest('.about-us__button-details')) {
    checkedButtonReadMore(
      event,
      aboutUsDescription,
      'about-us__description--open',
      ['Скрыть', 'Читать далее'],
      aboutUsButtonText
    );
  } else if (event.closest('.repair__button-details')) {
    checkedButtonReadMore(
      event,
      repairContent,
      'repair__content--open',
      ['Скрыть', 'Показать еще'],
      repairButtonText
    );
  }
};

buttonsReadMore.forEach((button) => {
  button.addEventListener('click', showMore);
});
