import { FC, JSX } from "react";
import styles from "./EquationDisplay.module.scss";

const EquationDisplay: FC<{
	target: number; second: number
}> = (
	{ target, second }: {target: number; second: number}
): JSX.Element => (
	<div className={styles._}>
		<div className={styles.equation}>
			<span>
				{`${target} x ${second} = ?`}
			</span>
		</div>
	</div>
);

export default EquationDisplay;