import Swiper from 'swiper'
import 'swiper/css'

export const swiperInit = () => {
	const mySwiper = new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 30,
	})
}
