const createArrayRange = (
	start: number,
	stop: number
): number[] => (
	Array.from(
		{ length: (stop - start) + 1 },
		(_, index: number): number => start + index
	)
);

export default createArrayRange;