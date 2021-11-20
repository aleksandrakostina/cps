/*-----BUTTON-MORE-----*/
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

buttonsReadMore.forEach((button) => {
  button.addEventListener('click', showMore);
});

function showMore(e) {
  const event = e.target;
  if (event.classList.contains('button-details__input')) {
    if (event.closest('.brands__button-details')) {
      const textContent = ['Скрыть', 'Показать еще'];
      checkedButtonReadMore(
        event,
        brandsContent,
        'brands__content--open',
        textContent,
        brandsButtonText
      );
    } else if (event.closest('.about-us__button-details')) {
      const textContent = ['Скрыть', 'Читать далее'];
      checkedButtonReadMore(
        event,
        aboutUsDescription,
        'about-us__description--open',
        textContent,
        aboutUsButtonText
      );
    } else if (event.closest('.repair__button-details')) {
      const textContent = ['Скрыть', 'Показать еще'];
      checkedButtonReadMore(
        event,
        repairContent,
        'repair__content--open',
        textContent,
        repairButtonText
      );
    }
  }
}

function checkedButtonReadMore(
  event,
  container,
  classActive,
  text,
  buttonText
) {
  console.log(buttonText);
  container.classList.toggle(classActive);
  buttonText.textContent = event.checked ? text[0] : text[1];
}

/*-----BURGER-----*/
const burgerOpen = document.querySelector('.burger--open');
const burgerClose = document.querySelector('.burger--close');
const sideNav = document.querySelector('.sidenav');
const overlay = document.querySelector('.overlay');
const modalFeedback = document.querySelector('.modal--feedback');
const modalCallback = document.querySelector('.modal--callback');
const wrapper = document.querySelector('.wrapper');

burgerOpen.addEventListener('click', openSideNav);
burgerClose.addEventListener('click', closeSideNav);
overlay.addEventListener('click', closeSideNav);

function openSideNav() {
  sideNav.classList.add('sidenav--open');
  overlay.classList.remove('overlay--hidden');
  wrapper.classList.add('wrapper--hidden');
}

function closeSideNav() {
  if (sideNav.classList.contains('sidenav--open')) {
    sideNav.classList.remove('sidenav--open');
  } else if (modalFeedback.classList.contains('modal--open')) {
    modalFeedback.classList.remove('modal--open');
  } else if (modalCallback.classList.contains('modal--open')) {
    modalCallback.classList.remove('modal--open');
  }
  overlay.classList.add('overlay--hidden');
  wrapper.classList.remove('wrapper--hidden');
}

/*------MENU-----*/
const slideMenu = document.querySelector('.slide-menu__list');
const slideMenuItems = document.querySelectorAll('.slide-menu__item');
const menu = document.querySelector('.menu__list');
const menuItems = document.querySelectorAll('.menu__item');

slideMenu.addEventListener('click', addActiveClassToItemOfSlideMenu);
menu.addEventListener('click', addActiveClassToItemOfMenu);

function addActiveClassToItemOfList(
  event,
  classActive,
  classItem,
  classLink,
  items
) {
  if (event.classList.contains(classLink)) {
    items.forEach((item) => {
      item.classList.remove(classActive);
    });
    if (event.closest(classItem)) {
      event.closest(classItem).classList.add(classActive);
    }
  }
}

function addActiveClassToItemOfSlideMenu(e) {
  addActiveClassToItemOfList(
    e.target,
    'slide-menu__item--active',
    '.slide-menu__item',
    'slide-menu__link',
    slideMenuItems
  );
}

function addActiveClassToItemOfMenu(e) {
  addActiveClassToItemOfList(
    e.target,
    'menu__item--active',
    '.menu__item',
    'menu__link',
    menuItems
  );
}

const buttonsCloseModal = document.querySelectorAll('.modal .burger--close');

buttonsCloseModal.forEach((btn) => btn.addEventListener('click', closeModal));

function closeModal(e) {
  if (e.target.closest('.modal--feedback')) {
    modalFeedback.classList.remove('modal--open');
    overlay.classList.add('overlay--hidden');
  }
  if (e.target.closest('.modal--callback')) {
    modalCallback.classList.remove('modal--open');
    overlay.classList.add('overlay--hidden');
  }
  wrapper.classList.remove('wrapper--hidden');
}

const buttonsContact = document.querySelector('.contact .icon-bar__list');

buttonsContact.addEventListener('click', openModal);

function openModal(e) {
  if (e.target.classList.contains('icon--call')) {
    modalCallback.classList.add('modal--open');
    overlay.classList.remove('overlay--hidden');
    if (sideNav.classList.contains('sidenav--open')) {
      sideNav.classList.remove('sidenav--open');
    }
  } else if (e.target.classList.contains('icon--chat')) {
    modalFeedback.classList.add('modal--open');
    overlay.classList.remove('overlay--hidden');
    if (sideNav.classList.contains('sidenav--open')) {
      sideNav.classList.remove('sidenav--open');
    }
  }
  wrapper.classList.add('wrapper--hidden');
}

const buttonsContactIntoHeader = document.querySelector(
  '.header .icon-bar__list'
);

buttonsContactIntoHeader.addEventListener('click', openModal);
