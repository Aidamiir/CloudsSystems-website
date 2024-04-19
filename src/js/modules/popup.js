import { html } from '../libs/constants'

const popup = document.getElementById('popup')
const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

export const openPopup = () => {
	popup.classList.toggle('hidden')
	html.classList.add('lock')
	html.style.paddingRight = `${scrollbarWidth}px`
}

const closePopup = () => {
	popup.classList.remove('hidden')
	html.classList.remove('lock')
	html.style.paddingRight = '0px'
}

export const popupInit = () => {
	document.getElementById('close-popup').addEventListener('click', closePopup)
}
