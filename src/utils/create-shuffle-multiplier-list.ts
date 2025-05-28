import createArrayRange from "./create-array-range";
import shuffleArray from "./shuffle-array";
import MATH_CONFIG from "./config";

const { MIN_MULTIPLIER, MAX_MULTIPLIER } = MATH_CONFIG;

const createShuffleList: (min: number, max: number) => number[] = (
	min: number, max: number
): number[] => shuffleArray(
	createArrayRange(min, max)
);

const createShuffleMultiplierList:() => number[] = (): number[] => createShuffleList(MIN_MULTIPLIER, MAX_MULTIPLIER);

export default createShuffleMultiplierList;
