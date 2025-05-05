import './Header.css';
import corzinaIcon from '../images/corzina.png';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import CartPopup from '../cartPopup/CartPopup';

function Header() {
  const { cart } = useCart();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">JewelrySale</div>
        <nav className="nav-links">
          <a
          href='/#products'
          >
          Products
          </a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="cart-icon-wrapper" onClick={() => setIsPopupOpen(!isPopupOpen)}>
          <img src={corzinaIcon} alt="Cart" className="cart-icon" />
          {totalQuantity > 0 && <div className="cart-count">{totalQuantity}</div>}
        </div>
        {isPopupOpen && <CartPopup onClose={() => setIsPopupOpen(false)} />}
      </div>
    </header>
  );
}

export default Header;
