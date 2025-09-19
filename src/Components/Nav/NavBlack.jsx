import "./NavBlack.css";
import Cutomize from "../../assets/Men cosmetic.png";
import LoginIcon from "../../assets/Sign in.png";
import Icon from "../../assets/Vector.png";
import Fav from "../../assets/Favorides.png";
import Cart from "../../assets/Card.png";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/ContextCart";
import CartMenu from "../ProductsInCart";
import CartFav from "../CartFav";
const NavBlack = () => {
  const { cartCount } = useContext(CartContext);
  const { setIsOpen, IsOpened } = useContext(CartContext);
  const [isMobile, setIsMobile] = useState(false);
  const { setIsOpenFav, CountFav, IsOpenedFav } = useContext(CartContext);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isMobile) {
    return null;
  }
  return (
    <div className="Parent responsive-navblack">
      <div className="Child-Parent">
        <div className="left-section">
          <ul className="flex flex-row mr-10">
            <div className="group">
              <img src={Icon} className="Icon -space-x-20" alt="Categories" />
              <li>Categories</li>
            </div>
            <li>USD</li>
            <li>English</li>
          </ul>
        </div>

        <div className="Line"></div>

        <div className="cosmetic">
          <img src={Cutomize} alt="Men's Cosmetics" className="img-customize" />
          <div className="content">
            <h1>Weekly Men's Toiletries Coupons.</h1>
            <p>We extend exclusive discounts to our male clientele</p>
          </div>
        </div>

        <div className="Line"></div>

        <div className="profile">
          <ul className="flex justify-content-between space-x-10 mr-10">
            <button className="flex profile-btn">
              <img src={LoginIcon} alt="Login" />
              Login
            </button>
            <div
              className="flex mx-3 profile-btn"
              onClick={() => {
                setIsOpenFav((prev) => !prev);
              }}
            >
              <img src={Fav} alt="Favorites" />
              <span>Favorites</span>
              {IsOpenedFav ? <CartFav /> : null}
            </div>
            <div
              className="flex mx-3 profile-btn cart-btn"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            >
              {IsOpened ? <CartMenu /> : null}
              <img src={Cart} alt="Cart" />
              Cart
              {cartCount.length ? (
                <span className="circle bg-green-500 ">{cartCount.length}</span>
              ) : null}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NavBlack;
