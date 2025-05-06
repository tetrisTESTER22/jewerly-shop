import './CheckOut.css';
import { useCart } from '../../context/CartContext';
import musorIcon from '../../images/musor.png';
import { useState } from 'react';

function getProductWord(count: number) {
  if (count % 100 >= 11 && count % 100 <= 14) return 'товаров';
  const lastDigit = count % 10;
  if (lastDigit === 1) return 'товар';
  if (lastDigit >= 2 && lastDigit <= 4) return 'товара';
  return 'товаров';
}

function CheckoutPage() {
  const {
    cart,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const [address, setAddress] = useState({
    number: '',
    street: '',
    apartment: '',
    comment: '', 
  });
  const [paymentMethod, setPaymentMethod] = useState('Оплата при получении');

  const handleOrderSubmit = () => {
    alert('Заказ оформлен!\nСпасибо за покупку.');
  };

  return (
    <div className="checkout-wrapper">
      <div className="checkout-left">
        <div className="checkout-cart-box">
          {cart.map(item => (
            <div key={`${item.id}-${item.selectedSize || ''}`} className="checkout-item">
              <img src={item.image} alt={item.name} className="checkout-item-image" />
              <div className="checkout-item-info">
                <p className="checkout-item-name">{item.name}</p>
                {item.selectedSize && <p className="checkout-item-size">{item.selectedSize}</p>}
                <p className="checkout-item-price">{item.price.toLocaleString()} ₽</p>
                <div className="checkout-quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id, item.selectedSize)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id, item.selectedSize)}>+</button>
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
        </div>
      </div>

      <div className="checkout-right">
        <div className="checkout-delivery-box">
          <h3>Способ получения <span className="city-select">г. Москва</span></h3>
          <div className="checkout-delivery-options">
            <button className="delivery-option active">Курьером<br /><small>До двери</small></button>
          </div>
          <input
            type="text"
            placeholder="Номер телефона"
            value={address.number}
            onChange={e => setAddress({ ...address, number: e.target.value })}
          />
          <input
            type="text"
            placeholder="Улица и дом *"
            value={address.street}
            onChange={e => setAddress({ ...address, street: e.target.value })}
          />
          <input
            placeholder="Квартира, этаж, подъезд, номер телефона"
            value={address.apartment}
            onChange={e => setAddress({ ...address, apartment: e.target.value })}
          />
        </div>

        <div className="checkout-summary-box">
          <h3>Ваш заказ</h3>
          <div className="checkout-summary-info">
            <div>
              <p>{cart.length} {getProductWord(cart.length)}</p>
              <p>Итого: <strong>{totalPrice.toLocaleString()} ₽</strong></p>
            </div>
          </div>
          <div className="checkout-payment-box">
            <h4>Оплата</h4>
            <select
              value={paymentMethod}
              onChange={e => setPaymentMethod(e.target.value)}
            >
              <option>Картой онлайн</option>
              <option>Оплата при получении</option>
            </select>
          </div>
          <button className="checkout-submit" onClick={handleOrderSubmit}>Оформить заказ</button>
          <p className="checkout-disclaimer">
            Нажимая «Оформить заказ», вы соглашаетесь на обработку и передачу своих персональных данных и принимаете условия <a href="#">Публичной оферты</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
