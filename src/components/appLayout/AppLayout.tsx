import React from 'react';
import { Outlet } from 'react-router-dom';
import Canvas from "../../utils/cursor/Canvas";

const AppLayout: () => React.JSX.Element = (): React.JSX.Element => {
	return (
		<>
			<Canvas />
			<Outlet />
		</>
	)
};

export default AppLayout;
