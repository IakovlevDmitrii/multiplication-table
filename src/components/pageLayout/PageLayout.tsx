import { FC, JSX, RefObject, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./PageLayout.module.scss";

const PageLayout: FC<{
	header: JSX.Element;
	mainContent: JSX.Element;
}> = (
	{ header, mainContent }
): JSX.Element => {
	const animationRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
	const headerRef: RefObject<HTMLHeadElement | null> = useRef<HTMLHeadElement | null>(null);
	const mainRef: RefObject<HTMLElement | null> = useRef<HTMLElement | null>(null);

	useGSAP(() => {
		const fadeIn = {
			from: {
				scale: 0.5,
				opacity: 0,
				y: 20
			},
			to: {
				scale: 1,
				opacity: 1,
				y: 0,
				duration: 0.4,
				ease: "back.out(1.2)",
				stagger: 0.15
			}
		};

		gsap.fromTo(
			[headerRef.current, mainRef.current],
			fadeIn.from,
			fadeIn.to
		);
	}, { scope: animationRef });

	return (
		<div ref={animationRef} className={styles._}>
			<header ref={headerRef}>{header}</header>
			<main ref={mainRef}>{mainContent}</main>
		</div>
	);
};

export default PageLayout;
