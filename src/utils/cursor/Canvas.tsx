import React from "react";
import { usePointerPosition } from './usePointerPosition';
import { useDelayedValue } from './useDelayedValue';
import styles from './styles.module.scss';

interface PositionType {
	x: number,
	y: number,
}

export default function Canvas(): React.JSX.Element {
	const pos1: PositionType = usePointerPosition();
	const pos2: PositionType = useDelayedValue(pos1, 100);
	const pos3: PositionType = useDelayedValue(pos2, 100);
	const pos4: PositionType = useDelayedValue(pos3, 100);
	const pos5: PositionType = useDelayedValue(pos4, 100);
	const pos6: PositionType = useDelayedValue(pos5, 100);
	const pos7: PositionType = useDelayedValue(pos6, 100);
	const pos8: PositionType = useDelayedValue(pos7, 100);
	const pos9: PositionType = useDelayedValue(pos8, 100);
	const pos10: PositionType = useDelayedValue(pos9, 100);

	return (
		<>
			<Dot position={pos1} size={45} opacity={0.035} />
			<Dot position={pos2} size={50} opacity={0.04} />
			<Dot position={pos3} size={55} opacity={0.045} />
			<Dot position={pos4} size={60} opacity={0.05} />
			<Dot position={pos5} size={55} opacity={0.045} />
			<Dot position={pos6} size={50} opacity={0.04} />
			<Dot position={pos7} size={45} opacity={0.035} />
			<Dot position={pos8} size={40} opacity={0.03} />
			<Dot position={pos9} size={35} opacity={0.025} />
			<Dot position={pos10} size={30} opacity={0.02} />
		</>
	);
}

type DotType = {
	position: PositionType,
	size: number,
	opacity: number,
};

function Dot({ position, size, opacity }: DotType): React.JSX.Element {
	return (
		<div style={{
			transform: `translate(${position.x}px, ${position.y}px)`,
			width: 80,
			height: 80,
			pointerEvents: 'none',
		}} className={styles.cursor_container}>
			<div className={styles.cursor}
			style={{
				opacity,
				width: size,
				height: size,
			}}>

			</div>
		</div>
	);
}
