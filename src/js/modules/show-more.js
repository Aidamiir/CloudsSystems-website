const showProjectsButton = document.getElementById('show-more-projects-button')
const hiddenProjects = document.querySelectorAll('.project:nth-child(n+7)')
const showSkillsButton = document.getElementById('show-more-button')
const hiddenSkills = document.querySelectorAll(
	'.key-skills__item:nth-child(n+11)'
)

const handleShowProjects = () => {
	hiddenProjects.forEach((item) => item.classList.toggle('hidden'))
	showProjectsButton.textContent = hiddenProjects[0].classList.contains(
		'hidden'
	)
		? 'Показать еще'
		: 'Скрыть'
	if (showProjectsButton.textContent === 'Показать еще') {
		window.location.href = '#completed-projects'
	}
}

const handleShowSkills = () => {
	hiddenSkills.forEach((item) => item.classList.toggle('hidden'))
	showSkillsButton.textContent = hiddenSkills[0].classList.contains('hidden')
		? 'Показать еще'
		: 'Скрыть'
	if (showSkillsButton.textContent === 'Показать еще') {
		window.location.href = '#key-skills'
	}
}

export const showMoreInit = () => {
	showSkillsButton.addEventListener('click', handleShowSkills)
	showProjectsButton.addEventListener('click', handleShowProjects)
}
