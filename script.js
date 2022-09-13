const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
	navbar.classList.toggle('change');
	menu.classList.toggle('change');
});

const navbarList = document.querySelector('.navbar__list');

navbarList.addEventListener('click', e => {
	navbar.classList.toggle('change');
	menu.classList.toggle('change');
});

// --------------------------------------------------

var swiper = new Swiper('.mySwiper', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	spaceBetween: 0,
	coverflowEffect: {
		rotate: 70,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
	},
});

// -----------------------------------------------------------

const accordions = document.querySelectorAll('.contentBox');

accordions.forEach(accordion =>
	accordion.addEventListener('click', function () {
		this.classList.toggle('active');
	})
);