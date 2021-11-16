/*-----BUTTON-MORE-----*/
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
      const textContent = ['Скрыть', 'Показать еще'];
      checkedButtonReadMore(event, brandsContent, 'brands__content--open', textContent, brandsButtonText);
    } else if(event.closest('.about-us__button-details')) {
      const textContent = ['Скрыть', 'Читать далее'];
      checkedButtonReadMore(event, aboutUsDescription, 'about-us__description--open', textContent, 
        aboutUsButtonText);
    }
  }
}

function checkedButtonReadMore(event, container, classActive, textContent, buttonText) {
  container.classList.toggle(classActive);
  buttonText.textContent = event.checked ? textContent[0] : textContent[1];
}

/*-----BURGER-----*/
const burgerOpen = document.querySelector('.burger--open');
const burgerClose = document.querySelector('.burger--close');
const sideNav = document.querySelector('.sidenav');
const overlay = document.querySelector('.overlay');

burgerOpen.addEventListener('click', openSideNav);
burgerClose.addEventListener('click', closeSideNav);
overlay.addEventListener('click', closeSideNav);

function openSideNav() {
  sideNav.classList.add('sidenav--open');
  overlay.classList.remove('overlay--hidden');
}

function closeSideNav() {
  sideNav.classList.remove('sidenav--open');
  overlay.classList.add('overlay--hidden');
}

/*------MENU-----*/
const slideMenu = document.querySelector('.slide-menu__list');
const slideMenuItems = document.querySelectorAll('.slide-menu__item');
const menu = document.querySelector('.menu__list');
const menuItems = document.querySelectorAll('.menu__item');

slideMenu.addEventListener('click', addActiveClassToItemOfSlideMenu);
menu.addEventListener('click', addActiveClassToItemOfMenu);

function addActiveClassToItemOfList(event, classActive, classItem, classLink, items) {
  if(event.classList.contains(classLink)) {
    items.forEach(item => {
      item.classList.remove(classActive);
    })
    if(event.closest(classItem)) {
      event.closest(classItem).classList.add(classActive);
    } 
  }
}

function addActiveClassToItemOfSlideMenu(e) {
  addActiveClassToItemOfList(e.target, 'slide-menu__item--active', '.slide-menu__item', 
    'slide-menu__link', slideMenuItems);
}

function addActiveClassToItemOfMenu(e) {
  addActiveClassToItemOfList(e.target, 'menu__item--active', '.menu__item', 'menu__link', menuItems);
}
