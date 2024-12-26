import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app/App.tsx';

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
   <BrowserRouter>
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </BrowserRouter>
);
