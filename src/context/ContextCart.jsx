import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
export const CartContext = createContext();
export const AddCart = ({ children }) => {
  const [cartCount, setCartCount] = useState([]);
  const [CountFav, setCountFav] = useState([]);
  const [IsOpened, setIsOpen] = useState(false);
  const [IsOpenedFav, setIsOpenFav] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedFav = localStorage.getItem("Fav");
    if (savedCart || savedFav) {
      setCartCount(JSON.parse(savedCart));
      setCountFav(JSON.parse(savedFav));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartCount));
    localStorage.setItem("Fav", JSON.stringify(CountFav));
  }, [cartCount, CountFav]);
  const AddToCart = (items) => {
    setCartCount((prev) => [...prev, items]);
    toast.success(`Added to cart ${items.title}`);
    setIsOpen((prev) => !prev);
  };
  const AddToFav = (items) => {
    setCountFav((prev) => [...prev, items]);
    toast.success(`Added to Favorites ${items.title}`);
    setIsOpenFav((prev) => !prev);
  };
  return (
    <CartContext.Provider
      value={{
        CountFav,
        AddToFav,
        IsOpened,
        setIsOpen,
        AddToCart,
        cartCount,
        setCartCount,
        IsOpenedFav,
        setIsOpenFav,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
