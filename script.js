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

const video = document.querySelector('.video');
const btn = document.querySelector('.section-2__controls-buttons i');
const bar = document.querySelector('.section-2__controls-video-bar');

const playPause = () => {
	if (video.paused) {
		btn.className = 'far fa-pause-circle';
		video.play();
		video.style.opacity = '.8';
	} else {
		video.pause();
		btn.className = 'far fa-play-circle';
		video.style.opacity = '.3';
	}
};

btn.addEventListener('click', () => playPause());

video.addEventListener('timeupdate', () => {
	const moviePercent = video.currentTime / video.duration;
	bar.style.width = `${moviePercent * 100}%`;
	if (video.ended) {
		bar.style.width = '0%';
		btn.className = 'far fa-play-circle';
		video.style.opacity = '.3';
	}
});

// ---------------------------------------------------------

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
