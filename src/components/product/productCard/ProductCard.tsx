import './ProductCard.css';
import { useCart } from '../../context/CartContext';
import { Product } from '../../../types/Product';
import { useState } from 'react';
import SizeSelectorModal from '../sizeSelectorModal/SizeSelectorModal';

function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (selectedSize: string) => {
    addToCart(product, selectedSize); 
    setIsModalOpen(false);
  };

  return (
    <>
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
              {/* {product.weight && `Вес: ${product.weight} `}
              {product.size && `| Размер: ${product.size} `}
              {product.assay && `| Проба: ${product.assay}`} */}
            </div>
          )}

          <button className="add-to-cart-button" onClick={() => setIsModalOpen(true)}>
            В корзину
          </button>
        </div>
      </div>

      {isModalOpen && (
        <SizeSelectorModal
          product={product}
          onSelect={handleAddToCart}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

export default ProductCard;
