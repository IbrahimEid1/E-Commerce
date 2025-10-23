import React, { useContext,  } from 'react'
import { CartContext } from '../../context/ContextCart'
import { Trash2 } from "lucide-react";


const AllProductDashboard = () => {
  const { Products    } = useContext(CartContext);
  
  return (
    <>
       {Products.length ? (
        <>
          {Products.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-6 items-center border-b pb-3 gap-3"
            >
              <img
                src={`${item.Image.url}` }
                alt={item.title}
                className="w-12 h-auto rounded object-cover"
              />
              <p className="font-medium truncate col-span-2">
                {item.name}
              </p>


              {/* Total + Delete */}
              <div className="flex items-center justify-between w-24">
                <p>${item.price }</p>
                <button
                  className="text-gray-500 hover:text-red-600"
                 
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>Not Found Data In Cart</p>
      )}
      </>
  )
}

export default AllProductDashboard