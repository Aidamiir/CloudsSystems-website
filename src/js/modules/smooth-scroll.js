const navLinks = document.querySelectorAll('#navLink')
const smoothLinks = document.querySelectorAll('#smooth-scroll')

const smoothScroll = (event) => {
	event.preventDefault()
	const id = event.currentTarget.getAttribute('href')
	document.querySelector(id).scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	})
}

export const smoothScrollInit = () => {
	for (let link of navLinks) {
		link.addEventListener('click', function (e) {
			e.preventDefault()
			const id = link.getAttribute('href')
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		})
	}
	smoothLinks.forEach((smoothLink) =>
		smoothLink.addEventListener('click', smoothScroll)
	)
}
