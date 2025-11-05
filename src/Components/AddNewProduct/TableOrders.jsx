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
      <div className="flex items-center justify-center py-12">
        <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
          <div className="text-5xl mb-3">📦</div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">لا توجد طلبات</h3>
          <p className="text-gray-500 text-sm">لم يتم استلام أي طلبات حتى الآن</p>
        </div>
      </div>
    );


  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-xl">📦</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">إدارة الطلبات</h2>
            <p className="text-gray-500 text-xs">عرض وإدارة جميع الطلبات الواردة</p>
          </div>
        </div>
        <div className="inline-flex bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200">
          <span className="text-xs text-gray-600">إجمالي الطلبات: </span>
          <span className="font-bold text-blue-600 mr-1">{data?.data?.length}</span>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <th className="px-3 py-3 text-right font-semibold whitespace-nowrap">اسم العميل</th>
                <th className="px-3 py-3 text-right font-semibold whitespace-nowrap">البريد</th>
                <th className="px-3 py-3 text-right font-semibold whitespace-nowrap">العنوان</th>
                <th className="px-3 py-3 text-right font-semibold whitespace-nowrap">المحافظة</th>
                <th className="px-3 py-3 text-right font-semibold whitespace-nowrap">الهاتف</th>
                <th className="px-3 py-3 text-right font-semibold whitespace-nowrap">الدفع</th>
                <th className="px-3 py-3 text-right font-semibold whitespace-nowrap">الشحن</th>
                <th className="px-3 py-3 text-right font-semibold whitespace-nowrap">المنتج</th>
                <th className="px-3 py-3 text-right font-semibold whitespace-nowrap">السعر</th>
                <th className="px-3 py-3 text-right font-semibold whitespace-nowrap">القديم</th>
                <th className="px-3 py-3 text-right font-semibold whitespace-nowrap">الخصم</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {data?.data?.map((item, index) => {
                const Product = item?.categories?.[0] || {};

                return (
                  <tr 
                    key={index} 
                    className="hover:bg-blue-50 transition-colors duration-150"
                  >
                    <td className="px-3 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-7 h-7 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-sm flex-shrink-0">
                          {item.firstName?.[0]}{item.lastName?.[0]}
                        </div>
                        <span className="font-semibold text-gray-800 whitespace-nowrap">
                          {item.firstName} {item.lastName}
                        </span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-right">
                      <span className="text-gray-600 text-xs">{item.email}</span>
                    </td>
                    <td className="px-3 py-3 text-right">
                      <span className="text-gray-700 text-xs">{item.address}</span>
                    </td>
                    <td className="px-3 py-3 text-right">
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium whitespace-nowrap">
                        {item.city}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-right">
                      <span className="text-gray-700 font-mono text-xs whitespace-nowrap">{item.phone}</span>
                    </td>
                    <td className="px-3 py-3 text-right">
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium whitespace-nowrap">
                        {item.TypePay}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-right">
                      <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium whitespace-nowrap">
                        {item.TypeShipping}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-right">
                      <span className="font-medium text-gray-800 text-xs">
                        {Product.name || "—"}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-right">
                      <span className="text-green-600 font-bold whitespace-nowrap">
                        {Product.price ? `$${Product.price}` : "—"}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-right">
                      <span className="text-gray-400 line-through text-xs whitespace-nowrap">
                        {Product.OldPrice ? `$${Product.OldPrice}` : "—"}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-right">
                      {Product.discount ? (
                        <span className="inline-block px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold whitespace-nowrap">
                          {Product.discount}%
                        </span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-white p-3 rounded-lg shadow-md border border-gray-200">
          <div className="text-xs text-gray-600 mb-1">إجمالي الطلبات</div>
          <div className="text-xl font-bold text-blue-600">{data?.data?.length}</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-md border border-gray-200">
          <div className="text-xs text-gray-600 mb-1">آخر تحديث</div>
          <div className="text-base font-semibold text-gray-800">اليوم</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-md border border-gray-200">
          <div className="text-xs text-gray-600 mb-1">الحالة</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-base font-semibold text-green-600">نشط</span>
          </div>
        </div>
      </div>
    </div>
  );
}