import { useState, useEffect } from "react";
import { throttle } from "../utils";
// type VisibilityState = "visible" | "hidden" | "prerender" | undefined;

const usePageVisibility = (): boolean => {
	const [isVisible, setIsVisible] = useState<boolean>(true);

	useEffect(() => {
		const handleVisibilityChange = () => {
			setIsVisible(document.visibilityState === "visible");
		};

		const throttledHandler = throttle(handleVisibilityChange, 100);


		if (typeof document !== "undefined") {
			document.addEventListener("visibilitychange", throttledHandler);

			return () => {
				document.removeEventListener("visibilitychange", throttledHandler);
			};
		}
	}, []);


	return isVisible;
};

export default usePageVisibility;