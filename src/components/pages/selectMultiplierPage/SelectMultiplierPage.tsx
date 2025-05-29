import { FC, JSX, useCallback, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import {	Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import PageLayout from "../../../components/pageLayout";
import Header from "../../header";
import { useLanguage, useSolutions, useTargetMultiplier } from "../../../hooks";
import { createArrayRange } from "../../../utils";
import MATH_CONFIG from "../../../utils/config";
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
	const { setTargetMultiplier } = useTargetMultiplier();
	const { MAX_MULTIPLIER, MIN_MULTIPLIER } = MATH_CONFIG;

	useEffect((): void => {
		clearSolutions();
		setTargetMultiplier(MIN_MULTIPLIER);
	}, [clearSolutions, setTargetMultiplier, MIN_MULTIPLIER]);

	const headerTitle: string = locales[currentLanguage].choose_multiplier;

	const list: number[] = useMemo(
		(): number[] => createArrayRange(MIN_MULTIPLIER, MAX_MULTIPLIER),
		[MIN_MULTIPLIER, MAX_MULTIPLIER]
	);

	const handleMultiplierClick: (multiplier: number) => void = useCallback(
		(multiplier: number): void => {
			setTargetMultiplier(multiplier);
		},
		[setTargetMultiplier]
	);

	const multiplierList: JSX.Element = (
		<section className={styles.multiplierList}>
			<article>
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
						{list.map((multiplier: number): JSX.Element => (
							<SwiperSlide key={multiplier}>
								<NavLink
									to={`/multiplication-table/${multiplier}`}
									onClick={() => handleMultiplierClick(multiplier)}
								>
									<span>{multiplier}</span>
								</NavLink>
							</SwiperSlide>
						))}
					</Swiper>
					<div className={styles.customNavigation}>
						<div className="button-prev"></div>
						<div className="button-next"></div>
					</div>
				</div>
			</article>
		</section>
	);

	return (
		<PageLayout
			header={<Header title={headerTitle} />}
			mainContent={multiplierList}
		/>
	);
};

export default SelectMultiplierPage;