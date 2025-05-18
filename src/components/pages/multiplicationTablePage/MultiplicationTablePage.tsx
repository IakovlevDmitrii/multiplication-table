import { FC, JSX } from 'react';
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, FreeMode, Keyboard, Mousewheel, Pagination } from "swiper/modules";
import PageLayout from "../../pageLayout";
import Header from "../../header";
import BackLink from "../../backLink";
import MultiplicationExample from "../../multiplicationExample";
import { selectEquations } from "../../../store/equationsSlice";
import { useAppSelector, useSettings, useSolutionList } from "../../../features/hooks";
import locales from "../../../features/locales";
import type { Solution_Multiplication } from "../../../types";
import SWIPER_PARAMS from "../../../utils/swiper-params";
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/free-mode';
import 'swiper/scss/keyboard';
import 'swiper/scss/mousewheel';
import 'swiper/scss/pagination';
import styles from "./MultiplicationTablePage.module.scss";

const MultiplicationTablePage: FC = (): JSX.Element => {
	const leftTab: JSX.Element = <BackLink to='/select-multiplier' alt='link to select a multiplier' />;
	const { language } = useSettings();
	const { multiplication } = useAppSelector(selectEquations);
	const { currentSubjectOfRepetition } = multiplication;
	const headerTitle: string = `${locales[language].tableTitle} ${currentSubjectOfRepetition}`;

	const list: Solution_Multiplication[] = useSolutionList();

	const conditionsList: JSX.Element = (
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
				{list.map(({
					subjectOfRepetition,
					secondMultiplier,
					product
				}: Solution_Multiplication): JSX.Element => (
					<SwiperSlide key={secondMultiplier}>
						<MultiplicationExample
							firstMultiplier={subjectOfRepetition}
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
		<section className={styles.multiplicationTable}>
			<article>
				{conditionsList}
				<div className={styles.link}>
					<NavLink
						to={`/select-result/${currentSubjectOfRepetition}`}
						className={styles.opacity
					}>
						{locales[language].checkYourself}
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