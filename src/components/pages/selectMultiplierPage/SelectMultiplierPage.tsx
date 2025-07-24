import { FC, JSX, useCallback, useEffect } from "react";
import PageLayout from "../../../components/pageLayout/PageLayout";
import MultiplierList from "./multplierList/MultiplierList";
import { useAppDispatch, useLanguage } from "../../../hooks";
import { clearTargetMultiplierAction, clearSolutionsAction } from "../../../store/equations/equationsSlice";
import locales from "../../../features/locales";

const SelectMultiplierPage: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const { currentLanguage } = useLanguage();

	const clearSolutions: () => void = useCallback(
		(): void => {
			dispatch(clearSolutionsAction());
		}, [dispatch]
	);

	const clearTargetMultiplier: () => void = useCallback(
		(): void => {
			dispatch(clearTargetMultiplierAction())
		}, [dispatch]
	);

	useEffect((): void => {
			clearSolutions();
			clearTargetMultiplier();
		}, [clearSolutions, clearTargetMultiplier]
	);

	return (
		<PageLayout title={locales[currentLanguage].choose_multiplier}>
			<MultiplierList />
		</PageLayout>
	);
};

export default SelectMultiplierPage;