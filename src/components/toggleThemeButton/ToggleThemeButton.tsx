import { JSX, FC } from "react";
import classNames from "classnames";
import styles from "./ToggleThemeButton.module.scss";

interface ToggleThemeButtonProps {
	theme: JSX.Element,
	toggleTheme: () => void,
}

const ToggleThemeButton: FC<ToggleThemeButtonProps> = (
	{ theme, toggleTheme }
) => {
	return (
		<button
			className={classNames(styles._, styles.opacity)}
			type="button"
			onClick={(): void => toggleTheme()}
		>
			{theme}
		</button>
	)
};

export default ToggleThemeButton;
