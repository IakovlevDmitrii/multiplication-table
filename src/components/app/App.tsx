import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from "../appLayout";
import SelectMultiplierPage from "../pages/selectMultiplierPage";
import MultiplicationTablePage from "../pages/multiplicationTablePage";
import TrainerSelectResultPage from "../pages/trainerSelectResultPage";
import TrainerSelectResultSummaryPage from "../pages/trainerSelectResultSummaryPage";
import '../../styles/styles.module.scss';

export default function App() :React.JSX.Element {
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
               <Route path=':multiplier' element={<TrainerSelectResultPage />} />
               <Route path=':multiplier/summary' element={<TrainerSelectResultSummaryPage />} />
            </Route>
         </Route>
      </Routes>

   )
}

