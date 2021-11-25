const burgerOpen = document.querySelector('.burger--open');
const burgerClose = document.querySelector('.burger--close');
const sideNav = document.querySelector('.sidenav');
const overlay = document.querySelector('.overlay');
const modalFeedback = document.querySelector('.modal--feedback');
const modalCallback = document.querySelector('.modal--callback');
const wrapper = document.querySelector('.wrapper');
const buttonsContactIntoHeader = document.querySelector(
  '.header .icon-bar__list'
);
const buttonsCloseModal = document.querySelectorAll('.modal .burger--close');
const buttonsContact = document.querySelector('.contact .icon-bar__list');

const openSideNav = () => {
  sideNav.classList.add('sidenav--open');
  overlay.classList.remove('overlay--hidden');
  wrapper.classList.add('wrapper--hidden');
};

const closeSideNav = () => {
  if (sideNav.classList.contains('sidenav--open')) {
    sideNav.classList.remove('sidenav--open');
  } else if (modalFeedback.classList.contains('modal--open')) {
    modalFeedback.classList.remove('modal--open');
  } else if (modalCallback.classList.contains('modal--open')) {
    modalCallback.classList.remove('modal--open');
  }
  overlay.classList.add('overlay--hidden');
  wrapper.classList.remove('wrapper--hidden');
};

const closeModal = (e) => {
  if (e.target.closest('.modal--feedback')) {
    modalFeedback.classList.remove('modal--open');
    overlay.classList.add('overlay--hidden');
  }
  if (e.target.closest('.modal--callback')) {
    modalCallback.classList.remove('modal--open');
    overlay.classList.add('overlay--hidden');
  }
  wrapper.classList.remove('wrapper--hidden');
};

const openModal = (e) => {
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
};

buttonsContactIntoHeader.addEventListener('click', openModal);
burgerOpen.addEventListener('click', openSideNav);
burgerClose.addEventListener('click', closeSideNav);
overlay.addEventListener('click', closeSideNav);
buttonsContact.addEventListener('click', openModal);
buttonsCloseModal.forEach((btn) => btn.addEventListener('click', closeModal));
