import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import { TrainingProvider } from "./state/state";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
   <TrainingProvider>
      <BrowserRouter>
         <React.StrictMode>
            <App />
         </React.StrictMode>
      </BrowserRouter>
   </TrainingProvider>
);
