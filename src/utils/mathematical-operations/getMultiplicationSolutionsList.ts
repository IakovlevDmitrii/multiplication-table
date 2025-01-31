import type { Solution_Multiplication } from "../../types";

const getMultiplicationSolutionsList = (
	subjectOfRepetition: number, multiplierList: number[]) => {
	const equationsList: Solution_Multiplication[] = [];

	multiplierList.forEach(multiplier => {
		equationsList.push({
			subjectOfRepetition,
			secondMultiplier: multiplier,
			product: subjectOfRepetition * multiplier,
		})
	})

	return equationsList;
};

export default getMultiplicationSolutionsList;
