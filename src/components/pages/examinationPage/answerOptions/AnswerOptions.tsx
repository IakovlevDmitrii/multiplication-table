import { FC, JSX } from "react";
import classNames from "classnames";
import styles from "./AnswerOptions.module.scss";

const AnswerOptions: FC<{
	key: string;
	multipliers: number[];
	target: number;
	onSelect: (index: number) => void;
	isDisabled: boolean;
	selectedIndex: number | null;
	correctIndex: number | null;
	setButtonRef: (index: number) => (el: HTMLButtonElement | null) => void;
}> = (
	{ key, multipliers, target, onSelect, isDisabled, selectedIndex, correctIndex, setButtonRef }
): JSX.Element => (
	<div className={styles._} key={key}>
		<ol>
			{multipliers.map((multiplier: number, index: number): JSX.Element => (
				<li key={multiplier}>
					<button
						ref={setButtonRef(index)}
						type="button"
						onClick={(): void => onSelect(index)}
						disabled={isDisabled}
						className={classNames([styles.answerButton], {
							[styles.selected]: selectedIndex === index,
							[styles.correct]: correctIndex === index,
							[styles.wrong]: selectedIndex === index && correctIndex !== index,
						})}
					>
						{multiplier * target}
					</button>
				</li>
			))}
		</ol>
	</div>
);

export default AnswerOptions;