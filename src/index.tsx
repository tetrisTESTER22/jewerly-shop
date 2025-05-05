import ReactDOM from 'react-dom/client';
import { CartProvider } from './context/CartContext';
import reportWebVitals from './reportWebVitals';
import Hedaer from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/pages/main/Main';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <CartProvider>
    <Hedaer />
    <Main />
    <Footer />
  </CartProvider>
);

reportWebVitals();