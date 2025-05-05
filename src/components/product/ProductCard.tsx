import './ProductCard.css';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types/Product';

function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      
      <div className="product-info">
        <div className="product-price">
          {product.oldPrice && (
            <span className="old-price">{product.oldPrice.toLocaleString()} ₽</span>
          )}
          {product.discount && <span className="discount">{product.discount}</span>}
        </div>
        
        <div className="current-price">{product.price.toLocaleString()} ₽</div>
        <div className="product-name">{product.name}</div>

        {(product.weight || product.size || product.assay) && (
          <div className="product-details">
          {/*  {product.weight && `Вес: ${product.weight} `} */
          /*  {product.size && `| Размер: ${product.size} `} */
          /*  {product.assay && `| Проба: ${product.assay}`} */}
          </div>
        )}

        <button className="add-to-cart-button" onClick={() => addToCart(product)}>
          В корзину
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
