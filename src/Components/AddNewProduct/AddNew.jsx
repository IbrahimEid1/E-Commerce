import { useState } from 'react';
import { Plus, Package, Upload, X, Home, ShoppingBag, FileText, ShoppingCart, Menu, Bell, User } from 'lucide-react';
import AllProductDashboard from './AllProductDashboard';
import { useCreate } from "../../hooks/CreateNewProduct"
import DropdownUser from './DropdownUser';
import { Link } from 'react-router-dom';
import AdminOrdersTable from './TableOrders';
export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState('add-new');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [formData, setFormData] = useState({
    data: {
      name: '',
      description: '',
      price: '',
      OldPrice: '',
      discount: "",
      Image: null,
      rate: "",
    }
  });

  const create = useCreate()
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // دالة لتبديل حالة القائمة
 
  const menuItems = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'all-products', name: 'All Products', icon: ShoppingBag },
    { id: 'add-new', name: 'Add New', icon: Plus },
    { id: 'blog', name: 'Blog', icon: FileText },
    { id: 'checkout', name: 'Checkout', icon: ShoppingCart },
  ];

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: type === "number" ? (value === "" ? null : Number(value)) : value
      }
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     if (file.size > 5000000) {
  //       setErrors(prev => ({
  //         ...prev,
  //         image: 'حجم الصورة يجب أن يكون أقل من 5 ميجا'
  //       }));
  //       return;
  //     }

  //     setFormData(prev => ({
  //       ...prev,
  //       image: file
  //     }));

  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImagePreview(reader.result);
  //     };
  //     reader.readAsDataURL(file);

  //     if (errors.image) {
  //       setErrors(prev => ({
  //         ...prev,
  //         image: ''
  //       }));
  //     }
  //   }
  // };

  const removeImage = () => {
    setFormData(prev => ({
      ...prev,
      image: null
    }));
    setImagePreview(null);
  };



  const handleSubmit = (e) => {
    e.preventDefault();



    console.log('Product Data:', formData);
    alert('Product added successfully!');

    // setFormData({
    //   title: '',
    //   description: '',
    //   price: '',
    //   oldPrice: '',
    //   discountRate: '',
    //   image: null ,
    //   rate: ""
    // });
    setImagePreview(null);
    create.mutate(formData, {
      onSuccess: () => console.log("Success")

    })
    console.log(formData);

  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
            <div className="flex items-center gap-2">
              <Package className="w-8 h-8 text-indigo-600" />
              <h1 className="text-xl font-bold text-gray-800">Product Dashboard</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
              <Bell className="w-5 h-5 text-gray-700" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
              <User className="w-5 h-5 text-gray-700" onClick={() => {
                setIsOpen(!isOpen)

              }} />
              {isOpen && <DropdownUser />}
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 h-full bg-white shadow-lg transition-all duration-300 z-40 ${sidebarOpen ? 'w-64' : 'w-0'
          } overflow-hidden`}
      >
        <div className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setCurrentPage(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${currentPage === item.id
                        ? 'bg-indigo-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`pt-20 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'
          }`}
      >
        <div className="p-6">
          {currentPage === 'add-new' && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-indigo-600 p-3 rounded-lg">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Add New Product</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                      Product Name
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="name"
                      value={formData.data.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.name ? 'border-red-500' : 'border-gray-200'
                        }`}
                      placeholder="iPhone 15 Pro"
                    />
                    {errors.title && (
                      <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.data.description}
                      onChange={handleChange}
                      rows="4"
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${errors.description ? 'border-red-500' : 'border-gray-200'
                        }`}
                      placeholder="Enter product description..."
                    />
                    {errors.description && (
                      <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Product Image
                    </label>
                    {!imagePreview ? (
                      <div className="relative">
                        <input
                          type="file"
                          id="image"
                          accept="image/*"
                          onChange={handleChange}
                          className="hidden"
                        />
                        <label
                          htmlFor="image"
                          className={`flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer transition-colors hover:bg-gray-50 ${errors.image ? 'border-red-500' : 'border-gray-300'
                            }`}
                        >
                          <Upload className="w-12 h-12 text-gray-400 mb-2" />
                          <p className="text-sm text-gray-600 font-medium">Click to Upload</p>
                          <p className="text-xs text-gray-500 mt-1">PNG, JPG or JPEG (Max 5MB)</p>
                        </label>
                      </div>
                    ) : (
                      <div className="relative">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <button
                          onClick={removeImage}
                          className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                    {errors.image && (
                      <p className="mt-1 text-sm text-red-600">{errors.image}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="price" className="block text-sm font-semibold text-gray-700 mb-2">
                        Price
                      </label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.data.price}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.price ? 'border-red-500' : 'border-gray-200'
                          }`}
                        placeholder="0.00"
                      />
                      {errors.price && (
                        <p className="mt-1 text-sm text-red-600">{errors.price}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="OldPrice" className="block text-sm font-semibold text-gray-700 mb-2">
                        Old Price
                      </label>
                      <input
                        type="number"
                        id="oldPrice"
                        name="OldPrice"
                        value={formData.data.OldPrice}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.oldPrice ? 'border-red-500' : 'border-gray-200'
                          }`}
                        placeholder="0.00"
                      />
                      {errors.oldPrice && (
                        <p className="mt-1 text-sm text-red-600">{errors.oldPrice}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="discountRate" className="block text-sm font-semibold text-gray-700 mb-2">
                      Discount Rate (%)
                    </label>
                    <input
                      type="number"
                      id="discountRate"
                      name="discount"
                      value={formData.data.discount}
                      onChange={handleChange}

                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.discountRate ? 'border-red-500' : 'border-gray-200'
                        }`}
                      placeholder="0"
                    />
                    {errors.discountRate && (
                      <p className="mt-1 text-sm text-red-600">{errors.discountRate}</p>
                    )}
                    <label htmlFor="Rate" className="block text-sm font-semibold text-gray-700 mb-2">
                      Rate
                    </label>
                    <input
                      type="number"
                      id="discountRate"
                      name="rate"
                      value={formData.data.rate}
                      onChange={handleChange}

                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.discountRate ? 'border-red-500' : 'border-gray-200'
                        }`}
                      placeholder="0"
                    />
                    {errors.discountRate && (
                      <p className="mt-1 text-sm text-red-600">{errors.discountRate}</p>
                    )}
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <Plus className="w-5 h-5" />
                    Add New Product
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentPage === 'home' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Dashboard</h2>
                <Link to="/" className="text-red-600">GO TO HOME PAGE </Link>
              </div>
            </div>
          )}

          {currentPage === 'all-products' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 gap-4 flex  flex-col">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">All Products</h2>
                <p className="text-gray-600">Your products will appear here.</p>
                <AllProductDashboard />
              </div>
            </div>
          )}

          {currentPage === 'blog' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Blog</h2>
                <p className="text-gray-600">Manage your blog posts here.</p>
              </div>
            </div>
          )}

          {currentPage === 'checkout' && (
            <div className="max-w-4xl mx-auto h-auto flex items-center ">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Checkout</h2>
                <div className="text-gray-600"> <AdminOrdersTable/> </div>

              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}