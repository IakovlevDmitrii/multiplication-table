import { FC } from "react";
import { NavLink } from "react-router-dom";
import arrowToLeft from "../../img/arrow-to-left/arrow-to-left_color.png";
import styles from './LinkBack.module.scss';

interface LinkBackProps {
	to: string,
	alt: string,
	handleClick?: () => void;
}

const LinkBack: FC<LinkBackProps> = (
	{ to, alt, handleClick }) => (
	<NavLink
		to={to}
		className={styles.link}
		onClick={handleClick ? () => handleClick() : undefined}
	>
		<img src={arrowToLeft} alt={alt} />
	</NavLink>
);

export default LinkBack;
