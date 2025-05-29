const throttle = (func: () => void, limit: number) => {
	let lastFunc: ReturnType<typeof setTimeout>;
	let lastRan: number;

	return () => {
		if (!lastRan) {
			func();
			lastRan = Date.now();
		} else {
			clearTimeout(lastFunc);
			lastFunc = setTimeout(() => {
				if (Date.now() - lastRan >= limit) {
					func();
					lastRan = Date.now();
				}
			}, limit - (Date.now() - lastRan));
		}
	};
};

export default throttle;