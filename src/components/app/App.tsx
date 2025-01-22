import { JSX } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from "../appLayout";
import SelectMultiplierPage from "../pages/selectMultiplierPage";
import MultiplicationTablePage from "../pages/multiplicationTablePage";
import SelectResultPage from "../pages/selectResultPage";
import ResultPage from "../pages/resultPage";
import '../../styles/styles.module.scss';

const App = () :JSX.Element => {
	return (
      <Routes>
         <Route path='/' element={<AppLayout />} >
            <Route path='/' element={<Navigate to='/select-multiplier' />} />
            <Route path='/select-multiplier' element={<SelectMultiplierPage />} />
            <Route path='multiplication-table'>
               <Route index element={<SelectMultiplierPage />} />
               <Route path=':multiplier' element={<MultiplicationTablePage />} />
            </Route>
            <Route path='select-result'>
               <Route index element={<SelectMultiplierPage />} />
               <Route path=':multiplier' element={<SelectResultPage />} />
               <Route path=':multiplier/summary' element={<ResultPage />} />
            </Route>
         </Route>
      </Routes>
   )
};

export default App;

