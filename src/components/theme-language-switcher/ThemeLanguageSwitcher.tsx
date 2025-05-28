import { FC, JSX, useEffect, useRef, useState, RefObject, MouseEvent } from "react";
import { useLanguage, useTheme } from "../../features/hooks";
import styles from "./ThemeLanguageSwitcher.module.scss";

const LANGUAGES = {
	en: '🇬🇧',
	es: '🇪🇸',
	pt: '🇵🇹',
	ru: '🇷🇺',
} as const;

const ThemeLanguageSwitcher: FC = (): JSX.Element => {
	const { currentLanguage, setLanguage } = useLanguage();
	const { currentTheme, toggleTheme } = useTheme();
	const [ isAnimating, setIsAnimating ] = useState(false);
	const buttonRef: RefObject<HTMLButtonElement | null> = useRef<HTMLButtonElement>(null);

	useEffect((): () => void => {
			const timer = setTimeout(() => {
				buttonRef.current?.animate([
					{ transform: 'rotate(0deg)' },
					{ transform: 'rotate(15deg)' },
					{ transform: 'rotate(-15deg)' },
					{ transform: 'rotate(0deg)' }
				], 1000);
			}, 3000);

			return (): void => clearTimeout(timer);
		},
		[]
	);

	const handleThemeToggle = (event: MouseEvent) => {
		event.preventDefault();
		toggleTheme();
		document.documentElement.dataset.theme = currentTheme === 'light' ? 'dark' : 'light';
	};

	const handleLanguageChange = () => {
		if (isAnimating) return;

		setIsAnimating(true);
		const langs = Object.keys(LANGUAGES) as (keyof typeof LANGUAGES)[];
		const nextLang = langs[(langs.indexOf(currentLanguage) + 1) % langs.length];

		setLanguage(nextLang);
		document.documentElement.dataset.language = nextLang;
		document.documentElement.lang = nextLang;
	};

	const handleAnimationEnd: () => void = (): void => {
		setIsAnimating(false);
	};

	const handleMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
		const rect = event.currentTarget.getBoundingClientRect();
		const x: number = (event.clientX - rect.left) / rect.width;
		const y: number = (event.clientY - rect.top) / rect.height;

		event.currentTarget.style.setProperty('--mouse-x', x.toString());
		event.currentTarget.style.setProperty('--mouse-y', y.toString());
	};

	return (
		<div className={styles._}>
			<button
				ref={buttonRef}
				className={styles.planetButton}
				onClick={handleLanguageChange}
				onContextMenu={handleThemeToggle}
				onMouseMove={handleMouseMove}
				aria-label={`${currentTheme === 'light' ? 'Light' : 'Dark'} theme, ${currentLanguage} language`}
				disabled={isAnimating}
			>
				<span
					className={`${styles.languageIcon} ${isAnimating ? styles.orbit : ''}`}
					onAnimationEnd={handleAnimationEnd}
				>
					{LANGUAGES[currentLanguage]}
				</span>
				<span className={styles.themeIcon}>
					{currentTheme === 'light' ? '☀️' : '🌙'}
				</span>
			</button>
		</div>
	);
};

export default ThemeLanguageSwitcher;
