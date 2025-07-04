export const multiplicationTablePageSwiperParams = {
	direction: 'vertical' as const,
	effect: 'coverflow' as const,
	coverflowEffect: {
		rotate: -10,
		stretch: 20,
		depth: 50,
		modifier: 0.8,
		slideShadows: true,
	},
	centeredSlides: true,
	freeMode: {
		enabled: true,
		momentumRatio: 0.25,
		sticky: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
	loop: true,
	mousewheel: {
		forceToAxis: true,
		sensitivity: 0.5
	},
	pagination: {
		type: 'progressbar' as const,
	},
	slidesPerView: 'auto' as const,
	spaceBetween: 30,
};
