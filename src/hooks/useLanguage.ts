import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage, setLanguageAction } from "../store/settingsSlice";
import type { AppDispatch } from "../store/store";
import type { Language } from "../types";

const useLanguage = () => {
	const dispatch: AppDispatch = useDispatch();
	const currentLanguage: Language = useSelector(selectLanguage);
	const setLanguage: (language: Language) => void = useCallback(
		(language: Language): void => {
			dispatch(setLanguageAction(language));
		},
		[dispatch]
	);

	return { currentLanguage, setLanguage };
};

export default useLanguage;