import { useCart } from '../../context/CartContext';

function CheckoutPage() {
  const { cart, totalPrice } = useCart();

  return (
    <div>
      <h2>Ваш заказ</h2>
      <p>Итого: {totalPrice.toLocaleString()} ₽</p>

      {cart.map((item, index) => (
        <div key={`${item.id}-${item.selectedSize}`}>
          <p>{item.name}</p>
          <p>Размер: {item.selectedSize}</p>
          <p>Цена: {item.price.toLocaleString()} ₽ × {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}

export default CheckoutPage;
