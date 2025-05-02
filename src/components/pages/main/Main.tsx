import './Main.css';
import { products } from '../../product/products';
import ProductCard from '../../product/ProductCard';

function Main() {
  return (
    <main className="main">
      <div className="product-grid">
        {products.slice(0, 8).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default Main;
