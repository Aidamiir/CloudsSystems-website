const header = document.getElementById('header')
const themeButton = document.getElementById('theme-button')

const scrollFunction = () => {
	if (window.scrollY > window.innerHeight) {
		themeButton.style.top = '10px'
		header.style.paddingBlock = '10px'
	} else {
		themeButton.style.top = '25px'
		header.style.paddingBlock = '25px'
	}
}

export const headerPaddings = () => {
	if (window.innerWidth > 554) {
		window.onscroll = function () {
			scrollFunction()
		}
	}
}
