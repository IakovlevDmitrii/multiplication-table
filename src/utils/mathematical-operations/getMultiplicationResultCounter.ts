import type { Solution } from "../../types";

const getMultiplicationResultCounter :(equationList: Solution[]) => {correct: number, wrong: number} = (
	equationList: Solution[]
): {correct: number, wrong: number} => {
	const resultCounter = {correct: 0, wrong: 0};

	equationList.forEach(
		({ targetMultiplier, secondMultiplier, product }: Solution): void => {
			targetMultiplier * secondMultiplier === product
			? resultCounter.correct ++
			: resultCounter.wrong ++
		});

	return resultCounter;
};

export default getMultiplicationResultCounter;
