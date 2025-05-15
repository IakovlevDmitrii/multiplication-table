import {
	FC, JSX,
	useState,
	// Ref,
	// RefObject,
	// useRef
} from 'react';
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import { NavLink } from "react-router-dom";
import {
	Swiper,
	// SwiperRef,
	SwiperSlide
} from 'swiper/react';
import {
	// Autoplay,
	// EffectCoverflow,
	FreeMode,
	Navigation,
	Thumbs,
} from "swiper/modules";
import 'swiper/scss';
// import 'swiper/scss/autoplay';

import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';

// import 'swiper/scss/effect-coverflow';
// import 'swiper/scss/effect-fade';
// import 'swiper/scss/effect-cube';


import PageLayout from "../../pageLayout";
import Header from "../../header";
import BackLink from "../../backLink";
import MultiplicationExample from "../../multiplicationExample";
import { selectEquations } from "../../../store/equationsSlice";
import { useAppSelector, useSettings, useSolutionList } from "../../../features/hooks";
import locales from "../../../features/locales";
import type { Solution_Multiplication } from "../../../types";
import styles from "./MultiplicationTablePage.module.scss";

const MultiplicationTablePage: FC = (): JSX.Element => {
	const leftTab: JSX.Element = <BackLink to='/select-multiplier' alt='link to select a multiplier' />;
	const { language } = useSettings();
	const { multiplication } = useAppSelector(selectEquations);
	const { currentSubjectOfRepetition } = multiplication;
	const headerTitle: string = `${locales[language].tableTitle} ${currentSubjectOfRepetition}`;

	// const animationRef: RefObject<HTMLOListElement | null> = useRef<HTMLOListElement>(null);
	// const animationRef: Ref<SwiperRef> | undefined = useRef<HTMLOListElement>(null);

	// useGSAP((): void => {
	// 	gsap.from("li", {
	// 		scale: 0,
	// 		opacity: 0,
	// 		stagger: 0.05
	// 	});
	// }, { scope: animationRef });

	const list: Solution_Multiplication[] = useSolutionList();

	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	const conditionsList: JSX.Element = (
		<>
			<Swiper
				modules={[FreeMode, Navigation, Thumbs]}
				// direction="vertical"
				// autoplay={{
				// 	delay: 3000
				// }}
				spaceBetween={10}
				thumbs={{ swiper: thumbsSwiper }}

				// slidesPerView={6}
				// onSlideChange={() => console.log('slide change')}
				// effect='coverflow'

				// coverflowEffect={{
				// 	rotate: 2,
				// 	slideShadows: false,
				// }}

				loop={true}
				navigation={true}
				className="mySwiper2"

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
			<Swiper
				onSwiper={setThumbsSwiper}
				loop={true}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper"
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
		</>
	);

	const mainContent: JSX.Element = (
		<article className={styles._}>
			{conditionsList}
			<div className={styles.link}>
				<NavLink to={`/select-result/${currentSubjectOfRepetition}`} className={styles.opacity}>
					{locales[language].checkYourself}
				</NavLink>
			</div>
		</article>
	);

	return (
		<PageLayout
			header={<Header leftTab={leftTab} title={headerTitle} />}
			mainContent={mainContent}
		/>
	);
};

export default MultiplicationTablePage;


// <ol ref={animationRef}>
// 	{list.map(({
// 					  subjectOfRepetition,
// 					  secondMultiplier,
// 					  product
// 				  }: Solution_Multiplication): JSX.Element => (
// 		<li key={secondMultiplier}>
// 			<MultiplicationExample
// 				firstMultiplier={subjectOfRepetition}
// 				secondMultiplier={secondMultiplier}
// 				hideResult
// 				correctAnswer={product}
// 			/>
// 		</li>
// 	))}
// </ol>