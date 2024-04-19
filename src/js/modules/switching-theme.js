import { html } from '../libs/constants'
import { closeMenu } from './menu'

const themeButton = document.getElementById('theme-button')
const blackThemeIcon = document.getElementById('black-theme-icon')
const lightThemeIcon = document.getElementById('light-theme-icon')
const blackThemeIconMobile = document.getElementById('black-theme-icon--mobile')
const themeButtonMobile = document.getElementById('theme-button--mobile')
const lightThemeIconMobile = document.getElementById('light-theme-icon--mobile')
const bgColor = getComputedStyle(html).getPropertyValue('--primaryColor')

const switchTheme = () => {
	html.classList.toggle('theme-active')
	blackThemeIcon.classList.toggle('hidden')
	lightThemeIcon.classList.toggle('hidden')
	blackThemeIconMobile.classList.toggle('hidden')
	lightThemeIconMobile.classList.toggle('hidden')
}

const switchThemeMobile = () => {
	switchTheme()
	closeMenu()
}

export const switchThemeInit = () => {
	if (bgColor === '#fff') {
		blackThemeIcon.classList.add('hidden')
		lightThemeIcon.classList.remove('hidden')
	} else if (bgColor === '#000') {
		blackThemeIcon.classList.remove('hidden')
		lightThemeIcon.classList.add('hidden')
	}

	themeButton.addEventListener('click', switchTheme)
	themeButtonMobile.addEventListener('click', switchThemeMobile)
}
