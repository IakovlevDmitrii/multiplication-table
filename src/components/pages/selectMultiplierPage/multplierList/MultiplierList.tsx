import { FC, JSX, useMemo } from "react";
import SwiperMultiplierList from "../swiperMultiplierList/SwiperMultiplierList";
import { createDefaultArrayRange } from "../../../../utils/math";

const MultiplierList: FC = (): JSX.Element => {
	const multiplierList: number[] = useMemo((): number[] => createDefaultArrayRange(), []);

	return (
		<SwiperMultiplierList multiplierList={multiplierList} />
	);
};

export default MultiplierList;
