import { memo } from "react";
import { useNavigate } from "react-router-dom";

const MegaMenu = ({ activeCategory }) => {
 const navigate =  useNavigate()
  const menuData = {
    "Dresses": {
      categories: [
        {
          title: "Casual Dresses",
          items: ["Maxi Dresses", "Midi Dresses", "Mini Dresses", "Shirt Dresses", "T-Shirt Dresses", "Wrap Dresses"]
        },
        {
          title: "Formal Dresses",
          items: ["Evening Gowns", "Cocktail Dresses", "Party Dresses", "Prom Dresses", "Wedding Guest Dresses"]
        },
        {
          title: "Special Occasion",
          items: ["Bridesmaid Dresses", "Maternity Dresses", "Plus Size Dresses", "Vacation Dresses"]
        },
        {
          title: "By Pattern",
          items: ["Floral Dresses", "Striped Dresses", "Polka Dot", "Printed Dresses", "Solid Color"]
        }
      ],
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400"
    },
    "Tops & Blouses": {
      categories: [
        {
          title: "Casual Tops",
          items: ["T-Shirts", "Tank Tops", "Crop Tops", "Tunics", "Basic Tees", "Graphic Tees"]
        },
        {
          title: "Blouses & Shirts",
          items: ["Button-Down Shirts", "Silk Blouses", "Chiffon Tops", "Office Blouses", "Peplum Tops"]
        },
        {
          title: "Special Tops",
          items: ["Off-Shoulder Tops", "Halter Tops", "Sweetheart Neckline", "Peasant Tops", "Wrap Tops"]
        },
        {
          title: "Knits & Sweaters",
          items: ["Cardigans", "Pullovers", "Turtlenecks", "V-Neck Sweaters", "Hoodies"]
        }
      ],
      image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=400"
    },
    "Pants & Jeans": {
      categories: [
        {
          title: "Jeans",
          items: ["Skinny Jeans", "Boyfriend Jeans", "Mom Jeans", "Flare Jeans", "High-Waisted Jeans", "Ripped Jeans"]
        },
        {
          title: "Casual Pants",
          items: ["Leggings", "Joggers", "Cargo Pants", "Wide Leg Pants", "Capri Pants"]
        },
        {
          title: "Formal Pants",
          items: ["Dress Pants", "Trousers", "Palazzo Pants", "Cigarette Pants", "Tailored Pants"]
        },
        {
          title: "Shorts",
          items: ["Denim Shorts", "Bermuda Shorts", "Athletic Shorts", "High-Waisted Shorts"]
        }
      ],
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400"
    },
    "Skirts": {
      categories: [
        {
          title: "Length",
          items: ["Mini Skirts", "Midi Skirts", "Maxi Skirts", "Knee-Length Skirts"]
        },
        {
          title: "Style",
          items: ["A-Line Skirts", "Pencil Skirts", "Pleated Skirts", "Wrap Skirts", "Skater Skirts"]
        },
        {
          title: "Casual Skirts",
          items: ["Denim Skirts", "Cotton Skirts", "Jersey Skirts", "Asymmetric Skirts"]
        },
        {
          title: "Formal Skirts",
          items: ["Satin Skirts", "Leather Skirts", "Sequin Skirts", "Tulle Skirts"]
        }
      ],
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400"
    },
    "Jackets & Coats": {
      categories: [
        {
          title: "Jackets",
          items: ["Denim Jackets", "Leather Jackets", "Bomber Jackets", "Blazers", "Moto Jackets"]
        },
        {
          title: "Coats",
          items: ["Trench Coats", "Wool Coats", "Pea Coats", "Parkas", "Long Coats"]
        },
        {
          title: "Light Layers",
          items: ["Cardigans", "Kimonos", "Shrugs", "Capes", "Vests"]
        },
        {
          title: "Winter Wear",
          items: ["Puffer Jackets", "Down Coats", "Faux Fur Coats", "Quilted Jackets"]
        }
      ],
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400"
    },
    "Activewear": {
      categories: [
        {
          title: "Tops",
          items: ["Sports Bras", "Tank Tops", "T-Shirts", "Long Sleeve Tops", "Crop Tops"]
        },
        {
          title: "Bottoms",
          items: ["Leggings", "Yoga Pants", "Running Shorts", "Joggers", "Capris"]
        },
        {
          title: "Sets",
          items: ["Matching Sets", "Tracksuits", "Workout Sets", "Yoga Sets"]
        },
        {
          title: "Accessories",
          items: ["Gym Bags", "Water Bottles", "Headbands", "Running Shoes", "Yoga Mats"]
        }
      ],
      image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=400"
    },
    "Lingerie": {
      categories: [
        {
          title: "Bras",
          items: ["Push-Up Bras", "T-Shirt Bras", "Sports Bras", "Bralettes", "Strapless Bras", "Wireless Bras"]
        },
        {
          title: "Panties",
          items: ["Briefs", "Thongs", "Bikini", "Boyshorts", "High-Waisted", "Seamless"]
        },
        {
          title: "Sleepwear",
          items: ["Pajama Sets", "Nightgowns", "Robes", "Sleep Shirts", "Loungewear"]
        },
        {
          title: "Shapewear",
          items: ["Bodysuits", "Control Briefs", "Waist Trainers", "Slips", "Hosiery"]
        }
      ],
      image: "https://images.unsplash.com/photo-1519657337289-077653f724ed?w=400"
    },
    "Shoes & Bags": {
      categories: [
        {
          title: "Heels",
          items: ["Stilettos", "Block Heels", "Wedges", "Kitten Heels", "Platform Heels", "Pumps"]
        },
        {
          title: "Flats & Casual",
          items: ["Ballet Flats", "Loafers", "Sneakers", "Sandals", "Slides", "Mules"]
        },
        {
          title: "Boots",
          items: ["Ankle Boots", "Knee-High Boots", "Over-the-Knee", "Combat Boots", "Chelsea Boots"]
        },
        {
          title: "Bags",
          items: ["Handbags", "Crossbody Bags", "Tote Bags", "Clutches", "Backpacks", "Shoulder Bags"]
        }
      ],
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400"
    },
    "Accessories": {
      categories: [
        {
          title: "Jewelry",
          items: ["Necklaces", "Earrings", "Bracelets", "Rings", "Anklets", "Body Jewelry"]
        },
        {
          title: "Fashion Accessories",
          items: ["Belts", "Scarves", "Hats", "Hair Accessories", "Sunglasses"]
        },
        {
          title: "Watches & Tech",
          items: ["Watches", "Smart Watches", "Phone Cases", "AirPods Cases"]
        },
        {
          title: "Small Accessories",
          items: ["Wallets", "Card Holders", "Keychains", "Makeup Bags", "Travel Pouches"]
        }
      ],
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400"
    }
  };

  // احصل على البيانات الخاصة بالفئة المحددة
  const currentData = menuData[activeCategory] || menuData["Dresses"];

  return (
    <div className="relative">
      <div className="absolute left-0 top-full w-[90%] max-w-[1067px] h-[50vh] bg-white shadow-xl rounded-lg flex p-6 z-40 border border-gray-100">
        <div className="grid grid-cols-4 gap-6 w-[70%] max-w-[725px] h-[85%] overflow-y-auto">
          {currentData.categories.map((category, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-3 text-gray-800">{category.title}</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {category.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex} 
                    className="hover:text-red-500 cursor-pointer transition-colors duration-200"
                    onClick={()=>navigate("/allproduct")}
                 >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* القسم الأيمن - الصورة */}
        <div className="w-[30%] h-full flex items-center justify-center">
          <div 
            className="w-[90%] h-[85%] bg-gradient-to-br from-pink-400 to-red-500 rounded-lg overflow-hidden shadow-lg"
            style={{
              backgroundImage: `url(${currentData.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="w-full h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
              <h2 className="text-white font-bold text-xl">{activeCategory}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(MegaMenu);