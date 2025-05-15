import { JSX, FC, useEffect } from "react";
import { useAppDispatch, useSettings } from "../../../../features/hooks";
import { toggleLanguage } from "../../../../store/settingsSlice";
import SettingButton from "../settingButton";

const ToggleLanguageButton: FC = (): JSX.Element => {
	const { language } = useSettings();
	const dispatch = useAppDispatch();

	const content: JSX.Element = <>{language === "ru" ? "en" : "ru"}</>;

	useEffect((): void => {
		document.documentElement.dataset.language = language;
	}, [ language ])

	return (
		<SettingButton
			handleClick={() => dispatch(toggleLanguage())}
			content={content}
		/>
	)
};

export default ToggleLanguageButton;
