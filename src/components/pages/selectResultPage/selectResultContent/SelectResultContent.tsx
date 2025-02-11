import { FC } from "react";
import ResultCounter from "../../../resultCounter";
import SelectionButton from "../../../selectionButton";
import styles from './SelectResultContent.module.scss';

interface SelectResultProps {
	subjectOfRepetition: number;
	secondMultiplier: number;
	versionArray: number[];
	onVersionClick: (result: number) => void;
}

const SelectResultContent: FC<SelectResultProps> = (
	{
		subjectOfRepetition,
		secondMultiplier,
		versionArray,
		onVersionClick,
	}) => (
	<article className={styles.content}>
		<div className={styles.condition}>
			<div className={styles.example}>
				{`${subjectOfRepetition} * ${secondMultiplier} = ?`}
			</div>
		</div>
		<div className={styles.versions}>
			<ul>
				{versionArray.map((version: number) => (
					<li key={version}>
						<SelectionButton
							value={subjectOfRepetition * version}
							handleClick={onVersionClick}
						/>
					</li>
				))}
			</ul>
		</div>
		<ResultCounter	/>
	</article>
);

export default SelectResultContent;
