import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from '../appLayout/AppLayout';
import SelectMultiplierPage from '../pages/selectMultiplierPage';
import MultiplicationTablePage from "../pages/multiplicationTablePage";

function App() {
	return (
		<Routes>
			<Route path='/' element={<AppLayout />} >
				<Route path='/' element={<Navigate to='/select-multiplier' />} />
				<Route path='/select-multiplier' element={<SelectMultiplierPage />} />
				<Route path='multiplication-table'>
					<Route index element={<SelectMultiplierPage />} />
					<Route path=':multiplier' element={<MultiplicationTablePage />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
