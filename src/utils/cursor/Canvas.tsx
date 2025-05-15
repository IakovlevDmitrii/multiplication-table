import { FC, JSX, ReactPortal } from "react";
import ReactDOM from "react-dom";
import usePointerPosition from './usePointerPosition';
import useDelayedValue from './useDelayedValue';
import type { PointerPosition } from "../../types";
import "../../styles/_const.module.scss";
import styles from './styles.module.scss';

const Canvas: FC = (): JSX.Element => {
	const pos1: PointerPosition = usePointerPosition();
	const pos2: PointerPosition = useDelayedValue(pos1, 50);
	const pos3: PointerPosition = useDelayedValue(pos2, 50);
	const pos4: PointerPosition = useDelayedValue(pos3, 150);
	const pos5: PointerPosition = useDelayedValue(pos4, 150);
	const pos6: PointerPosition = useDelayedValue(pos5, 150);
	const pos7: PointerPosition = useDelayedValue(pos6, 150);
	const pos8: PointerPosition = useDelayedValue(pos7, 150);
	const pos9: PointerPosition = useDelayedValue(pos8, 150);
	const pos10: PointerPosition = useDelayedValue(pos9, 150);

	return (
		<>
			<Dot position={pos1} size={30} opacity={0.2} />
			<Dot position={pos2} size={100} opacity={0.055} />
			<Dot position={pos3} size={150} opacity={0.06} />
			<Dot position={pos4} size={200} opacity={0.065} />
			<Dot position={pos5} size={175} opacity={0.06} />
			<Dot position={pos6} size={150} opacity={0.055} />
			<Dot position={pos7} size={125} opacity={0.04} />
			<Dot position={pos8} size={100} opacity={0.045} />
			<Dot position={pos9} size={75} opacity={0.04} />
			<Dot position={pos10} size={50} opacity={0.035} />
		</>
	);
};

type DotType = {
	position: PointerPosition,
	size: number,
	opacity: number,
};

const Dot: FC<DotType> = (
	{ position, size, opacity }: DotType ): JSX.Element => (
	<div className={styles.cursor_container}
		  style={{transform: `translate(${position.x}px, ${position.y}px)`}}>
		<div className={styles.cursor} style={{opacity, width: size, height: size}}></div>
	</div>
);


const Cursor: () => ReactPortal = (): ReactPortal => {
	const cursorRoot = document.getElementById("cursor") as HTMLElement;

	return ReactDOM.createPortal(<Canvas />, cursorRoot);
};

export default Cursor;
