import {FC, RefObject} from "react";
import classNames from "classnames";
import styles from "./SelectionButton.module.scss";

interface SelectionButtonProps {
	refs: RefObject<(HTMLButtonElement | null)[]>;
	isCorrect: boolean,
	index: number,
	value: number,
	handleClick: (isCorrect: boolean, value: number, index: number) => void,
}

const SelectionButton: FC<SelectionButtonProps> = (
	{
		refs,
		isCorrect,
		index,
		value,
		handleClick,
	}) => (
	<button
		ref={(el) => {refs.current[index] = el}}
		className={classNames(styles._, styles.opacity)}
		type="button"
		onClick={(): void => handleClick(isCorrect, value, index)}
	>
		{value}
	</button>
);

export default SelectionButton;
