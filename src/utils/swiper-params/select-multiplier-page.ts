export const selectMultiplierPageSwiperParams = {
	autoplay: {
		delay: 600,
	},
	effect: 'coverflow' as const,
	coverflowEffect: {
		rotate: 50,
		stretch: 15,
		depth: 400,
		modifier: 1,
		slideShadows: true,
	},
	centeredSlides: true,
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
	loop: true,
	mousewheel: {
		invert: true,
	},
	navigation: {
		prevEl: '.button-prev',
		nextEl: '.button-next',
	},
	pagination: {
		type: 'progressbar' as const,
	},
	slidesPerView: 'auto' as const,
	speed: 1000,
};
