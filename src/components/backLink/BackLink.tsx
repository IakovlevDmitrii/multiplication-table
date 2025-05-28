import { FC, JSX , MouseEvent } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../features/hooks";
import darkArrow from "../../img/arrow-to-left/arrow-to-left_dark.png";
import lightArrow from "../../img/arrow-to-left/arrow-to-left_light.png";
import styles from './BackLink.module.scss';

interface BackLinkProps {
	to: string;
	alt: string;
	onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const BackLink: FC<BackLinkProps> = (
	{ to, alt, onClick }: BackLinkProps
): JSX.Element => {
	const { currentTheme } = useTheme();
	const arrowSrc: string = currentTheme === 'light' ? darkArrow : lightArrow;

	return (
		<NavLink
			to={to}
			className={styles.link}
			onClick={onClick}
		>
			<img src={arrowSrc} alt={alt} />
		</NavLink>
	);
};

export default BackLink;
