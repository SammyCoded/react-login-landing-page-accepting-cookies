import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import ReactGA from 'react-ga4';


ReactGA.initialize('YOUR_MEASUREMENT_ID');



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CookiesProvider>
  <App />
</CookiesProvider>,
);