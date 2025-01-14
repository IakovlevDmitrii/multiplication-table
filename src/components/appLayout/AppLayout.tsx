import React from 'react';
import { Outlet } from 'react-router-dom';
import Canvas from "../../utils/cursor/Canvas";

export default function AppLayout(): React.JSX.Element {
	return (
		<>
			<Canvas />
			<Outlet />
		</>
	)
}
