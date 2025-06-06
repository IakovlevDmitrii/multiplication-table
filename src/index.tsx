import { StrictMode } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
// import ChalkDust from "./components/chalkDust/ChalkDust";
import Cursor from "./utils/cursor/Canvas";
import App from "./components/app/App";
import store from "./store/store";
import "./styles/base/_fonts.scss";
import "./styles/main.module.scss";

const root: Root = createRoot(document.getElementById('root')!);

root.render(
   <StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            {/*<ChalkDust />*/}
            <Cursor />
            <App />
         </BrowserRouter>
      </Provider>
   </StrictMode>
);
