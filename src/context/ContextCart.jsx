import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useGetdata } from "../hooks/useGetData";

export const CartContext = createContext();

export const AddCart = ({ children }) => {
  const [cartCount, setCartCount] = useState([]);
  const [CountFav, setCountFav] = useState([]);
  const [IsOpened, setIsOpen] = useState(false);
  const [IsOpenedFav, setIsOpenFav] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [shippingCost , setShippingCost] = useState(0)
    const [active, setActive] = useState("Cards");
  

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useGetdata();
  const Products = data?.pages.flatMap((page) => page.data) || [];




  const filteredProducts = Products.filter((product) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product?.attributes?.type) ||
      selectedCategories.includes(product?.name);

    const matchesSearch = product?.name
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const AddToFav = (item) => {
    if (!CountFav.find((fav) => fav.id === item.id)) {
      setCountFav((prev) => [...prev, item]);
      toast.success(`Added to Favorites ${item.title}`);
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
        Products: filteredProducts,
        setActive ,
        setUserRole, 
        userRole,
        active , 
        setSearchQuery,
        searchQuery,
        selectedCategories,
        setSelectedCategories,
        cartCount,
        setCartCount,
        CountFav,
        setCountFav,
        IsOpened,
        setIsOpen,
        IsOpenedFav,
        setIsOpenFav,
        AddToCart,
        AddToFav,
        RemoveAll,
        removeItem,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading, 
        shippingCost, 
        setShippingCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
