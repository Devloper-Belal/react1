import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {   HelmetProvider } from "react-helmet-async";
import * as serviceworkerRigestration from './serviceWorkerRegistration';


//import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 //ااستدعاء
import Home from './pages/home';
import Html from './pages/html';
import Css from './pages/css';
import Java from './pages/java';


//*** */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/html",
    element: <Html/>
  },
  {
    path: "/css",
    element: <Css/>
  },
  {
    path: "/java",
    element: <Java/>
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <HelmetProvider>
      <RouterProvider router={router} />
      </HelmetProvider>
  </React.StrictMode>
);

serviceworkerRigestration.register();