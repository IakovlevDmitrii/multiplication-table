import { JSX, useRef } from 'react';
import HeaderLayout from "../../../headerLayout";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const SelectMultiplierHeader = (): JSX.Element => {
	const container = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		gsap.from(container.current, {
			y: -100
		});
	},{ scope: container });

	return (
		<div ref={container}>
			<HeaderLayout title={<h1>Выбери множитель</h1>} />
		</div>
	)
};

export default SelectMultiplierHeader;
