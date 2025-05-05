import './CartPopup.css';
import { useCart } from '../context/CartContext';
import musorIcon from '../images/musor.png';
import { useRef, useEffect } from 'react';

interface CartPopupProps {
  onClose: () => void;
}

function CartPopup({ onClose }: CartPopupProps) {
  const { cart, totalPrice, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="cart-overlay">
      <div className="cart-popup" ref={popupRef}>
        <div className="cart-popup-header">
          <h3>Корзина</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        {cart.length === 0 ? (
          <p className="empty-message">Корзина пуста</p>
        ) : (
          <div className="cart-items">
            {cart.map(item => (
              <div key={`${item.id}-${item.selectedSize || ''}`} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className="item-name">{item.name}</p>
                  {item.selectedSize && (
                    <p className="item-size">Размер: {item.selectedSize}</p>
                    
                  )}
                  <p className="item-price">{item.price.toLocaleString()} ₽</p>
                  <div className="cart-item-bottom">
                    <div className="quantity-controls">
                      <button onClick={() => decreaseQuantity(item.id, item.selectedSize)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id, item.selectedSize)}>+</button>
                    </div>
                    <img
                      src={musorIcon}
                      alt="Удалить"
                      className="remove-icon"
                      onClick={() => removeFromCart(item.id, item.selectedSize)}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="cart-total">
              <strong>Итого:</strong> {totalPrice.toLocaleString()} ₽
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPopup;
