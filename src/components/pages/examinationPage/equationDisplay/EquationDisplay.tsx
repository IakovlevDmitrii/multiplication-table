import { FC, JSX } from "react";
import styles from "./EquationDisplay.module.scss";

const EquationDisplay: FC<{
	target: number; second: number
}> = (
	{ target, second }: {target: number; second: number}
): JSX.Element => (
	<div className={styles._}>
		<div>{`${target} x ${second} = ?`}</div>
	</div>
);

export default EquationDisplay;