import { FC, JSX } from "react";
import { NavLink } from "react-router-dom";
import { useSettings } from "../../features/hooks";
import lightArrow from "../../img/arrow-to-left/arrow-to-left_light.png";
import darkArrow from "../../img/arrow-to-left/arrow-to-left_dark.png";
import styles from './BackLink.module.scss';

interface BackLinkProps {
	to: string;
	alt: string;
	onClick?: () => void;
}

const BackLink: FC<BackLinkProps> = (
	{ to, alt, onClick }: BackLinkProps): JSX.Element => {
	const { theme } = useSettings();
	const arrowSrc: string = theme === 'light' ? darkArrow : lightArrow;

	return (
		<NavLink
			to={to}
			className={styles.link}
			onClick={onClick ? (): void => onClick() : undefined}
		>
			<img src={arrowSrc} alt={alt} />
		</NavLink>
	);
};

export default BackLink;
