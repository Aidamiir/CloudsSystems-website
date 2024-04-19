import axios from 'axios'
import { openPopup } from './popup'

const email = document.getElementById('contact-form-email').value.trim()
const name = document.getElementById('contact-form-username').value.trim()
const telephone = document.getElementById('contact-form-phone').value.trim()

const validateForm = async () => {
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	const numericPattern = /^\+?\d+$/
	if (!email || !name || !telephone) {
		document.getElementById('popup-message').innerHTML =
			'Пожалуйста, заполните все поля формы.'
		openPopup()
		return false
	}
	if (!emailPattern.test(email)) {
		document.getElementById('popup-message').innerHTML =
			'Пожалуйста, введите корректный адрес электронной почты.'
		openPopup()
		return false
	}
	if (!numericPattern.test(telephone)) {
		document.getElementById('popup-message').innerHTML =
			'Пожалуйста, введите корректный номер телефона.'
		openPopup()
		return false
	}
	return true
}

const send = async (event) => {
	event.preventDefault()
	if (!(await validateForm())) {
		return
	}
	const data = {
		email: email,
		name: name,
		telephone: telephone,
	}
	try {
		const res = await axios.post('API_ENDPOINT', data)
		document.getElementById('popup-message').innerHTML =
			'Данные успешно отправлены.'
		openPopup()
	} catch (error) {
		document.getElementById('popup-message').innerHTML =
			'Произошла ошибка при отправке данных. Пожалуйста, повторите попытку позже.'
		openPopup()
	}
}

export const contactFormInit = () => {
	document.getElementById('send-form').addEventListener('click', send)
}
