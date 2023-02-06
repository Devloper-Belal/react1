import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {   HelmetProvider } from "react-helmet-async";
import * as serviceworkerRigestration from './serviceWorkerRegistration';

//import App from './App';

//level 2
import {ThemeProvider} from "./context/ThemeContext";
import App from "./App";


//*** */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <HelmetProvider>
       <ThemeProvider>
    <App/>
      </ThemeProvider>
      </HelmetProvider>
  </React.StrictMode>
);

serviceworkerRigestration.register();