import { JSX, FC } from "react";
import classNames from "classnames";
import styles from "./ToggleLanguageButton.module.scss";

interface ToggleLanguageButtonProps {
	lang: JSX.Element,
	toggleLanguage: () => void,
}

const ToggleLanguageButton: FC<ToggleLanguageButtonProps> = (
	{ lang, toggleLanguage }
) => (
	<button
		className={classNames(styles._, styles.opacity)}
		type="button"
		onClick={(): void => toggleLanguage()}
	>
		{lang}
	</button>
);

export default ToggleLanguageButton;
