import generateRandomInteger from "./generate-random-integer";

export default function generateNewRandomInteger(min: number, max: number, previous: number): number {
	let int: number = generateRandomInteger(min, max);
	return (int !== previous) ? int : generateNewRandomInteger(min, max, int);
}