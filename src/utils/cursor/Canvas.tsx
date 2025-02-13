import { FC, JSX } from "react";
import { usePointerPosition } from './usePointerPosition';
import { useDelayedValue } from './useDelayedValue';
import "../../styles/_const.module.scss";
import styles from './styles.module.scss';

interface PositionType {
	x: number,
	y: number,
}

const Canvas = (): JSX.Element => {
	const pos1: PositionType = usePointerPosition();
	const pos2: PositionType = useDelayedValue(pos1, 150);
	const pos3: PositionType = useDelayedValue(pos2, 150);
	const pos4: PositionType = useDelayedValue(pos3, 150);
	const pos5: PositionType = useDelayedValue(pos4, 150);
	const pos6: PositionType = useDelayedValue(pos5, 150);
	const pos7: PositionType = useDelayedValue(pos6, 150);
	const pos8: PositionType = useDelayedValue(pos7, 150);
	const pos9: PositionType = useDelayedValue(pos8, 150);
	const pos10: PositionType = useDelayedValue(pos9, 150);

	return (
		<>
			<Dot position={pos1} size={50} opacity={0.035} />
			<Dot position={pos2} size={100} opacity={0.04} />
			<Dot position={pos3} size={150} opacity={0.045} />
			<Dot position={pos4} size={200} opacity={0.05} />
			<Dot position={pos5} size={175} opacity={0.045} />
			<Dot position={pos6} size={150} opacity={0.04} />
			<Dot position={pos7} size={125} opacity={0.035} />
			<Dot position={pos8} size={100} opacity={0.03} />
			<Dot position={pos9} size={75} opacity={0.025} />
			<Dot position={pos10} size={50} opacity={0.02} />
		</>
	);
};

export default Canvas;

type DotType = {
	position: PositionType,
	size: number,
	opacity: number,
};

const Dot: FC<DotType> = (
	{ position, size, opacity }): JSX.Element => (
	<div className={styles.cursor_container}
		  style={{
			  transform: `translate(${position.x}px, ${position.y}px)`,
		  }}>
		<div className={styles.cursor}
			  style={{
				  opacity,
				  width: size,
				  height: size,
			  }}>
		</div>
	</div>
);

