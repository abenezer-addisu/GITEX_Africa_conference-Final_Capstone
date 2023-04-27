const mobileMenu = document.querySelector('.mobile-menu i');
const menu = document.querySelectorAll('.menu-mobile,.mobile-menu i');
const toogleMenu = () => {
  menu[1].classList.toggle('hideMenu');
};
menu.forEach((list) => {
  list.addEventListener('click', () => toogleMenu());
});
const setBg = (sy) => {
  if (sy > 60) {
    mobileMenu.style.background = '#fff';
    mobileMenu.style.padding = '0.5rem';
    mobileMenu.style.borderRadius = '50%';
  } else {
    mobileMenu.style.background = 'none';
  }
};

window.addEventListener('scroll', () => setBg(window.scrollY));
