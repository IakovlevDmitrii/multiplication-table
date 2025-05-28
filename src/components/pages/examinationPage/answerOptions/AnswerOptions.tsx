import { FC, JSX } from "react";
import styles from "./AnswerOptions.module.scss";

const AnswerOptions: FC<{
	versions: number[];
	target: number;
	onSelect: (version: number) => void;
	isDisabled: boolean;
	setButtonRef: (index: number) => (el: HTMLButtonElement | null) => void;
}> = (
	{ versions, target, onSelect, isDisabled, setButtonRef }
): JSX.Element => (
	<div className={styles._}>
		<ol>
			{versions.map((version: number, index: number): JSX.Element => (
				<li key={version}>
					<button
						ref={setButtonRef(index)}
						type="button"
						onClick={(): void => onSelect(version * target)}
						disabled={isDisabled}
					>
						{version * target}
					</button>
				</li>
			))}
		</ol>
	</div>
);

export default AnswerOptions;