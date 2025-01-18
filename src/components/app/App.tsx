import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from "../appLayout";
import SelectMultiplierPage from "../pages/selectMultiplierPage";
import MultiplicationTablePage from "../pages/multiplicationTablePage";
import SelectResultPage from "../pages/selectResultPage";
import SelectResultSummaryPage from "../pages/selectResultSummaryPage";
import '../../styles/styles.module.scss';

const App: () => React.JSX.Element = () :React.JSX.Element => {
	return (
      <Routes>
         <Route path='/' element={<AppLayout />} >
            <Route path='/' element={<Navigate to='/select-multiplier' />} />
            <Route path='/select-multiplier' element={<SelectMultiplierPage />} />
            <Route path='multiplication-table'>
               <Route index element={<SelectMultiplierPage />} />
               <Route path=':multiplier' element={<MultiplicationTablePage />} />
            </Route>
            <Route path='trainer-select-result'>
               <Route index element={<SelectMultiplierPage />} />
               <Route path=':multiplier' element={<SelectResultPage />} />
               <Route path=':multiplier/summary' element={<SelectResultSummaryPage />} />
            </Route>
         </Route>
      </Routes>
   )
};

export default App;

