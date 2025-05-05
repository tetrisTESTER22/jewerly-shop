import './Main.css';
import { useState } from 'react';
import { products } from '../../product/products';
import ProductCard from '../../product/ProductCard';

function Main() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <main className="main">
      <div className="product-grid">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination-wrapper">
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={currentPage === i + 1 ? 'active' : ''}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

export default Main;
