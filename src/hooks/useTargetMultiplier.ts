import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from "./index";
import { selectTargetMultiplier, setTargetMultiplierAction } from "../store/equationsSlice";
import MATH_CONFIG from "../utils/math/math-config";

const useTargetMultiplier = () => {
	const dispatch = useAppDispatch();
	const targetMultiplier: number = useAppSelector(selectTargetMultiplier);

	const setTargetMultiplier: (multiplier: number) => void = useCallback(
		(multiplier: number): void => {
			dispatch(setTargetMultiplierAction(multiplier));
		}, [dispatch]
	);

	const setDefaultTargetMultiplier: () => void = useCallback(
		(): void => {
			dispatch(setTargetMultiplierAction(MATH_CONFIG.MIN_MULTIPLIER));
		}, [dispatch]
	);

	return { targetMultiplier, setTargetMultiplier, setDefaultTargetMultiplier };
};

export default useTargetMultiplier;