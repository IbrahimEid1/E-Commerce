import { useEffect, useState } from "react";

export default function AdminOrdersTable() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [shipping, setShipping] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("DataCustomer")) || [];
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const savedShipping = JSON.parse(localStorage.getItem("shipping")) || [];

    setOrders(savedOrders);
    setProducts(savedCart);
    setShipping(savedShipping);
  }, []);

  if (orders.length === 0)
    return (
      <div className="p-6 text-center text-gray-500">
        🚫 لا يوجد طلبات حتى الآن
      </div>
    );

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4">📦 قائمة الطلبات</h2>

      <table className="min-w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3 border">اسم العميل</th>
            <th className="p-3 border">البريد الإلكتروني</th>
            <th className="p-3 border"> العنوان </th>
            <th className="p-3 border"> المحافظة</th>
            <th className="p-3 border"> رقم الهاتف</th>

            <th className="p-3 border">المنتج</th>
            <th className="p-3 border">صورة المنتج</th>
            <th className="p-3 border">السعر</th>
            <th className="p-3 border">طريقة الشحن</th>

            <th className="p-3 border"> نسبة الخصم</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((item, index) => {
            const product = products[index] || {}; 
            const ship = shipping[index] || {}; 

            return (
              <tr key={index} className="text-center hover:bg-gray-50">
                <td className="p-2 border font-medium">
                  {item.firstName} {item.lastName}
                </td>
                <td className="p-2 border">{item.email}</td>
                <td className="p-2 border">{item.country}</td>
                <td className="p-2 border">{item.city}</td>
                <td className="p-2 border">{item.phone}</td>

                {/* المنتج */}
                <td className="p-2 border">{product.name || "—"}</td>
                <td className="p-2 border flex justify-center">
                  {product?.Image?.url ? (
                    <img
                      src={product.Image.url}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  ) : (
                    <span>—</span>
                  )}
                </td>

                <td className="p-2 border text-green-600 font-semibold">
                  {product.price ? `$${product.price}` : "—"}
                </td>

                <td className="p-2 border">{ship[0] || "—"}</td>

                <td className="p-2 border">{ship[1] || "—"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
