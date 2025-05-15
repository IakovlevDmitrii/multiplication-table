import { RefObject } from "react";
import gsap from "gsap";

const showResultAnimation = (
	// refs: RefObject<(HTMLDivElement | null)[]>,
	ref: RefObject<(HTMLDivElement | null)>,

	// index: number

): void => {
	// const resultElContainer: HTMLDivElement | null | undefined = refs.current[index]?.querySelector('div');
	const resultElContainer: HTMLDivElement | null | undefined = ref.current?.querySelector('div');

	// const resultEl: HTMLSpanElement | null | undefined = refs.current[index]?.querySelector('span');
	const resultEl: HTMLSpanElement | null | undefined = ref.current?.querySelector('span');

	const tlShow = gsap.timeline();

	if (resultElContainer && resultEl) {
		gsap.killTweensOf(resultElContainer);
		gsap.killTweensOf(resultEl);

		tlShow.to(resultElContainer, {
			rotateY: "0deg",
			duration: 0.6,
			ease: "none"
		});
		tlShow.to(resultEl, {
			opacity: 1,
			ease: "none"
		}, 0.3);
	}
};

export default showResultAnimation;
