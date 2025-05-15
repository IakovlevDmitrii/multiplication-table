import { useState, useEffect } from 'react';
import type { PointerPosition } from "../../types";

const useDelayedValue: (value: PointerPosition, delay: number) => PointerPosition = (
	value: PointerPosition, delay: number): PointerPosition => {
	const [ delayedValue, setDelayedValue ] = useState(value);

	useEffect((): void => {
		setTimeout((): void => {
			setDelayedValue(value);
		}, delay);
	}, [value, delay]);

	return delayedValue;
};

export default useDelayedValue;