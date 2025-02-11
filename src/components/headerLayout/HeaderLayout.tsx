import { FC, JSX, useCallback, useEffect } from "react";
import ToggleLanguageButton from "../toggleLanguageButton";
import ToggleThemeButton from "../toggleThemeButton";
import styles from './HeaderLayout.module.scss';
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { selectUi, toggleLanguage, toggleTheme } from "../../store/uiSlice";

interface HeaderLayoutProps {
	leftSide?: JSX.Element,
	title: JSX.Element,
	rightSide?: JSX.Element,
}

const HeaderLayout: FC<HeaderLayoutProps> = (
	{
		leftSide,
		rightSide,
		title,
	}) => {
	const { lang, theme } = useAppSelector(selectUi);
	const dispatch = useAppDispatch();

	const handleToggleTheme = useCallback(()=> {
			dispatch(toggleTheme())
		}, [dispatch]
	);
	const handleToggleLanguage = useCallback(()=> {
			dispatch(toggleLanguage())
		}, [dispatch]
	);

	useEffect(() => {
		document.documentElement.dataset.lang = lang;
		document.documentElement.dataset.theme = theme;
	}, [ lang, theme ])

	const langContent = <>{lang}</>
	const themeContent = <>{theme}</>

	return (
		<div className={styles._}>
			<div>
				{leftSide}
			</div>
			<div>
				<ToggleLanguageButton
					lang={langContent}
					toggleLanguage={handleToggleLanguage}
				/>
				<ToggleThemeButton
					theme={themeContent}
					toggleTheme={handleToggleTheme}
				/>
				{rightSide}
			</div>
			<div>
				{title}
			</div>
		</div>
	)
};

export default HeaderLayout;