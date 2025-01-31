import { FC } from "react";
import { NavLink } from "react-router-dom";
import ResultCounter from "../../../resultCounter";
import SelectionButton from "../../../selectionButton";
import styles from './SelectResultContent.module.scss';

interface SelectResultProps {
	contentProps: {
		questionsTotal: number;
		correct: number;
		wrong: number;
		isTrainingFinished: boolean;
		subjectOfRepetition: number;
		secondMultiplier: number;
		versionArray: number[];
		onVersionClick: (result: number) => void;
	}
}

const SelectResultContent: FC<SelectResultProps> = (
	{ contentProps }) => {
	const {
		questionsTotal,
		correct,
		wrong,
		isTrainingFinished,
		subjectOfRepetition,
		secondMultiplier,
		versionArray,
		onVersionClick,
	} = contentProps;

	if(isTrainingFinished) {
		return (
			<article className={styles.content}>
				<ResultCounter
					questionsTotal={questionsTotal}
					correct={correct}
					wrong={wrong}
				/>
				<div className={styles.links}>
					<NavLink to='summary'>
						Look at your answers
					</NavLink>
				</div>
			</article>
		)
	}

	return (
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
			<ResultCounter
				questionsTotal={questionsTotal}
				correct={correct}
				wrong={wrong}
			/>
		</article>
	)
};

export default SelectResultContent;
