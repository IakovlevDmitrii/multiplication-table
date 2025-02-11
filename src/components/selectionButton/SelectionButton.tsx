import { FC } from "react";
import classNames from "classnames";
import styles from "./SelectionButton.module.scss";

interface SelectionButtonProps {
	value: number,
	handleClick: (value: number) => void,
}

const SelectionButton: FC<SelectionButtonProps> = (
	{ value, handleClick }) => (
	<button
		className={classNames(styles._, styles.opacity)}
		type="button"
		onClick={(): void => handleClick(value)}
	>
		{value}
	</button>
);

export default SelectionButton;
