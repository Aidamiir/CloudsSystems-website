export const animateInit = () => {
	const elementsToAnimate = document.querySelectorAll('.animate-on-scroll')
	const handleIntersection = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('animate')
				observer.unobserve(entry.target)
			}
		})
	}
	const observer = new IntersectionObserver(handleIntersection, {
		threshold: 0.5,
	})
	elementsToAnimate.forEach((element) => {
		observer.observe(element)
	})
}
