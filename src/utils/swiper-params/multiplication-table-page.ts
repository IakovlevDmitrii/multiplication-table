export const multiplicationTablePageSwiperParams = {
	direction: 'vertical' as const,
	effect: 'coverflow' as const,
	coverflowEffect: {
		rotate: -7,
		stretch: 5,
		depth: 40,
		modifier: 0.8,
		slideShadows: true,
	},
	centeredSlides: false,
	freeMode: {
		enabled: true,
		momentumRatio: 0.25,
		sticky: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
	mousewheel: {
		forceToAxis: true,
		sensitivity: 0.5
	},
	pagination: {
		type: 'progressbar' as const,
	},
	slidesPerView: 'auto' as const,
	spaceBetween: 15,
};
