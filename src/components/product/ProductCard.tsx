import './ProductCard.css';

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  weight: string;
  size: string;
  assay: string;
};

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">
          ${product.price}
          <span className="old-price">${product.oldPrice}</span>
        </p>
        <p className="details">
          Вес: {product.weight} | Размер: {product.size} | Проба: {product.assay}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
