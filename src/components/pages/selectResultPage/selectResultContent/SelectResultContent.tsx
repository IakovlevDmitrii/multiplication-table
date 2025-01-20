import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from './SelectResultContent.module.scss';

interface SelectResultProps {
	questionsTotal: number;
	correct: number;
	wrong: number;
	isTrainingFinished: boolean;
	subjectOfRepetition: number;
	secondMultiplier: number;
	versionArray: number[];
	onVersionClick: (multiplier: number, result: number) => void;
}

const SelectResultContent: FC<SelectResultProps> = (
	{
		questionsTotal,
		correct,
		wrong,
		isTrainingFinished,
		subjectOfRepetition,
		secondMultiplier,
		versionArray,
		onVersionClick,
	}
) => {

	return (
		<article>
			<header>
				<div>
					{`верно: ${correct}`}
				</div>
				<div>
					{`${correct + wrong} / ${questionsTotal}`}
				</div>
				<div>
					{`не верно: ${wrong}`}
				</div>
			</header>
			{
				isTrainingFinished ? (
					<div className={styles.links}>
						<NavLink to='summary'>
							Посмотреть ответы
						</NavLink>
					</div>
				) : (
					<>
						<div className={styles.condition}>
							<div className={styles.example}>
								{`${subjectOfRepetition} * ${secondMultiplier} = ?`}
							</div>
						</div>
						<div className={styles._}>
							<ul>
								{versionArray.map((version: number) => (
									<li key={version}>
										<button
											type="button"
											onClick={(): void => onVersionClick(
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
			}
		</article>
	)
};

export default SelectResultContent;
