import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

export const AddCart = ({ children }) => {
  const [cartCount, setCartCount] = useState([]);
  const [CountFav, setCountFav] = useState([]);
  const [IsOpened, setIsOpen] = useState(false);
  const [IsOpenedFav, setIsOpenFav] = useState(false);
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedFav = localStorage.getItem("Fav");

    if (savedCart) setCartCount(JSON.parse(savedCart));
    if (savedFav) setCountFav(JSON.parse(savedFav));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartCount));
    localStorage.setItem("Fav", JSON.stringify(CountFav));
  }, [cartCount, CountFav]);

  const AddToCart = (item) => {
    setCartCount((prev) => {
      const existingItem = prev.find((p) => p.id === item.id);
      if (existingItem) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        toast.success(`Added to cart ${item.title}`);
        setIsOpen(true);
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const AddToFav = (item) => {
    if (!CountFav.find((fav) => fav.id === item.id)) {
      setCountFav((prev) => [...prev, item]);
      toast.success(`Added to Favorites ${item.title}`);
      setIsOpenFav(true);
    } else {
      toast.error(`${item.title} is already in favorites`);
    }
  };

  const RemoveAll = (key) => {
    if (key === "cart") setCartCount([]);
    if (key === "Fav") setCountFav([]);
    localStorage.removeItem(key);
  };
  const removeItem = (id) => {
    setCartCount((prev) => prev.filter((item) => item.id !== id));
    toast.success("Removed from cart");
  };
  return (
    <CartContext.Provider
      value={{
        cartCount,
        setCartCount,
        CountFav,
        setCountFav,
        IsOpened,
        setIsOpen,
        IsOpenedFav,
        setIsOpenFav,
        Products,
        AddToCart,
        AddToFav,
        RemoveAll,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
