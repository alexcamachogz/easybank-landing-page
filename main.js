const mobileHamburger = document.querySelector('.mobile__hamburger')
const mobileClose = document.querySelector('.mobile__close')
const headerMobile = document.querySelector('.header__mobile')
const menu = document.querySelector('.menu')
const menuContainer = document.querySelector('.menu__container')

headerMobile.addEventListener( 'click', () => {
  mobileHamburger.classList.toggle('hidden')
  mobileClose.classList.toggle('hidden')
  menu.classList.toggle('no-show')
  menuContainer.classList.toggle('opacity-background')
})