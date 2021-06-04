const mobile__hamburger = document.querySelector('.mobile__hamburger')
const mobile__close = document.querySelector('.mobile__close')
const header__mobile = document.querySelector('.header__mobile')
const menu = document.querySelector('.menu')

header__mobile.addEventListener( 'click', () => {
  mobile__hamburger.classList.toggle('hidden')
  mobile__close.classList.toggle('hidden')
  menu.classList.toggle('no-show')
})