const shuffleArray = <T> (array: Array<T>) => {
	const newArray = array;

	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

		// поменять элементы местами
		// мы используем для этого синтаксис "деструктурирующее присваивание"
		// то же самое можно записать как:
		// let t = array[i]; array[i] = array[j]; array[j] = t
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
	}

	return newArray;
};

export default shuffleArray;
