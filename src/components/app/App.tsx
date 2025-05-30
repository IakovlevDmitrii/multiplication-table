import { FC, JSX, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Loader from "../loader/Loader";
import '../../styles/main.module.scss';

const MultiplicationTablePage = lazy(
	() => import('../pages/multiplicationTablePage/MultiplicationTablePage')
);
const ResultPage = lazy(
	() => import('../pages/resultPage/ResultPage')
);
const SelectMultiplierPage = lazy(
	() => import('../pages/selectMultiplierPage/SelectMultiplierPage')
);
const ExaminationPage = lazy(
	() => import('../pages/examinationPage/ExaminationPage')
);

const ErrorFallback: FC = (): JSX.Element => <div>Произошла ошибка!</div>;

const App: FC = (): JSX.Element => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route index element={<SelectMultiplierPage />} />
					<Route path='select-multiplier' element={<SelectMultiplierPage />} />

					<Route path='multiplication-table'>
						<Route index element={<SelectMultiplierPage />} />
						<Route path=':multiplier' element={<MultiplicationTablePage />} />
					</Route>

					<Route path='examination'>
						<Route index element={<SelectMultiplierPage />} />
						<Route path=':multiplier' element={<ExaminationPage />} />
						<Route path=':multiplier/:summary' element={<ResultPage />} />
					</Route>
				</Routes>
			</Suspense>
		</ErrorBoundary>
   );
};

export default App;
