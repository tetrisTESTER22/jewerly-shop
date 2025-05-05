import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/context/CartContext';
import reportWebVitals from './reportWebVitals';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/pages/main/Main';
import CheckoutPage from './components/pages/checkOut/CheckOut'; 

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <CartProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </CartProvider>
);

reportWebVitals();
