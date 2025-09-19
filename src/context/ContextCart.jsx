import { createContext, useState } from "react";
import toast from "react-hot-toast";
export const CartContext = createContext();
export const AddCart = ({ children }) => {
  const [cartCount, setCartCount] = useState([]);
  const [IsOpened, setIsOpen] = useState(false);

  const AddToCart = (items) => {
    setCartCount((prev) => [...prev, items]);
    toast.success(`Added to cart ${items.title}`);
    setIsOpen((prev) => !prev);
  };
  return (
    <CartContext.Provider
      value={{ IsOpened, setIsOpen, AddToCart, cartCount, setCartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
