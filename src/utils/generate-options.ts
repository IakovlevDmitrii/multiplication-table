import { shuffleArray } from "./index";

const generateOptions = (
	length: number, // Длина списка вариантов
	min: number, // Минимальное значение варианта
	max: number, // Максимальное значение варианта
	correctValue: number, // Верное значение
	delta: number // Максимальное отклонение от правильного ответа
): number[] => {
	// Определяем диапазон для выбора вариантов
	const lowerBound = Math.max(min, correctValue - delta);
	const upperBound = Math.min(max, correctValue + delta);

	// Создаем массив всех возможных значений в диапазоне [lowerBound, upperBound]
	const allValues = Array.from(
		{ length: upperBound - lowerBound + 1 },
		(_, i) => lowerBound + i
	);

	// Удаляем верное значение из массива, чтобы избежать дублирования
	const filteredValues = allValues.filter((value) => value !== correctValue);

	// Инициализируем randomValues с верным ответом
	const randomValues: number[] = [correctValue];

	// Выбираем случайные значения из оставшегося массива
	while (randomValues.length < length) {
		const randomIndex = Math.floor(Math.random() * filteredValues.length);
		randomValues.push(filteredValues[randomIndex]);
		filteredValues.splice(randomIndex, 1); // Удаляем выбранное значение, чтобы избежать повторов
	}

	// Перемешиваем массив
	return shuffleArray(randomValues);
};

export default generateOptions;
