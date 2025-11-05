import { useState } from 'react';
import { Plus, Package, Upload, X, Home, ShoppingBag, FileText, ShoppingCart, Menu, Bell, User } from 'lucide-react';
import AllProductDashboard from './AllProductDashboard';
import { useCreate } from "../../hooks/CreateNewProduct";
import DropdownUser from './DropdownUser';
import { Link } from 'react-router-dom';
import AdminOrdersTable from './TableOrders';

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState('add-new');
  const [sidebarOpen, setSidebarOpen] = useState(false); // Changed default to false for mobile
  const [formData, setFormData] = useState({
    data: {
      name: '',
      description: '',
      price: '',
      OldPrice: '',
      discount: '',
      Image: null,
      rate: '',
    },
  });

  const create = useCreate();
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'all-products', name: 'All Products', icon: ShoppingBag },
    { id: 'add-new', name: 'Add New', icon: Plus },
    { id: 'blog', name: 'Blog', icon: FileText },
    { id: 'checkout', name: 'Checkout', icon: ShoppingCart },
  ];

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: type === "number" ? (value === "" ? null : Number(value)) : value,
      },
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5000000) {
        setErrors((prev) => ({
          ...prev,
          image: 'Image size must be less than 5MB',
        }));
        return;
      }

      setFormData((prev) => ({
        ...prev,
        data: {
          ...prev.data,
          Image: file,
        },
      }));

      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);

      if (errors.image) {
        setErrors((prev) => ({
          ...prev,
          image: '',
        }));
      }
    }
  };

  const removeImage = () => {
    setFormData((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        Image: null,
      },
    }));
    setImagePreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("files.Image", formData.data.Image);
    form.append("data", JSON.stringify({
      name: formData.data.name,
      description: formData.data.description,
      price: formData.data.price,
      OldPrice: formData.data.OldPrice,
      discount: formData.data.discount,
      rate: formData.data.rate,
    }));

    create.mutate(formData, {
      onSuccess: () => {
        alert("✅ Product added successfully!");
        setFormData({
          data: {
            name: '',
            description: '',
            price: '',
            OldPrice: '',
            discount: '',
            Image: null,
            rate: '',
          },
        });
        setImagePreview(null);
      },
      onError: (err) => {
        console.error("❌ Error creating product:", err);
        alert("Something went wrong while creating the product!");
      },
    });
  };

  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="px-3 sm:px-4 lg:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
            <div className="flex items-center gap-2">
              <Package className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
              <h1 className="text-base sm:text-xl font-bold text-gray-800 hidden sm:block">Product Dashboard</h1>
              <h1 className="text-sm font-bold text-gray-800 sm:hidden">Dashboard</h1>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" onClick={() => setIsOpen(!isOpen)} />
              {isOpen && <DropdownUser />}
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 h-full bg-white shadow-lg transition-all duration-300 z-40 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 w-64`}
      >
        <div className="p-3 sm:p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setCurrentPage(item.id);
                      // Close sidebar on mobile after selection
                      if (window.innerWidth < 1024) {
                        setSidebarOpen(false);
                      }
                    }}
                    className={`w-full flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-colors ${
                      currentPage === item.id
                        ? 'bg-indigo-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium text-sm sm:text-base">{item.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`pt-20 transition-all duration-300 lg:ml-64`}
      >
        <div className="p-3 sm:p-4 lg:p-6">
          {currentPage === 'add-new' && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-lg sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <div className="bg-indigo-600 p-2 sm:p-3 rounded-lg">
                    <Package className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Add New Product</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Product Name */}
                  <div>
                    <label htmlFor="title" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Product Name
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="name"
                      value={formData.data.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                      placeholder="iPhone 15 Pro"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label htmlFor="description" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.data.description}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none text-sm sm:text-base"
                      placeholder="Enter product description..."
                    />
                  </div>

                  {/* Image */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Product Image
                    </label>
                    {!imagePreview ? (
                      <div className="relative">
                        <input
                          type="file"
                          id="image"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                        <label
                          htmlFor="image"
                          className="flex flex-col items-center justify-center w-full h-40 sm:h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                          <Upload className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mb-2" />
                          <p className="text-xs sm:text-sm text-gray-600 font-medium">Click to Upload</p>
                          <p className="text-xs text-gray-500 mt-1">PNG, JPG or JPEG (Max 5MB)</p>
                        </label>
                      </div>
                    ) : (
                      <div className="relative">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-40 sm:h-48 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={removeImage}
                          className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1.5 sm:p-2 rounded-full transition-colors"
                        >
                          <X className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Price / Old Price */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="price" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                        Price
                      </label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.data.price}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                        placeholder="0.00"
                      />
                    </div>

                    <div>
                      <label htmlFor="OldPrice" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                        Old Price
                      </label>
                      <input
                        type="number"
                        id="OldPrice"
                        name="OldPrice"
                        value={formData.data.OldPrice}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  {/* Discount / Rate */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="discount" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                        Discount Rate (%)
                      </label>
                      <input
                        type="number"
                        id="discount"
                        name="discount"
                        value={formData.data.discount}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label htmlFor="rate" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                        Rate
                      </label>
                      <input
                        type="number"
                        id="rate"
                        name="rate"
                        value={formData.data.rate}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                        placeholder="0"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                    Add New Product
                  </button>
                </form>
              </div>
            </div>
          )}

          {currentPage === 'home' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Welcome to Dashboard</h2>
                <Link to="/" className="text-red-600 text-sm sm:text-base hover:underline">GO TO HOME PAGE</Link>
              </div>
            </div>
          )}

          {currentPage === 'all-products' && (
            <div className="w-full mx-auto">
              <div className="bg-white rounded-lg sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 gap-4 flex flex-col">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">All Products</h2>
                <div className="overflow-x-auto">
                  <AllProductDashboard />
                </div>
              </div>
            </div>
          )}

          {currentPage === 'checkout' && (
            <div className="w-full mx-auto">
              <div className="bg-white rounded-lg sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Checkout</h2>
                <div className="text-gray-600 flex items-center justify-start overflow-x-auto">
                  <AdminOrdersTable />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}