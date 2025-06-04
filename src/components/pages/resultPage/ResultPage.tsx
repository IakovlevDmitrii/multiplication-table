import { FC, JSX, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, FreeMode, Keyboard, Mousewheel, Pagination } from "swiper/modules";
import PageLayout from '../../pageLayout/PageLayout';
import BackLink from '../../backLink/BackLink';
import MultiplicationExample from "../../multiplicationExample/MultiplicationExample";
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
	const { solutions } = useSolutions();

	const title: string = useMemo((): string => (
			locales[currentLanguage].answers_title
		), [currentLanguage]
	);

	return (
		<PageLayout
			leftTab={
				<BackLink
					to='/select-multiplier'
					alt='link to select a multiplier'
				/>
			}
			title={title}
			main={
				<section className={styles._}>
					<article>
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
					</article>
				</section>
			}
		/>
	);
};

export default ResultPage;
