const MegaMenu = () => {
  return (
    <div className="relative bg-white">
      <div className="absolute left-0 top-full w-[90%] max-w-[1067px] h-[50vh] bg-white shadow-lg rounded-lg flex p-6 z-50">
        <div className="grid grid-cols-4 gap-6 w-[70%] max-w-[725px] h-[85%]">
          <div>
            <h3 className="font-semibold mb-3">Shoe & Bag</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Casual Shoes</li>
              <li>Boots</li>
              <li>Sandals</li>
              <li>Slippers</li>
            </ul>
            <h3 className="font-semibold mt-6 mb-3">Luxury & Designer</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Towels</li>
              <li>Bathroom Scales</li>
              <li>Bath Mats</li>
              <li>Shower Caps</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Home Textile</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Bedding</li>
              <li>Pillows</li>
              <li>Handkerchief Towels</li>
              <li>Curtain</li>
            </ul>
            <h3 className="font-semibold mt-6 mb-3">Cosmetics</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Shampoo & Conditioner</li>
              <li>Styling Products</li>
              <li>Hair Accessories</li>
              <li>Men's Grooming</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Party Supplies</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Event & Party</li>
              <li>Christmas</li>
              <li>Artificial Decorations</li>
              <li>Wedding</li>
            </ul>
            <h3 className="font-semibold mt-6 mb-3">Sport & Outdoors</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Team Sports</li>
              <li>Water Sports</li>
              <li>Outdoor Recreation</li>
              <li>Fitness Equipment</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Clothes</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Bottoms</li>
              <li>Women's Clothing</li>
              <li>T-Shirts & Tops</li>
              <li>Dresses</li>
              <li>Outerwear</li>
              <li>Formal Wear</li>
              <li>Casual Wear</li>
              <li>Seasonal Collections</li>
              <li>Sports Bras</li>
              <li>Workout Tops</li>
              <li>Fall Wardrobe</li>
            </ul>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-[30%] h-full flex items-center justify-center">
          <div className="w-[90%] h-[85%] bg-violet-600 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
