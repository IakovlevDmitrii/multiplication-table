import { FC, JSX, useState, useEffect } from 'react';
import { usePageVisibility } from "../../hooks";
import styles from './ChalkDust.module.scss';

const ChalkDust: FC = (): JSX.Element => {
	const isVisible: boolean = usePageVisibility();
	const particleCount = 20;

	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener('mousemove', handleMove);
		return () => window.removeEventListener('mousemove', handleMove);
	}, []);

	return (
		<div className={`${styles.chalkParticles} ${isVisible ? '' : styles.paused}`}>
			{Array.from({ length: particleCount }, (_, i) => (
				<span
					key={i}
					className={styles.particle}
					style={{
						left: `${Math.random() * 100}%`,
						animationDuration: `${Math.random() * 5 + 3}s`,
						animationDelay: `${Math.random() * 2}s`,
						opacity: Math.random() * 0.5 + 0.1,
						width: `${Math.random() * 4 + 2}px`,
						height: `${Math.random() * 4 + 2}px`,

						transform: `translate(${(mousePosition.x - window.innerWidth/2) * 0.01}px, 
                      ${(mousePosition.y - window.innerHeight/2) * 0.01}px)`
					}}
				/>
			))}
		</div>
	);
};

export default ChalkDust;