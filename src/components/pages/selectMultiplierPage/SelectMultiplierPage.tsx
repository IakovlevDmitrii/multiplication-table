import { FC, JSX, useCallback, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import {	Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import PageLayout from "../../../components/pageLayout/PageLayout";
import { useAppDispatch, useLanguage } from "../../../hooks";
import {
	setTargetMultiplierAction,
	clearTargetMultiplierAction,
	clearSolutionsAction } from "../../../store/equations/equationsSlice";
import { createDefaultArrayRange } from "../../../utils/math";
import locales from "../../../features/locales";
import SWIPER_PARAMS from "../../../utils/swiper-params";
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/effect-coverflow";
import "swiper/scss/keyboard";
import "swiper/scss/mousewheel";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import styles from "./SelectMultiplierPage.module.scss";

const SelectMultiplierPage: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const { currentLanguage } = useLanguage();

	const clearSolutions: () => void = useCallback(
		(): void => {
			dispatch(clearSolutionsAction());
		}, [dispatch]
	);

	const clearTargetMultiplier: () => void = useCallback(
		(): void => {
			dispatch(clearTargetMultiplierAction())
		}, [dispatch]
	);

	useEffect((): void => {
			clearSolutions();
			clearTargetMultiplier();
		}, [clearSolutions, clearTargetMultiplier]
	);

	const multiplierList: number[] = useMemo(
		(): number[] =>
			createDefaultArrayRange()
		, []
	);

	const onMultiplierClick: (newMultiplier: number) => void = useCallback(
		(newMultiplier: number): void => {
			dispatch(setTargetMultiplierAction(newMultiplier));
		}, [dispatch]
	);

	return (
		<PageLayout
			title={locales[currentLanguage].choose_multiplier}
			content={
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
						{multiplierList.map(
							(multiplier: number): JSX.Element => (
								<SwiperSlide key={multiplier}>
									<NavLink
										className={styles.multiplierLink}
										to={`/multiplication-table/${multiplier}`}
										onClick={(): void => onMultiplierClick(multiplier)}
									>
										<h2>{multiplier}</h2>
									</NavLink>
								</SwiperSlide>
							)
						)}
					</Swiper>
					<div className={styles.navigation}>
						<div className="button-prev"></div>
						<div className="button-next"></div>
					</div>
				</div>
			}
		/>
	);
};

export default SelectMultiplierPage;