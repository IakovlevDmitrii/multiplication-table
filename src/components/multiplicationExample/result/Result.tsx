import { FC, JSX, useRef, RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import classNames from "classnames";
import styles from "./Result.module.scss";

const Result: FC<{
	result: number;
	isHighlighted?: boolean;
	isError?: boolean;
	isHidden?: boolean;
}> = ({
	result,
	isHighlighted = false,
	isError = false,
	isHidden = false
}): JSX.Element => {
	const cubeRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);

	useGSAP((): (() => void) | undefined => {
		const cube: HTMLDivElement | null = cubeRef.current;
		if (!cube) return;

		gsap.set(cube, { rotateY: isHidden ? 0 : 180 });

		if (!isHidden) return;

		const ROTATION_STATES = {
			HIDDEN: 0,
			VISIBLE: 180,
		} as const;

		const flip = (targetRotation: number) => {
			gsap.to(cube, {
				rotateY: targetRotation,
				duration: 1,
				ease: "power2.inOut",
			});
		};

		const showResult = () => flip(ROTATION_STATES.VISIBLE);
		const hideResult = () => flip(ROTATION_STATES.HIDDEN);

		cube.addEventListener("pointerenter", showResult);
		cube.addEventListener("pointerleave", hideResult);

		return () => {
			cube.removeEventListener("pointerenter", showResult);
			cube.removeEventListener("pointerleave", hideResult);
		};
	}, [isHidden]);

	return (
		<div className={styles._}>
			<div ref={cubeRef} className={styles.cube}>
				<div className={styles.cubeFaceFront}>?</div>
				<div className={classNames(
					styles.cubeFaceBack,
					{
						[styles.correct]: isHighlighted,
						[styles.wrong]: isError,
					})}
					>{result}</div>
			</div>
		</div>
	);
};

export default Result;