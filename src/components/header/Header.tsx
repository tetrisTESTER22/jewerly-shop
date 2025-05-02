import './Header.css';
import corzinaIcon from '/Users/admin/Documents/GitHub/jewerly-shop/src/components/images/corzina.png';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">JewelrySale</div>
        <nav className="nav-links">
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="cart-icon">
          <img src={corzinaIcon} alt="Cart" />
        </div>
      </div>
    </header>
  );
}

export default Header;
