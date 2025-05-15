import { FC, JSX } from "react";
import ToggleLanguageButton from "../buttons/settingButtons/toggleLanguageButton";
import ToggleThemeButton from "../buttons/settingButtons/toggleThemeButton";
import styles from "./SettingsTab.module.scss";

const SettingsTab: FC = (): JSX.Element => (
	<div className={styles._}>
		<ToggleLanguageButton />
		<ToggleThemeButton />
	</div>
);

export default SettingsTab;