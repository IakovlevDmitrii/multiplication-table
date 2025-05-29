import { FC, JSX } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, FreeMode, Keyboard, Mousewheel, Pagination } from "swiper/modules";
import PageLayout from '../../pageLayout';
import Header from '../../header';
import BackLink from '../../backLink';
import MultiplicationExample from "../../multiplicationExample";
import { useLanguage, useSolutions } from "../../../hooks";
import locales from "../../../features/locales";
import type { Solution } from "../../../types";
import SWIPER_PARAMS from "../../../utils/swiper-params";
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/free-mode';
import 'swiper/scss/keyboard';
import 'swiper/scss/mousewheel';
import 'swiper/scss/pagination';
import styles from "./ResultPage.module.scss";

const ResultPage: FC = (): JSX.Element => {
	const { currentLanguage } = useLanguage();
	const headerTitle: string = locales[currentLanguage].resultTitle;
	const { solutions } = useSolutions();

	const leftTab: JSX.Element = (
		<BackLink
			to='/select-multiplier'
			alt='link to select a multiplier'
		/>
	);

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
				{solutions.map((
					{ targetMultiplier, secondMultiplier, product }: Solution): JSX.Element => (
					<SwiperSlide key={secondMultiplier}>
						<MultiplicationExample
							firstMultiplier={targetMultiplier}
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
