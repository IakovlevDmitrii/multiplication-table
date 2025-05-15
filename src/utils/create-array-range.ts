const createArrayRange = (
	start: number,
	stop: number,
	// step?: number,
	): number[] => (

	// if(step) {
	// 	return (
	// 		Array.from(
	// 			{ length: (stop - start) / step + 1 },
	// 			(_, index: number): number => start + index * step
	// 		)
	// 	)
	// } else {

	Array.from(
		{ length: (stop - start) + 1 },
		(_, index: number): number => start + index
	)
);

export default createArrayRange;