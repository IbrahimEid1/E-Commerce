import { useEffect, useState } from "react";
import useFindOrders from "../../hooks/useFindOrders";
import UserDataSpinner from "./Spinner";

export default function AdminOrdersTable() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [shipping, setShipping] = useState([]);
  const { data, isLoading, isError } = useFindOrders();

  useEffect(() => {

    const savedShipping = JSON.parse(localStorage.getItem("shipping")) || [];

    setOrders(data);
    setProducts(data?.categories);
    setShipping(savedShipping);
  }, [data]);
  if (isLoading) {
    return <UserDataSpinner />
  }
  else if (!data?.data || data?.data?.length === 0)
    return (
      <div className="p-6 text-center text-gray-500">
        🚫 لا يوجد طلبات حتى الآن
      </div>
    );

  console.log(data);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4">📦 قائمة الطلبات</h2>

      <table className="min-w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3 border">اسم العميل</th>
            <th className="p-3 border">البريد الإلكتروني</th>
            <th className="p-3 border">العنوان</th>
            <th className="p-3 border">المحافظة</th>
            <th className="p-3 border">رقم الهاتف</th>

            <th className="p-3 border">المنتج</th>
            <th className="p-3 border">السعر</th>
            <th className="p-3 border">السعر القديم</th>
            <th className="p-3 border">نسبة الخصم</th>
          </tr>
        </thead>

        <tbody>
          {data?.data?.map((item, index) => {
            const Product = item?.categories?.[0] || {};

            return (
              <tr key={index} className="text-center hover:bg-gray-50">
                <td className="p-2 border font-medium">
                  {item.firstName} {item.lastName}
                </td>
                <td className="p-2 border">{item.email}</td>
                <td className="p-2 border">{item.address}</td>
                <td className="p-2 border">{item.city}</td>
                <td className="p-2 border">{item.phone}</td>

                <td className="p-2 border">{Product.name || "—"}</td>
                <td className="p-2 border text-green-600 font-semibold">
                  {Product.price ? `$${Product.price}` : "—"}
                </td>
                <td className="p-2 border text-gray-500">
                  {Product.OldPrice ? `$${Product.OldPrice}` : "—"}
                </td>
                <td className="p-2 border text-red-500">
                  {Product.discount ? `${Product.discount}%` : "—"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
