import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-bottom">
          © {new Date().getFullYear()} JewelrySale. All rights reserved.
        </div>
        <nav className="nav-links">
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
