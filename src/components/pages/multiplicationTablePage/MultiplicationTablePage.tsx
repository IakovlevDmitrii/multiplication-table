import { FC, JSX } from 'react';
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, FreeMode, Keyboard, Mousewheel, Pagination } from "swiper/modules";
import PageLayout from "../../pageLayout/PageLayout";
import Header from "../../header/Header";
import BackLink from "../../backLink/BackLink";
import MultiplicationExample from "../../multiplicationExample/MultiplicationExample";
import { useLanguage, useTargetMultiplier } from "../../../hooks";
import locales from "../../../features/locales";
import MATH_CONFIG from "../../../utils/config";
import { createArrayRange, getMultiplicationSolutionsList } from "../../../utils";
import type { Solution } from "../../../types";
import SWIPER_PARAMS from "../../../utils/swiper-params";
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/free-mode';
import 'swiper/scss/keyboard';
import 'swiper/scss/mousewheel';
import 'swiper/scss/pagination';
import styles from "./MultiplicationTablePage.module.scss";

const MultiplicationTablePage: FC = (): JSX.Element => {
	const { currentLanguage } = useLanguage();
	const locale = locales[currentLanguage];
	const { targetMultiplier } = useTargetMultiplier();
	const headerTitle: string = `${locale.multiplying_by} ${targetMultiplier}`;

	const leftTab: JSX.Element = (
		<BackLink
			to='/select-multiplier'
			alt='link to select a multiplier'
		/>
	);

	const { MIN_MULTIPLIER, MAX_MULTIPLIER } = MATH_CONFIG;
	const rangeList: number[] = createArrayRange(MIN_MULTIPLIER, MAX_MULTIPLIER);
	const conditionsList: Solution[] = getMultiplicationSolutionsList(
		targetMultiplier ?? MIN_MULTIPLIER,
		rangeList
	);

	const conditions: JSX.Element = (
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
				{conditionsList.map((
					{ targetMultiplier, secondMultiplier, product }: Solution): JSX.Element => (
					<SwiperSlide key={secondMultiplier}>
						<MultiplicationExample
							firstMultiplier={targetMultiplier}
							secondMultiplier={secondMultiplier}
							hideResult
							correctAnswer={product}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);

	const mainContent: JSX.Element = (
		<section className={styles._}>
			<article>
				{conditions}
				<div className={styles.link}>
					<NavLink to={`/examination/${targetMultiplier}`}>
						{locale.test_skills_button}
					</NavLink>
				</div>
			</article>
		</section>
	);

	return (
		<PageLayout
			header={<Header leftTab={leftTab} title={headerTitle} />}
			mainContent={mainContent}
		/>
	);
};

export default MultiplicationTablePage;