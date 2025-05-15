import { JSX, FC } from "react";
import classNames from "classnames";
import styles from "./SettingButton.module.scss";

interface SettingButtonProps {
	handleClick: () => void;
	content: JSX.Element;
}

const SettingButton: FC<SettingButtonProps> = (
	{ handleClick, content }: SettingButtonProps): JSX.Element => (
	<button
		className={classNames(styles._, styles.opacity)}
		type="button"
		onClick={(): void => handleClick()}
	>
		{content}
	</button>
);

export default SettingButton;