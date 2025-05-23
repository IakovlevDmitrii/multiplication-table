import { FC, JSX, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import {	Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import PageLayout from "../../../components/pageLayout";
import Header from "../../header";
import { useAppDispatch, useSettings } from "../../../features/hooks";
import { clearEquations_multiplication, changeSubjectOfRepetition_multiplication } from "../../../store/equationsSlice";
import { createArrayRange } from "../../../utils";
import { MATH_CONFIG } from "../../../utils/config";
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
	const dispatch = useAppDispatch();

	useEffect((): void => {
		dispatch(clearEquations_multiplication());
	}, [dispatch]);

	const { language } = useSettings();
	const headerTitle: string = locales[language].selectMultiplier;

	const { MAX_MULTIPLIER, MIN_MULTIPLIER } = MATH_CONFIG.MULTIPLICATION;
	const list: number[] = useMemo(
		(): number[] => createArrayRange(MIN_MULTIPLIER, MAX_MULTIPLIER),
		[MIN_MULTIPLIER, MAX_MULTIPLIER]
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
									onClick={() => dispatch(
										changeSubjectOfRepetition_multiplication(multiplier))
									}
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