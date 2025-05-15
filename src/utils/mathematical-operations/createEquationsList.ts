export interface Equation_Multiplication {
	subjectOfRepetition: number,
	secondMultiplier: number,
}

const createEquationsList = (multiplier: number, list: number[]) => {
	const equationList: Equation_Multiplication[] = [];

	list.forEach((item) => equationList.push({
		subjectOfRepetition: multiplier,
		secondMultiplier: item,
	}));

	for (let i = equationList.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

		// поменять элементы местами
		// мы используем для этого синтаксис "деструктурирующее присваивание"
		// то же самое можно записать как:
		// let t = array[i]; array[i] = array[j]; array[j] = t
		[equationList[i], equationList[j]] = [equationList[j], equationList[i]];
	}

	return equationList
};

export default createEquationsList;
