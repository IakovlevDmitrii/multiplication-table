const createArrayRange = (
	start: number, stop: number, step?: number) :number[] =>  {
	if(step) {
		return (
			Array.from(
				{ length: (stop - start) / step + 1 },
				(_, index: number): number => start + index * step
			)
		)
	} else {
		return (
			Array.from(
				{ length: (stop - start) },
				(_, index: number): number => start + index
			)
		)
	}
};

export default createArrayRange;