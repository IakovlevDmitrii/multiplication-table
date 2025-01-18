import React from "react";
import styles from './SelectResultContentHeader.module.scss';

interface SelectResultContentHeaderProps {
	questionsTotal: number;
	correct: number;
	wrong: number;
}

const SelectResultContentHeader: React.FC<SelectResultContentHeaderProps> = (
	{
		questionsTotal,
		correct,
		wrong,
	}
) => {

	return (
		<header className={styles._}>
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
	)
};

export default SelectResultContentHeader;
