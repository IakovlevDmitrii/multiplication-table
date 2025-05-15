import type { Solution_Multiplication } from "../../types";

const getMultiplicationResultCounter :(equationList: Solution_Multiplication[]) =>
	{correct: number, wrong: number} = (
	equationList: Solution_Multiplication[]): {correct: number, wrong: number} => {
	const resultCounter = {
		correct: 0,
		wrong: 0
	};

	equationList.forEach((
		{ subjectOfRepetition, secondMultiplier, product }: Solution_Multiplication): void => {
		if(subjectOfRepetition * secondMultiplier === product) {
			resultCounter.correct++
		} else {resultCounter.wrong++}
	});

	return resultCounter;
};

export default getMultiplicationResultCounter;
