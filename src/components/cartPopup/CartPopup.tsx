import './CartPopup.css';
import { useCart } from '../../context/CartContext';

interface CartPopupProps {
  onClose: () => void;
}

function CartPopup({ onClose }: CartPopupProps) {
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-popup">
      <div className="cart-popup-header">
        <h3>Корзина</h3>
        <button className="cart-popup-close" onClick={onClose}>
          &times;
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="empty-message">Корзина пуста</p>
      ) : (
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p>Количество: {item.quantity}</p>
                <p>Цена: {item.price.toLocaleString()} ₽</p>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <strong>Итого:</strong> {totalPrice.toLocaleString()} ₽
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPopup;
