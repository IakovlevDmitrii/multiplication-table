import React from "react";
import { NavLink } from "react-router-dom";
import styles from './SelectResultContent.module.scss';

interface SelectResultProps {
	isTrainingFinished: boolean;
	subjectOfRepetition: number;
	secondMultiplier: number;
	versionArray: number[];
	handleClick: (multiplier: number, result: number) => void;
}

const SelectResultContent: React.FC<SelectResultProps> = (
	{
		isTrainingFinished,
		subjectOfRepetition,
		secondMultiplier,
		versionArray,
		handleClick,
	}
) => {

	if(isTrainingFinished) {
		return (
			<div className={styles.links}>
				<NavLink to='summary'>
					Посмотреть ответы
				</NavLink>
			</div>
		)
	}

	return (
		<>
			<div className={styles.condition}>
				<div className={styles.example}>
					{`${subjectOfRepetition} * ${secondMultiplier} = ?`}
				</div>
			</div>
			<div className={styles._}>
				<ul>
					{versionArray.map((version: number): React.JSX.Element => (
						<li key={version}>
							<button
								type="button"
								onClick={(): void => handleClick(
									secondMultiplier,
									subjectOfRepetition * version)}
							>
								{subjectOfRepetition * version}
							</button>
						</li>
					))}
				</ul>
			</div>
		</>
	)
};

export default SelectResultContent;
