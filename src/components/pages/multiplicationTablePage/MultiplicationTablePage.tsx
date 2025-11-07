import { FC, JSX, useMemo, useRef } from "react";
// import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, FreeMode, Keyboard, Mousewheel, Pagination } from "swiper/modules";
import PageLayout from "../../pageLayout/PageLayout";
// import BackLink from "../../backLink/BackLink";
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
	const navigete = useNavigate();
	const { currentLanguage } = useLanguage();
	const locale = locales[currentLanguage];
	const targetMultiplier = useAppSelector(selectTargetMultiplier);

	// const leftTab: JSX.Element= (
	// 	<BackLink
	// 		to='/select-multiplier'
	// 		alt='link to select a multiplier'
	// 	/>
	// );


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



	// <NavLink
	// 	className={styles.testLink}
	// 	to={`/examination/${targetMultiplier}`}
	// >
	// 	<span>{locale.test_skills_button}</span>
	// </NavLink>

	const setVisibleRef = useRef<null | ((v: boolean) => void)>(null);


	const handleBackClick = () => {
		navigete('/select-multiplier');
	};

	const leftTab: JSX.Element = (
		<button
			onClick={() => handleBackClick()}
		>
			<span>back</span>
		</button>
	);

	const handleClick = () => {
		if (setVisibleRef.current) {
			setVisibleRef.current(false);

			setTimeout(() => {
				navigete(`/examination/${targetMultiplier}`);
			}, 400);
		}
	};

	return (
		<PageLayout
			leftTab={leftTab}
			title={title}
		>
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
				<button
					className={styles.testLink}
					onClick={() => handleClick()}
				>
					<span>{locale.test_skills_button}</span>
				</button>
			</>
		</PageLayout>
	);
};

export default MultiplicationTablePage;