import {FC, RefObject} from "react";
import ResultCounter from "../../../resultCounter";
import SelectionButton from "../../../selectionButton";
import styles from './SelectResultContent.module.scss';

interface SelectResultProps {
	refs: RefObject<(HTMLButtonElement | null)[]>;
	subjectOfRepetition: number;
	secondMultiplier: number;
	versions: number[];
	onVersionClick: (isCorrect: boolean, value: number, index: number) => void;
}

const SelectResultContent: FC<SelectResultProps> = (
	{
		refs,
		subjectOfRepetition,
		secondMultiplier,
		versions,
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
				{versions.map((version: number, index) => (
					<li key={version}>
						<SelectionButton
							refs={refs}
							isCorrect={secondMultiplier === version}
							index={index}
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
