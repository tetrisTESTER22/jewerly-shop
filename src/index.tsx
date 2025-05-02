import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hedaer from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/pages/main/Main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hedaer />
    <Main />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
