import { FC, JSX } from "react";
import styles from "./MultiplierItem.module.scss";

const MultiplierItem: FC<{
	multiplier: number;
	onMultiplierClick: (multiplier: number) => void;
}> = (
	{ multiplier, onMultiplierClick }
): JSX.Element => (
	<button
		className={styles._}
		onClick={() => onMultiplierClick(multiplier)}
	>
		<h2>{multiplier}</h2>
	</button>
);

export default MultiplierItem;
