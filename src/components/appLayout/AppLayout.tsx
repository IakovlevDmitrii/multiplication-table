import { JSX } from 'react'
import { Outlet } from 'react-router-dom';
import Canvas from "../../utils/cursor/Canvas";

const AppLayout = (): JSX.Element => {
	return (
		<>
			<Canvas />
			<Outlet />
		</>
	)
};

export default AppLayout;
