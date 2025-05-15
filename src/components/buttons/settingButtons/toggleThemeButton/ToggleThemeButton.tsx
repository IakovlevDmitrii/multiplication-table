import { JSX, FC, useEffect } from "react";
import { useAppDispatch, useSettings } from "../../../../features/hooks";
import { toggleTheme } from "../../../../store/settingsSlice";
import SettingButton from "../settingButton";

const ToggleThemeButton: FC = (): JSX.Element => {
	const { theme } = useSettings();
	const dispatch = useAppDispatch();

	const content: JSX.Element = <>{theme === "dark" ? "light" : "dark"}</>;

	useEffect((): void => {
		document.documentElement.dataset.theme = theme;
	}, [ theme ])

	return (
		<SettingButton
			handleClick={() => dispatch(toggleTheme())}
			content={content}
		/>
	)
};

export default ToggleThemeButton;
