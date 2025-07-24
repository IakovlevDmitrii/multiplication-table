import { FC, JSX } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
	Autoplay,
	EffectCoverflow,
	Keyboard,
	Mousewheel,
	Navigation,
	Pagination
} from "swiper/modules";
import MultiplierItem from "../multiplierItem/MultiplierItem";
import SWIPER_PARAMS from "../../../../utils/swiper-params";
import { useAppDispatch } from "../../../../hooks";
import { setTargetMultiplierAction } from "../../../../store/equations/equationsSlice";
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/effect-coverflow";
import "swiper/scss/keyboard";
import "swiper/scss/mousewheel";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import styles from "./SwiperMultiplierList.module.scss";

const SwiperMultiplierList: FC<{ multiplierList: number[]; }> = (
	{ multiplierList }): JSX.Element => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const onMultiplierClick = (newMultiplier: number): void => {
		dispatch(setTargetMultiplierAction(newMultiplier));
		navigate(`/multiplication-table/${newMultiplier}`);
	};

	return (
		<div className={styles._}>
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
							<MultiplierItem
								multiplier={multiplier}
								onMultiplierClick={(multiplier: number) => onMultiplierClick(multiplier)}
							/>
						</SwiperSlide>
					)
				)}
			</Swiper>
			<div className={styles.navigation}>
				<div className="button-prev"></div>
				<div className="button-next"></div>
			</div>
		</div>
	);
};

export default SwiperMultiplierList;
