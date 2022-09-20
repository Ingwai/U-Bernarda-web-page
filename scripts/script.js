const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
	navbar.classList.toggle('change');
	menu.classList.toggle('change');
});

const navbarList = document.querySelector('.navbar__list');

navbarList.addEventListener('click', (e) => {
	navbar.classList.toggle('change');
	menu.classList.toggle('change');
});

// --------------------------------------------------

const swiper = new Swiper('.mySwiper', {
	// effect: 'coverflow',
	effect: 'cards',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	spaceBetween: 0,
	roundLengths: true,
    loop: true,
    loopAdditionalSlides: 0,
	// coverflowEffect: {
	// 	rotate: 0,
	// 	stretch: 0,
	// 	depth: 100,
	// 	modifier: 3,
	// 	slideShadows: true,
	// },
});

// -----------------------------------------------------------

const accordions = document.querySelectorAll('.contentBox');

accordions.forEach(accordion =>
	accordion.addEventListener('click', function () {
		this.classList.toggle('active');
	})
);

// -----------------------------------------------------------------

let index = 0;

function carousel() {
	let slides = document.querySelectorAll('.aboutUs__slide');

	slides.forEach(slide => slide.style.opacity = '0');
	index++;

	index > slides.length ?	index = 1 : "";
	slides[index - 1].style.opacity = '1';
	setTimeout(carousel, 5000);
}

carousel();


// -----------------------------------------------------------------------

let s = skrollr.init();


