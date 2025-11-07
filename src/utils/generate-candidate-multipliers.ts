import { shuffleArray } from "./index";
import MATH_CONFIG from "./math/math-config";

const generateCandidateMultipliers: (correctValue: number) => number[] = (
	correctValue: number
): number[] => {
	const {
		MIN_MULTIPLIER: min, // Minimum answer value
		MAX_MULTIPLIER: max, // Maximum answer value
		VERSIONS_LIST,
	} = MATH_CONFIG;
	const {
		LENGTH: length, // Number of answer options
		DELTA: delta, // Maximum deviation from the correct answer
	} = VERSIONS_LIST;

	// Range for generating answer choices
	const lowerBound: number = Math.max(min, correctValue - delta);
	const upperBound: number = Math.min(max, correctValue + delta);

	const allValues: number[] = Array.from(
		{ length: upperBound - lowerBound + 1 },
		(_: unknown, i: number): number => lowerBound + i
	);

	const filteredValues: number[] = allValues.filter(
		(value: number) => value !== correctValue
	);

	const randomValues: number[] = [correctValue];

	while (randomValues.length < length) {
		const randomIndex: number = Math.floor(Math.random() * filteredValues.length);
		randomValues.push(filteredValues[randomIndex]);
		filteredValues.splice(randomIndex, 1);
	}

	return shuffleArray(randomValues);
};

export default generateCandidateMultipliers;
