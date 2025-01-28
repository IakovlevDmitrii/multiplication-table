import { FC } from "react";
import styles from "./SelectionButton.module.scss";

interface SelectionButtonProps {
	value: number,
	handleClick: (value: number) => void,
}

const SelectionButton: FC<SelectionButtonProps> = (
	{ value, handleClick }) => (
	<button
		className={styles._}
		type="button"
		onClick={(): void => handleClick(value)}
	>
		{value}
	</button>
);

export default SelectionButton;
