import { shuffleArray } from "./index";
import { MATH_CONFIG } from "./config";

const generateVersions: (correctValue: number) => number[] = (
	correctValue: number
): number[] => {
	const {
		MIN: min, // Минимальное значение варианта
		MAX: max, // Максимальное значение варианта
		LENGTH: length, // Длина списка вариантов
		DELTA: delta, // Максимальное отклонение от правильного ответа
	} = MATH_CONFIG.MULTIPLICATION.VERSIONS_LIST;

	// Определяем диапазон для выбора вариантов
	const lowerBound: number = Math.max(min, correctValue - delta);
	const upperBound: number = Math.min(max, correctValue + delta);

	// Создаем массив всех возможных значений в диапазоне [lowerBound, upperBound]
	const allValues: number[] = Array.from(
		{ length: upperBound - lowerBound + 1 },
		(_: unknown, i: number): number => lowerBound + i
	);

	// Удаляем верное значение из массива, чтобы избежать дублирования
	const filteredValues: number[] = allValues.filter(
		(value: number) => value !== correctValue
	);

	// Инициализируем randomValues с верным ответом
	const randomValues: number[] = [correctValue];

	// Выбираем случайные значения из оставшегося массива
	while (randomValues.length < length) {
		const randomIndex: number = Math.floor(Math.random() * filteredValues.length);
		randomValues.push(filteredValues[randomIndex]);
		filteredValues.splice(randomIndex, 1); // Удаляем выбранное значение, чтобы избежать повторов
	}

	// Перемешиваем массив
	return shuffleArray(randomValues);
};

export default generateVersions;
