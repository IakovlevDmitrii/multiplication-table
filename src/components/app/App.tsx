import { FC, JSX, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Loader from "../loader";
import '../../styles/styles.module.scss';

const MultiplicationTablePage = lazy(() => import('../pages/multiplicationTablePage'));
const ResultPage = lazy(() => import('../pages/resultPage'));
const SelectMultiplierPage = lazy(() => import('../pages/selectMultiplierPage'));
const SelectResultPage = lazy(() => import('../pages/selectResultPage'));
const TrainingFinishedPage = lazy(() => import('../pages/trainingFinishedPage'));

const ErrorFallback: FC = (): JSX.Element => <div>Произошла ошибка!</div>;

const App: FC = (): JSX.Element => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path='/' element={<SelectMultiplierPage />} />
					<Route path='select-multiplier' element={<SelectMultiplierPage />} />

					<Route path='multiplication-table'>
						<Route index element={<SelectMultiplierPage />} />
						<Route path=':multiplier' element={<MultiplicationTablePage />} />
					</Route>

					<Route path='select-result'>
						<Route index element={<SelectMultiplierPage />} />
						<Route path=':multiplier' element={<SelectResultPage />} />
					</Route>

					<Route path='training-finished'>
						<Route index element={<TrainingFinishedPage />} />
						<Route path=':summary' element={<ResultPage />} />
					</Route>
				</Routes>
			</Suspense>
		</ErrorBoundary>
   );
};

export default App;
