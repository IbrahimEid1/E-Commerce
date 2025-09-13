import "./NavBlack.css";
import Cutomize from "../../../assets/Men cosmetic.png";
import LoginIcon from "../../../assets/Sign in.png";
import Icon from "../../../assets/Vector.png";
import Fav from "../../../assets/Favorides.png";
import Cart from "../../../assets/Card.png";
const NavBlack = () => {
  return (
    <div className="Parent">
      <div className="Child-Parent">
        <ul className="flex flex-row mr-10">
          <div className="group">
            <img src={Icon} className="Icon -space-x-20" />
            <li>Categories</li>
          </div>
          <li>USD </li>
          <li>English </li>
        </ul>
        <div className="Line"></div>
        <div className="cosmetic">
          <img src={Cutomize} alt="" className="img-customize" />
          <div className="content">
            <h1>Weekly Men's Toiletries Coupons.</h1>
            <p>We extend exclusive discounts to our male clientele</p>
          </div>
        </div>
        <div className="Line"></div>
        <div className="profile ">
          <ul className="flex justify-content-between space-x-10 mr-10">
            <button className="flex">
              <img src={LoginIcon} alt="" /> Login
            </button>
            <button className="flex mx-3">
              <img src={Fav} alt="" /> Favorites
            </button>
            <button className="flex mx-3">
              <img src={Cart} alt="" /> Cart <p className="circle">3</p>
            </button>
            <button></button>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NavBlack;
