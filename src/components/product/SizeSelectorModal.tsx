import './SizeSelectorModal.css';
import { useState } from 'react';
import { Product } from '../../types/Product';

interface SizeSelectorModalProps {
  product: Product;
  onSelect: (size: string) => void;
  onClose: () => void;
}

function SizeSelectorModal({ product, onSelect, onClose }: SizeSelectorModalProps) {
  const [selectedSize, setSelectedSize] = useState(product.size || '');
  const availableSizes: string[] = product.availableSizes || [];

  const handleConfirm = () => {
    if (selectedSize) {
      onSelect(selectedSize);
      onClose(); 
    }
  };

  return (
    <div className="size-modal-backdrop" onClick={onClose}>
      <div className="size-modal" onClick={(e) => e.stopPropagation()}>
        <h3>Выберите размер</h3>

        <div className="size-options">
          {availableSizes.length > 0 ? (
            availableSizes.map((size: string) => (
              <button
                key={size}
                className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))
          ) : (
            <p className="no-sizes">Размеры недоступны</p>
          )}
        </div>

        <div className="size-modal-actions">
          <button onClick={onClose}>Отмена</button>
          <button onClick={handleConfirm} disabled={!selectedSize}>
            Подтвердить
          </button>
        </div>
      </div>
    </div>
  );
}

export default SizeSelectorModal;
