import { createContext, useState, useContext, ReactNode, useMemo, useEffect } from 'react';
import { Product } from '../../types/Product';

interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, selectedSize?: string) => void;
  removeFromCart: (id: number, selectedSize?: string) => void;
  increaseQuantity: (id: number, selectedSize?: string) => void;
  decreaseQuantity: (id: number, selectedSize?: string) => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, selectedSize?: string) => {
    setCart(prev => {
      const existing = prev.find(
        item => item.id === product.id && item.selectedSize === selectedSize
      );
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1, selectedSize }];
      }
    });
  };

  const removeFromCart = (id: number, selectedSize?: string) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.selectedSize === selectedSize)));
  };

  const increaseQuantity = (id: number, selectedSize?: string) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id && item.selectedSize === selectedSize
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id: number, selectedSize?: string) => {
    setCart(prev =>
      prev.flatMap(item => {
        if (item.id === id && item.selectedSize === selectedSize) {
          if (item.quantity === 1) return [];
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalItems,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
