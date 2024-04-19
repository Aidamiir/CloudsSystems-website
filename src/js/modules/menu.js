import { html } from '../libs/constants'

const menuBurger = document.getElementById('menu-burger')
const navLinks = document.querySelectorAll('#nav-link')
const menuIcon = document.getElementById('menu-icon')
const nav = document.getElementById('nav')

export const openMenu = () => {
	const scrollbarWidth = window.innerWidth - html.clientWidth
	const menuIsOpen = nav.classList.contains('show')

	nav.classList.toggle('show')
	menuIcon.classList.toggle('active')
	html.classList.toggle('lock')

	if (menuIsOpen) {
		html.style.paddingRight = '0px'
		menuBurger.style.paddingRight = '0px'
	} else {
		html.style.paddingRight = `${scrollbarWidth}px`
		menuBurger.style.paddingRight = `${scrollbarWidth}px`
	}
}

export const closeMenu = () => {
	nav.classList.remove('show')
	menuIcon.classList.remove('active')
	html.classList.remove('lock')

	html.style.paddingRight = '0px'
	menuBurger.style.paddingRight = '0px'
}

export const menuInit = () => {
	navLinks.forEach((navLink) => navLink.addEventListener('click', closeMenu))
	menuBurger.addEventListener('click', openMenu)
}
