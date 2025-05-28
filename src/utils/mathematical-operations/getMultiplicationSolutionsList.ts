import type { Solution } from "../../types";

const getMultiplicationSolutionsList = (
	targetMultiplier: number, multiplierList: number[]
): Solution[] => {
	const equationsList: Solution[] = [];

	multiplierList.forEach(multiplier => {
		equationsList.push({
			targetMultiplier,
			secondMultiplier: multiplier,
			product: targetMultiplier * multiplier,
		})
	})

	return equationsList;
};

export default getMultiplicationSolutionsList;
