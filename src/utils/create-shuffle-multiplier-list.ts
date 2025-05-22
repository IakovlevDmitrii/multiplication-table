import createArrayRange from "./create-array-range";
import shuffleArray from "./shuffle-array";
import { MATH_CONFIG } from "./config";

const {
	MIN_MULTIPLIER,
	MAX_MULTIPLIER,
} = MATH_CONFIG.MULTIPLICATION;

const createShuffleMultiplierList: () => number[] = (): number[] => shuffleArray(
	createArrayRange(MIN_MULTIPLIER, MAX_MULTIPLIER)
);

export default createShuffleMultiplierList;
