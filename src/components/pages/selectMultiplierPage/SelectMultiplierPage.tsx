import { FC, JSX, useCallback, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import {	Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import PageLayout from "../../../components/pageLayout/PageLayout";
import { useLanguage, useSolutions, useTargetMultiplier } from "../../../hooks";
import { createDefaultArrayRange } from "../../../utils/math";
import locales from "../../../features/locales";
import SWIPER_PARAMS from "../../../utils/swiper-params";
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/keyboard';
import 'swiper/scss/mousewheel';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import styles from "./SelectMultiplierPage.module.scss";

const SelectMultiplierPage: FC = (): JSX.Element => {
	const { currentLanguage } = useLanguage();
	const { clearSolutions } = useSolutions();
	const { setTargetMultiplier, setDefaultTargetMultiplier } = useTargetMultiplier();

	useEffect((): void => {
			clearSolutions();
			setDefaultTargetMultiplier();
		}, [clearSolutions, setDefaultTargetMultiplier]
	);

	const multiplierList: number[] = useMemo((): number[] =>
			createDefaultArrayRange()
		, []
	);

	const handleMultiplierClick: (multiplier: number) => void = useCallback(
		(multiplier: number): void => {
			setTargetMultiplier(multiplier);
		}, [setTargetMultiplier]
	);

	return (
		<PageLayout
			title={locales[currentLanguage].choose_multiplier}
			main={
				<article className={styles._}>
					<div className={styles.swiperContainer}>
						<Swiper
							{...SWIPER_PARAMS.SELECT_MULTIPLIER}
							modules={[
								Autoplay,
								EffectCoverflow,
								Keyboard,
								Mousewheel,
								Navigation,
								Pagination,
							]}
						>
							{multiplierList.map((multiplier: number): JSX.Element => (
								<SwiperSlide key={multiplier}>
									<NavLink
										className={styles.multiplierLink}
										to={`/multiplication-table/${multiplier}`}
										onClick={(): void => handleMultiplierClick(multiplier)}
									>
										<h2>{multiplier}</h2>
									</NavLink>
								</SwiperSlide>
							))}
						</Swiper>
						<div className={styles.navigation}>
							<div className="button-prev"></div>
							<div className="button-next"></div>
						</div>
					</div>
				</article>
			}
		/>
	);
};

export default SelectMultiplierPage;