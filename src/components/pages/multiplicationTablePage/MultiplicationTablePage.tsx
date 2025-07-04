import { FC, JSX, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, FreeMode, Keyboard, Mousewheel, Pagination } from "swiper/modules";
import PageLayout from "../../pageLayout/PageLayout";
import BackLink from "../../backLink/BackLink";
import MultiplicationExample from "../../multiplicationExample/MultiplicationExample";
import { useAppSelector, useLanguage } from "../../../hooks";
import { selectTargetMultiplier } from "../../../store/equations/equationsSelectors";
import locales from "../../../features/locales";
import { createDefaultArrayRange, getMultiplicationSolutionsList } from "../../../utils/math";
import type { Solution } from "../../../types";
import SWIPER_PARAMS from "../../../utils/swiper-params";
import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "swiper/scss/free-mode";
import "swiper/scss/keyboard";
import "swiper/scss/mousewheel";
import "swiper/scss/pagination";
import styles from "./MultiplicationTablePage.module.scss";

const MultiplicationTablePage: FC = (): JSX.Element => {
	const { currentLanguage } = useLanguage();
	const locale = locales[currentLanguage];
	const targetMultiplier = useAppSelector(selectTargetMultiplier);

	const title: string = useMemo(
		(): string => (
			`${locale.multiplying_by} ${targetMultiplier}`
		), [locale, targetMultiplier]
	);

	const multiplierList: number[] = useMemo(
		(): number[] =>
			createDefaultArrayRange()
		, []
	);

	const conditionsList: Solution[] = useMemo(
		(): Solution[] =>
			getMultiplicationSolutionsList(targetMultiplier, multiplierList)
		, [targetMultiplier, multiplierList]
	) ;

	return (
		<PageLayout
			leftTab={
				<BackLink
					to='/select-multiplier'
					alt='link to select a multiplier'
				/>
			}
			title={title}
			content={
				<>
					<div className={styles.swiperContainer}>
						<Swiper
							{...SWIPER_PARAMS.MULTIPLICATION_TABLE}
							modules={[
								EffectCoverflow,
								FreeMode,
								Keyboard,
								Mousewheel,
								Pagination,
							]}
						>
							{conditionsList.map(
								({
									 targetMultiplier,
									 secondMultiplier,
									 product,
								}: Solution): JSX.Element => (
									<SwiperSlide key={secondMultiplier}>
										<MultiplicationExample
											firstMultiplier={targetMultiplier}
											secondMultiplier={secondMultiplier}
											hideResult
											correctAnswer={product}
										/>
									</SwiperSlide>
								)
							)}
						</Swiper>
					</div>
					<NavLink
						className={styles.testLink}
						to={`/examination/${targetMultiplier}`}
					>
						<span>{locale.test_skills_button}</span>
					</NavLink>
				</>
			}
		/>
	);
};

export default MultiplicationTablePage;