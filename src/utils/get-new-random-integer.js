import {getRandomInteger} from "./index";

export default function getNonRepeatingRandomInteger(min, max, previous) {
	let int = getRandomInteger(min, max);
	return (int === previous) ? getNonRepeatingRandomInteger(min, max, int) : int;
}