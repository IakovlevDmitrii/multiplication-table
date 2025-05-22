import { FC, JSX } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, FreeMode, Keyboard, Mousewheel, Pagination } from "swiper/modules";
import PageLayout from '../../pageLayout';
import Header from '../../header';
import BackLink from '../../backLink';
import MultiplicationExample from "../../multiplicationExample";
import { useAppDispatch, useAppSelector, useSettings } from "../../../features/hooks";
import { selectEquations, clearEquations_multiplication } from "../../../store/equationsSlice";
import locales from "../../../features/locales";
import type { Solution_Multiplication } from "../../../types";
import SWIPER_PARAMS from "../../../utils/swiper-params";
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/free-mode';
import 'swiper/scss/keyboard';
import 'swiper/scss/mousewheel';
import 'swiper/scss/pagination';
import styles from "./ResultPage.module.scss";

const ResultPage: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();

	const leftTab: JSX.Element = (
		<BackLink
			to='/select-multiplier'
			alt='link to select a multiplier'
			onClick={() => {dispatch(
				clearEquations_multiplication()
			);}}
		/>
	);

	const { language } = useSettings();
	const headerTitle: string = locales[language].resultTitle;

	const { multiplication } = useAppSelector(selectEquations);
	const list: Solution_Multiplication[] | [] = multiplication.solutions;

	const solutionsList: JSX.Element = (
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
							hideResult={false}
							userAnswer={product}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);

	const mainContent: JSX.Element = (
		<section className={styles._}>
			<article>
				{solutionsList}
			</article>
		</section>
	);

	return (
		<PageLayout
			header={<Header title={headerTitle} leftTab={leftTab} />}
			mainContent={mainContent}
		/>
	);
};

export default ResultPage;
