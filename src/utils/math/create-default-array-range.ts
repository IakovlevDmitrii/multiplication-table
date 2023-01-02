import { createArrayRange } from "../index";
import MATH_CONFIG from "./math-config";

const { MIN_MULTIPLIER, MAX_MULTIPLIER } = MATH_CONFIG;

const createDefaultArrayRange: () => number[] =
	(): number[] => createArrayRange(MIN_MULTIPLIER, MAX_MULTIPLIER);

export default createDefaultArrayRange;