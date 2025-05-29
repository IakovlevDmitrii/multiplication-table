import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from "./index";
import { selectTargetMultiplier, setTargetMultiplierAction } from "../store/equationsSlice";

const useTargetMultiplier = () => {
	const dispatch = useAppDispatch();
	const targetMultiplier: number = useAppSelector(selectTargetMultiplier);

	const setTargetMultiplier: (multiplier: number) => void = useCallback(
		(multiplier: number): void => {
			dispatch(setTargetMultiplierAction(multiplier));
		},
		[dispatch]
	);

	return { targetMultiplier, setTargetMultiplier };
};

export default useTargetMultiplier;