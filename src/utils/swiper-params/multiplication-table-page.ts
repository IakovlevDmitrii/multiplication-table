export const multiplicationTablePageSwiperParams = {
	direction: 'vertical' as const,
	effect: 'coverflow' as const,
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 0,
		modifier: 1,
		slideShadows: true,
	},
	centeredSlides: false,
	freeMode: {
		enabled: true,
		momentumRatio: 0.25,
		sticky: true,
	},
	initialSlide: 0,
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
	spaceBetween: 5,
};
