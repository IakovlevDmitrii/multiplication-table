import { RefObject } from "react";
import gsap from "gsap";

const hideResultAnimation = (
	// refs: RefObject<(HTMLDivElement | null)[]>,
	ref: RefObject<(HTMLDivElement | null)>,

	// index: number

): void => {
	// const resultElContainer: HTMLDivElement | null | undefined = refs.current[index]?.querySelector('div');
	const resultElContainer: HTMLDivElement | null | undefined = ref.current?.querySelector('div');


	// const resultEl: HTMLSpanElement | null | undefined = refs.current[index]?.querySelector('span');
	const resultEl: HTMLSpanElement | null | undefined = ref.current?.querySelector('span');

	const tlHide = gsap.timeline();

	if (resultElContainer && resultEl) {
		gsap.killTweensOf(resultElContainer);
		gsap.killTweensOf(resultEl);

		tlHide.to(resultElContainer, {
			rotateY: "180deg",
			duration: 0.6,
			ease: "none",
			delay: 0.3,
		});
		tlHide.to(resultEl, {
			opacity: 0,
			ease: "none",
			duration: 0.4,
		}, "<");
	}
};

export default hideResultAnimation;
