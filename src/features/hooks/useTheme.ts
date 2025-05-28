import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleThemeAction } from "../../store/settingsSlice";
import type { AppDispatch } from "../../store/store";
import type { Theme } from "../../types";

const useTheme = () => {
	const dispatch: AppDispatch = useDispatch();
	const currentTheme: Theme = useSelector(selectTheme);
	const toggleTheme = () => dispatch(
		toggleThemeAction()
	);

	return {
		currentTheme,
		toggleTheme,
	}
};

export default useTheme;