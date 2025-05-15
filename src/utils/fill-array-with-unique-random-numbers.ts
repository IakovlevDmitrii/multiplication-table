// export default function fillArrayWithUniqueRandomNumbers(length: number, min: number, max: number, specificValue: number): number[] {
//
// 	const uniqueNumbers = new Set<number>();
//
// 	while (uniqueNumbers.size < length - (uniqueNumbers.has(specificValue) ? 0 : 1)) {
// 		const randomNumber: number = (Math.floor(Math.random() * (max - min + 1)) + min);
//
// 		if((randomNumber <= specificValue - length)
// 		|| (randomNumber >= specificValue + length)){
// 			continue;
// 		}
//
// 		uniqueNumbers.add(randomNumber);
// 	}
//
// 	const randomArray: number[] = Array.from(uniqueNumbers);
//
// 	if (!uniqueNumbers.has(specificValue)) {
// 		const randomIndex = Math.floor(Math.random() * length);
// 		randomArray.splice(randomIndex, 0, specificValue);
// 	}
//
// 	return randomArray;
// }
