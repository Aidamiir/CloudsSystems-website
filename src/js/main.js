import '../scss/style.scss'
import { animateInit } from './modules/animate'
import { contactFormInit } from './modules/form'
import { menuInit } from './modules/menu'
import { particlesJsInit } from './modules/particles-js-config'
import { popupInit } from './modules/popup'
import { showMoreInit } from './modules/show-more'
import { smoothScrollInit } from './modules/smooth-scroll'
import { swiperInit } from './modules/swiper'
import { switchThemeInit } from './modules/switching-theme'

document.addEventListener('DOMContentLoaded', () => {
	menuInit()
	animateInit()
	contactFormInit()
	swiperInit()
	switchThemeInit()
	smoothScrollInit()
	showMoreInit()
	popupInit()
	particlesJsInit()
})
